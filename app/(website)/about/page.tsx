"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBullseye, FaEye, FaArrowRight } from "react-icons/fa";
import { useApp } from "@/context/AppContext";

export default function AboutPage() {
  const { language } = useApp();
  return (
    <div className="bg-white min-h-screen py-10 pt-16 md:py-16 md:pt-24">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl space-y-16">
        
         {/* Header Banner */}
         <div className="text-center max-w-3xl mx-auto space-y-4">
           <span className="bg-slate-50 text-[#000000] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block">
             {language === "en" ? "Who We Are" : "हम हम हैं"}
           </span>
           <h1 className="text-4xl md:text-5xl font-black text-[#0A2540] tracking-tight">
              {language === "en" ? "About Dalit Dignity & Justice Center (DDJC)" : "दलित सम्मान व न्याय केन्द्र (DDJC) के बारे में"}
           </h1>
           <p className="text-slate-600 text-base md:text-lg leading-relaxed">
             {language === "en" ? "Step Towards Justice and Dignity. Founded on October 9, 2023, by the Bundelkhand Dalit Adhikar Manch." : "न्याय और गरिमा की दिशा में कदम। 9 अक्टूबर 2023 को बुंदेलखंड दलित अधिकार मंच द्वारा स्थापित।"}
           </p>
         </div>

         {/* Why DDJC is Needed */}
         <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 space-y-6">
           <h2 className="text-2xl md:text-3xl font-black text-[#0A2540] tracking-tight">
             {language === "en" ? "Why is DDJC Needed?" : "DDJC की आवश्यकता क्यों है?"}
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
              <Image src="/images/contact/office.jpg" alt="DDJC Office" width={1189} height={630} className="w-full h-auto" />
              <Image src="/images/hero/1.jpg" alt="DDJC Team" width={3976} height={1923} className="w-full h-auto" />
            </div>
         </div>

        {/* Core Purpose & Vision / Mission */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#000000] flex items-center justify-center text-xl">
              <FaBullseye />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540]">{language === "en" ? "Our Mission" : "हमारा मिशन"}</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              {language === "en" ? "To provide uncompromised legal aid, institutional representation, and constitutional awareness to marginalized communities, ensuring that systemic barriers never deny any individual their right to justice and dignity." : "वंचित समुदायों को बिना किसी समझौते के कानूनी सहायता, संस्थागत प्रतिनिधित्व और संवैधानिक जागरूकता प्रदान करना, ताकि सिस्टमिक बाधाएँ किसी भी व्यक्ति के न्याय और गरिमा के अधिकार से वंचित न हों।"}
            </p>
          </div>

          <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#000000] flex items-center justify-center text-xl">
              <FaEye />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540]">{language === "en" ? "Our Vision" : "हमारी दृष्टि"}</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              {language === "en" ? "“The creation of a fear-free, egalitarian, and caste-free India where every citizen enjoys the right to dignified justice, equality, and liberty.”" : "“एक भयमुक्त, समतामूलक और जातिहीन भारत की रचना जहाँ प्रत्येक नागरिक को गरिमापूर्ण न्याय, समानता और स्वतंत्रता का अधिकार प्राप्त हो।”"}
            </p>
          </div>
        </div>

        {/* DDJC Main Focus Areas */}
        <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-2xl md:text-3xl font-black text-[#0A2540]">{language === "en" ? "Core Focus Areas of DDJC" : "DDJC के प्रमुख फोकस क्षेत्र"}</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-700">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-slate-100 text-[#000000] flex items-center justify-center shrink-0 font-bold">1</span>
              <p>Ensuring every individual has access to justice and striving to secure dignified legal outcomes for victims.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-slate-100 text-[#000000] flex items-center justify-center shrink-0 font-bold">2</span>
              <p>Conducting village/panchayat level awareness meetings, legal literacy camps, and connecting marginalized groups to government schemes.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-slate-100 text-[#000000] flex items-center justify-center shrink-0 font-bold">3</span>
              <p>Preparing first-generation lawyers and panchayat-level paralegal volunteers (champions) with enhanced legal capacity.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-slate-100 text-[#000000] flex items-center justify-center shrink-0 font-bold">4</span>
              <p>Documenting state and district incidents, conducting ground-zero fact-findings, and compiling rigorous research dossiers.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-slate-100 text-[#000000] flex items-center justify-center shrink-0 font-bold">5</span>
              <p>Providing free legal aid for victims of SC/ST Atrocities Act, POCSO Act, domestic violence, and special cases.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-slate-100 text-[#000000] flex items-center justify-center shrink-0 font-bold">6</span>
              <p>Maintaining a dedicated panel of experienced lawyers for effective advocacy across District Courts, High Courts, and the Supreme Court.</p>
            </div>
          </div>
        </div>

        {/* Founder's Note */}
        <div className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl space-y-6 shadow-xl relative overflow-hidden">
          <span className="text-xs font-bold uppercase tracking-widest bg-white/10 text-gold px-3 py-1 rounded-full border border-white/20 inline-block">
            Founder&apos;s Message
          </span>
          <blockquote className="italic text-slate-200 text-base md:text-lg leading-relaxed border-l-4 border-gold pl-4 py-1">
            &ldquo;Babasaheb Dr. B.R. Ambedkar had stated that liberty, equality, and fraternity should be the principles of life. Even today, whenever anyone&apos;s self-respect is crushed on the basis of caste in any corner of the country, our democracy bleeds. DDJC is not doing anyone a favor; rather, it is fighting to secure that constitutional right for every deprived citizen which has been guaranteed by the supreme law and constitution of our nation. Leave fear behind in this journey of justice; we stand with you.&rdquo;
          </blockquote>
          <div className="pt-2">
            <p className="font-bold text-white">Adv. Kuldeep Kumar Baudh</p>
            <p className="text-xs text-gold">Founder, Dalit Dignity & Justice Center (DDJC)</p>
          </div>
        </div>

        {/* Rooted in Bundelkhand's Grassroots */}
        <div className="bg-[#0A2540] text-white p-8 md:p-10 rounded-3xl shadow-xl space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">{language === "en" ? "Rooted in Bundelkhand's Grassroots" : "बुंदेलखंड की जड़ता से जुड़ा"}</h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Operating out of Orai, Jalaun, our team works tirelessly at tehsil and district levels. We bridge the gap between vulnerable victims and judicial systems by combining field fact-findings, police station follow-ups, and professional courtroom litigation.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 bg-[#000000] hover:bg-slate-600 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-md text-sm"
            >
              {language === "en" ? "Meet Our Team" : "हमारी टीम से मिलें"}
              <FaArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}