"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { Reveal, SectionHeading } from "./primitives";
import { FaPlay, FaArrowRight, FaBullhorn } from "react-icons/fa";

const VIDEOS = [
  { titleEn: "What is Article 17?", titleHi: "अनुच्छेद 17 क्या है?", img: "/images/news/DDJC News - 2.jpeg", duration: "0:58", videoSrc: "/images/video/Article 17.mp4" },
  { titleEn: "What should you do if your rights are violated?", titleHi: "अगर आपके अधिकारों का उल्लंघन हो तो क्या करें?", img: "/images/gallery/Community Meeting 8.jpeg", duration: "1:12", videoSrc: "/images/video/violate.mp4" },
  { titleEn: "SC/ST Prevention of Atrocities Act Explained", titleHi: "SC/ST अत्याचार निवारण अधिनियम समझाया", img: "/images/news/Legal & Leadership Training - 1.jpeg", duration: "1:45", videoSrc: "/images/video/SC.mp4" },
];

export default function YouthHub() {
  const { language } = useApp();
  const isHindi = language === "hi";
  const t = (en: string, hi: string) => (isHindi ? hi : en);

  return (
    <section id="youth" className="py-10 md:py-16 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow={t("For Young People", "युवाओं के लिए")}
            title={t("YOUTH FOR DIGNITY", "युवा सशक्तिकरण")}
            subtitle={t(
              "Know your rights. Know your Constitution. Know your power.",
              "अपने अधिकार जानें। अपना संविधान जानें। अपनी शक्ति जानें।"
            )}
          />
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Youth message */}
          <Reveal>
            <div className="h-full bg-navy rounded-3xl p-8 md:p-10 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-gold/10 blur-3xl" />
              <FaBullhorn className="text-gold mb-5" size={32} />
              <p className="text-2xl md:text-3xl font-black leading-snug mb-2">
                {t("Learn.", "सीखें।")}{" "}
                <span className="text-gold">{t("Speak.", "बोलें।")}</span>{" "}
                {t("Organise.", "संगठित करें।")}{" "}
                <span className="text-gold">{t("Lead.", "नेतृत्व करें।")}</span>
              </p>
              <p className="text-white/70 text-sm leading-relaxed mt-3 mb-7">
                {t(
                  "The Youth Hub builds a generation that understands the Constitution and stands for dignity in every village and campus.",
                  "युवा हब एक ऐसी पीढ़ी का निर्माण करता है जो संविधान को समझती है और हर गाँव और परिसर में गरिमा के लिए खड़ी होती है।"
                )}
              </p>
              <Link
                href="/join/volunteers"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-soft text-navy font-bold px-6 py-3.5 rounded-xl transition-all hover:scale-[1.03] text-sm self-start"
              >
                {t("EXPLORE YOUTH HUB", "युवा हब देखें")} <FaArrowRight size={14} />
              </Link>
            </div>
          </Reveal>

          {/* 60-Second Rights */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 md:p-7">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-black text-navy">{t("60-SECOND RIGHTS", "60-सेकंड अधिकार")}</h3>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {t("Watch & Share", "देखें और साझा करें")}
                </span>
              </div>
              <div className="space-y-4">
                {VIDEOS.map((v) => (
                  <a
                    key={v.titleEn}
                    href={v.videoSrc ? v.videoSrc : "/resources"}
                    target={v.videoSrc ? "_blank" : undefined}
                    rel={v.videoSrc ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-2xl border border-slate-100 hover:border-gold/50 hover:bg-slate-50 p-3 transition-all"
                  >
                    <div className="relative w-24 h-16 rounded-xl overflow-hidden shrink-0 bg-slate-200">
                      <img src={v.img} alt={v.titleEn} className="h-full w-full object-cover" />
                      <span className="absolute inset-0 flex items-center justify-center bg-navy/30 group-hover:bg-navy/40 transition-colors">
                        <span className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-navy">
                          <FaPlay size={11} className="ml-0.5" />
                        </span>
                      </span>
                      <span className="absolute bottom-1 right-1 bg-black/70 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                        {v.duration}
                      </span>
                    </div>
                    <p className="text-sm font-bold text-navy leading-snug group-hover:text-gold transition-colors">
                      {t(v.titleEn, v.titleHi)}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
