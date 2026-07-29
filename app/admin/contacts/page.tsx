"use client";

import React, { useState, useEffect } from "react";
import AdminPageShell, { ColumnDef, StatDef, FilterDef } from "@/components/admin/AdminPageShell";

export default function AdminContactsPage() {
  const [stats, setStats] = useState<StatDef[]>([
    { label: "Total", value: 0, color: "bg-slate-800" },
    { label: "New", value: 0, color: "bg-amber-500" },
    { label: "Contacted", value: 0, color: "bg-blue-500" },
    { label: "Resolved", value: 0, color: "bg-emerald-500" },
  ]);

  const columns: ColumnDef[] = [
    { key: "id", label: "ID", width: "80px" },
    { key: "fullName", label: "Full Name", render: (item) => (
      <div>
        <span className="font-bold block text-slate-900">{String(item.fullName ?? "")}</span>
        <span className="text-slate-500 font-mono text-[10px]">{String(item.mobile ?? "")}</span>
      </div>
    )},
    { key: "email", label: "Email", render: (item) => String(item.email ?? "") },
    { key: "category", label: "Category", render: (item) => (
      <span className="bg-slate-50 text-[#000000] px-2.5 py-1 rounded-md font-semibold text-[10px] border border-slate-100">
        {String(item.category ?? "N/A")}
      </span>
    )},
    { key: "status", label: "Status", render: (item) => {
      const styles: Record<string, string> = {
        New: "bg-amber-50 text-amber-700 border border-amber-200",
        Contacted: "bg-blue-50 text-blue-700 border border-blue-200",
        Resolved: "bg-emerald-50 text-emerald-700 border border-emerald-200",
      };
      return <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold ${styles[item.status as string] || styles.New}`}>{item.status as string}</span>;
    }},
    { key: "createdAt", label: "Date", render: (item) => {
      const d = new Date(String(item.createdAt ?? ""));
      return isNaN(d.getTime()) ? String(item.createdAt ?? "") : d.toLocaleDateString("en-IN");
    }},
  ];

  const filters: FilterDef[] = [
    { label: "Status", key: "status", options: [
      { label: "All", value: "" },
      { label: "New", value: "New" },
      { label: "Contacted", value: "Contacted" },
      { label: "Resolved", value: "Resolved" },
    ]},
  ];

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/admin/contacts?limit=1000");
        const json = await res.json();
        const data = json.data || [];
        const total = data.length;
        const newCount = data.filter((a: Record<string, unknown>) => a.status === "New").length;
        const contacted = data.filter((a: Record<string, unknown>) => a.status === "Contacted").length;
        const resolved = data.filter((a: Record<string, unknown>) => a.status === "Resolved").length;
        setStats([
          { label: "Total", value: total, color: "bg-slate-800" },
          { label: "New", value: newCount, color: "bg-amber-500" },
          { label: "Contacted", value: contacted, color: "bg-blue-500" },
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
      title="Contact Us"
      description="Manage contact form submissions from DDJC website"
      apiEndpoint="/api/admin/contacts"
      columns={columns}
      stats={stats}
      filters={filters}
      statusOptions={[
        { label: "New", value: "New" },
        { label: "Contacted", value: "Contacted" },
        { label: "Resolved", value: "Resolved" },
      ]}
      onStatusUpdate={async (id, status) => {
        await fetch("/api/admin/contacts", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id, status }),
        });
      }}
    />
  );
}
