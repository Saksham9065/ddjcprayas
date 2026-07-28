"use client";

import React from "react";
import Link from "next/link";
import { FaBullseye, FaEye, FaArrowRight, FaShieldAlt, FaBalanceScale, FaBookOpen, FaUsers } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-5xl space-y-16">
        
         {/* Header Banner */}
         <div className="text-center max-w-3xl mx-auto space-y-4">
           <span className="bg-slate-50 text-[#000000] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block">
             Who We Are
           </span>
           <h1 className="text-4xl md:text-5xl font-black text-[#0A2540] tracking-tight">
             About Dalit Dignity & Justice Center (DDJC)
           </h1>
           <p className="text-slate-600 text-base md:text-lg leading-relaxed">
             Step Towards Justice and Dignity. Founded on October 9, 2023, by the Bundelkhand Dalit Adhikar Manch.
           </p>
         </div>

         {/* Why DDJC is Needed */}
         <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200 space-y-6">
           <h2 className="text-2xl md:text-3xl font-black text-[#0A2540] tracking-tight">
             Why is DDJC Needed?
           </h2>
           <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
             <p>
               Every day through newspapers, television channels, social media, and our surroundings, we witness various incidents. Following such incidents, victims are frequently seen struggling through courts and legal offices. They strive for justice at police stations and courts; however, often due to a lack of proper information and legal knowledge, they fail to reach justice. The impact of this is most severe on the victims, affecting their entire families and communities in various ways.
             </p>
             <p>
               To ensure that every individual has access to justice, an understanding of human rights, and that victims receive justice with dignity—and to improve access to government welfare schemes, especially for Dalit and marginalized communities—the Dalit Dignity & Justice Centre (DDJC) was established on October 9, 2023.
             </p>
           </div>
           <div className="grid md:grid-cols-2 gap-6">
             <img src="/images/contact/office.jpg" alt="DDJC Office" />
             <img src="/images/hero/1.jpg" alt="DDJC Team" />
           </div>
         </div>

        {/* Core Purpose & Vision / Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#000000] flex items-center justify-center text-xl">
              <FaBullseye />
            </div>
            <h2 className="text-2xl font-bold text-[#0A2540]">Our Mission</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              To provide uncompromised legal aid, institutional representation, and constitutional awareness to marginalized communities, ensuring that systemic barriers never deny any individual their right to justice and dignity.
            </p>
          </div>

          <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#000000] flex items-center justify-center text-xl">
              <FaEye />
            </div>
            <h2 className="text-2xl font-bold text-[#0A2540]">Our Vision</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              &ldquo;The creation of a fear-free, egalitarian, and caste-free India where every citizen enjoys the right to dignified justice, equality, and liberty.&rdquo;
            </p>
          </div>
        </div>

        {/* DDJC Main Focus Areas */}
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-2xl font-black text-[#0A2540]">Core Focus Areas of DDJC</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-700">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 font-bold">1</span>
              <p>Ensuring every individual has access to justice and striving to secure dignified legal outcomes for victims.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 font-bold">2</span>
              <p>Conducting village/panchayat level awareness meetings, legal literacy camps, and connecting marginalized groups to government schemes.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 font-bold">3</span>
              <p>Preparing first-generation lawyers and panchayat-level paralegal volunteers (champions) with enhanced legal capacity.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 font-bold">4</span>
              <p>Documenting state and district incidents, conducting ground-zero fact-findings, and compiling rigorous research dossiers.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 font-bold">5</span>
              <p>Providing free legal aid for victims of SC/ST Atrocities Act, POCSO Act, domestic violence, and special cases.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 font-bold">6</span>
              <p>Maintaining a dedicated panel of experienced lawyers for effective advocacy across District Courts, High Courts, and the Supreme Court.</p>
            </div>
          </div>
        </div>

        {/* Founder's Note */}
        <div className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl space-y-6 shadow-xl relative overflow-hidden">
          <span className="text-xs font-bold uppercase tracking-widest bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-400/30 inline-block">
            Founder&apos;s Message
          </span>
          <blockquote className="italic text-slate-200 text-base md:text-lg leading-relaxed border-l-4 border-[#2563EB] pl-4 py-1">
            &ldquo;Babasaheb Dr. B.R. Ambedkar had stated that liberty, equality, and fraternity should be the principles of life. Even today, whenever anyone&apos;s self-respect is crushed on the basis of caste in any corner of the country, our democracy bleeds. DDJC is not doing anyone a favor; rather, it is fighting to secure that constitutional right for every deprived citizen which has been guaranteed by the supreme law and constitution of our nation. Leave fear behind in this journey of justice; we stand with you.&rdquo;
          </blockquote>
          <div className="pt-2">
            <p className="font-bold text-white">Adv. Kuldeep Kumar Baudh</p>
            <p className="text-xs text-blue-300">Founder, Dalit Dignity & Justice Center (DDJC)</p>
          </div>
        </div>

        {/* Rooted in Bundelkhand's Grassroots */}
        <div className="bg-[#0A2540] text-white p-8 md:p-12 rounded-3xl shadow-xl space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Rooted in Bundelkhand&apos;s Grassroots</h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Operating out of Orai, Jalaun, our team works tirelessly at tehsil and district levels. We bridge the gap between vulnerable victims and judicial systems by combining field fact-findings, police station follow-ups, and professional courtroom litigation.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 bg-[#000000] hover:bg-slate-600 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-md text-sm"
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