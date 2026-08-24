"use client";

import React from "react";
import Link from "next/link";
import { Reveal, SectionHeading } from "./primitives";
import {
  BookOpen,
  Scale,
  Venus,
  Wrench,
  FileSignature,
  Gavel,
  Shield,
  GraduationCap,
  Home,
  Lock,
  ArrowRight,
} from "lucide-react";
import { useApp } from "@/context/AppContext";

interface Resource {
  en: string;
  hi: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  href: string;
}

const RESOURCES: Resource[] = [
  { en: "Constitution 101", hi: "संविधान 101", icon: BookOpen, href: "/pdf/Constitution 101 (1).pdf" },
  { en: "Dalit Rights", hi: "दलित अधिकार", icon: Scale, href: "/pdf/Dalit Rights.pdf" },
  { en: "Women & Girls", hi: "महिलाएँ और बालिकाएँ", icon: Venus, href: "/pdf/Women & Girls.pdf" },
  { en: "Workers' Rights", hi: "श्रमिक अधिकार", icon: Wrench, href: "/pdf/Workers' Rights  (1).pdf" },
  { en: "Government Schemes", hi: "सरकारी योजनाएँ", icon: FileSignature, href: "/pdf/_Government Schemes.pdf" },
  { en: "Legal Help", hi: "कानूनी सहायता", icon: Gavel, href: "/pdf/Legal Help.pdf" },
  { en: "Police & FIR", hi: "पुलिस और एफ.आई.आर.", icon: Shield, href: "/pdf/Police & FIR.pdf" },
  { en: "Scholarships & Education", hi: "छात्रवृत्ति और शिक्षा", icon: GraduationCap, href: "/pdf/Scholarships & Education.pdf" },
  { en: "Land & Housing", hi: "ज़मीन और आवास", icon: Home, href: "/pdf/_Land & Housing.pdf" },
  { en: "Digital Safety", hi: "डिजिटल सुरक्षा", icon: Lock, href: "/pdf/Digital Safety.pdf" },
];

export default function KnowYourRights() {
  const { language } = useApp();

  const t = (en: string, hi: string) => (language === "en" ? en : hi);

  return (
    <section id="know-your-rights" className="py-10 md:py-16 bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow={t("Knowledge is Power", "ज्ञान ही शक्ति है")}
            title={t("Know Your Rights", "अपने अधिकार जानें")}
            subtitle={t("Guides and tools in simple language to help you understand and claim your rights.", "सरल भाषा में मार्गदर्शिकाएँ और उपकरण जो आपको आपके अधिकार समझने और माँगने में मदद करते हैं।")}
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {RESOURCES.map((r, i) => (
            <Reveal key={r.en} delay={(i % 5) * 0.06}>
              <Link
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group h-full bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col items-center text-center hover:border-gold hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <span className="w-14 h-14 rounded-2xl bg-white border border-slate-200 text-navy group-hover:bg-gold group-hover:text-navy group-hover:border-gold flex items-center justify-center transition-colors mb-3">
                  <r.icon size={22} />
                </span>
                <span className="text-sm font-bold text-navy leading-snug">{language === "en" ? r.en : r.hi}</span>
                <span className="mt-2 text-[11px] font-semibold text-slate-400 group-hover:text-gold transition-colors inline-flex items-center gap-1">
                  {t("Learn More", "और जानें")} <ArrowRight size={10} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 text-center">
            <p className="text-slate-600 text-sm md:text-base mb-5">
              {t("Explore all resources in lessons, videos, audio and more.", "पाठ, वीडियो, ऑडियो और बहुत कुछ में सभी संसाधन देखें।")}
            </p>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-deep text-white font-bold px-6 py-3.5 rounded-xl transition-colors text-sm"
            >
              {t("Go to Knowledge Centre", "ज्ञान केन्द्र पर जाएँ")} <ArrowRight size={13} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
