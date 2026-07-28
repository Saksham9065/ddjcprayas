"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { FaArrowLeft, FaClock } from "react-icons/fa";

export default function AdminComplaintsPage() {
  const { complaints, updateComplaintStatus } = useApp();

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div>
            <Link href="/admin/dashboard" className="text-xs font-bold text-[#000000] flex items-center gap-1 mb-1 hover:underline">
              <FaArrowLeft size={10} /> Back to Dashboard
            </Link>
            <h1 className="text-2xl font-black text-[#0A2540]">Manage Grievances & Complaints</h1>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase font-bold text-slate-500">
                  <th className="p-6">ID / Date</th>
                  <th className="p-6">Complainant</th>
                  <th className="p-6">Category</th>
                  <th className="p-6">District</th>
                  <th className="p-6">Status</th>
                  <th className="p-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {complaints.map((c) => (
                  <tr key={c.id} className="hover:bg-slate-50/50">
                    <td className="p-6 font-medium text-[#0A2540]">
                      <span className="block font-bold">{c.id}</span>
                      <span className="text-xs text-slate-400">{c.createdAt || c.incidentDate}</span>
                    </td>
                    <td className="p-6 font-semibold text-slate-700">{c.fullName}</td>
                    <td className="p-6 text-slate-600">{c.category}</td>
                    <td className="p-6 text-slate-600">{c.district}</td>
                    <td className="p-6">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                        c.status === "Pending Review" 
                          ? "bg-amber-50 text-amber-700 border border-amber-200" 
                          : "bg-slate-50 text-slate-700 border border-slate-200"
                      }`}>
                        <FaClock size={10} /> {c.status}
                      </span>
                    </td>
                    <td className="p-6 text-right">
                      <button 
                        onClick={() => alert(`Reviewing complaint ${c.id}`)}
                        className="bg-slate-100 hover:bg-slate-200 text-[#0A2540] font-bold px-4 py-2 rounded-xl text-xs transition-all"
                      >
                        Review
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}