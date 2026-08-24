"use client";

import React, { useState, useEffect } from "react";
import AdminPageShell, { ColumnDef, StatDef, FilterDef } from "@/components/admin/AdminPageShell";

const STATUS_LABELS: Record<string, string> = {
  Pending: "लंबित",
  Reviewed: "समीक्षित",
  Accepted: "स्वीकृत",
  Rejected: "अस्वीकृत",
};

export default function AdminInternshipsPage() {
  const [stats, setStats] = useState<StatDef[]>([
    { label: "कुल", value: 0, color: "bg-slate-800" },
    { label: "लंबित", value: 0, color: "bg-amber-500" },
    { label: "समीक्षित", value: 0, color: "bg-blue-500" },
    { label: "स्वीकृत", value: 0, color: "bg-emerald-500" },
  ]);

  const columns: ColumnDef[] = [
    { key: "id", label: "आईडी", width: "100px", render: (item) => (
      <span className="font-mono font-bold text-[#0A2540] block">{String(item.id)}</span>
    )},
    { key: "fullName", label: "आवेदक", render: (item) => (
      <div>
        <span className="font-bold block text-slate-900">{String(item.fullName ?? "")}</span>
        <span className="text-slate-500 font-mono text-[10px]">{String(item.university ?? item.education ?? "")}</span>
      </div>
    )},
    { key: "fatherHusbandName", label: "पिता/पति का नाम", render: (item) => String(item.fatherHusbandName ?? "") },
    { key: "age", label: "आयु", render: (item) => String(item.age ?? "") },
    { key: "category", label: "श्रेणी", render: (item) => String(item.category ?? "") },
    { key: "gender", label: "लिंग", render: (item) => String(item.gender ?? "") },
    { key: "education", label: "शिक्षा", render: (item) => String(item.education ?? "") },
    { key: "mobile", label: "मोबाइल", render: (item) => String(item.mobile ?? "") },
    { key: "email", label: "ईमेल", render: (item) => String(item.email ?? "") },
    { key: "address", label: "पता", render: (item) => String(item.address ?? "") },
    { key: "university", label: "विश्वविद्यालय", render: (item) => String(item.university ?? "") },
    { key: "field", label: "अध्ययन क्षेत्र", render: (item) => String(item.field ?? "उपलब्ध नहीं") },
    { key: "resume", label: "रिज्यूमे", render: (item) => String(item.resume ?? "") },
    { key: "statement", label: "वक्तव्य", render: (item) => (
      <span className="truncate block max-w-xs" title={String(item.statement ?? "")}>{String(item.statement ?? "")}</span>
    )},
    { key: "status", label: "स्थिति", render: (item) => {
      const styles: Record<string, string> = {
        Pending: "bg-amber-50 text-amber-700 border border-amber-200",
        Reviewed: "bg-blue-50 text-blue-700 border border-blue-200",
        Accepted: "bg-emerald-50 text-emerald-700 border border-emerald-200",
        Rejected: "bg-red-50 text-red-700 border border-red-200",
      };
      return <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold ${styles[item.status as string] || styles.Pending}`}>{STATUS_LABELS[item.status as string] ?? String(item.status ?? "")}</span>;
    }},
    { key: "createdAt", label: "दिनांक", render: (item) => {
      const d = new Date(String(item.createdAt ?? ""));
      return isNaN(d.getTime()) ? String(item.createdAt ?? "") : d.toLocaleDateString("en-IN");
    }},
  ];

  const filters: FilterDef[] = [
    { label: "स्थिति", key: "status", options: [
      { label: "सभी", value: "" },
      { label: "लंबित", value: "Pending" },
      { label: "समीक्षित", value: "Reviewed" },
      { label: "स्वीकृत", value: "Accepted" },
      { label: "अस्वीकृत", value: "Rejected" },
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
          { label: "कुल", value: total, color: "bg-slate-800" },
          { label: "लंबित", value: pending, color: "bg-amber-500" },
          { label: "समीक्षित", value: reviewed, color: "bg-blue-500" },
          { label: "स्वीकृत", value: accepted, color: "bg-emerald-500" },
        ]);
      } catch (e) {
        console.error(e);
      }
    };
    fetchStats();
  }, []);

  return (
    <AdminPageShell
      title="इंटर्नशिप"
      description="DDJC वेबसाइट से इंटर्नशिप आवेदनों का प्रबंधन करें"
      apiEndpoint="/api/admin/join-applications"
      columns={columns}
      stats={stats}
      filters={filters}
      baseUrlParams={{ joinType: "Internship" }}
      statusOptions={[
        { label: "लंबित", value: "Pending" },
        { label: "समीक्षित", value: "Reviewed" },
        { label: "स्वीकृत", value: "Accepted" },
        { label: "अस्वीकृत", value: "Rejected" },
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
