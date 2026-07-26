"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { checkAdminAuth, setAdminAuth } from "@/lib/auth";
import { calculateDashboardStats } from "@/utils/analytics";
import { formatDate } from "@/utils/formatters";
import { FaShieldAlt, FaSignOutAlt, FaExclamationCircle, FaSpinner, FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";

export default function AdminDashboardPage() {
  const router = useRouter();
  const { complaints, updateComplaintStatus, isAdminLoggedIn, setIsAdminLoggedIn } = useApp();
  
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const authStatus = checkAdminAuth();
    if (!authStatus && !isAdminLoggedIn) {
      router.push("/admin/login");
    } else {
      setIsAdminLoggedIn(true);
      setLoading(false);
    }
  }, [isAdminLoggedIn, router, setIsAdminLoggedIn]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="flex items-center gap-3 text-slate-600 font-medium">
          <FaSpinner className="animate-spin text-[#2563EB]" size={24} />
          <span>Verifying Admin Session...</span>
        </div>
      </div>
    );
  }

  const stats = calculateDashboardStats(complaints);

  const filteredComplaints = selectedCategory === "All"
    ? complaints
    : complaints.filter((c) => c.status === selectedCategory);

  const handleLogout = () => {
    setAdminAuth(false);
    setIsAdminLoggedIn(false);
    router.push("/admin/login");
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Admin Top Navigation Bar */}
      <header className="bg-[#0A2540] text-white py-6 border-b border-slate-800">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2563EB] text-white flex items-center justify-center text-lg shadow-md">
              <FaShieldAlt />
            </div>
            <div>
              <h1 className="font-black text-base tracking-tight">DDJC Admin Portal</h1>
              <p className="text-xs text-blue-300">Grievance & Case Management System</p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-xl text-xs font-bold transition-colors border border-slate-700"
          >
            <FaSignOutAlt /> Sign Out
          </button>
        </div>
      </header>

      <div className="container mx-auto px-6 max-w-7xl pt-10">
        
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Total Cases</p>
            <p className="text-3xl font-black text-[#0A2540]">{stats.totalComplaints}</p>
            <p className="text-xs text-slate-400">Logged across Bundelkhand</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-600">Pending Review</p>
            <p className="text-3xl font-black text-amber-600">{stats.pendingReview}</p>
            <p className="text-xs text-slate-400">Requiring initial assessment</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">In Progress</p>
            <p className="text-3xl font-black text-[#2563EB]">{stats.inProgress}</p>
            <p className="text-xs text-slate-400">Active legal representation</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">Resolved</p>
            <p className="text-3xl font-black text-emerald-600">{stats.resolved}</p>
            <p className="text-xs text-slate-400">Successfully concluded</p>
          </div>

        </div>

        {/* Complaints Section */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          
          <div className="p-6 md:p-8 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-xl font-bold text-[#0A2540]">Grievance Records</h2>
              <p className="text-xs text-slate-500">Manage and update status of citizen complaints in real time.</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl text-xs font-semibold overflow-x-auto max-w-full">
              {["All", "Pending Review", "In Progress", "Resolved"].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setSelectedCategory(tab)}
                  className={`px-3 py-2 rounded-lg transition-all whitespace-nowrap ${
                    selectedCategory === tab
                      ? "bg-white text-[#0A2540] shadow-sm font-bold"
                      : "text-slate-600 hover:text-[#0A2540]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 text-slate-500 uppercase tracking-wider border-b border-slate-200">
                  <th className="py-4 px-6 font-bold">ID & Date</th>
                  <th className="py-4 px-6 font-bold">Complainant</th>
                  <th className="py-4 px-6 font-bold">Location</th>
                  <th className="py-4 px-6 font-bold">Category</th>
                  <th className="py-4 px-6 font-bold">Description</th>
                  <th className="py-4 px-6 font-bold">Status</th>
                  <th className="py-4 px-6 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {filteredComplaints.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-slate-400">
                      No complaints found matching this filter.
                    </td>
                  </tr>
                ) : (
                  filteredComplaints.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-4 px-6">
                        <span className="font-mono font-bold text-[#0A2540] block">{item.id}</span>
                        <span className="text-slate-400 text-[10px]">{formatDate(item.createdAt)}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="font-bold block text-slate-900">{item.fullName}</span>
                        <span className="text-slate-500 font-mono text-[10px]">{item.phone}</span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-1 text-slate-600">
                          <FaMapMarkerAlt className="text-[#2563EB] shrink-0" size={10} />
                          <span>{item.district} ({item.tehsil})</span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="bg-blue-50 text-[#2563EB] px-2.5 py-1 rounded-md font-semibold text-[10px] border border-blue-100">
                          {item.category}
                        </span>
                      </td>
                      <td className="py-4 px-6 max-w-xs truncate text-slate-600" title={item.description}>
                        {item.description}
                      </td>
                      <td className="py-4 px-6">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold ${
                            item.status === "Pending Review"
                              ? "bg-amber-50 text-amber-700 border border-amber-200"
                              : item.status === "In Progress"
                              ? "bg-blue-50 text-[#2563EB] border border-blue-200"
                              : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          }`}
                        >
                          {item.status === "Pending Review" && <FaExclamationCircle size={10} />}
                          {item.status === "In Progress" && <FaSpinner className="animate-spin" size={10} />}
                          {item.status === "Resolved" && <FaCheckCircle size={10} />}
                          {item.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <select
                          value={item.status}
                          onChange={(e) => updateComplaintStatus(item.id, e.target.value as any)}
                          className="px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-white font-medium text-slate-700 focus:outline-none focus:border-[#2563EB]"
                        >
                          <option value="Pending Review">Pending Review</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Resolved">Resolved</option>
                        </select>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

        </div>

      </div>

    </div>
  );
}