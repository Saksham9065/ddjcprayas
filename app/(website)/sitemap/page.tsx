"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

const SECTIONS = [
  {
    titleEn: "About",
    titleHi: "हमारे बारे में",
    links: [
      { en: "About Us", hi: "हमारे बारे में", href: "/about" },
      { en: "Team", hi: "टीम", href: "/team" },
      { en: "Resources", hi: "संसाधन", href: "/resources" },
    ],
  },
  {
    titleEn: "Our Work",
    titleHi: "हमारा काम",
    links: [
      { en: "In the Court", hi: "अदालत में", href: "/work/in-court" },
      { en: "Out of the Court", hi: "अदालत के बाहर", href: "/work/out-court" },
      { en: "Legal Aid", hi: "कानूनी सहायता", href: "/legal-aid" },
    ],
  },
  {
    titleEn: "Media",
    titleHi: "मीडिया",
    links: [
      { en: "News", hi: "समाचार", href: "/media/news" },
      { en: "Photo Gallery", hi: "फोटो गैलरी", href: "/media/gallery" },
      { en: "Stories of Change", hi: "बदलाव की कहानियाँ", href: "/media/stories" },
    ],
  },
  {
    titleEn: "Join Us",
    titleHi: "हमसे जुड़ें",
    links: [
      { en: "Jobs / Careers", hi: "नौकरी / करियर", href: "/join/careers" },
      { en: "Internships", hi: "इन्टर्नशिप", href: "/join/internships" },
      { en: "Volunteers", hi: "स्वयंसेवक", href: "/join/volunteers" },
    ],
  },
  {
    titleEn: "Support",
    titleHi: "समर्थन",
    links: [
      { en: "File a Complaint", hi: "शिकायत दर्ज करें", href: "/complaint" },
      { en: "Contact Us", hi: "संपर्क करें", href: "/contact" },
      { en: "Donate", hi: "दान करें", href: "/donate" },
    ],
  },
];

export default function SitemapPage() {
  const { language } = useApp();
  const isHindi = language === "hi";

  return (
    <div className="bg-white min-h-screen py-10 pt-16 md:py-16 md:pt-24">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="bg-slate-50 text-[#000000] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block mb-4">
            {isHindi ? "साइटमैप" : "Sitemap"}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight mb-4 md:mb-6">
            {isHindi ? "वेबसाइट मानचित्र" : "Website Sitemap"}
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            {isHindi
              ? "DDJC वेबसाइट के सभी पृष्ठों और संसाधनों की सूची।"
              : "A complete list of all pages and resources on the DDJC website."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {SECTIONS.map((section) => (
            <div key={section.titleEn} className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200">
              <h3 className="text-lg font-black text-[#0A2540] mb-4">
                {isHindi ? section.titleHi : section.titleEn}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 hover:text-gold transition-colors inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-gold transition-colors" />
                      {isHindi ? link.hi : link.en}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#0A2540] hover:bg-slate-600 text-white font-bold px-6 py-3.5 rounded-xl transition-colors text-sm"
          >
            {isHindi ? "होम पर जाएँ" : "Back to Home"} 
          </Link>
        </div>
      </div>
    </div>
  );
}
