"use client";

import React from "react";
import Link from "next/link";
import { FaGavel, FaCheckCircle, FaArrowRight } from "react-icons/fa";

export default function InCourtPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-blue-50 text-[#2563EB] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-200 inline-block mb-4">
            Judicial Intervention
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#0A2540] tracking-tight mb-6">
            In-Court Representation
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Our panel advocates fight rigorously inside trial courts, sessions courts, and high courts to secure justice and accountability for victims.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-4">
            <div className="w-12 h-12 bg-blue-100 text-[#2563EB] rounded-2xl flex items-center justify-center text-xl">
              <FaGavel />
            </div>
            <h3 className="text-xl font-bold text-[#0A2540]">Trial & Bail Proceedings</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We provide active defense and prosecution representation, ensuring that police chargesheets, witness testimonies, and evidence submissions are accurately and powerfully presented.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-4">
            <div className="w-12 h-12 bg-blue-100 text-[#2563EB] rounded-2xl flex items-center justify-center text-xl">
              <FaCheckCircle />
            </div>
            <h3 className="text-xl font-bold text-[#0A2540]">Atrocity Special Courts</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Specialized tracking and monitoring of cases filed under the SC/ST Prevention of Atrocities Act to prevent delays and secure statutory compensation.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/complaint" className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg">
            Request Court Support <FaArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}