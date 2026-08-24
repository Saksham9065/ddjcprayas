"use client";

import React, { useState, useEffect } from "react";
import AdminPageShell, { ColumnDef, StatDef, FilterDef } from "@/components/admin/AdminPageShell";
import { useApp } from "@/context/AppContext";

export default function AdminComplaintsPage() {
  const { language } = useApp();
  const [stats, setStats] = useState<StatDef[]>([
    { label: language === "en" ? "Total Cases" : "कुल मामले", value: 0, color: "bg-slate-800" },
    { label: language === "en" ? "Pending Review" : "समीक्षा लंबित", value: 0, color: "bg-amber-500" },
    { label: language === "en" ? "In Progress" : "प्रगति में", value: 0, color: "bg-[#000000]" },
    { label: language === "en" ? "Resolved" : "हल किया गया", value: 0, color: "bg-emerald-500" },
  ]);

  const STATUS_LABELS: Record<string, string> = {
    "Pending Review": language === "en" ? "Pending Review" : "समीक्षा लंबित",
    "In Progress": language === "en" ? "In Progress" : "प्रगति में",
    Resolved: language === "en" ? "Resolved" : "हल किया गया",
  };

  const CATEGORY_LABELS: Record<string, string> = {
    "Atrocity / Violence": language === "en" ? "Atrocity / Violence" : "अत्याचार / हिंसा",
    "Police Inaction": language === "en" ? "Police Inaction" : "पुलिस निष्क्रियता",
    "Land Dispute": language === "en" ? "Land Dispute" : "भूमि विवाद",
    "Social Boycott": language === "en" ? "Social Boycott" : "सामाजिक बहिष्कार",
    "Compensation Delay": language === "en" ? "Compensation Delay" : "मुआवजा विलंब",
    "Other": language === "en" ? "Other" : "अन्य",
  };

  const columns: ColumnDef[] = [
    { key: "id", label: language === "en" ? "ID" : "आईडी", width: "100px", render: (item) => (
      <span className="font-mono font-bold text-[#0A2540] block">{String(item.id)}</span>
    )},
    { key: "fullName", label: language === "en" ? "Complainant" : "शिकायतकर्ता", render: (item) => (
      <div>
        <span className="font-bold block text-slate-900">{String(item.fullName ?? "")}</span>
        <span className="text-slate-500 font-mono text-[10px]">{String(item.phone ?? "")}</span>
      </div>
    )},
    { key: "phone", label: language === "en" ? "Phone" : "फ़ोन", render: (item) => String(item.phone ?? "") },
    { key: "district", label: language === "en" ? "District" : "जिला", render: (item) => String(item.district ?? "") },
    { key: "tehsil", label: language === "en" ? "Tehsil" : "तहसील", render: (item) => String(item.tehsil ?? "") },
    { key: "category", label: language === "en" ? "Category" : "श्रेणी", render: (item) => (
      <span className="bg-slate-50 text-[#000000] px-2.5 py-1 rounded-md font-semibold text-[10px] border border-slate-100">
        {String(CATEGORY_LABELS[item.category as string] ?? item.category ?? (language === "en" ? "Not Available" : "उपलब्ध नहीं"))}
      </span>
    )},
    { key: "incidentDate", label: language === "en" ? "Incident Date" : "घटना तिथि", render: (item) => String(item.incidentDate ?? "") },
    { key: "description", label: language === "en" ? "Description" : "विवरण", render: (item) => (
      <span className="truncate block max-w-xs" title={String(item.description ?? "")}>{String(item.description ?? "")}</span>
    )},
    { key: "status", label: language === "en" ? "Status" : "स्थिति", render: (item) => {
      const styles: Record<string, string> = {
        "Pending Review": "bg-amber-50 text-amber-700 border border-amber-200",
        "In Progress": "bg-slate-50 text-[#000000] border border-slate-200",
        Resolved: "bg-emerald-50 text-emerald-700 border border-emerald-200",
      };
      return (
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold ${styles[item.status as string] || styles["Pending Review"]}`}>
          {STATUS_LABELS[item.status as string] ?? String(item.status ?? "")}
        </span>
      );
    }},
    { key: "createdAt", label: language === "en" ? "Date" : "दिनांक", render: (item) => {
      const d = new Date(String(item.createdAt ?? ""));
      return isNaN(d.getTime()) ? String(item.createdAt ?? "") : d.toLocaleDateString("en-IN");
    }},
  ];

  const filters: FilterDef[] = [
    { label: language === "en" ? "Status" : "स्थिति", key: "status", options: [
      { label: language === "en" ? "All" : "सभी", value: "" },
      { label: language === "en" ? "Pending Review" : "समीक्षा लंबित", value: "Pending Review" },
      { label: language === "en" ? "In Progress" : "प्रगति में", value: "In Progress" },
      { label: language === "en" ? "Resolved" : "हल किया गया", value: "Resolved" },
    ]},
    { label: language === "en" ? "Category" : "श्रेणी", key: "category", options: [
      { label: language === "en" ? "All Categories" : "सभी श्रेणियां", value: "" },
      { label: language === "en" ? "Atrocity / Violence" : "अत्याचार / हिंसा", value: "Atrocity / Violence" },
      { label: language === "en" ? "Police Inaction" : "पुलिस निष्क्रियता", value: "Police Inaction" },
      { label: language === "en" ? "Land Dispute" : "भूमि विवाद", value: "Land Dispute" },
      { label: language === "en" ? "Social Boycott" : "सामाजिक बहिष्कार", value: "Social Boycott" },
      { label: language === "en" ? "Compensation Delay" : "मुआवजा विलंब", value: "Compensation Delay" },
      { label: language === "en" ? "Other" : "अन्य", value: "Other" },
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
          { label: language === "en" ? "Total Cases" : "कुल मामले", value: total, color: "bg-slate-800" },
          { label: language === "en" ? "Pending Review" : "समीक्षा लंबित", value: pending, color: "bg-amber-500" },
          { label: language === "en" ? "In Progress" : "प्रगति में", value: inProgress, color: "bg-[#000000]" },
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
      title={language === "en" ? "Complaints" : "शिकायतें"}
      description={language === "en" ? "Manage and update citizen complaints in real time" : "नागरिक शिकायतों की स्थिति का वास्तविक समय में प्रबंधन और अद्यतन करें"}
      apiEndpoint="/api/admin/complaints"
      columns={columns}
      stats={stats}
      filters={filters}
      statusOptions={[
        { label: language === "en" ? "Pending Review" : "समीक्षा लंबित", value: "Pending Review" },
        { label: language === "en" ? "In Progress" : "प्रगति में", value: "In Progress" },
        { label: language === "en" ? "Resolved" : "हल किया गया", value: "Resolved" },
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
