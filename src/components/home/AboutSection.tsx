"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="py-16 bg-white border-y border-slate-200">
      <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="bg-blue-50 text-[#2563EB] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-200 inline-block">
            Who We Are
          </span>
          <h2 className="text-3xl font-black text-[#0A2540] tracking-tight">
            Committed to Equal Justice Across Bundelkhand
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            We bridge the justice gap for victims of caste discrimination and violence by providing free panel advocacy, rapid response fact-finding delegations, and complete police accountability monitoring.
          </p>
          <div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#2563EB] hover:text-blue-700 font-bold text-xs uppercase tracking-wider"
            >
              Read More About Us <FaArrowRight size={10} />
            </Link>
          </div>
        </div>
        <div className="bg-slate-100 p-8 rounded-3xl border border-slate-200 space-y-4">
          <h3 className="text-xl font-bold text-[#0A2540]">Our Core Pillars</h3>
          <ul className="space-y-3 text-xs text-slate-700 font-medium">
            <li className="flex items-center gap-2">✓ 100% Free Confidential Legal Assistance</li>
            <li className="flex items-center gap-2">✓ SC/ST Atrocity Act Special Representation</li>
            <li className="flex items-center gap-2">✓ Grassroots Legal Literacy Workshops</li>
            <li className="flex items-center gap-2">✓ Statutory Victim Compensation Support</li>
          </ul>
        </div>
      </div>
    </section>
  );
}