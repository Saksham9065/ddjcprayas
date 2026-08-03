"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGavel, FaCheckCircle, FaArrowRight, FaBalanceScale, FaShieldAlt, FaFileAlt, FaHandHoldingUsd } from "react-icons/fa";
import { useApp } from "@/context/AppContext";

export default function InCourtPage() {
  const { language } = useApp();
  const isHindi = language === "hi";
  return (
    <div className="bg-white min-h-screen py-16 pt-24">
      <div className="container mx-auto px-6 max-w-5xl space-y-16">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="bg-slate-100 text-[#1ab9cb] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block">
            {isHindi ? "न्यायिक हस्तक्षेप" : "Judicial Intervention"}
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            {isHindi ? "अदालत में संचालन और कानूनी वकालत" : "In-Court Operations & Legal Advocacy"}
          </h1>
          <blockquote className="italic text-slate-600 text-sm md:text-base border-l-4 border-[#1ab9cb] pl-4 py-1 mx-auto max-w-2xl text-left">
            {isHindi ? "“किसी भी जगह अन्याय justice everywhere के लिए खतरा है।” — डॉ. मार्टिन लूथर किंग जूनियर" : "“Injustice anywhere is a threat to justice everywhere.” — Dr. Martin Luther King Jr."}
          </blockquote>
        </div>

        {/* Featured Court Images Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-lg border border-slate-200">
            <Image
              src="/images/court/allhabad court.png"
              alt="ALLAHABAD HIGH COURT"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <p className="text-white text-xs font-bold uppercase tracking-wider">ALLAHABAD HIGH COURT</p>
            </div>
          </div>

          <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-lg border border-slate-200">
            <Image
              src="/images/court/image.png"
              alt="DISTRICT COURT JALAUN (ORAI)"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <p className="text-white text-xs font-bold uppercase tracking-wider">DISTRICT COURT JALAUN (ORAI)</p>
            </div>
          </div>
        </div>

        {/* Key Impact Statistics Banner */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-50 text-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white text-[#1ab9cb] flex items-center justify-center text-lg border border-slate-200">
              <FaBalanceScale />
            </div>
            <h3 className="text-xl font-bold">{isHindi ? "सक्रिय मामले पोर्टफोलियो" : "Active Case Portfolio"}</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              DDJC is currently providing free legal aid in <strong className="text-slate-900 font-mono">191+ cases</strong> (including SC/ST PoA atrocities, POCSO, and domestic violence crimes), direct in-court advocacy in <strong className="text-slate-900 font-mono">95+ cases</strong>, and active court monitoring in <strong className="text-slate-900 font-mono">105+ matters</strong>.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl shadow-xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white text-[#1ab9cb] flex items-center justify-center text-lg border border-slate-200">
              <FaHandHoldingUsd />
            </div>
            <h3 className="text-xl font-bold text-slate-900">{isHindi ? "मुआवजा सुरक्षित" : "Compensation Secured"}</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              Through proactive district administration coordination and rigorous court advocacy, DDJC has successfully secured over <strong className="text-slate-900 font-mono">₹75 Lakh+</strong> in statutory relief and compensation for victims across <strong className="text-slate-900 font-mono">45+ cases</strong>.
            </p>
          </div>
        </div>

        {/* Core Belief & Description */}
        <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200 shadow-lg space-y-6">
          <h2 className="text-2xl font-black text-slate-900">{isHindi ? "न्याय की असली परीक्षा" : "The Real Test of Justice"}</h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            The Dalit Dignity & Justice Center (DDJC) firmly believes that the true test of justice takes place within the courtroom walls. To ensure that no victim is deprived of justice due to a lack of proper legal information and financial constraints, DDJC&apos;s legal team provides committed and effective advocacy from District Courts up to the High Court and Supreme Court.
          </p>
        </div>

        {/* Detailed Sections Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-lg space-y-4">
            <div className="w-12 h-12 bg-white text-[#1ab9cb] rounded-2xl flex items-center justify-center text-xl border border-slate-200">
              <FaGavel />
            </div>
            <h3 className="text-xl font-bold text-slate-900">1. Free Representation by Dedicated Lawyers</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              &ldquo;Delay in justice means justice denied, and we are committed to bridging this gap.&rdquo; DDJC features a dedicated panel of aggressive and experienced lawyers across District Courts, High Courts, and the Supreme Court, ensuring marginalized and exploited victims receive premier legal representation without financial burdens.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-lg space-y-4">
            <div className="w-12 h-12 bg-white text-[#1ab9cb] rounded-2xl flex items-center justify-center text-xl border border-slate-200">
              <FaShieldAlt />
            </div>
            <h3 className="text-xl font-bold text-slate-900">2. Effective Advocacy Under Special Acts</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              We focus heavily on grave crimes and sensitive matters inside courts:
              <br />• <strong>SC/ST (Prevention of Atrocities) Act:</strong> Enforcing stringent statutory provisions in cases of caste discrimination and violence.
              <br />• <strong>POCSO Act:</strong> Securing swift justice for child sexual abuse victims without psychological pressure.
              <br />• <strong>Domestic Violence Act (DVA):</strong> Protecting the rights of women surviving domestic and societal abuse.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-lg space-y-4">
            <div className="w-12 h-12 bg-white text-[#1ab9cb] rounded-2xl flex items-center justify-center text-xl border border-slate-200">
              <FaFileAlt />
            </div>
            <h3 className="text-xl font-bold text-slate-900">3. Evidence-Based Litigation & Trial Monitoring</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              &ldquo;Proving the truth requires solid evidence, and we bring that exact truth before the court.&rdquo; Ground-zero fact-findings and documentation conducted by our center are legally fortified and submitted. Furthermore, we maintain rigorous trial monitoring from chargesheets to witness testimonies so perpetrators cannot escape due to technical flaws.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-lg space-y-4">
            <div className="w-12 h-12 bg-white text-[#1ab9cb] rounded-2xl flex items-center justify-center text-xl border border-slate-200">
              <FaCheckCircle />
            </div>
            <h3 className="text-xl font-bold text-slate-900">4. Bail Opposition & Securing Conviction</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              Our team strongly opposes unwarranted bail for accused persons in serious crimes to keep victims and witnesses safe. Through effective advocacy on every hearing date, we drive cases to their logical conclusion—securing strict convictions for perpetrators.
            </p>
          </div>

        </div>

        {/* Protection, Compensation & DLSA Coordination */}
        <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl space-y-6">
          <h2 className="text-2xl font-black text-slate-900">5. Victim Protection, Compensation & Institutional Coordination</h2>
          <div className="grid md:grid-cols-2 gap-6 text-xs md:text-sm text-slate-600">
            <div className="space-y-2 bg-white p-5 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-slate-900">Witness Protection & Relief</h4>
              <p>Demanding special police protection and a fear-free environment from the court to safeguard victims and witnesses from intimidation within court premises.</p>
            </div>
            <div className="space-y-2 bg-white p-5 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-slate-900">Interim & Final Compensation</h4>
              <p>Quickly sanctioning and transferring interim and final government relief/compensation packages to victims through judicial channels.</p>
            </div>
            <div className="space-y-2 bg-white p-5 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-slate-900">NALSA / SLSA / DLSA Coordination</h4>
              <p>Collaborating with National, State, and District Legal Service Authorities to secure supplementary legal protections, state counsel, and statutory benefits.</p>
            </div>
            <div className="space-y-2 bg-white p-5 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-slate-900">Case Review & Administrative Follow-ups</h4>
              <p>Regularly reviewing case progress during judicial proceedings and overcoming administrative or legal roadblocks.</p>
            </div>
          </div>
        </div>

        {/* Courtroom Pledge Banner */}
        <div className="bg-slate-50 text-slate-900 p-8 md:p-12 rounded-3xl space-y-6 shadow-xl relative overflow-hidden text-center border border-slate-200">
          <span className="text-xs font-bold uppercase tracking-widest bg-white text-[#1ab9cb] px-3 py-1 rounded-full border border-slate-200 inline-block">
            Our Courtroom Pledge
          </span>
          <blockquote className="italic text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            &ldquo;Until the court&apos;s verdict is delivered in favor of the victim with full dignity, DDJC&apos;s legal battle never stops. We transform every suppressed voice into a powerful roar inside the threshold of the court.&rdquo;
          </blockquote>
          <div className="pt-4">
            <Link href="/complaint" className="inline-flex items-center gap-2 bg-[#000000] hover:bg-slate-600 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg text-sm">
              {isHindi ? "अदालत सहायता का अनुरोध करें" : "Request Court Support"} <FaArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}