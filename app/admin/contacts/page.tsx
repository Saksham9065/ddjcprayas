"use client";

import React, { useState, useEffect } from "react";
import AdminPageShell, { ColumnDef, StatDef, FilterDef } from "@/components/admin/AdminPageShell";
import { useApp } from "@/context/AppContext";

export default function AdminContactsPage() {
  const { language } = useApp();
  const [stats, setStats] = useState<StatDef[]>([
    { label: language === "en" ? "Total" : "कुल", value: 0, color: "bg-slate-800" },
    { label: language === "en" ? "New" : "नया", value: 0, color: "bg-amber-500" },
    { label: language === "en" ? "Contacted" : "संपर्क किया गया", value: 0, color: "bg-blue-500" },
    { label: language === "en" ? "Resolved" : "हल किया गया", value: 0, color: "bg-emerald-500" },
  ]);

  const STATUS_LABELS: Record<string, string> = {
    New: language === "en" ? "New" : "नया",
    Contacted: language === "en" ? "Contacted" : "संपर्क किया गया",
    Resolved: language === "en" ? "Resolved" : "हल किया गया",
  };

  const columns: ColumnDef[] = [
    { key: "id", label: language === "en" ? "ID" : "आईडी", width: "80px" },
    { key: "fullName", label: language === "en" ? "Name" : "नाम", render: (item) => (
      <div>
        <span className="font-bold block text-slate-900">{String(item.fullName ?? "")}</span>
        <span className="text-slate-500 font-mono text-[10px]">{String(item.mobile ?? "")}</span>
      </div>
    )},
    { key: "email", label: language === "en" ? "Email" : "ईमेल", render: (item) => String(item.email ?? "") },
    { key: "helpType", label: language === "en" ? "Help Type" : "सहायता प्रकार", render: (item) => String(item.helpType ?? "") },
    { key: "status", label: language === "en" ? "Status" : "स्थिति", render: (item) => {
      const styles: Record<string, string> = {
        New: "bg-amber-50 text-amber-700 border border-amber-200",
        Contacted: "bg-blue-50 text-blue-700 border border-blue-200",
        Resolved: "bg-emerald-50 text-emerald-700 border border-emerald-200",
      };
      return <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold ${styles[item.status as string] || styles.New}`}>{STATUS_LABELS[item.status as string] ?? String(item.status ?? "")}</span>;
    }},
    { key: "createdAt", label: language === "en" ? "Date" : "दिनांक", render: (item) => {
      const d = new Date(String(item.createdAt ?? ""));
      return isNaN(d.getTime()) ? String(item.createdAt ?? "") : d.toLocaleDateString("en-IN");
    }},
  ];

  const filters: FilterDef[] = [
    { label: language === "en" ? "Status" : "स्थिति", key: "status", options: [
      { label: language === "en" ? "All" : "सभी", value: "" },
      { label: language === "en" ? "New" : "नया", value: "New" },
      { label: language === "en" ? "Contacted" : "संपर्क किया गया", value: "Contacted" },
      { label: language === "en" ? "Resolved" : "हल किया गया", value: "Resolved" },
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
          { label: language === "en" ? "Total" : "कुल", value: total, color: "bg-slate-800" },
          { label: language === "en" ? "New" : "नया", value: newCount, color: "bg-amber-500" },
          { label: language === "en" ? "Contacted" : "संपर्क किया गया", value: contacted, color: "bg-blue-500" },
          { label: language === "en" ? "Resolved" : "हल किया गया", value: resolved, color: "bg-emerald-500" },
        ]);
      } catch (e) {
        console.error(e);
      }
    };
    fetchStats();
  }, [language]);

  return (
    <AdminPageShell
      title={language === "en" ? "Contacts" : "संपर्क करें"}
      description={language === "en" ? "Manage contact form submissions from the DDJC website" : "DDJC वेबसाइट से संपर्क फॉर्म जमा करने का प्रबंधन करें"}
      apiEndpoint="/api/admin/contacts"
      columns={columns}
      stats={stats}
      filters={filters}
      statusOptions={[
        { label: language === "en" ? "New" : "नया", value: "New" },
        { label: language === "en" ? "Contacted" : "संपर्क किया गया", value: "Contacted" },
        { label: language === "en" ? "Resolved" : "हल किया गया", value: "Resolved" },
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
