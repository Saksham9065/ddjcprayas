"use client";

import React from "react";
import Link from "next/link";
import { FaBalanceScale, FaCheckCircle, FaArrowRight } from "react-icons/fa";

export default function LegalAidPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-blue-50 text-[#2563EB] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-200 inline-block mb-4">
            Access to Justice
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#0A2540] tracking-tight mb-6">
            Free Legal Aid & Support
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            DDJC ensures that marginalized victims and lower-income families are never barred from justice due to financial constraints.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <h3 className="text-2xl font-bold text-[#0A2540] mb-4">What We Cover</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2"><FaCheckCircle className="text-[#2563EB] mt-1 shrink-0" /> SC/ST Atrocity Act cases and FIR registration assistance.</li>
              <li className="flex items-start gap-2"><FaCheckCircle className="text-[#2563EB] mt-1 shrink-0" /> Land, property, and civil rights disputes.</li>
              <li className="flex items-start gap-2"><FaCheckCircle className="text-[#2563EB] mt-1 shrink-0" /> Bail applications and trial monitoring in lower and high courts.</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <h3 className="text-2xl font-bold text-[#0A2540] mb-4">Who is Eligible?</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2"><FaCheckCircle className="text-[#2563EB] mt-1 shrink-0" /> Victims of social discrimination and caste-based violence.</li>
              <li className="flex items-start gap-2"><FaCheckCircle className="text-[#2563EB] mt-1 shrink-0" /> Economically weaker individuals lacking counsel funds.</li>
              <li className="flex items-start gap-2"><FaCheckCircle className="text-[#2563EB] mt-1 shrink-0" /> Women and children facing human rights violations.</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link href="/complaint" className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg">
            File a Case / Complaint <FaArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}