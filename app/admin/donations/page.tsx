"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaCheckCircle, FaClock, FaExclamationCircle, FaRupeeSign, FaImage } from "react-icons/fa";

export default function AdminDonationsPage() {
  const [donations] = useState([
    {
      id: "DON-2026-001",
      donorName: "Amit Sharma",
      email: "amit.sharma@email.com",
      phone: "+91 98765 43210",
      amount: 5000,
      transactionId: "TXN-9876543210",
      date: "2026-06-24",
      status: "Completed",
      screenshot: null,
    },
    {
      id: "DON-2026-002",
      donorName: "Priya Singh",
      email: "priya.singh@email.com",
      phone: "+91 91234 56789",
      amount: 2500,
      transactionId: "TXN-9123456789",
      date: "2026-06-22",
      status: "Completed",
      screenshot: null,
    },
    {
      id: "DON-2026-003",
      donorName: "Mohammed Ali",
      email: "m.ali@email.com",
      phone: "+91 99887 76655",
      amount: 10000,
      transactionId: "TXN-9988776655",
      date: "2026-06-20",
      status: "Pending",
      screenshot: null,
    },
  ]);

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div>
            <h1 className="text-2xl font-black text-[#0A2540] tracking-tight">Donations</h1>
            <p className="text-xs text-slate-500 mt-1">Manage and track all donations received</p>
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
                  <th className="py-4 px-6 font-bold">Donor</th>
                  <th className="py-4 px-6 font-bold">Amount</th>
                  <th className="py-4 px-6 font-bold">Transaction ID</th>
                  <th className="py-4 px-6 font-bold">Proof</th>
                  <th className="py-4 px-6 font-bold">Date</th>
                  <th className="py-4 px-6 font-bold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {donations.map((donation) => (
                  <tr key={donation.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-4 px-6 font-mono font-bold text-[#0A2540]">{donation.id}</td>
                    <td className="py-4 px-6">
                      <span className="font-bold block text-slate-900">{donation.donorName}</span>
                      <span className="text-slate-500 font-mono text-[10px]">{donation.email}</span>
                      <span className="text-slate-400 font-mono text-[10px] block">{donation.phone}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="flex items-center gap-1 text-emerald-600 font-bold">
                        <FaRupeeSign size={12} />
                        {donation.amount.toLocaleString("en-IN")}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-mono text-slate-500">{donation.transactionId}</td>
                    <td className="py-4 px-6">
                      {donation.screenshot ? (
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-slate-200">
                          <Image
                            src={donation.screenshot}
                            alt="Payment proof"
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <span className="text-slate-400 text-xs">—</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-slate-600">{donation.date}</td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold ${
                          donation.status === "Completed"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-amber-50 text-amber-700 border border-amber-200"
                        }`}
                      >
                        {donation.status === "Completed" ? <FaCheckCircle size={10} /> : <FaClock size={10} />}
                        {donation.status}
                      </span>
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