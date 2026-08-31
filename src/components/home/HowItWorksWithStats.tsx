"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Reveal, SectionHeading, CountUp } from "./primitives";
import {
  GraduationCap,
  BookOpen,
  Handshake,
  Home,
  FileSignature,
  FileText,
  Scale,
  Users,
  MapPin,
  Baby,
  ArrowRight,
} from "lucide-react";
import { useApp } from "@/context/AppContext";

interface Category {
  en: string;
  hi: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  href: string;
  color: string;
}

const CATEGORIES: Category[] = [
  { en: "Developing Youth Leadership", hi: "युवा नेतृत्व का विकास", icon: GraduationCap, href: "/join/volunteers", color: "#0EA5E9" },
  { en: "Legal Literacy & Support", hi: "कानूनी साक्षरता और सहायता", icon: BookOpen, href: "/resources", color: "#0A2540" },
  { en: "Bridging Dalits & Governance", hi: "दलितों और शासन को जोड़ना", icon: Handshake, href: "/work/out-court", color: "#F5B400" },
  { en: "Constitutional Values in the Community", hi: "समुदाय में संवैधानिक मूल्य", icon: BookOpen, href: "/resources", color: "#7C3AED" },
  { en: "One Stop Center for Dalit Dignity", hi: "दलित गरिमा के लिए एक स्टॉप केन्द्र", icon: Home, href: "/about", color: "#DB2777" },
  { en: "Access to Services & Entitlements", hi: "सेवाएँ और अधिकार तक पहुंच", icon: FileSignature, href: "/resources", color: "#0EA5A4" },
  { en: "Research and Publication on Dalit Dignity & Justice", hi: "दलित गरिमा और न्याय पर अनुसंधान", icon: FileText, href: "/media/stories", color: "#059669" },
  { en: "Documentation and Strategic Legal Representation", hi: "दस्तावेजीकरण और रणनीतिक कानूनी प्रतिनिधित्व", icon: Scale, href: "/work/in-court", color: "#6366F1" },
];

const RADIUS = 36;

function polar(i: number, total: number) {
  const angle = (-90 + i * (360 / total)) * (Math.PI / 180);
  return { x: 50 + RADIUS * Math.cos(angle), y: 50 + RADIUS * Math.sin(angle) };
}

interface Stat {
  to: number;
  suffix: string;
  labelEn: string;
  labelHi: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const STATS: Stat[] = [
  { to: 12450, suffix: "+", labelEn: "People Reached", labelHi: "लोगों तक पहुँच", icon: Users },
  { to: 1280, suffix: "+", labelEn: "People Supported", labelHi: "सहायता प्राप्त लोग", icon: Handshake },
  { to: 340, suffix: "+", labelEn: "Cases Assisted", labelHi: "सहायता प्राप्त मामले", icon: Scale },
  { to: 95, suffix: "+", labelEn: "Villages Connected", labelHi: "जुड़े गाँव", icon: MapPin },
  { to: 68, suffix: "+", labelEn: "Community Volunteers", labelHi: "सामुदायिक स्वयंसेवक", icon: Users },
  { to: 42, suffix: "+", labelEn: "Youth Leaders", labelHi: "युवा नेता", icon: Baby },
];

export default function HowItWorksWithStats() {
  const { language } = useApp();
  const t = (en: string, hi: string) => (language === "en" ? en : hi);
  const positions = CATEGORIES.map((_, i) => polar(i, CATEGORIES.length));

  return (
    <section className="py-10 md:py-16 bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* LEFT: How It Works */}
          <div>
            <Reveal>
              <SectionHeading
                eyebrow={t("How It Works", "यह कैसे काम करता है")}
                title={t("One Centre. Many Pathways.", "एक केन्द्र. कई रास्ते.")}
                subtitle={t("DDJC brings justice, rights, services, and opportunities together under one roof.", "DDJC एक ही छत के नीचे न्याय, अधिकार, सेवाएँ और अवसरों को एक साथ लाता है।")}
              />
            </Reveal>

            <div className="mt-8 relative mx-auto" style={{ maxWidth: 520, aspectRatio: "1 / 1" }}>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                {positions.map((p, i) => (
                  <line key={i} x1={50} y1={50} x2={p.x} y2={p.y} stroke="#0A2540" strokeOpacity={0.12} strokeWidth={1.2} strokeDasharray="2 3" vectorEffect="non-scaling-stroke" />
                ))}
                <circle cx={50} cy={50} r={14} fill="none" stroke="#F5B400" strokeOpacity={0.35} strokeWidth={1.2} vectorEffect="non-scaling-stroke" />
              </svg>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-20 h-20 rounded-full bg-navy flex items-center justify-center shadow-xl ring-4 ring-white">
                  <Image src="/images/logo/ddjc-logo.jpg" alt="DDJC Logo" width={80} height={80} className="h-full w-full object-cover rounded-full" />
                </div>
              </div>

              {CATEGORIES.map((cat, i) => {
                const p = positions[i];
                return (
                  <Link
                    key={cat.en}
                    href={cat.href}
                    style={{ left: `${p.x}%`, top: `${p.y}%` }}
                    className="group absolute -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center text-center w-28"
                  >
                    <span
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg"
                      style={{ backgroundColor: cat.color }}
                    >
                      <cat.icon size={26} />
                    </span>
                    <span className="mt-1.5 text-[11px] font-bold text-navy leading-snug">
                      {language === "en" ? cat.en : cat.hi}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Stats */}
          <div>
            <Reveal>
              <SectionHeading
                eyebrow={t("Our Reach", "हमारी पहुँच")}
                title={t("DDJC in Numbers", "आँकड़ों में DDJC")}
                subtitle={t("Every number is a person, a family and a community moving closer to dignity and justice.", "हर आँकड़ा एक व्यक्ति, एक परिवार और एक समुदाय है जो गरिमा और न्याय के करीब बढ़ रहा है।")}
              />
            </Reveal>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {STATS.map((stat, i) => (
                <Reveal key={stat.labelEn} delay={(i % 2) * 0.08}>
                  <div className="bg-navy rounded-2xl p-5 flex flex-col items-center text-center h-full hover:bg-navy-deep transition-colors">
                    <stat.icon className="text-gold mb-3" size={22} />
                    <span className="text-3xl md:text-4xl font-black text-gold block mb-1">
                      <CountUp to={stat.to} suffix={stat.suffix} />
                    </span>
                    <span className="text-[11px] md:text-xs font-semibold uppercase tracking-wide text-white/70">
                      {language === "en" ? stat.labelEn : stat.labelHi}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link href="/about" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-deep text-white font-bold px-6 py-3 rounded-2xl transition-colors text-sm shadow-md">
                {t("See All Our Work", "हमारा सारा काम देखें")} <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
