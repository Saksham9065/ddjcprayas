"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

export default function SitemapPage() {
  const { language } = useApp();

  const SECTIONS = [
    {
      title: language === "en" ? "About Us" : "हमारे बारे में",
      links: [
        { name: language === "en" ? "About Us" : "हमारे बारे में", href: "/about" },
        { name: language === "en" ? "Team" : "टीम", href: "/team" },
        { name: language === "en" ? "Resources" : "संसाधन", href: "/resources" },
      ],
    },
    {
      title: language === "en" ? "Our Work" : "हमारा काम",
      links: [
        { name: language === "en" ? "In Court" : "अदालत में", href: "/work/in-court" },
        { name: language === "en" ? "Out of Court" : "अदालत के बाहर", href: "/work/out-court" },
        { name: language === "en" ? "Legal Aid" : "कानूनी सहायता", href: "/legal-aid" },
      ],
    },
    {
      title: language === "en" ? "Media" : "मीडिया",
      links: [
        { name: language === "en" ? "News" : "समाचार", href: "/media/news" },
        { name: language === "en" ? "Photo Gallery" : "फोटो गैलरी", href: "/media/gallery" },
        { name: language === "en" ? "Stories of Change" : "बदलाव की कहानियाँ", href: "/media/stories" },
      ],
    },
    {
      title: language === "en" ? "Join Us" : "हमसे जुड़ें",
      links: [
        { name: language === "en" ? "Careers" : "नौकरी / करियर", href: "/join/careers" },
        { name: language === "en" ? "Internships" : "इन्टर्नशिप", href: "/join/internships" },
        { name: language === "en" ? "Volunteers" : "स्वयंसेवक", href: "/join/volunteers" },
      ],
    },
    {
      title: language === "en" ? "Support" : "समर्थन",
      links: [
        { name: language === "en" ? "File Complaint" : "शिकायत दर्ज करें", href: "/complaint" },
        { name: language === "en" ? "Contact Us" : "संपर्क करें", href: "/contact" },
        { name: language === "en" ? "Donate" : "दान करें", href: "/donate" },
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen py-10 pt-16 md:py-16 md:pt-24">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="bg-slate-50 text-[#000000] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block mb-4">
            {language === "en" ? "Sitemap" : "साइटमैप"}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight mb-4 md:mb-6">
            {language === "en" ? "Website Map" : "वेबसाइट मानचित्र"}
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            {language === "en" ? "List of all pages and resources on the DDJC website." : "DDJC वेबसाइट के सभी पृष्ठों और संसाधनों की सूची।"}
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
            {language === "en" ? "Go to Home" : "होम पर जाएँ"}
          </Link>
        </div>
      </div>
    </div>
  );
}
