"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { Reveal, SectionHeading, CountUp } from "./primitives";
import {
  FaUsers,
  FaHandsHelping,
  FaBalanceScale,
  FaMapMarkedAlt,
  FaUserFriends,
  FaChild,
} from "react-icons/fa";

interface Stat {
  to: number;
  suffix: string;
  labelEn: string;
  labelHi: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const STATS: Stat[] = [
  { to: 12450, suffix: "+", labelEn: "People Reached", labelHi: "लोगों तक पहुँच", icon: FaUsers },
  { to: 1280, suffix: "+", labelEn: "People Supported", labelHi: "सहायता प्राप्त लोग", icon: FaHandsHelping },
  { to: 340, suffix: "+", labelEn: "Cases Assisted", labelHi: "सहायता प्राप्त मामले", icon: FaBalanceScale },
  { to: 95, suffix: "+", labelEn: "Villages Connected", labelHi: "जुड़े गाँव", icon: FaMapMarkedAlt },
  { to: 68, suffix: "+", labelEn: "Community Volunteers", labelHi: "सामुदायिक स्वयंसेवक", icon: FaUserFriends },
  { to: 42, suffix: "+", labelEn: "Youth Leaders", labelHi: "युवा नेता", icon: FaChild },
];

export default function Stats() {
  const { language } = useApp();
  const isHindi = language === "hi";
  const t = (en: string, hi: string) => (isHindi ? hi : en);

  return (
    <section id="impact" className="py-10 md:py-16 bg-navy relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <Reveal>
          <SectionHeading
            light
            eyebrow={t("Our Reach", "हमारी पहुँच")}
            title={t("DDJC By The Numbers", "आँकड़ों में DDJC")}
            subtitle={t(
              "Every number is a person, a family, and a community moving closer to dignity and justice.",
              "हर आँकड़ा एक व्यक्ति, एक परिवार और एक समुदाय है जो गरिमा और न्याय के करीब बढ़ रहा है।"
            )}
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
          {STATS.map((stat, i) => (
            <Reveal key={stat.labelEn} delay={(i % 3) * 0.08}>
              <div className="bg-navy p-8 md:p-10 flex flex-col items-center text-center h-full hover:bg-navy-deep transition-colors">
                <stat.icon className="text-gold mb-4" size={26} />
                <span className="text-4xl md:text-5xl font-black text-gold block mb-2">
                  <CountUp to={stat.to} suffix={stat.suffix} />
                </span>
                <span className="text-xs md:text-sm font-semibold uppercase tracking-wide text-white/70">
                  {t(stat.labelEn, stat.labelHi)}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
