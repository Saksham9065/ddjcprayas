"use client";

import React, { useState, useEffect } from "react";
import AdminPageShell, { ColumnDef, StatDef, FilterDef } from "@/components/admin/AdminPageShell";
import { useApp } from "@/context/AppContext";

export default function AdminVolunteersPage() {
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
        <span className="text-slate-500 font-mono text-[10px]">{String(item.mobile ?? "")}</span>
      </div>
    )},
    { key: "email", label: language === "en" ? "Email" : "ईमेल", render: (item) => String(item.email ?? "") },
    { key: "occupation", label: language === "en" ? "Occupation" : "व्यवसाय", render: (item) => String(item.occupation ?? (language === "en" ? "Not Available" : "उपलब्ध नहीं")) },
    { key: "workMode", label: language === "en" ? "Work Mode" : "कार्य मोड", render: (item) => String(item.workMode ?? (language === "en" ? "Not Available" : "उपलब्ध नहीं")) },
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
        const res = await fetch("/api/admin/join-applications?joinType=Volunteer&limit=1000");
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
      title={language === "en" ? "Volunteers" : "स्वयंसेवक"}
      description={language === "en" ? "Manage volunteer applications from the DDJC website" : "DDJC वेबसाइट से स्वयंसेवक आवेदनों का प्रबंधन करें"}
      apiEndpoint="/api/admin/join-applications"
      columns={columns}
      stats={stats}
      filters={filters}
      baseUrlParams={{ joinType: "Volunteer" }}
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
