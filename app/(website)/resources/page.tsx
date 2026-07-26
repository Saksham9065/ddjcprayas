"use client";

import React from "react";
import { FaBook, FaDownload, FaFilePdf } from "react-icons/fa";

export default function ResourcesPage() {
  const documents = [
    {
      title: "SC/ST Prevention of Atrocities Act - Handbook",
      desc: "Complete statutory guide on provisions, penalties, and immediate relief compensation rules.",
      size: "2.4 MB",
    },
    {
      title: "Constitutional Rights & Legal Safeguards Guide",
      desc: "An educational booklet detailing fundamental rights and remedies against discrimination.",
      size: "1.8 MB",
    },
    {
      title: "DDJC Annual Fact-Finding Report",
      desc: "Comprehensive documentation of legal cases, camp statistics, and field interventions.",
      size: "4.1 MB",
    },
  ];

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-blue-50 text-[#2563EB] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-200 inline-block mb-4">
            Knowledge Hub
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#0A2540] tracking-tight mb-6">
            Legal Resources & Guides
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Download educational pamphlets, constitutional guides, and statutory handbooks to empower yourself with legal knowledge.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {documents.map((doc, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-3xl border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-blue-100 text-[#2563EB] rounded-2xl flex items-center justify-center text-xl mb-6">
                  <FaFilePdf />
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">{doc.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-6">{doc.desc}</p>
              </div>
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-bold">
                <span className="text-slate-400">{doc.size}</span>
                <button 
                  onClick={() => alert("Download started...")}
                  className="inline-flex items-center gap-1.5 text-[#2563EB] hover:underline"
                >
                  <FaDownload size={11} /> Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}