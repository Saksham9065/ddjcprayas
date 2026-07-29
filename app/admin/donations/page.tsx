"use client";

import React, { useState, useEffect } from "react";
import AdminPageShell, { ColumnDef, StatDef, FilterDef } from "@/components/admin/AdminPageShell";

export default function AdminDonationsPage() {
  const [stats, setStats] = useState<StatDef[]>([
    { label: "Total Donations", value: 0, color: "bg-slate-800" },
    { label: "Pending Verification", value: 0, color: "bg-amber-500" },
    { label: "Verified", value: 0, color: "bg-emerald-500" },
    { label: "Rejected", value: 0, color: "bg-red-500" },
  ]);

  const columns: ColumnDef[] = [
    { key: "id", label: "ID", width: "100px", render: (item) => (
      <span className="font-mono font-bold text-[#0A2540] block">{String(item.id)}</span>
    )},
    { key: "donorName", label: "Donor Name", render: (item) => (
      <span className="font-bold text-slate-900">{String(item.donorName ?? "")}</span>
    )},
    { key: "phone", label: "Phone", render: (item) => String(item.phone ?? "") },
    { key: "email", label: "Email", render: (item) => String(item.email ?? "") },
    { key: "screenshotPath", label: "Screenshot", render: (item) => {
      const path = item.screenshotPath as string | undefined;
      if (!path) return <span className="text-slate-400">No screenshot</span>;
      return (
        <a href={path} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">
          View
        </a>
      );
    }},
    { key: "status", label: "Status", render: (item) => {
      const styles: Record<string, string> = {
        "Pending Verification": "bg-amber-50 text-amber-700 border border-amber-200",
        Verified: "bg-emerald-50 text-emerald-700 border border-emerald-200",
        Rejected: "bg-red-50 text-red-700 border border-red-200",
      };
      return (
        <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold ${styles[item.status as string] || styles["Pending Verification"]}`}>
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
      { label: "Pending Verification", value: "Pending Verification" },
      { label: "Verified", value: "Verified" },
      { label: "Rejected", value: "Rejected" },
    ]},
  ];

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/admin/donations?limit=1000");
        const json = await res.json();
        const data = json.data || [];
        const total = data.length;
        const pending = data.filter((d: Record<string, unknown>) => d.status === "Pending Verification").length;
        const verified = data.filter((d: Record<string, unknown>) => d.status === "Verified").length;
        const rejected = data.filter((d: Record<string, unknown>) => d.status === "Rejected").length;
        setStats([
          { label: "Total Donations", value: total, color: "bg-slate-800" },
          { label: "Pending Verification", value: pending, color: "bg-amber-500" },
          { label: "Verified", value: verified, color: "bg-emerald-500" },
          { label: "Rejected", value: rejected, color: "bg-red-500" },
        ]);
      } catch (e) {
        console.error(e);
      }
    };
    fetchStats();
  }, []);

  return (
    <AdminPageShell
      title="Donations"
      description="Manage donation submissions and payment proof verification"
      apiEndpoint="/api/admin/donations"
      columns={columns}
      stats={stats}
      filters={filters}
      statusOptions={[
        { label: "Pending Verification", value: "Pending Verification" },
        { label: "Verified", value: "Verified" },
        { label: "Rejected", value: "Rejected" },
      ]}
      onStatusUpdate={async (id, status) => {
        await fetch("/api/admin/donations", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id, status }),
        });
      }}
    />
  );
}
