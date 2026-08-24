"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { Reveal, SectionHeading } from "./primitives";
import {
  FaBalanceScale,
  FaBookOpen,
  FaFileSignature,
  FaVenus,
  FaUserGraduate,
  FaBullhorn,
  FaUsers,
} from "react-icons/fa";

interface Item {
  en: string;
  hi: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  href: string;
}

const ITEMS: Item[] = [
  { en: "Justice & Legal Support", hi: "न्याय और कानूनी सहायता", icon: FaBalanceScale, color: "#0A2540", href: "/work/in-court" },
  { en: "Rights & Constitution", hi: "अधिकार और संविधान", icon: FaBookOpen, color: "#0EA5A4", href: "/resources" },
  { en: "Government Schemes & Entitlements", hi: "सरकारी योजनाएँ और अधिकार", icon: FaFileSignature, color: "#DB2777", href: "/pdf/_Government Schemes.pdf" },
  { en: "Women's Dignity & Safety", hi: "महिलाओं की गरिमा और सुरक्षा", icon: FaVenus, color: "#059669", href: "/work/out-court" },
  { en: "Youth Leadership", hi: "युवा नेतृत्व", icon: FaUserGraduate, color: "#0EA5E9", href: "/join/volunteers" },
  { en: "Voice & Advocacy", hi: "आवाज़ और वकालत", icon: FaBullhorn, color: "#F5B400", href: "/media/stories" },
  { en: "Community Empowerment", hi: "सामुदायिक सशक्तिकरण", icon: FaUsers, color: "#6366F1", href: "/about" },
];

export default function HowItWorks() {
  const { language } = useApp();
  const isHindi = language === "hi";
  const t = (en: string, hi: string) => (isHindi ? hi : en);

  return (
    <section id="how" className="py-10 md:py-16 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow={t("One Centre", "एक केन्द्र")}
            title={t("Many Pathways", "कई मार्ग")}
            subtitle={t(
              "DDJC brings many forms of community support together under one roof — justice, rights, services and opportunities for every person who walks through the door.",
              "DDJC एक छत के नीचे सामुदायिक समर्थन के कई रूपों को एक साथ लाता है — न्याय, अधिकार, सेवाएँ और हर व्यक्ति के लिए अवसर जो द्वार पर आते हैं।"
            )}
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((item, i) => (
            <Reveal key={item.en} delay={(i % 3) * 0.08}>
              <Link
                href={item.href}
                target={item.href.startsWith("/pdf/") ? "_blank" : undefined}
                rel={item.href.startsWith("/pdf/") ? "noopener noreferrer" : undefined}
                className="block relative bg-white border border-slate-200 rounded-3xl p-7 h-full shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center gap-4 mb-5">
                  <span
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-sm"
                    style={{ backgroundColor: item.color }}
                  >
                    <item.icon size={22} />
                  </span>
                  <h3 className="text-xl font-bold text-navy">{t(item.en, item.hi)}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
