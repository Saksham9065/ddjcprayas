"use client";

import React from "react";

export default function Statistics() {
  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-8">
      <div className="max-w-2xl">
          <h2 className="text-xl md:text-2xl font-black text-[#0A2540] mb-3">Our Impact Statistics</h2>
        <p className="text-slate-600 text-xs">Tracking our transparent interventions across Bundelkhand districts.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
          <p className="text-3xl font-black text-[#0A2540]">500+</p>
          <p className="text-xs text-slate-500 font-bold uppercase">Total Cases</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
          <p className="text-3xl font-black text-[#000000]">9</p>
          <p className="text-xs text-slate-500 font-bold uppercase">Districts Covered</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
          <p className="text-3xl font-black text-emerald-600">100%</p>
          <p className="text-xs text-slate-500 font-bold uppercase">Free Representation</p>
        </div>
      </div>
    </div>
  );
}