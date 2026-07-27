"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { FaArrowLeft, FaCheckCircle, FaClock, FaUserPlus, FaUsers, FaEnvelope, FaPhoneAlt, FaGraduationCap, FaFilter } from "react-icons/fa";

export default function AdminVolunteersPage() {
  const { joinApplications, updateApplicationStatus } = useApp();
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? joinApplications
      : joinApplications.filter((a) => a.status === filter);

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      Pending: "bg-amber-50 text-amber-700 border border-amber-200",
      Reviewed: "bg-blue-50 text-blue-700 border border-blue-200",
      Accepted: "bg-emerald-50 text-emerald-700 border border-emerald-200",
      Rejected: "bg-red-50 text-red-700 border border-red-200",
    };
    return styles[status] || styles.Pending;
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div>
            <h1 className="text-2xl font-black text-[#0A2540] tracking-tight">Join Applications</h1>
            <p className="text-xs text-slate-500 mt-1">Volunteer & Internship applications from DDJC website</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
              <FaFilter size={10} />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-transparent border-none text-[#0A2540] font-bold focus:outline-none cursor-pointer"
              >
                <option value="All">All</option>
                <option value="Pending">Pending</option>
                <option value="Reviewed">Reviewed</option>
                <option value="Accepted">Accepted</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
            <Link href="/admin/dashboard" className="flex items-center gap-2 text-[#000000] font-bold text-sm hover:underline">
              <FaArrowLeft size={12} /> Dashboard
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#000000] flex items-center justify-center">
                <FaUserPlus size={18} />
              </div>
              <div>
                <p className="text-2xl font-black text-[#0A2540]">{joinApplications.length}</p>
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Total Applications</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <FaClock size={18} />
              </div>
              <div>
                <p className="text-2xl font-black text-amber-600">{joinApplications.filter((a) => a.status === "Pending").length}</p>
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Pending</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <FaCheckCircle size={18} />
              </div>
              <div>
                <p className="text-2xl font-black text-blue-600">{joinApplications.filter((a) => a.status === "Accepted").length}</p>
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Accepted</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                <FaUsers size={18} />
              </div>
              <div>
                <p className="text-2xl font-black text-red-600">{joinApplications.filter((a) => a.status === "Rejected").length}</p>
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Rejected</p>
              </div>
            </div>
          </div>
        </div>

        {joinApplications.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-12 text-center">
            <FaUserPlus size={48} className="text-slate-200 mx-auto mb-4" />
            <p className="text-slate-400 text-sm">No applications received yet.</p>
            <p className="text-slate-300 text-xs mt-1">Applications will appear here once submitted through the website.</p>
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 uppercase tracking-wider border-b border-slate-200">
                    <th className="py-4 px-6 font-bold">ID</th>
                    <th className="py-4 px-6 font-bold">Applicant</th>
                    <th className="py-4 px-6 font-bold">Contact</th>
                    <th className="py-4 px-6 font-bold">Join Type</th>
                    <th className="py-4 px-6 font-bold">Work Mode</th>
                    <th className="py-4 px-6 font-bold">Occupation</th>
                    <th className="py-4 px-6 font-bold">Status</th>
                    <th className="py-4 px-6 font-bold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {filtered.map((app) => (
                    <tr key={app.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-4 px-6 font-mono font-bold text-[#0A2540]">{app.id}</td>
                      <td className="py-4 px-6">
                        <span className="font-bold block text-slate-900">{app.fullName}</span>
                        <span className="text-slate-500 font-mono text-[10px]">{app.education}</span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex flex-col gap-0.5">
                          <span className="flex items-center gap-1 text-slate-600"><FaPhoneAlt size={9} /> {app.mobile}</span>
                          {app.email && <span className="flex items-center gap-1 text-slate-500"><FaEnvelope size={9} /> {app.email}</span>}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="bg-slate-50 text-[#000000] px-2.5 py-1 rounded-md font-semibold text-[10px] border border-slate-100">
                          {app.joinType}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-slate-600">{app.workMode}</td>
                      <td className="py-4 px-6 text-slate-600">{app.occupation}</td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold border ${getStatusBadge(app.status)}`}>
                          {app.status === "Pending" && <FaClock size={10} />}
                          {app.status === "Reviewed" && <FaFilter size={10} />}
                          {app.status === "Accepted" && <FaCheckCircle size={10} />}
                          {app.status === "Rejected" && <FaClock size={10} />}
                          {app.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <select
                          value={app.status}
                          onChange={(e) => updateApplicationStatus(app.id, e.target.value as any)}
                          className="px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-white font-medium text-slate-700 focus:outline-none focus:border-[#000000]"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Reviewed">Reviewed</option>
                          <option value="Accepted">Accepted</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}