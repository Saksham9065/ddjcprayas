"use client";

import React, { useState, useEffect } from "react";
import AdminPageShell, { ColumnDef, StatDef, FilterDef } from "@/components/admin/AdminPageShell";
import { useApp } from "@/context/AppContext";

export default function AdminDonationsPage() {
  const { language } = useApp();
  const [stats, setStats] = useState<StatDef[]>([
    { label: language === "en" ? "Total Donations" : "कुल दान", value: 0, color: "bg-slate-800" },
    { label: language === "en" ? "Pending Verification" : "सत्यापन लंबित", value: 0, color: "bg-amber-500" },
    { label: language === "en" ? "Verified" : "सत्यापित", value: 0, color: "bg-emerald-500" },
    { label: language === "en" ? "Rejected" : "अस्वीकृत", value: 0, color: "bg-red-500" },
  ]);

  const STATUS_LABELS: Record<string, string> = {
    "Pending Verification": language === "en" ? "Pending Verification" : "सत्यापन लंबित",
    Verified: language === "en" ? "Verified" : "सत्यापित",
    Rejected: language === "en" ? "Rejected" : "अस्वीकृत",
  };

  const columns: ColumnDef[] = [
    { key: "id", label: language === "en" ? "ID" : "आईडी", width: "100px", render: (item) => (
      <span className="font-mono font-bold text-[#0A2540] block">{String(item.id)}</span>
    )},
    { key: "donorName", label: language === "en" ? "Donor Name" : "दाता का नाम", render: (item) => (
      <span className="font-bold text-slate-900">{String(item.donorName ?? "")}</span>
    )},
    { key: "phone", label: language === "en" ? "Phone" : "फ़ोन", render: (item) => String(item.phone ?? "") },
    { key: "email", label: language === "en" ? "Email" : "ईमेल", render: (item) => String(item.email ?? "") },
    { key: "status", label: language === "en" ? "Status" : "स्थिति", render: (item) => {
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
    { key: "createdAt", label: language === "en" ? "Date" : "दिनांक", render: (item) => {
      const d = new Date(String(item.createdAt ?? ""));
      return isNaN(d.getTime()) ? String(item.createdAt ?? "") : d.toLocaleDateString("en-IN");
    }},
  ];

  const filters: FilterDef[] = [
    { label: language === "en" ? "Status" : "स्थिति", key: "status", options: [
      { label: language === "en" ? "All" : "सभी", value: "" },
      { label: language === "en" ? "Pending Verification" : "सत्यापन लंबित", value: "Pending Verification" },
      { label: language === "en" ? "Verified" : "सत्यापित", value: "Verified" },
      { label: language === "en" ? "Rejected" : "अस्वीकृत", value: "Rejected" },
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
          { label: language === "en" ? "Total Donations" : "कुल दान", value: total, color: "bg-slate-800" },
          { label: language === "en" ? "Pending Verification" : "सत्यापन लंबित", value: pending, color: "bg-amber-500" },
          { label: language === "en" ? "Verified" : "सत्यापित", value: verified, color: "bg-emerald-500" },
          { label: language === "en" ? "Rejected" : "अस्वीकृत", value: rejected, color: "bg-red-500" },
        ]);
      } catch (e) {
        console.error(e);
      }
    };
    fetchStats();
  }, [language]);

  return (
    <AdminPageShell
      title={language === "en" ? "Donations" : "दान"}
      description={language === "en" ? "Manage donations and payment proof verification" : "दान जमा करने और भुगतान प्रमाण सत्यापन का प्रबंधन करें"}
      apiEndpoint="/api/admin/donations"
      columns={columns}
      stats={stats}
      filters={filters}
      statusOptions={[
        { label: language === "en" ? "Pending Verification" : "सत्यापन लंबित", value: "Pending Verification" },
        { label: language === "en" ? "Verified" : "सत्यापित", value: "Verified" },
        { label: language === "en" ? "Rejected" : "अस्वीकृत", value: "Rejected" },
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
