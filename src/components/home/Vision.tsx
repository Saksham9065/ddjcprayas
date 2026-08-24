"use client";

import React from "react";
import { Shield } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function Vision() {
  const { language } = useApp();

  const t = (en: string, hi: string) => (language === "en" ? en : hi);

  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-4">
      <div className="w-14 h-14 bg-slate-50 text-[#000000] rounded-2xl flex items-center justify-center text-2xl border border-slate-100">
        <Shield />
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-navy">{t("Our Vision for Society", "हमारा समाज के लिए दृष्टिकोण")}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">
        {t("An equitable, inclusive society free from caste oppression, untouchability, and violence, where every citizen enjoys full constitutional guarantees and the rule of law.", "एक समतोल, समावेशी समाज जो जाति उत्पीड़न, अछूतता और हिंसा से मुक्त है, जहां हर नागरिक को संविधान की पूर्ण गारंटी और कानून का शासन मिलता है।")}
      </p>
    </div>
  );
}
