"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCheckCircle, FaArrowRight, FaUsers, FaShieldAlt, FaBookOpen, FaHandHoldingUsd, FaUniversity } from "react-icons/fa";
import { useApp } from "@/context/AppContext";

export default function OutCourtPage() {
  const { language } = useApp();
  const isHindi = language === "hi";
  return (
    <div className="bg-white min-h-screen py-16 pt-24">
      <div className="container mx-auto px-6 max-w-5xl space-y-16">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="bg-slate-50 text-[#000000] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block">
            {isHindi ? "समुदाय और प्रशासनिक कार्रवाई" : "Community & Administrative Action"}
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#0A2540] tracking-tight">
            {isHindi ? "अदालत-बहिरा हस्तक्षेप और समुदाय सशक्तिकरण" : "Out-of-Court Interventions & Community Empowerment"}
          </h1>
          <blockquote className="italic text-slate-600 text-sm md:text-base border-l-4 border-[#2563EB] pl-4 py-1 mx-auto max-w-2xl text-left">
            &ldquo;जब तक आप सामाजिक स्वतंत्रता हासिल नहीं कर लेते, कानून आपको जो भी स्वतंत्रता देता है, वह आपके किसी काम की नहीं है।&rdquo; — बाबासाहब डॉ. बी. आर. आंबेडकर
          </blockquote>
        </div>

        {/* Featured Community Outreach Images Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-md border border-slate-200">
            <Image
              src="/images/out of court/Community Meeting 8.jpeg"
              alt="Community awareness meeting and grassroots legal literacy camp"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-md border border-slate-200">
            <Image
              src="/images/out of court/IMG20241217142146.jpg"
              alt="Fact-finding delegation and community support"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Introduction Philosophy */}
        <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200 space-y-6">
          <h2 className="text-2xl font-black text-[#0A2540]">{isHindi ? "समुदाय सशक्तिकरण और जमीन-स्तर का आधार" : "Community Empowerment & Ground Foundation"}</h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            The Dalit Dignity & Justice Center (DDJC) believes that the foundation of justice is laid long before stepping into a courtroom—at the societal and administrative levels. Unless a victim family receives social, administrative, and psychological support on the ground, the legal battle remains incomplete. Therefore, DDJC works robustly on the ground outside courts to protect victims&apos; rights, secure prompt justice, and foster community self-reliance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 text-xs font-bold text-slate-700">
            <div className="bg-white p-4 rounded-xl border border-slate-200">✓ 125+ Panchayat Paralegal Champions Identified</div>
            <div className="bg-white p-4 rounded-xl border border-slate-200">✓ 79+ Volunteers Trained via Legal & Leadership Workshops</div>
            <div className="bg-white p-4 rounded-xl border border-slate-200">✓ 45+ Panel Advocates in Constant Coordination</div>
          </div>
        </div>

        {/* Card 1 */}
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 text-[#2563EB] rounded-2xl flex items-center justify-center text-xl border border-blue-100">
              <FaCheckCircle />
            </div>
            <h2 className="text-2xl font-black text-[#0A2540]">1. Fact-Finding Missions: Fact-Finding &amp; Documentation</h2>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
            <blockquote className="italic text-slate-500 text-xs border-l-2 border-[#2563EB] pl-3 py-1">
              &ldquo;सत्य कभी भी दावों से सिद्ध नहीं होता, बल्कि उसके लिए ठोस और अकाट्य तथ्यों की आवश्यकता होती है।&rdquo; — महात्मा ज्योतिराव फुले
            </blockquote>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              Whenever grave atrocities against Dalits, POCSO crimes, or violence against women occur across workplaces, districts, or the state, DDJC teams visit the site. We meticulously document primary facts, witness testimonies, and situational circumstances through scientific research to prevent police or administrative cover-ups. This documentation becomes the bedrock of courtroom trials.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 text-[#2563EB] rounded-2xl flex items-center justify-center text-xl border border-blue-100">
              <FaShieldAlt />
            </div>
            <h2 className="text-2xl font-black text-[#0A2540]">2. Effective Advocacy at Police Stations &amp; Administration</h2>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
            <blockquote className="italic text-slate-500 text-xs border-l-2 border-[#2563EB] pl-3 py-1">
              &ldquo;कमजोरों की सुरक्षा और उनके अधिकारों की रक्षा करना ही किसी भी सभ्य प्रशासन की पहली कसौटी है।&rdquo; — नेल्सन मंडेला
            </blockquote>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              <strong>Ensuring FIR Registration:</strong> Due to a lack of legal knowledge, complaints by marginalized groups are often ignored at police stations. DDJC stands shoulder-to-shoulder with victims at police stations to ensure immediate FIR registration under proper SC/ST Act, POCSO, and violence provisions.<br />
              <strong>Senior Officer Coordination:</strong> Putting sustained pressure by engaging Superintendents of Police (SP), District Magistrates (DM), and Directors General of Police (DGP) for impartial and time-bound investigations.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 text-[#2563EB] rounded-2xl flex items-center justify-center text-xl border border-blue-100">
              <FaBookOpen />
            </div>
            <h2 className="text-2xl font-black text-[#0A2540]">3. Village &amp; Panchayat Legal Awareness Camps</h2>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
            <blockquote className="italic text-slate-500 text-xs border-l-2 border-[#2563EB] pl-3 py-1">
              &ldquo;शिक्षा ही वह हथियार है जिससे आप दुनिया को बदल सकते हैं, और कानूनी शिक्षा वह ढाल है जिससे आप खुद को बचा सकते हैं।&rdquo; — DDJC
            </blockquote>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              Conducting regular awareness meetings and special legal literacy camps at rural and panchayat levels. We provide marginalized communities with a basic understanding of fundamental rights, human rights, and legal procedures, translating complex legal acts (SC/ST PoA Act, POCSO, Domestic Violence Act) into simple local terminology to eliminate fear.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 text-[#2563EB] rounded-2xl flex items-center justify-center text-xl border border-blue-100">
              <FaUsers />
            </div>
            <h2 className="text-2xl font-black text-[#0A2540]">4. Building Volunteers &amp; Community Champions</h2>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
            <blockquote className="italic text-slate-500 text-xs border-l-2 border-[#2563EB] pl-3 py-1">
              &ldquo;परिवर्तन तब नहीं आता जब हम किसी और व्यक्ति या किसी और समय का इंतजार करते हैं; हम खुद ही वो बदलाव हैं जिसकी हमें तलाश है।&rdquo; — बराक ओबामा
            </blockquote>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              <strong>First-Generation Lawyer Capacity Building:</strong> Mentoring and training new first-generation lawyers from exploited backgrounds to strengthen their legal capacities.<br />
              <strong>Paralegal Champions:</strong> Preparing local youth and women at each panchayat level as &apos;Paralegal Champions&apos; (Dalit Human Rights Defenders) who act as the first line of defense against injustice.
            </p>
          </div>
        </div>

        {/* Welfare Scheme Linkage */}
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 text-[#2563EB] rounded-2xl flex items-center justify-center text-xl border border-blue-100">
              <FaHandHoldingUsd />
            </div>
            <h2 className="text-2xl font-black text-[#0A2540]">5. Welfare Scheme Linkage</h2>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
            <blockquote className="italic text-slate-500 text-xs border-l-2 border-[#2563EB] pl-3 py-1">
              &ldquo;स्वतंत्रता का तब तक कोई अर्थ नहीं है, जब तक कि वह आर्थिक रूप से सबसे कमजोर व्यक्ति को भी गरिमापूर्ण जीवन न दे सके।&rdquo; — कांशीराम जी
            </blockquote>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              Taking central and state welfare schemes directly to Dalit, Adivasi, and marginalized communities. Providing handholding support from application filing to direct benefit transfers in education, healthcare, housing, and employment.
            </p>
          </div>
        </div>

        {/* Human Rights Commissions */}
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 text-[#2563EB] rounded-2xl flex items-center justify-center text-xl border border-blue-100">
              <FaUniversity />
            </div>
            <h2 className="text-2xl font-black text-[#0A2540]">6. Advocacy with National &amp; State Commissions</h2>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
            <blockquote className="italic text-slate-500 text-xs border-l-2 border-[#2563EB] pl-3 py-1">
              &ldquo;मानवाधिकार कोई विशेषाधिकार नहीं हैं जो सरकारें आपको देती हैं। वे अधिकार हैं जिन्हें कोई आपसे छीन नहीं सकता।&rdquo;
            </blockquote>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              When local police or administration exhibit bias, our team immediately registers cases with National/State SC-ST Commissions, NHRC, and Women&apos;s Commissions, ensuring inquiry committees are formed to deliver justice.
            </p>
          </div>
        </div>

        {/* Grassroots Pledge Banner */}
        <div className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl space-y-6 shadow-xl relative overflow-hidden text-center">
          <span className="text-xs font-bold uppercase tracking-widest bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-400/30 inline-block">
            Our Grassroots Pledge
          </span>
          <blockquote className="italic text-slate-200 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            &ldquo;DDJC केवल अदालतों के कमरों में न्याय की गुहार नहीं लगाता, बल्कि समाज की रगों में न्याय का हौसला भरता है। भयमुक्त, समतामूलक और जाति-मुक्त भारत का निर्माण तब तक असंभव है, जब तक हमारे गांवों का हर नागरिक निडर होकर अपने अधिकारों के लिए खड़ा न हो जाए। हम इसी बदलाव का जरिया हैं।&rdquo;
          </blockquote>
          <div className="pt-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg text-sm">
              {isHindi ? "फील्ड समन्वयकों से संपर्क करें" : "Contact Field Coordinators"} <FaArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}