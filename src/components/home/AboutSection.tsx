"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function AboutSection() {
  const { language } = useApp();

  const t = (en: string, hi: string) => (language === "en" ? en : hi);

  return (
    <section className="py-10 md:py-16 bg-white border-y border-slate-200">
      <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="bg-slate-50 text-[#000000] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block">
            {t("Who We Are", "हम कौन हैं")}
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-navy tracking-tight">
            {t("Committed to Equal Justice Across Bundelkhand", "बुंदेलखंड में समान न्याय के लिए प्रतिबद्ध")}
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            {t("We bridge the justice gap for victims of caste discrimination and violence by providing free panel advocacy, rapid response fact-finding delegations, and complete police accountability monitoring.", "हम जातिविभेद और हिंसा के पीड़ितों के लिए न्याय के अंतर को पाटते हुए मुफ्त पैनल वकालत, त्वरित प्रतिक्रिया तथ्य-अन्वेषण प्रतिनिधिमंडल और पूर्ण पुलिस जवाबदेही निगरानी प्रदान करते हैं।")}
          </p>
          <div>
            <Link
              href="/about"
               className="inline-flex items-center gap-2 text-[#000000] hover:text-slate-700 font-bold text-xs md:text-sm uppercase tracking-wider"
            >
              {t("Read More About Us", "हमारे बारे में और पढ़ें")} <ArrowRight size={10} />
            </Link>
          </div>
        </div>
        <div className="bg-slate-100 p-8 rounded-3xl border border-slate-200 space-y-4">
          <h3 className="text-xl font-bold text-navy">{t("Our Core Pillars", "हमारे मुख्य स्तंभ")}</h3>
          <ul className="space-y-3 text-xs text-slate-700 font-medium">
            <li className="flex items-center gap-2">{t("✓ 100% Free Confidential Legal Assistance", "✓ 100% मुफ्त गुप्त कानूनी सहायता")}</li>
            <li className="flex items-center gap-2">{t("✓ SC/ST Atrocity Act Special Representation", "✓ एससी/एसटी अत्याचार अधिनियम विशेष प्रतिनिधित्व")}</li>
            <li className="flex items-center gap-2">{t("✓ Grassroots Legal Literacy Workshops", "✓ जमीनी कानूनी साक्षरता कार्यशालाएँ")}</li>
            <li className="flex items-center gap-2">{t("✓ Statutory Victim Compensation Support", "✓ वैधानिक पीड़ित पूर्तिकर सहायता")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
