"use client";

import React, { useState, useEffect } from "react";
import AdminPageShell, { ColumnDef, StatDef, FilterDef } from "@/components/admin/AdminPageShell";
import { useApp } from "@/context/AppContext";

export default function AdminJobsPage() {
  const { language } = useApp();
  const [stats, setStats] = useState<StatDef[]>([
    { label: language === "en" ? "Total" : "कुल", value: 0, color: "bg-slate-800" },
    { label: language === "en" ? "Pending" : "लंबित", value: 0, color: "bg-amber-500" },
    { label: language === "en" ? "Reviewed" : "समीक्षित", value: 0, color: "bg-blue-500" },
    { label: language === "en" ? "Accepted" : "स्वीकृत", value: 0, color: "bg-emerald-500" },
  ]);

  const STATUS_LABELS: Record<string, string> = {
    Pending: language === "en" ? "Pending" : "लंबित",
    Reviewed: language === "en" ? "Reviewed" : "समीक्षित",
    Accepted: language === "en" ? "Accepted" : "स्वीकृत",
    Rejected: language === "en" ? "Rejected" : "अस्वीकृत",
  };

  const columns: ColumnDef[] = [
    { key: "id", label: language === "en" ? "ID" : "आईडी", width: "100px", render: (item) => (
      <span className="font-mono font-bold text-[#0A2540] block">{String(item.id)}</span>
    )},
    { key: "fullName", label: language === "en" ? "Name" : "नाम", render: (item) => (
      <div>
        <span className="font-bold block text-slate-900">{String(item.fullName ?? "")}</span>
        <span className="text-slate-500 font-mono text-[10px]">{String(item.education ?? "")}</span>
      </div>
    )},
    { key: "email", label: language === "en" ? "Email" : "ईमेल", render: (item) => String(item.email ?? "") },
    { key: "experience", label: language === "en" ? "Experience" : "अनुभव", render: (item) => String(item.experience ?? (language === "en" ? "Not Available" : "उपलब्ध नहीं")) },
    { key: "position", label: language === "en" ? "Position" : "पद", render: (item) => (
      <span className="bg-slate-50 text-[#000000] px-2.5 py-1 rounded-md font-semibold text-[10px] border border-slate-100">
        {String(item.position ?? (language === "en" ? "Not Available" : "उपलब्ध नहीं"))}
      </span>
    )},
    { key: "status", label: language === "en" ? "Status" : "स्थिति", render: (item) => {
      const styles: Record<string, string> = {
        Pending: "bg-amber-50 text-amber-700 border border-amber-200",
        Reviewed: "bg-blue-50 text-blue-700 border border-blue-200",
        Accepted: "bg-emerald-50 text-emerald-700 border border-emerald-200",
        Rejected: "bg-red-50 text-red-700 border border-red-200",
      };
      return <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold ${styles[item.status as string] || styles.Pending}`}>{STATUS_LABELS[item.status as string] ?? String(item.status ?? "")}</span>;
    }},
    { key: "createdAt", label: language === "en" ? "Date" : "दिनांक", render: (item) => {
      const d = new Date(String(item.createdAt ?? ""));
      return isNaN(d.getTime()) ? String(item.createdAt ?? "") : d.toLocaleDateString("en-IN");
    }},
  ];

  const filters: FilterDef[] = [
    { label: language === "en" ? "Status" : "स्थिति", key: "status", options: [
      { label: language === "en" ? "All" : "सभी", value: "" },
      { label: language === "en" ? "Pending" : "लंबित", value: "Pending" },
      { label: language === "en" ? "Reviewed" : "समीक्षित", value: "Reviewed" },
      { label: language === "en" ? "Accepted" : "स्वीकृत", value: "Accepted" },
      { label: language === "en" ? "Rejected" : "अस्वीकृत", value: "Rejected" },
    ]},
  ];

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/admin/join-applications?joinType=Career&limit=1000");
        const json = await res.json();
        const data = json.data || [];
        const total = data.length;
        const pending = data.filter((a: Record<string, unknown>) => a.status === "Pending").length;
        const reviewed = data.filter((a: Record<string, unknown>) => a.status === "Reviewed").length;
        const accepted = data.filter((a: Record<string, unknown>) => a.status === "Accepted").length;
        setStats([
          { label: language === "en" ? "Total" : "कुल", value: total, color: "bg-slate-800" },
          { label: language === "en" ? "Pending" : "लंबित", value: pending, color: "bg-amber-500" },
          { label: language === "en" ? "Reviewed" : "समीक्षित", value: reviewed, color: "bg-blue-500" },
          { label: language === "en" ? "Accepted" : "स्वीकृत", value: accepted, color: "bg-emerald-500" },
        ]);
      } catch (e) {
        console.error(e);
      }
    };
    fetchStats();
  }, [language]);

  return (
    <AdminPageShell
      title={language === "en" ? "Jobs and Careers" : "नौकरी और करियर"}
      description={language === "en" ? "Manage job and career applications from the DDJC website" : "DDJC वेबसाइट से नौकरी और करियर आवेदनों का प्रबंधन करें"}
      apiEndpoint="/api/admin/join-applications"
      columns={columns}
      stats={stats}
      filters={filters}
      baseUrlParams={{ joinType: "Career" }}
      statusOptions={[
        { label: language === "en" ? "Pending" : "लंबित", value: "Pending" },
        { label: language === "en" ? "Reviewed" : "समीक्षित", value: "Reviewed" },
        { label: language === "en" ? "Accepted" : "स्वीकृत", value: "Accepted" },
        { label: language === "en" ? "Rejected" : "अस्वीकृत", value: "Rejected" },
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
