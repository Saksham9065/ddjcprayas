"use client";

import React from "react";
import Link from "next/link";
import { FaBullseye, FaEye, FaArrowRight, FaHandsHelping, FaUniversity } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-blue-50 text-[#2563EB] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-200 inline-block mb-4">
            Who We Are
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#0A2540] tracking-tight mb-6">
            About Dalit Dignity & Justice Center
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Founded in October 2023 by the Bundelkhand Dalit Adhikar Manch, DDJC stands on the frontline of human rights protection, legal aid, and social justice.
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#2563EB] flex items-center justify-center text-xl mb-6">
              <FaBullseye />
            </div>
            <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Our Mission</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              To provide uncompromised legal aid, institutional representation, and constitutional awareness to marginalized communities, ensuring that systemic barriers never deny any individual their right to justice and dignity.
            </p>
          </div>

          <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#2563EB] flex items-center justify-center text-xl mb-6">
              <FaEye />
            </div>
            <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Our Vision</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              An egalitarian society rooted in liberty, equality, and fraternity where constitutional safeguards are actively upheld for every citizen across Bundelkhand and beyond.
            </p>
          </div>
        </div>

        {/* Context & Background */}
        <div className="bg-[#0A2540] text-white p-8 md:p-12 rounded-3xl shadow-xl mb-16 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Rooted in Bundelkhand&apos;s Grassroots</h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Operating out of Orai, Jalaun, our team works tirelessly at tehsil and district levels. We bridge the gap between vulnerable victims and judicial systems by combining field fact-findings, police station follow-ups, and professional courtroom litigation.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-blue-600 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-md text-sm"
            >
              Meet Our Team
              <FaArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}