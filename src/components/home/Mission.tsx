"use client";

import React from "react";
import { Scale } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function Mission() {
  const { language } = useApp();

  const t = (en: string, hi: string) => (language === "en" ? en : hi);

  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-4">
      <div className="w-14 h-14 bg-slate-50 text-[#000000] rounded-2xl flex items-center justify-center text-2xl border border-slate-100">
        <Scale />
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-[#0A2540]">{t("Our Core Mission", "हमारा मुख्य मिशन")}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">
        {t("To provide unhindered access to justice, expert panel advocacy, and immediate legal representation to victims of caste atrocities, police inaction, and systemic discrimination.", "जातिविभेद, पुलिस की निष्क्रियता और प्रणालीगत भेदभाव के पीड़ितों को बिना बाधा के न्याय तक पहुंच, विशेषज्ञ पैनल वकालत और तत्काल कानूनी प्रतिनिधित्व प्रदान करना।")}
      </p>
    </div>
  );
}
