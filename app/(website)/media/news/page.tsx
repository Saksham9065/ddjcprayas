"use client";

import React from "react";
import Link from "next/link";
import { FaNewspaper, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

export default function NewsPage() {
  const newsItems = [
    {
      title: "DDJC Organizes Legal Literacy Camp in Orai Tehsils",
      date: "October 14, 2025",
      desc: "Hundreds of villagers gathered to understand constitutional rights and SC/ST atrocity act compensation protocols.",
    },
    {
      title: "Press Conference on Rising Atrocities and Police Accountability",
      date: "September 28, 2025",
      desc: "DDJC coordinators released an independent fact-finding report highlighting delayed investigations in Bundelkhand.",
    },
    {
      title: "Free Legal Aid Clinic Expanded to Rural Jalaun",
      date: "August 15, 2025",
      desc: "New panel advocates appointed to offer direct litigation support and lower court representation.",
    },
  ];

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-blue-50 text-[#2563EB] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-200 inline-block mb-4">
            Press & Media
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#0A2540] tracking-tight mb-6">
            News & Press Releases
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Stay updated with our latest press coverage, field reports, and public statements on human rights issues.
          </p>
        </div>

        <div className="space-y-6">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-3xl border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#2563EB]">
                  <FaCalendarAlt size={12} />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0A2540]">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">{item.desc}</p>
              </div>
              <button 
                onClick={() => alert("Full press statement view coming soon.")}
                className="shrink-0 inline-flex items-center gap-2 bg-[#2563EB] text-white px-5 py-2.5 rounded-xl text-xs font-bold"
              >
                Read More <FaArrowRight size={12} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}