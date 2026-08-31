"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Handshake,
  MapPin,
  ArrowRight,
  Quote,
} from "lucide-react";
import { FaFacebookF, FaWhatsapp, FaYoutube, FaInstagram } from "react-icons/fa";
import { useApp } from "@/context/AppContext";

const HERO_IMAGES = [
  "/images/hero/1.jpg",
  "/images/hero/2.jpg",
  "/images/hero/3.jpg",
  "/images/hero/4.jpg",
  "/images/hero/5.jpeg",
  "/images/hero/6.jpeg",
  "/images/hero/7.jpg",
  "/images/hero/8.jpeg",
  "/images/hero/9.jpg",
  "/images/hero/10.jpg",
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const { language } = useApp();

  const safeIdx = Number.isFinite(idx)
    ? ((idx % HERO_IMAGES.length) + HERO_IMAGES.length) % HERO_IMAGES.length
    : 0;

  const t = (en: string, hi: string) => (language === "en" ? en : hi);

  const bottomPoints = [
    { icon: FaFacebookF, href: "https://www.facebook.com/DalitDignityJusticeCenter", color: "#1877F2" },
    { icon: FaWhatsapp, href: "https://wa.me/919453645931", color: "#25D366" },
    { icon: FaYoutube, href: "https://www.youtube.com/@ddjcUP", color: "#FF0000" },
    { icon: FaInstagram, href: "https://www.instagram.com/ddjc_up", color: "#E4405F" },
  ];

  const ctas = [
    {
      label: t("I Need Help", "मुझे सहायता चाहिए"),
      href: "/complaint",
      icon: Handshake,
      style: "bg-gold hover:bg-gold-soft text-navy shadow-lg",
    },
    {
      label: t("Find DDJC", "DDJC खोजें"),
      href: "/contact",
      icon: MapPin,
      style: "bg-navy hover:bg-navy-deep text-white shadow-lg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Full-bleed sliding background */}
      <div className="absolute inset-0">
        <div className="flex w-full h-full">
          {HERO_IMAGES.map((src, i) => {
            const offset = i - safeIdx;
            const isVisible = Math.abs(offset) <= 1;
            if (!isVisible) return null;

            return (
              <motion.div
                key={i}
                className="absolute inset-0"
                initial={false}
                animate={{
                  x: offset === 0 ? 0 : offset > 0 ? "100%" : "-100%",
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={src}
                  alt={t("DDJC Community Sabha", "DDJC सामुदायिक सभा")}
                  fill
                  priority={i === safeIdx}
                  loading={i === safeIdx ? "eager" : "lazy"}
                  className="object-cover"
                  sizes="100vw"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Subtle light blue tint on left edge only — ~10% width */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0A2540_0%,#0A2540_10%,transparent_30%)]" />

        {/* Indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={t(`Show image ${i + 1}`, `तस्विर ${i + 1} दिखाएँ`)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === idx ? "w-7 bg-gold" : "w-1.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-5 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 items-center min-h-screen py-12 md:py-16">
          {/* LEFT — content — static */}
          <div className="text-left mt-px">
            <span className="inline-flex items-center gap-2 bg-navy backdrop-blur-md border border-white/25 text-white px-4 py-2 rounded-full text-[11px] md:text-xs font-bold uppercase tracking-[0.18em] mb-6 shadow-lg">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {t("One Centre. Many Doors to Dignity, Justice & Empowerment.", "एक केन्द्र. गरिमा, न्याय और सशक्तिकरण के कई द्वार।")}
            </span>

            <h1 className="text-2xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-5 drop-shadow-lg whitespace-nowrap">
              <span className="text-white">{t("Dignity.", "सम्मान।")}</span>{" "}
              <span className="text-white">{t("Justice.", "न्याय।")}</span>{" "}
              <span className="text-gold">{t("Power.", "शक्ति।")}</span>
            </h1>

            <p className="text-base md:text-xl font-semibold text-white/90 mb-4 drop-shadow-md">
              {t("A Centre where rights become reality.", "एक केन्द्र जहाँ अधिकार हक़ीक़त बनते हैं।")}
            </p>

            <blockquote className="flex items-start gap-3 text-xs md:text-sm text-white font-bold italic mb-8 max-w-xl drop-shadow-md">
              <Quote className="mt-1 text-gold/70 shrink-0" size={14} />
              <span>
                {t("“Until the last person in society is empowered, freedom is incomplete.” — Dr. B.R. Ambedkar", "“जब तक समाज का अंतिम व्यक्ति सशक्त नहीं हो जाता, तब तक स्वतंत्रता अधूरी है।” — डॉ. बी.आर. अम्बेडकर")}
              </span>
            </blockquote>

            <div className="flex flex-row flex-wrap gap-2 sm:gap-3 md:gap-4 mb-6 w-full">
               {ctas.map((cta) => (
                 <Link
                   key={cta.label}
                   href={cta.href}
                   className={`group inline-flex items-center justify-center gap-1.5 w-full sm:w-auto flex-1 min-w-0 px-3 sm:px-4 md:px-6 py-3 md:py-3.5 rounded-2xl text-[11px] sm:text-[13px] md:text-sm font-bold transition-all hover:-translate-y-0.5 hover:scale-[1.03] ${cta.style}`}
                 >
                   <cta.icon size={16} />
                   {cta.label}
                   <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                 </Link>
               ))}
             </div>

               {/* Social media icons */}
               <div className="flex flex-row gap-2 md:gap-3 w-full">
                 {bottomPoints.map((point, i) => (
                   <a
                     key={i}
                     href={point.href}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl border border-white/20 bg-white/90 hover:scale-105 transition-transform"
                   >
                     <point.icon size={24} style={{ color: point.color }} />
                   </a>
                 ))}
               </div>
          </div>
        </div>
      </div>
    </section>
  );
}
