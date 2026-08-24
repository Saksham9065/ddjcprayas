"use client";

import React, { useState, useEffect } from "react";
import AdminPageShell, { ColumnDef, StatDef, FilterDef } from "@/components/admin/AdminPageShell";

const STATUS_LABELS: Record<string, string> = {
  "Pending Verification": "सत्यापन लंबित",
  Verified: "सत्यापित",
  Rejected: "अस्वीकृत",
};

export default function AdminDonationsPage() {
  const [stats, setStats] = useState<StatDef[]>([
    { label: "कुल दान", value: 0, color: "bg-slate-800" },
    { label: "सत्यापन लंबित", value: 0, color: "bg-amber-500" },
    { label: "सत्यापित", value: 0, color: "bg-emerald-500" },
    { label: "अस्वीकृत", value: 0, color: "bg-red-500" },
  ]);

  const columns: ColumnDef[] = [
    { key: "id", label: "आईडी", width: "100px", render: (item) => (
      <span className="font-mono font-bold text-[#0A2540] block">{String(item.id)}</span>
    )},
    { key: "donorName", label: "दाता का नाम", render: (item) => (
      <span className="font-bold text-slate-900">{String(item.donorName ?? "")}</span>
    )},
    { key: "phone", label: "फ़ोन", render: (item) => String(item.phone ?? "") },
    { key: "email", label: "ईमेल", render: (item) => String(item.email ?? "") },
    { key: "screenshotPath", label: "स्क्रीनशॉट", render: (item) => {
      const path = item.screenshotPath as string | undefined;
      if (!path) return <span className="text-slate-400">कोई स्क्रीनशॉट नहीं</span>;
      return (
        <a href={path} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">
          देखें
        </a>
      );
    }},
    { key: "status", label: "स्थिति", render: (item) => {
      const styles: Record<string, string> = {
        "Pending Verification": "bg-amber-50 text-amber-700 border border-amber-200",
        Verified: "bg-emerald-50 text-emerald-700 border border-emerald-200",
        Rejected: "bg-red-50 text-red-700 border border-red-200",
      };
      return (
        <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold ${styles[item.status as string] || styles["Pending Verification"]}`}>
          {STATUS_LABELS[item.status as string] ?? String(item.status ?? "")}
        </span>
      );
    }},
    { key: "createdAt", label: "दिनांक", render: (item) => {
      const d = new Date(String(item.createdAt ?? ""));
      return isNaN(d.getTime()) ? String(item.createdAt ?? "") : d.toLocaleDateString("en-IN");
    }},
  ];

  const filters: FilterDef[] = [
    { label: "स्थिति", key: "status", options: [
      { label: "सभी", value: "" },
      { label: "सत्यापन लंबित", value: "Pending Verification" },
      { label: "सत्यापित", value: "Verified" },
      { label: "अस्वीकृत", value: "Rejected" },
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
          { label: "कुल दान", value: total, color: "bg-slate-800" },
          { label: "सत्यापन लंबित", value: pending, color: "bg-amber-500" },
          { label: "सत्यापित", value: verified, color: "bg-emerald-500" },
          { label: "अस्वीकृत", value: rejected, color: "bg-red-500" },
        ]);
      } catch (e) {
        console.error(e);
      }
    };
    fetchStats();
  }, []);

  return (
    <AdminPageShell
      title="दान"
      description="दान जमा करने और भुगतान प्रमाण सत्यापन का प्रबंधन करें"
      apiEndpoint="/api/admin/donations"
      columns={columns}
      stats={stats}
      filters={filters}
      statusOptions={[
        { label: "सत्यापन लंबित", value: "Pending Verification" },
        { label: "सत्यापित", value: "Verified" },
        { label: "अस्वीकृत", value: "Rejected" },
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
