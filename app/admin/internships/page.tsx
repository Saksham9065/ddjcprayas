"use client";

import React, { useState, useEffect } from "react";
import AdminPageShell, { ColumnDef, StatDef, FilterDef } from "@/components/admin/AdminPageShell";

export default function AdminInternshipsPage() {
  const [stats, setStats] = useState<StatDef[]>([
    { label: "Total", value: 0, color: "bg-slate-800" },
    { label: "Pending", value: 0, color: "bg-amber-500" },
    { label: "Reviewed", value: 0, color: "bg-blue-500" },
    { label: "Accepted", value: 0, color: "bg-emerald-500" },
  ]);

  const columns: ColumnDef[] = [
    { key: "id", label: "ID", width: "100px", render: (item) => (
      <span className="font-mono font-bold text-[#0A2540] block">{String(item.id)}</span>
    )},
    { key: "fullName", label: "Applicant", render: (item) => (
      <div>
        <span className="font-bold block text-slate-900">{String(item.fullName ?? "")}</span>
        <span className="text-slate-500 font-mono text-[10px]">{String(item.university ?? item.education ?? "")}</span>
      </div>
    )},
    { key: "field", label: "Field of Study", render: (item) => String(item.field ?? "N/A") },
    { key: "mobile", label: "Contact", render: (item) => {
      const emailVal = item.email;
      return (
        <div className="flex flex-col gap-0.5">
          <span className="flex items-center gap-1 text-slate-600">{String(item.mobile ?? "")}</span>
          {typeof emailVal === 'string' && emailVal ? <span className="flex items-center gap-1 text-slate-500">{emailVal}</span> : null}
        </div>
      );
    }},
    { key: "status", label: "Status", render: (item) => {
      const styles: Record<string, string> = {
        Pending: "bg-amber-50 text-amber-700 border border-amber-200",
        Reviewed: "bg-blue-50 text-blue-700 border border-blue-200",
        Accepted: "bg-emerald-50 text-emerald-700 border border-emerald-200",
        Rejected: "bg-red-50 text-red-700 border border-red-200",
      };
      return <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold ${styles[item.status as string] || styles.Pending}`}>{item.status as string}</span>;
    }},
    { key: "createdAt", label: "Date", render: (item) => {
      const d = new Date(String(item.createdAt ?? ""));
      return isNaN(d.getTime()) ? String(item.createdAt ?? "") : d.toLocaleDateString("en-IN");
    }},
  ];

  const filters: FilterDef[] = [
    { label: "Status", key: "status", options: [
      { label: "All", value: "" },
      { label: "Pending", value: "Pending" },
      { label: "Reviewed", value: "Reviewed" },
      { label: "Accepted", value: "Accepted" },
      { label: "Rejected", value: "Rejected" },
    ]},
  ];

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/admin/join-applications?joinType=Internship&limit=1000");
        const json = await res.json();
        const data = json.data || [];
        const total = data.length;
        const pending = data.filter((a: Record<string, unknown>) => a.status === "Pending").length;
        const reviewed = data.filter((a: Record<string, unknown>) => a.status === "Reviewed").length;
        const accepted = data.filter((a: Record<string, unknown>) => a.status === "Accepted").length;
        setStats([
          { label: "Total", value: total, color: "bg-slate-800" },
          { label: "Pending", value: pending, color: "bg-amber-500" },
          { label: "Reviewed", value: reviewed, color: "bg-blue-500" },
          { label: "Accepted", value: accepted, color: "bg-emerald-500" },
        ]);
      } catch (e) {
        console.error(e);
      }
    };
    fetchStats();
  }, []);

  return (
    <AdminPageShell
      title="Internships"
      description="Manage internship applications from DDJC website"
      apiEndpoint="/api/admin/join-applications"
      columns={columns}
      stats={stats}
      filters={filters}
      baseUrlParams={{ joinType: "Internship" }}
      statusOptions={[
        { label: "Pending", value: "Pending" },
        { label: "Reviewed", value: "Reviewed" },
        { label: "Accepted", value: "Accepted" },
        { label: "Rejected", value: "Rejected" },
      ]}
      onStatusUpdate={async (id, status) => {
        await fetch("/api/admin/join-applications", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id, status }),
        });
      }}
    />
  );
}
