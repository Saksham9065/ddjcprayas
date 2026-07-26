"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaCheckCircle, FaClock, FaUserPlus, FaUsers } from "react-icons/fa";

export default function AdminVolunteersPage() {
  const [volunteers] = useState([
    {
      id: "VOL-2026-001",
      name: "Anil Singh",
      email: "anil.singh@email.com",
      phone: "+91 99887 76655",
      role: "Legal Volunteer",
      status: "Active",
      joinedAt: "2026-06-20",
      casesAssigned: 5,
    },
    {
      id: "VOL-2026-002",
      name: "Priya Sharma",
      email: "priya.sharma@email.com",
      phone: "+91 98765 22222",
      role: "Field Coordinator",
      status: "Active",
      joinedAt: "2026-06-18",
      casesAssigned: 3,
    },
    {
      id: "VOL-2026-003",
      name: "Ravi Patel",
      email: "ravi.patel@email.com",
      phone: "+91 91234 33333",
      role: "Legal Volunteer",
      status: "Pending",
      joinedAt: "2026-06-15",
      casesAssigned: 0,
    },
    {
      id: "VOL-2026-004",
      name: "Sita Gupta",
      email: "sita.gupta@email.com",
      phone: "+91 99887 44444",
      role: "Outreach Volunteer",
      status: "Active",
      joinedAt: "2026-06-10",
      casesAssigned: 8,
    },
  ]);

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div>
            <h1 className="text-2xl font-black text-[#0A2540] tracking-tight">Volunteers</h1>
            <p className="text-xs text-slate-500 mt-1">Manage volunteers and their assignments</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex items-center gap-2 bg-[#2563EB] hover:bg-blue-600 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-all shadow-md"
            >
              <FaUserPlus size={12} /> Add Volunteer
            </button>
            <Link href="/admin/dashboard" className="flex items-center gap-2 text-[#2563EB] font-bold text-sm hover:underline">
              <FaArrowLeft size={12} /> Back to Dashboard
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#2563EB] flex items-center justify-center">
                <FaUsers size={18} />
              </div>
              <div>
                <p className="text-2xl font-black text-[#0A2540]">{volunteers.length}</p>
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Total Volunteers</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <FaCheckCircle size={18} />
              </div>
              <div>
                <p className="text-2xl font-black text-emerald-600">{volunteers.filter((v) => v.status === "Active").length}</p>
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Active</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <FaClock size={18} />
              </div>
              <div>
                <p className="text-2xl font-black text-amber-600">{volunteers.filter((v) => v.status === "Pending").length}</p>
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Pending</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 text-slate-500 uppercase tracking-wider border-b border-slate-200">
                  <th className="py-4 px-6 font-bold">ID</th>
                  <th className="py-4 px-6 font-bold">Volunteer</th>
                  <th className="py-4 px-6 font-bold">Role</th>
                  <th className="py-4 px-6 font-bold">Cases</th>
                  <th className="py-4 px-6 font-bold">Status</th>
                  <th className="py-4 px-6 font-bold">Joined</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {volunteers.map((volunteer) => (
                  <tr key={volunteer.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-4 px-6 font-mono font-bold text-[#0A2540]">{volunteer.id}</td>
                    <td className="py-4 px-6">
                      <span className="font-bold block text-slate-900">{volunteer.name}</span>
                      <span className="text-slate-500 font-mono text-[10px]">{volunteer.email}</span>
                    </td>
                    <td className="py-4 px-6 text-slate-600">{volunteer.role}</td>
                    <td className="py-4 px-6">
                      <span className="font-bold text-[#2563EB]">{volunteer.casesAssigned}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold ${
                          volunteer.status === "Active"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-amber-50 text-amber-700 border border-amber-200"
                        }`}
                      >
                        {volunteer.status === "Active" ? <FaCheckCircle size={10} /> : <FaClock size={10} />}
                        {volunteer.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-slate-600">{volunteer.joinedAt}</td>
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