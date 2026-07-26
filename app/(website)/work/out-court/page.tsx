"use client";

import React from "react";
import Link from "next/link";
import { FaHandsHelping, FaCheckCircle, FaArrowRight } from "react-icons/fa";

export default function OutCourtPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-blue-50 text-[#2563EB] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-200 inline-block mb-4">
            Community & Administrative Action
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#0A2540] tracking-tight mb-6">
            Out-of-Court Action & Advocacy
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Beyond courtroom trials, DDJC intervenes at police stations, administration offices, and village communities to resolve grievances swiftly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-4">
            <div className="w-12 h-12 bg-blue-100 text-[#2563EB] rounded-2xl flex items-center justify-center text-xl">
              <FaHandsHelping />
            </div>
            <h3 className="text-xl font-bold text-[#0A2540]">Police Station Interventions</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Assisting victims in filing First Information Reports (FIRs) without harassment, ensuring proper police documentation, and preventing unlawful pressure.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-4">
            <div className="w-12 h-12 bg-blue-100 text-[#2563EB] rounded-2xl flex items-center justify-center text-xl">
              <FaCheckCircle />
            </div>
            <h3 className="text-xl font-bold text-[#0A2540]">Fact-Finding Delegations</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Dispatching independent fact-finding teams immediately after major incidents to collect evidence, meet affected families, and publish factual public reports.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg">
            Contact Field Coordinators <FaArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}