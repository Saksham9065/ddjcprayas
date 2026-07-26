"use client";

import React from "react";
import { FaUserTie, FaBalanceScale, FaEnvelope } from "react-icons/fa";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Adv. Rajesh Kumar",
      role: "Managing Legal Coordinator",
      desc: "Leading courtroom strategy and overseeing high-priority atrocity cases across Bundelkhand.",
    },
    {
      name: "Suman Devi",
      role: "Grassroots Field Director",
      desc: "Directing village-level fact-finding delegations and community mobilization programs.",
    },
    {
      name: "Anil Siddharth",
      role: "Human Rights Advocate",
      desc: "Specialized in police station liaison, FIR registration support, and statutory compliance.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-blue-50 text-[#2563EB] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-200 inline-block mb-4">
            Leadership & Advocates
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#0A2540] tracking-tight mb-6">
            Meet the DDJC Team
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Our dedicated team of lawyers, social activists, and field coordinators working tirelessly for justice and dignity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 bg-blue-50 text-[#2563EB] rounded-2xl flex items-center justify-center text-2xl mb-6">
                  <FaUserTie />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-1">{member.name}</h3>
                <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block mb-4">{member.role}</span>
                <p className="text-slate-600 text-sm leading-relaxed">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}