"use client";

import React from "react";
import Link from "next/link";

const SECTIONS = [
  {
    title: "हमारे बारे में",
    links: [
      { name: "हमारे बारे में", href: "/about" },
      { name: "टीम", href: "/team" },
      { name: "संसाधन", href: "/resources" },
    ],
  },
  {
    title: "हमारा काम",
    links: [
      { name: "अदालत में", href: "/work/in-court" },
      { name: "अदालत के बाहर", href: "/work/out-court" },
      { name: "कानूनी सहायता", href: "/legal-aid" },
    ],
  },
  {
    title: "मीडिया",
    links: [
      { name: "समाचार", href: "/media/news" },
      { name: "फोटो गैलरी", href: "/media/gallery" },
      { name: "बदलाव की कहानियाँ", href: "/media/stories" },
    ],
  },
  {
    title: "हमसे जुड़ें",
    links: [
      { name: "नौकरी / करियर", href: "/join/careers" },
      { name: "इन्टर्नशिप", href: "/join/internships" },
      { name: "स्वयंसेवक", href: "/join/volunteers" },
    ],
  },
  {
    title: "समर्थन",
    links: [
      { name: "शिकायत दर्ज करें", href: "/complaint" },
      { name: "संपर्क करें", href: "/contact" },
      { name: "दान करें", href: "/donate" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="bg-white min-h-screen py-10 pt-16 md:py-16 md:pt-24">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="bg-slate-50 text-[#000000] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block mb-4">
            साइटमैप
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight mb-4 md:mb-6">
            वेबसाइट मानचित्र
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            DDJC वेबसाइट के सभी पृष्ठों और संसाधनों की सूची।
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {SECTIONS.map((section) => (
            <div key={section.title} className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200">
              <h3 className="text-lg font-black text-[#0A2540] mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 hover:text-gold transition-colors inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-gold transition-colors" />
                      {link.name}
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
            होम पर जाएँ
          </Link>
        </div>
      </div>
    </div>
  );
}
