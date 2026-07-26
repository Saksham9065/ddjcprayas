"use client";

import React from "react";
import Link from "next/link";
import { FaFileSignature, FaBalanceScale, FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative bg-[#0A2540] text-white py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000000_1px,transparent_1px)] bg-size-[16px_16px]"></div>
      <div className="container mx-auto px-6 max-w-6xl relative z-10 text-center space-y-8">
        
        <span className="bg-black/60 text-slate-300 border border-black/50 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-block">
          Access to Justice • Equality • Human Rights
        </span>
        
        <h1 className="text-4xl md:text-6xl font-black tracking-tight max-w-4xl mx-auto leading-tight">
          Dalit Dignity & Justice Center <span className="text-[#000000]">(DDJC)</span>
        </h1>
        
        <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Empowering marginalized communities across Bundelkhand and Uttar Pradesh with free legal aid, atrocity prevention advocacy, and robust grievance redressal.
        </p>
        
        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Link
            href="/complaint"
            className="bg-[#000000] hover:bg-slate-600 text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-lg shadow-black/20"
          >
            <FaFileSignature /> File a Complaint <FaArrowRight />
          </Link>
          <Link
            href="/legal-aid"
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors border border-slate-700 inline-flex items-center gap-2"
          >
            <FaBalanceScale /> Explore Legal Aid
          </Link>
        </div>

      </div>
    </section>
  );
}