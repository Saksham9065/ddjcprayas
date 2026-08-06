"use client";

import React from "react";
import Link from "next/link";
import { FaShieldAlt, FaArrowRight } from "react-icons/fa";

export default function Services() {
  return (
    <section className="py-10 md:py-20 bg-slate-50">
      <div className="container mx-auto px-6 max-w-6xl space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="bg-slate-50 text-[#000000] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block">
            What We Do
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-[#0A2540]">Defending Rights at the Grassroots</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-14 h-14 bg-slate-50 text-[#000000] rounded-2xl flex items-center justify-center text-2xl border border-slate-100">
              <FaShieldAlt />
            </div>
            <h3 className="text-xl font-bold text-[#0A2540]">SC/ST Atrocity Support</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Immediate legal assistance, police accountability monitoring, and FIR registration support under the Act.
            </p>
            <Link href="/legal-aid" className="text-[#000000] text-xs md:text-sm font-bold inline-flex items-center gap-1 pt-2">
              Learn more <FaArrowRight size={10} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}