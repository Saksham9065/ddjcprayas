"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Reveal, SectionHeading } from "./primitives";
import {
  Scale,
  BookOpen,
  FileSignature,
  Venus,
  Baby,
  Megaphone,
  Handshake,
  ArrowRight,
} from "lucide-react";

interface Category {
  en: string;
  hi: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  href: string;
  color: string;
}

const CATEGORIES: Category[] = [
  { en: "Justice & Legal Support", hi: "न्याय और कानूनी सहायता", icon: Scale, href: "/work/in-court", color: "#0A2540" },
  { en: "Rights & Constitution", hi: "अधिकार और संविधान", icon: BookOpen, href: "/resources", color: "#F5B400" },
  { en: "Government Schemes & Entitlements", hi: "सरकारी योजनाएँ और अधिकार", icon: FileSignature, href: "/resources", color: "#0EA5A4" },
  { en: "Women's Dignity & Safety", hi: "महिला सम्मान और सुरक्षा", icon: Venus, href: "/work/out-court", color: "#DB2777" },
  { en: "Youth Leadership", hi: "युवा नेतृत्व", icon: Baby, href: "/join/volunteers", color: "#0EA5E9" },
  { en: "Voice & Advocacy", hi: "आवाज़ और वकालत", icon: Megaphone, href: "/media/stories", color: "#7C3AED" },
  { en: "Community Empowerment", hi: "सामुदायिक सशक्तिकरण", icon: Handshake, href: "/work/out-court", color: "#059669" },
];

const RADIUS = 39;

function polar(i: number, total: number) {
  const angle = (-90 + i * (360 / total)) * (Math.PI / 180);
  return { x: 50 + RADIUS * Math.cos(angle), y: 50 + RADIUS * Math.sin(angle) };
}

export default function ManyPathways() {
  const positions = CATEGORIES.map((_, i) => polar(i, CATEGORIES.length));

  return (
    <section id="pathways" className="py-10 md:py-16 bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="यह कैसे काम करता है"
            title="एक केन्द्र. कई रास्ते."
            subtitle="DDJC एक ही छत के नीचे सामुदायिक सहायता के कई रूपों को जोड़ता है—हर व्यक्ति के लिए न्याय, अधिकार, सेवाएँ और अवसर।"
          />
        </Reveal>

        {/* Desktop hub-and-spoke */}
        <div className="hidden md:block relative mx-auto mt-10" style={{ maxWidth: 800, aspectRatio: "1 / 1" }}>
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {positions.map((p, i) => (
              <line key={i} x1={50} y1={50} x2={p.x} y2={p.y} stroke="#0A2540" strokeOpacity={0.16} strokeWidth={1.5} strokeDasharray="2 3" vectorEffect="non-scaling-stroke" />
            ))}
            <circle cx={50} cy={50} r={RADIUS} fill="none" stroke="#F5B400" strokeOpacity={0.45} strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
          </svg>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-44 h-44 rounded-full bg-[#2563EB] flex items-center justify-center shadow-2xl shadow-navy/30">
              <div className="w-40 h-40 rounded-full bg-navy overflow-hidden ring-4 ring-white/80">
                <Image
                  src="/images/logo/ddjc-logo.jpg"
                  alt="DDJC Logo"
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {CATEGORIES.map((cat, i) => {
            const p = positions[i];
            return (
              <Link
                key={cat.en}
                href={cat.href}
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
                className="group absolute -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center text-center w-44"
              >
                <span
                  className="w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg"
                  style={{ backgroundColor: `${cat.color}14`, color: cat.color, boxShadow: `0 8px 24px ${cat.color}22` }}
                >
                  <cat.icon size={28} />
                </span>
                <span className="mt-3 text-xs lg:text-sm font-bold text-navy leading-snug group-hover:text-gold transition-colors">
                  {cat.hi}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Mobile stacked layout */}
        <div className="md:hidden mt-12 flex flex-col items-center gap-8">
          <div className="w-32 h-32 rounded-full bg-navy text-white shadow-xl flex flex-col items-center justify-center text-center ring-4 ring-white">
            <span className="text-2xl font-black tracking-tight">DDJC</span>
            <span className="text-[9px] font-semibold text-gold mt-1 px-3 leading-tight">
              {"दलित सम्मान व न्याय केन्द्र"}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.en}
                href={cat.href}
                className="group bg-white border border-slate-200 rounded-2xl p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all"
              >
                <span
                  className="w-14 h-14 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${cat.color}14`, color: cat.color }}
                >
                  <cat.icon size={22} />
                </span>
                <span className="mt-2 text-sm font-bold text-navy leading-snug">{cat.hi}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link href="/about" className="inline-flex items-center gap-2 text-navy font-bold text-sm hover:text-gold transition-colors">
            {"हमारा सारा काम देखें"} <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
}
