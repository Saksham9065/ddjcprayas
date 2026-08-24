"use client";

import React, { useState, useEffect } from "react";
import AdminPageShell, { ColumnDef, StatDef, FilterDef } from "@/components/admin/AdminPageShell";

const STATUS_LABELS: Record<string, string> = {
  New: "नया",
  Contacted: "संपर्क किया गया",
  Resolved: "हल किया गया",
};

export default function AdminContactsPage() {
  const [stats, setStats] = useState<StatDef[]>([
    { label: "कुल", value: 0, color: "bg-slate-800" },
    { label: "नया", value: 0, color: "bg-amber-500" },
    { label: "संपर्क किया गया", value: 0, color: "bg-blue-500" },
    { label: "हल किया गया", value: 0, color: "bg-emerald-500" },
  ]);

  const columns: ColumnDef[] = [
    { key: "id", label: "आईडी", width: "80px" },
    { key: "fullName", label: "पूरा नाम", render: (item) => (
      <div>
        <span className="font-bold block text-slate-900">{String(item.fullName ?? "")}</span>
        <span className="text-slate-500 font-mono text-[10px]">{String(item.mobile ?? "")}</span>
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
    { key: "incidentDescription", label: "घटना विवरण", render: (item) => (
      <span className="truncate block max-w-xs" title={String(item.incidentDescription ?? "")}>{String(item.incidentDescription ?? "")}</span>
    )},
    { key: "helpType", label: "सहायता प्रकार", render: (item) => String(item.helpType ?? "") },
    { key: "status", label: "स्थिति", render: (item) => {
      const styles: Record<string, string> = {
        New: "bg-amber-50 text-amber-700 border border-amber-200",
        Contacted: "bg-blue-50 text-blue-700 border border-blue-200",
        Resolved: "bg-emerald-50 text-emerald-700 border border-emerald-200",
      };
      return <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold ${styles[item.status as string] || styles.New}`}>{STATUS_LABELS[item.status as string] ?? String(item.status ?? "")}</span>;
    }},
    { key: "createdAt", label: "दिनांक", render: (item) => {
      const d = new Date(String(item.createdAt ?? ""));
      return isNaN(d.getTime()) ? String(item.createdAt ?? "") : d.toLocaleDateString("en-IN");
    }},
  ];

  const filters: FilterDef[] = [
    { label: "स्थिति", key: "status", options: [
      { label: "सभी", value: "" },
      { label: "नया", value: "New" },
      { label: "संपर्क किया गया", value: "Contacted" },
      { label: "हल किया गया", value: "Resolved" },
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
          { label: "कुल", value: total, color: "bg-slate-800" },
          { label: "नया", value: newCount, color: "bg-amber-500" },
          { label: "संपर्क किया गया", value: contacted, color: "bg-blue-500" },
          { label: "हल किया गया", value: resolved, color: "bg-emerald-500" },
        ]);
      } catch (e) {
        console.error(e);
      }
    };
    fetchStats();
  }, []);

  return (
    <AdminPageShell
      title="संपर्क करें"
      description="DDJC वेबसाइट से संपर्क फॉर्म जमा करने का प्रबंधन करें"
      apiEndpoint="/api/admin/contacts"
      columns={columns}
      stats={stats}
      filters={filters}
      statusOptions={[
        { label: "नया", value: "New" },
        { label: "संपर्क किया गया", value: "Contacted" },
        { label: "हल किया गया", value: "Resolved" },
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
