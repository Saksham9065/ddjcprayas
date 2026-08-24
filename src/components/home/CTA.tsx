"use client";

import React from "react";
import Link from "next/link";
import { FileSignature, ArrowRight } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function CTA() {
  const { language } = useApp();

  const t = (en: string, hi: string) => (language === "en" ? en : hi);

  return (
  <section className="py-10 md:py-16 md:pt-24 bg-slate-50">
       <div className="container mx-auto px-4 md:px-6 max-w-5xl">
         <div className="bg-[#0A2540] text-white p-6 md:p-10 lg:p-14 rounded-3xl text-center space-y-4 md:space-y-6 shadow-xl">
           <h2 className="text-xl md:text-2xl lg:text-3xl font-black tracking-tight">{t("Need Legal Representation or Advice?", "कानूनी प्रतिनिधित्व या सलाह चाहिए?")}</h2>
           <p className="text-slate-200 text-xs md:text-sm lg:text-base max-w-2xl mx-auto leading-relaxed">
             {t("If you or someone you know has been subjected to atrocities or caste discrimination, file a formal complaint securely through our portal.", "यदि आप या आपके जिसे जानते हैं को अत्याचार या जातिविभेद का सामना करना पड़ा है, तो हमारे पोर्टल के माध्यम से सुरक्षित रूप से औपचारिक शिकायत दर्ज करें।")}
           </p>
           <div className="pt-2 md:pt-4 flex flex-wrap justify-center gap-3 md:gap-4">
             <Link
               href="/complaint"
               className="bg-[#000000] hover:bg-slate-600 text-white px-5 py-3 md:px-8 md:py-4 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-lg shadow-black/20"
             >
               <FileSignature /> {t("File a Complaint", "शिकायत दर्ज करें")} <ArrowRight />
             </Link>
           </div>
         </div>
       </div>
     </section>
  );
}
