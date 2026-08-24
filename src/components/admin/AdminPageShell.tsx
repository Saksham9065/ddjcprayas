/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useState, useEffect, useCallback, useRef, useLayoutEffect } from "react";
import * as XLSX from "xlsx";
import { useApp } from "@/context/AppContext";

export interface ColumnDef {
  key: string;
  label: string;
  width?: string;
  render?: (item: Record<string, unknown>) => React.ReactNode;
}

export interface StatDef {
  label: string;
  value: number;
  color: string;
}

export interface FilterDef {
  label: string;
  key: string;
  options: { label: string; value: string }[];
}

export interface RowData {
  id: string;
  status?: string;
  [key: string]: unknown;
}

export default function AdminPageShell({
  title,
  description,
  apiEndpoint,
  columns,
  stats,
  filters = [],
  extraActions,
  statusOptions,
  onStatusUpdate,
  baseUrlParams = {},
}: {
  title: string;
  description: string;
  apiEndpoint: string;
  columns: ColumnDef[];
  stats?: StatDef[];
  filters?: FilterDef[];
  extraActions?: React.ReactNode;
  statusOptions?: { label: string; value: string }[];
  onStatusUpdate?: (id: string, status: string) => Promise<void>;
  baseUrlParams?: Record<string, string>;
}) {
  const { language } = useApp();
  const [data, setData] = useState<RowData[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterValues, setFilterValues] = useState<Record<string, string>>({});
  const [detailItem, setDetailItem] = useState<RowData | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const limit = 10;

  const baseUrlParamsRef = useRef(baseUrlParams);
  useLayoutEffect(() => {
    baseUrlParamsRef.current = baseUrlParams;
  }, [baseUrlParams]);

  const buildQueryParams = useCallback(() => {
    const params = new URLSearchParams();
    params.set("page", String(page));
    params.set("limit", String(limit));
    if (search) params.set("search", search);
    for (const [key, value] of Object.entries(baseUrlParamsRef.current)) {
      if (value) params.set(key, value);
    }
    for (const [key, value] of Object.entries(filterValues)) {
      if (value) params.set(key, value);
    }
    return params.toString();
  }, [page, search, filterValues]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${apiEndpoint}?${buildQueryParams()}`);
      if (!res.ok) throw new Error("Failed to fetch data");
      const json = await res.json();
      setData(json.data || []);
      setTotal(json.total || 0);
      setTotalPages(json.totalPages || 1);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  }, [apiEndpoint, buildQueryParams]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSearchChange = (val: string) => {
    setSearch(val);
    setPage(1);
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilterValues((prev) => ({ ...prev, [key]: value }));
    setPage(1);
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    if (!onStatusUpdate) return;
    await onStatusUpdate(id, newStatus);
    setData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  const handleDelete = async () => {
    if (!deletingId) return;
    try {
      const res = await fetch(apiEndpoint, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: deletingId }),
      });
      if (!res.ok) throw new Error("Failed to delete");
      setData((prev) => prev.filter((item) => item.id !== deletingId));
      setDeletingId(null);
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const exportExcel = () => {
    if (!data.length) return;
    const headers = columns.map((col) => col.label);
    const rows = data.map((item) =>
      columns.map((col) => String(item[col.key] ?? ""))
    );
    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...rows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, title);
    const safeTitle = title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    XLSX.writeFile(workbook, `${safeTitle}-${new Date().toISOString().split("T")[0]}.xlsx`);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div>
            <h1 className="text-2xl font-black text-[#0A2540] tracking-tight">{title}</h1>
            <p className="text-xs text-slate-500 mt-1">{description}</p>
          </div>
          <div className="flex items-center gap-3 mt-4 sm:mt-0">
            {extraActions}
            <button
              type="button"
              onClick={exportExcel}
              className="px-4 py-2 bg-slate-800 text-white rounded-xl text-xs font-bold hover:bg-slate-700 transition-colors"
            >
              {language === "en" ? "Export Excel" : "एक्सेल निर्यात करें"}
            </button>
          </div>
        </div>

        {stats && stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color}`}>
                    <span className="text-lg font-black text-white">{stat.value}</span>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 md:p-8 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder={language === "en" ? `Search ${title}...` : `खोजें ${title}...`}
                className="px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000] w-full sm:w-64"
              />
            </div>
            <div className="flex items-center gap-3">
              {filters.map((filter) => (
                <select
                  key={filter.key}
                  value={filterValues[filter.key] || ""}
                  onChange={(e) => handleFilterChange(filter.key, e.target.value)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white font-medium focus:outline-none focus:border-[#000000]"
                >
                  <option value="">{filter.label}</option>
                  {filter.options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 text-slate-500 uppercase tracking-wider border-b border-slate-200">
                  {columns.map((col) => (
                    <th
                      key={col.key}
                      className={`py-4 px-6 font-bold ${col.width ? `w-${col.width}` : ""}`}
                    >
                      {col.label}
                    </th>
                  ))}
                  <th className="py-4 px-6 font-bold text-right">{language === "en" ? "Actions" : "कार्रवाई"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {loading ? (
                  <tr>
                    <td colSpan={columns.length + 1} className="py-12 text-center text-slate-400">
                      {language === "en" ? "Loading..." : "लोड हो रहा है..."}
                    </td>
                  </tr>
                ) : data.length === 0 ? (
                  <tr>
                    <td colSpan={columns.length + 1} className="py-12 text-center text-slate-400">
                      {language === "en" ? "No records found." : "कोई रिकॉर्ड नहीं मिला।"}
                    </td>
                  </tr>
                ) : (
                  data.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/60 transition-colors">
                      {columns.map((col) => (
                        <td key={col.key} className={`py-4 px-6 ${col.width ? `w-${col.width}` : ""}`}>
                          {col.render ? col.render(item) : String(item[col.key] ?? "")}
                        </td>
                      ))}
                      <td className="py-4 px-6 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => setDetailItem(item)}
                            className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                          >
                            {language === "en" ? "View" : "देखें"}
                          </button>
                          {statusOptions && onStatusUpdate && (
                            <select
                              value={item.status as string}
                              onChange={(e) => handleStatusChange(item.id, e.target.value)}
                              className="px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-white font-medium text-slate-700 focus:outline-none focus:border-[#000000]"
                            >
                              {statusOptions.map((opt) => (
                                <option key={opt.value} value={opt.value}>
                                  {opt.label}
                                </option>
                              ))}
                            </select>
                          )}
                          <button
                            type="button"
                            onClick={() => setDeletingId(item.id)}
                            className="px-3 py-1.5 rounded-lg border border-red-200 text-xs font-semibold text-red-700 hover:bg-red-50"
                          >
                            {language === "en" ? "Delete" : "हटाएं"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="p-6 border-t border-slate-100 flex items-center justify-between">
            <p className="text-xs text-slate-500">
              {language === "en" ? `Showing ${(page - 1) * limit + 1} to ${Math.min(page * limit, total)} of ${total} entries` : `कुल ${total} प्रविष्टियों में से ${(page - 1) * limit + 1} से ${Math.min(page * limit, total)} दिखाया जा रहा है`}
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold disabled:opacity-50 hover:bg-slate-50"
              >
                {language === "en" ? "Previous" : "पिछला"}
              </button>
              <span className="text-xs text-slate-600 font-semibold">
                {language === "en" ? `Page ${page} / ${totalPages}` : `पृष्ठ ${page} / ${totalPages}`}
              </span>
              <button
                type="button"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold disabled:opacity-50 hover:bg-slate-50"
              >
                {language === "en" ? "Next" : "अगला"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {detailItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-lg font-black text-[#0A2540]">{language === "en" ? "Record Details" : "रिकॉर्ड विवरण"}</h3>
              <button
                type="button"
                onClick={() => setDetailItem(null)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold"
              >
                {language === "en" ? "Close" : "बंद करें"}
              </button>
            </div>
            <div className="p-6 space-y-4">
              {columns.map((col) => (
                <div key={col.key}>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-1">
                    {col.label}
                  </p>
                  <div className="text-sm text-slate-900 whitespace-pre-wrap break-words">
                    {col.render ? col.render(detailItem) : String(detailItem[col.key] ?? "")}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setDetailItem(null)}
                className="px-6 py-2.5 bg-slate-800 text-white rounded-xl text-xs font-bold hover:bg-slate-700"
              >
                {language === "en" ? "Close" : "बंद करें"}
              </button>
            </div>
          </div>
        </div>
      )}

      {deletingId && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl max-w-sm w-full p-6 space-y-4">
            <h3 className="text-lg font-black text-[#0A2540]">{language === "en" ? "Confirm Deletion" : "हटाने की पुष्टि करें"}</h3>
            <p className="text-sm text-slate-600">
              {language === "en" ? "Are you sure you want to delete this record? This action cannot be undone." : "क्या आप वाकई इस रिकॉर्ड को हटाना चाहते हैं? यह क्रिया पूर्ववत नहीं की जा सकती।"}
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setDeletingId(null)}
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold hover:bg-slate-50"
              >
                {language === "en" ? "Cancel" : "रद्द करें"}
              </button>
              <button
                type="button"
                onClick={handleDelete}
                className="flex-1 px-4 py-2.5 rounded-xl bg-red-600 text-white text-xs font-bold hover:bg-red-700"
              >
                {language === "en" ? "Delete" : "हटाएं"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
