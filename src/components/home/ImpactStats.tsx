"use client";

import React from "react";

export default function ImpactStats() {
  return (
    <section className="bg-white border-b border-slate-200 py-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          <div className="space-y-1">
            <p className="text-3xl md:text-4xl font-black text-[#0A2540]">500+</p>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Cases Handled</p>
          </div>

          <div className="space-y-1">
            <p className="text-3xl md:text-4xl font-black text-[#000000]">9 Bundelkhand</p>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Districts Covered</p>
          </div>

          <div className="space-y-1">
            <p className="text-3xl md:text-4xl font-black text-[#0A2540]">50+</p>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Legal Literacy Camps</p>
          </div>

          <div className="space-y-1">
            <p className="text-3xl md:text-4xl font-black text-emerald-600">100%</p>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Free Legal Support</p>
          </div>

        </div>
      </div>
    </section>
  );
}