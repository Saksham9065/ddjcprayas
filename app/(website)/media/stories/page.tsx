"use client";

import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

export default function StoriesPage() {
  const stories = [
    {
      name: "Ramlal Vanvasi",
      location: "Jalaun District",
      story: "After facing severe land encroachment and police inaction, DDJC stepped in with panel lawyers. Within 3 months, our land ownership was formally restored and legal protection secured.",
    },
    {
      name: "Sunita Devi",
      location: "Orai Tehsil",
      story: "The legal awareness camp conducted in our village taught us how to file prompt FIRs under the Atrocity Act. DDJC's support gave my family courage and justice.",
    },
  ];

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-blue-50 text-[#2563EB] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-200 inline-block mb-4">
            Impact & Lives
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#0A2540] tracking-tight mb-6">
            Success Stories
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Real accounts of resilience, legal victories, and dignity restored through community solidarity and legal aid.
          </p>
        </div>

        <div className="space-y-8">
          {stories.map((item, index) => (
            <div key={index} className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 space-y-4">
              <FaQuoteLeft className="text-[#2563EB] text-3xl opacity-40" />
              <p className="text-slate-700 text-base md:text-lg italic leading-relaxed">
                &ldquo;{item.story}&rdquo;
              </p>
              <div className="pt-4 border-t border-slate-200 flex justify-between items-center text-xs">
                <span className="font-bold text-[#0A2540] text-sm">{item.name}</span>
                <span className="text-slate-400">{item.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}