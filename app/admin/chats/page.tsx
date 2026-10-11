"use client";

import React, { useState, useEffect } from "react";
import AdminPageShell, { ColumnDef, StatDef, FilterDef } from "@/components/admin/AdminPageShell";
import { useApp } from "@/context/AppContext";

export default function AdminChatsPage() {
  const { language } = useApp();
  const [stats, setStats] = useState<StatDef[]>([
    { label: language === "en" ? "Total" : "कुल", value: 0, color: "bg-slate-800" },
    { label: language === "en" ? "Unread" : "अपठित", value: 0, color: "bg-red-500" },
    { label: language === "en" ? "Active" : "सक्रिय", value: 0, color: "bg-emerald-500" },
    { label: language === "en" ? "Resolved" : "हल", value: 0, color: "bg-blue-500" },
  ]);

  const STATUS_LABELS: Record<string, string> = {
    Active: language === "en" ? "Active" : "सक्रिय",
    Resolved: language === "en" ? "Resolved" : "हल",
    Archived: language === "en" ? "Archived" : "संग्रहीत",
  };

  const columns: ColumnDef[] = [
    {
      key: "id",
      label: language === "en" ? "ID" : "आईडी",
      width: "100px",
      render: (item) => (
        <span className="font-mono font-bold text-[#0A2540] block">{String(item.id).slice(-6)}</span>
      ),
    },
    {
      key: "sessionId",
      label: language === "en" ? "Session" : "सत्र",
      render: (item) => (
        <span className="font-mono text-[10px] text-slate-600">{String(item.sessionId).slice(-12)}</span>
      ),
    },
    {
      key: "firstMessage",
      label: language === "en" ? "First Message" : "पहला संदेश",
      render: (item) => (
        <div className="max-w-xs truncate text-slate-700" title={String(item.firstMessage)}>
          {String(item.firstMessage).substring(0, 60)}
          {String(item.firstMessage).length > 60 ? "..." : ""}
        </div>
      ),
    },
    {
      key: "lastMessage",
      label: language === "en" ? "Last Message" : "अंतिम संदेश",
      render: (item) => (
        <div className="max-w-xs truncate text-slate-700" title={String(item.lastMessage)}>
          {String(item.lastMessage).substring(0, 60)}
          {String(item.lastMessage).length > 60 ? "..." : ""}
        </div>
      ),
    },
    {
      key: "messageCount",
      label: language === "en" ? "Count" : "संख्या",
      render: (item) => <span className="font-bold">{String(item.messageCount)}</span>,
    },
    {
      key: "language",
      label: language === "en" ? "Lang" : "भाषा",
      render: (item) => String(item.language || "-"),
    },
    {
      key: "isRead",
      label: language === "en" ? "Read" : "पठित",
      render: (item) =>
        item.isRead ? (
          <span className="inline-flex px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            {language === "en" ? "Yes" : "हां"}
          </span>
        ) : (
          <span className="inline-flex px-2 py-0.5 rounded-full text-[9px] font-bold bg-red-50 text-red-700 border border-red-200">
            {language === "en" ? "No" : "नहीं"}
          </span>
        ),
    },
    {
      key: "status",
      label: language === "en" ? "Status" : "स्थिति",
      render: (item) => {
        const styles: Record<string, string> = {
          Active: "bg-emerald-50 text-emerald-700 border border-emerald-200",
          Resolved: "bg-blue-50 text-blue-700 border border-blue-200",
          Archived: "bg-slate-50 text-slate-700 border border-slate-200",
        };
        return (
          <span
            className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold ${
              styles[item.status as string] || styles.Active
            }`}
          >
            {STATUS_LABELS[item.status as string] ?? String(item.status ?? "")}
          </span>
        );
      },
    },
    {
      key: "createdAt",
      label: language === "en" ? "Date" : "दिनांक",
      render: (item) => {
        const d = new Date(String(item.createdAt ?? ""));
        return isNaN(d.getTime()) ? String(item.createdAt ?? "") : d.toLocaleString("en-IN");
      },
    },
  ];

  const filters: FilterDef[] = [
    {
      label: language === "en" ? "Status" : "स्थिति",
      key: "status",
      options: [
        { label: language === "en" ? "All" : "सभी", value: "" },
        { label: language === "en" ? "Active" : "सक्रिय", value: "Active" },
        { label: language === "en" ? "Resolved" : "हल", value: "Resolved" },
        { label: language === "en" ? "Archived" : "संग्रहीत", value: "Archived" },
      ],
    },
    {
      label: language === "en" ? "Read Status" : "पठन स्थिति",
      key: "isRead",
      options: [
        { label: language === "en" ? "All" : "सभी", value: "" },
        { label: language === "en" ? "Unread" : "अपठित", value: "false" },
        { label: language === "en" ? "Read" : "पठित", value: "true" },
      ],
    },
  ];

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/admin/chats/stats");
        const json = await res.json();
        setStats([
          { label: language === "en" ? "Total" : "कुल", value: json.total || 0, color: "bg-slate-800" },
          { label: language === "en" ? "Unread" : "अपठित", value: json.unread || 0, color: "bg-red-500" },
          { label: language === "en" ? "Active" : "सक्रिय", value: json.active || 0, color: "bg-emerald-500" },
          { label: language === "en" ? "Resolved" : "हल", value: json.resolved || 0, color: "bg-blue-500" },
        ]);
      } catch (e) {
        console.error(e);
      }
    };
    fetchStats();
  }, [language]);

  return (
    <AdminPageShell
      title={language === "en" ? "Chat Conversations" : "चैट वार्तालाप"}
      description={
        language === "en"
          ? "View and manage all chatbot conversations from website visitors"
          : "वेबसाइट विजिटर्स के सभी चैट वार्तालाप देखें और प्रबंधित करें"
      }
      apiEndpoint="/api/admin/chats"
      columns={columns}
      stats={stats}
      filters={filters}
      statusOptions={[
        { label: language === "en" ? "Active" : "सक्रिय", value: "Active" },
        { label: language === "en" ? "Resolved" : "हल", value: "Resolved" },
        { label: language === "en" ? "Archived" : "संग्रहीत", value: "Archived" },
      ]}
      onStatusUpdate={async (id, status) => {
        await fetch("/api/admin/chats", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id, status }),
        });
      }}
      detailEndpoint={(id) => `/api/admin/chats/${id}`}
      detailFields={[
        { key: "id", label: language === "en" ? "ID" : "आईडी" },
        { key: "sessionId", label: language === "en" ? "Session ID" : "सत्र आईडी" },
        { key: "messageCount", label: language === "en" ? "Message Count" : "संदेश संख्या" },
        { key: "language", label: language === "en" ? "Language" : "भाषा" },
        { key: "status", label: language === "en" ? "Status" : "स्थिति" },
        { key: "isRead", label: language === "en" ? "Is Read" : "पठित है" },
        { key: "startedAt", label: language === "en" ? "Started At" : "शुरू हुआ" },
        { key: "updatedAt", label: language === "en" ? "Last Updated" : "अंतिम अपडेट" },
      ]}
      renderDetailExtra={(item) => {
        const messages = (item.messages as Array<{ role: string; content: string; timestamp: string }>) || [];
        return (
          <div className="mt-6">
            <h3 className="text-sm font-bold text-slate-900 mb-4">
              {language === "en" ? "Conversation History" : "वार्तालाप इतिहास"}
            </h3>
            <div className="space-y-3 max-h-96 overflow-y-auto bg-slate-50 rounded-xl p-4">
              {messages.length === 0 ? (
                <p className="text-sm text-slate-500">{language === "en" ? "No messages" : "कोई संदेश नहीं"}</p>
              ) : (
                messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                        msg.role === "user"
                          ? "bg-[#0A2540] text-white rounded-br-sm"
                          : "bg-white border border-slate-200 text-slate-900 rounded-bl-sm"
                      }`}
                    >
                      <div className="whitespace-pre-wrap break-words">{msg.content}</div>
                      <div
                        className={`text-[9px] mt-1 ${
                          msg.role === "user" ? "text-blue-100" : "text-slate-400"
                        }`}
                      >
                        {msg.role === "user" ? (language === "en" ? "User" : "उपयोगकर्ता") : "DDJC Bot"}
                        {msg.timestamp && ` • ${new Date(msg.timestamp).toLocaleString("en-IN")}`}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        );
      }}
    />
  );
}
