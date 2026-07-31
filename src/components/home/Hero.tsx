"use client";

import React from "react";
import Link from "next/link";
import { FaFileSignature, FaBalanceScale, FaArrowRight } from "react-icons/fa";
import { useApp } from "@/context/AppContext";
import { translations } from "@/lib/i18n";

export default function Hero() {
  const { language } = useApp();
  const content = translations[language];
  return (
<section className="relative bg-[#0A2540] text-white py-20 md:py-28 pt-24 md:pt-28 overflow-hidden">
       <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000000_1px,transparent_1px)] bg-size-[16px_16px]"></div>
       <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10 text-center space-y-6 md:space-y-8">
         
         <span className="bg-black/60 text-slate-300 border border-black/50 px-3 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest inline-block">
           {content.heroBadge}
         </span>
         
         <h1 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight max-w-4xl mx-auto leading-tight">
           {content.heroTitle} <span className="text-[#000000]">(Dalit Dignity & Justice Centre)</span>
         </h1>
         
         <p className="text-slate-300 text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
           {content.heroSubtitle}
         </p>
         
         <div className="pt-2 md:pt-4 flex flex-wrap justify-center gap-3 md:gap-4">
           <Link
             href="/complaint"
             className="bg-[#000000] hover:bg-slate-600 text-white px-5 py-3 md:px-8 md:py-4 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-lg shadow-black/20"
           >
             <FaFileSignature /> {content.heroPrimaryCta} <FaArrowRight />
           </Link>
<Link
              href="/donate"
              className="hidden md:inline-flex bg-slate-800 hover:bg-slate-700 text-slate-200 px-5 py-3 md:px-8 md:py-4 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-wider transition-colors border border-slate-700 inline-flex items-center gap-2"
            >
              <FaBalanceScale /> {content.heroSecondaryCta}
            </Link>
         </div>

       </div>
     </section>
  );
}