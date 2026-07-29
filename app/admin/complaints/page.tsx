"use client";

import React, { useState, useEffect } from "react";
import AdminPageShell, { ColumnDef, StatDef, FilterDef } from "@/components/admin/AdminPageShell";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function AdminComplaintsPage() {
  const [stats, setStats] = useState<StatDef[]>([
    { label: "Total Cases", value: 0, color: "bg-slate-800" },
    { label: "Pending Review", value: 0, color: "bg-amber-500" },
    { label: "In Progress", value: 0, color: "bg-[#000000]" },
    { label: "Resolved", value: 0, color: "bg-emerald-500" },
  ]);

  const columns: ColumnDef[] = [
    { key: "id", label: "ID", width: "100px", render: (item) => (
      <span className="font-mono font-bold text-[#0A2540] block">{String(item.id)}</span>
    )},
    { key: "fullName", label: "Complainant", render: (item) => (
      <div>
        <span className="font-bold block text-slate-900">{String(item.fullName ?? "")}</span>
        <span className="text-slate-500 font-mono text-[10px]">{String(item.phone ?? "")}</span>
      </div>
    )},
    { key: "district", label: "Location", render: (item) => (
      <div className="flex items-center gap-1 text-slate-600">
        <FaMapMarkerAlt className="text-[#000000] shrink-0" size={10} />
        <span>{String(item.district ?? "")} ({String(item.tehsil ?? "")})</span>
      </div>
    )},
    { key: "category", label: "Category", render: (item) => (
      <span className="bg-slate-50 text-[#000000] px-2.5 py-1 rounded-md font-semibold text-[10px] border border-slate-100">
        {String(item.category ?? "N/A")}
      </span>
    )},
    { key: "description", label: "Description", render: (item) => (
      <span className="truncate block max-w-xs" title={String(item.description ?? "")}>{String(item.description ?? "")}</span>
    )},
    { key: "status", label: "Status", render: (item) => {
      const styles: Record<string, string> = {
        "Pending Review": "bg-amber-50 text-amber-700 border border-amber-200",
        "In Progress": "bg-slate-50 text-[#000000] border border-slate-200",
        Resolved: "bg-emerald-50 text-emerald-700 border border-emerald-200",
      };
      return (
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold ${styles[item.status as string] || styles["Pending Review"]}`}>
          {item.status as string}
        </span>
      );
    }},
    { key: "createdAt", label: "Date", render: (item) => {
      const d = new Date(String(item.createdAt ?? ""));
      return isNaN(d.getTime()) ? String(item.createdAt ?? "") : d.toLocaleDateString("en-IN");
    }},
  ];

  const filters: FilterDef[] = [
    { label: "Status", key: "status", options: [
      { label: "All", value: "" },
      { label: "Pending Review", value: "Pending Review" },
      { label: "In Progress", value: "In Progress" },
      { label: "Resolved", value: "Resolved" },
    ]},
    { label: "Category", key: "category", options: [
      { label: "All Categories", value: "" },
      { label: "Atrocity / Violence", value: "Atrocity / Violence" },
      { label: "Police Inaction", value: "Police Inaction" },
      { label: "Land Dispute", value: "Land Dispute" },
      { label: "Social Boycott", value: "Social Boycott" },
      { label: "Compensation Delay", value: "Compensation Delay" },
      { label: "Other", value: "Other" },
    ]},
  ];

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/admin/complaints?limit=1000");
        const json = await res.json();
        const data = json.data || [];
        const total = data.length;
        const pending = data.filter((c: Record<string, unknown>) => c.status === "Pending Review").length;
        const inProgress = data.filter((c: Record<string, unknown>) => c.status === "In Progress").length;
        const resolved = data.filter((c: Record<string, unknown>) => c.status === "Resolved").length;
        setStats([
          { label: "Total Cases", value: total, color: "bg-slate-800" },
          { label: "Pending Review", value: pending, color: "bg-amber-500" },
          { label: "In Progress", value: inProgress, color: "bg-[#000000]" },
          { label: "Resolved", value: resolved, color: "bg-emerald-500" },
        ]);
      } catch (e) {
        console.error(e);
      }
    };
    fetchStats();
  }, []);

  return (
    <AdminPageShell
      title="Complaints"
      description="Manage and update status of citizen complaints in real time"
      apiEndpoint="/api/admin/complaints"
      columns={columns}
      stats={stats}
      filters={filters}
      statusOptions={[
        { label: "Pending Review", value: "Pending Review" },
        { label: "In Progress", value: "In Progress" },
        { label: "Resolved", value: "Resolved" },
      ]}
      onStatusUpdate={async (id, status) => {
        await fetch("/api/admin/complaints", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id, status }),
        });
      }}
    />
  );
}
