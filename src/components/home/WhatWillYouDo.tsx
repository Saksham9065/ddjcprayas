"use client";

import React from "react";
import Link from "next/link";
import { Reveal, SectionHeading } from "./primitives";
import {
  Handshake,
  HeartHandshake,
  BookOpen,
  Megaphone,
  Heart,
  Baby,
  ArrowRight,
} from "lucide-react";

interface Action {
  titleEn: string;
  titleHi: string;
  descEn: string;
  descHi: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  href: string;
  color: string;
}

const ACTIONS: Action[] = [
  { titleEn: "I Need Help", titleHi: "मुझे मदद चाहिए", descEn: "Reach a centre for legal, rights or counselling support.", descHi: "कानूनी, अधिकार या परामर्श सहायता के लिए केन्द्र से जुड़ें।", icon: HeartHandshake, href: "/complaint", color: "#0A2540" },
  { titleEn: "I Want to Become Part of DDJC", titleHi: "मैं DDJC का हिस्सा बनना चाहता हूँ", descEn: "Give your time and skills to the movement.", descHi: "आंदोलन को अपना समय और कौशल दें।", icon: Handshake, href: "/join/careers", color: "#F5B400" },
  { titleEn: "I Want to Learn", titleHi: "मैं सीखना चाहता हूँ", descEn: "Explore guides on rights, law and schemes.", descHi: "अधिकार, कानून और योजनाओं पर मार्गदर्शिकाएँ देखें।", icon: BookOpen, href: "/resources", color: "#0EA5A4" },
  { titleEn: "I Want to Raise Awareness", titleHi: "मैं जागरूकता फैलाना चाहता हूँ", descEn: "Share stories, campaigns and resources.", descHi: "कहानियाँ, अभियान और संसाधन साझा करें।", icon: Megaphone, href: "/contact", color: "#7C3AED" },
  { titleEn: "I Want to Support DDJC", titleHi: "मैं DDJC का समर्थन करना चाहता हूँ", descEn: "Fund the centres and amplify our reach.", descHi: "केन्द्रों को फंड करें और हमारी पहुँच बढ़ाएँ।", icon: Heart, href: "/donate", color: "#DB2777" },
  { titleEn: "I Am a Young Person", titleHi: "मैं एक युवा हूँ", descEn: "Join the Youth Hub and lead change.", descHi: "युवा हब से जुड़ें और बदलाव का नेतृत्व करें।", icon: Baby, href: "/join/volunteers", color: "#059669" },
];

export default function WhatWillYouDo() {
  return (
    <section id="get-involved" className="py-10 md:py-16 bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="पहला कदम उठाएँ"
            title="आप क्या करेंगे?"
            subtitle="चाहे आप बदलाव का हिस्सा कैसे बनना चाहते हैं—DDJC में आपके लिए एक जगह है।"
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ACTIONS.map((a, i) => (
            <Reveal key={a.titleEn} delay={(i % 3) * 0.07}>
              <Link
                href={a.href}
                className="group h-full bg-slate-50 border border-slate-200 rounded-3xl p-7 flex flex-col hover:border-gold hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <span
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-sm mb-5 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: a.color }}
                >
                  <a.icon size={22} />
                </span>
                <h3 className="text-lg font-bold text-navy mb-2">{a.titleHi}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{a.descHi}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-navy group-hover:text-gold transition-colors">
                  {"आगे बढ़ें"} <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
