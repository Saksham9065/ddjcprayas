"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaCheckCircle, FaExclamationCircle, FaUser } from "react-icons/fa";

export default function AdminUsersPage() {
  const [users] = useState([
    {
      id: "USR-2026-001",
      name: "Ramesh Kumar",
      email: "ramesh.kumar@email.com",
      phone: "+91 98765 43210",
      role: "Complainant",
      status: "Active",
      joinedAt: "2026-06-24",
    },
    {
      id: "USR-2026-002",
      name: "Sunita Devi",
      email: "sunita.devi@email.com",
      phone: "+91 91234 56789",
      role: "Complainant",
      status: "Active",
      joinedAt: "2026-06-22",
    },
    {
      id: "USR-2026-003",
      name: "Anil Singh",
      email: "anil.singh@email.com",
      phone: "+91 99887 76655",
      role: "Volunteer",
      status: "Active",
      joinedAt: "2026-06-20",
    },
    {
      id: "USR-2026-004",
      name: "Geeta Devi",
      email: "geeta.devi@email.com",
      phone: "+91 98765 11111",
      role: "Complainant",
      status: "Inactive",
      joinedAt: "2026-06-18",
    },
  ]);

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div>
            <h1 className="text-2xl font-black text-[#0A2540] tracking-tight">Users</h1>
            <p className="text-xs text-slate-500 mt-1">Manage registered users and their roles</p>
          </div>
          <Link href="/admin/dashboard" className="flex items-center gap-2 text-[#000000] font-bold text-sm hover:underline">
            <FaArrowLeft size={12} /> Back to Dashboard
          </Link>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 text-slate-500 uppercase tracking-wider border-b border-slate-200">
                  <th className="py-4 px-6 font-bold">ID</th>
                  <th className="py-4 px-6 font-bold">User</th>
                  <th className="py-4 px-6 font-bold">Role</th>
                  <th className="py-4 px-6 font-bold">Phone</th>
                  <th className="py-4 px-6 font-bold">Status</th>
                  <th className="py-4 px-6 font-bold">Joined</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-4 px-6 font-mono font-bold text-[#0A2540]">{user.id}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-slate-100 text-[#000000] flex items-center justify-center">
                          <FaUser size={12} />
                        </div>
                        <span className="font-bold block text-slate-900">{user.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-600">{user.role}</td>
                    <td className="py-4 px-6 font-mono text-slate-500">{user.phone}</td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold ${
                          user.status === "Active"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-slate-100 text-slate-500 border border-slate-200"
                        }`}
                      >
                        {user.status === "Active" ? <FaCheckCircle size={10} /> : <FaExclamationCircle size={10} />}
                        {user.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-slate-600">{user.joinedAt}</td>
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