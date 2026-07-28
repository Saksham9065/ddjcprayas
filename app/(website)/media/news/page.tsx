"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import { useApp } from "@/context/AppContext";

const NEWS_IMAGES = [
  { src: "/images/news/Advocate Meeting News- आज की पहचान.jpeg", alt: "Advocate Meeting News - Aaj Ki Pehchaan" },
  { src: "/images/news/Advocate Meeting News- परिधि समाचार.jpeg", alt: "Advocate Meeting News - Paridhi Samachar" },
  { src: "/images/news/Advocate Meeting News- यूथ इंडिया.jpeg", alt: "Advocate Meeting News - Youth India" },
  { src: "/images/news/Advocate Meeting News- स्वतंत्र भारत.jpeg", alt: "Advocate Meeting News - Swatantra Bharat" },
  { src: "/images/news/Case Study News.jpeg", alt: "Case Study News" },
  { src: "/images/news/DDJC News - 2.jpeg", alt: "DDJC News 2" },
  { src: "/images/news/DDJC News - 3.jpeg", alt: "DDJC News 3" },
  { src: "/images/news/DDJC News - 4.jpeg", alt: "DDJC News 4" },
  { src: "/images/news/DDJC News - 7.jpeg", alt: "DDJC News 7" },
  { src: "/images/news/FB_IMG_1746865199215.jpg", alt: "FB Image 1" },
  { src: "/images/news/FB_IMG_1746865205794.jpg", alt: "FB Image 2" },
  { src: "/images/news/FB_IMG_1746865247223.jpg", alt: "FB Image 3" },
  { src: "/images/news/FB_IMG_1746865257388.jpg", alt: "FB Image 4" },
  { src: "/images/news/FB_IMG_1746865262041.jpg", alt: "FB Image 5" },
  { src: "/images/news/Legal & Leadership Training - 1.jpeg", alt: "Legal & Leadership Training 1" },
  { src: "/images/news/Legal & Leadership Training - 2.jpeg", alt: "Legal & Leadership Training 2" },
  { src: "/images/news/Legal & Leadership Training - 4.jpeg", alt: "Legal & Leadership Training 4" },
  { src: "/images/news/Meeting with SWO - 3.jpeg", alt: "Meeting with SWO 3" },
  { src: "/images/news/News - 1.jpg", alt: "News 1" },
  { src: "/images/news/News - 4.jpg", alt: "News 4" },
  { src: "/images/news/News - DM Memo 1.jpeg", alt: "News - DM Memo 1" },
  { src: "/images/news/News - DM Memo 3.jpeg", alt: "News - DM Memo 3" },
  { src: "/images/news/News - DM Memo 4.jpeg", alt: "News - DM Memo 4" },
  { src: "/images/news/News-Advocate Meeting.jpeg", alt: "News - Advocate Meeting" },
  { src: "/images/news/WhatsApp Image 2025-05-07 at 10.56.07.jpeg", alt: "WhatsApp Image May 2025" },
  { src: "/images/news/WhatsApp Image 2026-04-02 at 8.27.00 AM.jpeg", alt: "WhatsApp Image Apr 2026" },
  { src: "/images/news/WhatsApp Image 2026-04-15 at 3.20.27 PM - Copy.jpeg", alt: "WhatsApp Image Apr 2026 Copy" },
  { src: "/images/news/WhatsApp Image 2026-04-15 at 8.15.12 AM - Copy.jpeg", alt: "WhatsApp Image Apr 2026 Copy 2" },
  { src: "/images/news/WhatsApp Image 2026-04-15 at 8.57.11 AM.jpeg", alt: "WhatsApp Image Apr 2026 3" },
  { src: "/images/news/WhatsApp Image 2026-05-01 at 7.42.16 AM.jpeg", alt: "WhatsApp Image May 2026" },
  { src: "/images/news/WhatsApp Image 2026-05-02 at 9.30.32 AM.jpeg", alt: "WhatsApp Image May 2026 2" },
  { src: "/images/news/WhatsApp Image 2026-05-02 at 9.32.11 AM.jpeg", alt: "WhatsApp Image May 2026 3" },
  { src: "/images/news/WhatsApp Image 2026-05-14 at 9.56.30 AM (1) - Copy.jpeg", alt: "WhatsApp Image May 2026 Copy" },
  { src: "/images/news/WhatsApp Image 2026-05-19 at 2.34.24 PM.jpeg", alt: "WhatsApp Image May 2026 4" },
  { src: "/images/news/WhatsApp Image 2026-05-19 at 2.34.25 PM (2).jpeg", alt: "WhatsApp Image May 2026 5" },
  { src: "/images/news/WhatsApp Image 2026-05-19 at 2.34.25 PM.jpeg", alt: "WhatsApp Image May 2026 6" },
  { src: "/images/news/WhatsApp Image 2026-06-14 at 11.44.12 PM.jpeg", alt: "WhatsApp Image Jun 2026" },
];

export default function NewsPage() {
  const { language } = useApp();
  const isHindi = language === "hi";

  return (
    <div className="bg-white min-h-screen py-16 pt-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-8">
          <Link href="/" className="flex items-center gap-2 text-[#0A2540] font-bold text-sm hover:underline">
            <FaArrowLeft size={12} /> {isHindi ? "होम पर वापस जाएँ" : "Back to Home"}
          </Link>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-slate-50 text-[#000000] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block mb-4">
            {isHindi ? "प्रेस और मीडिया" : "Press & Media"}
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#0A2540] tracking-tight mb-4">
            {isHindi ? "समाचार और प्रेस विज्ञप्तियाँ" : "News & Press Releases"}
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            {isHindi ? "हमारे नवीनतम प्रेस कवरेज और फील्ड रिपोर्ट्स से अपडेट रहें।" : "Stay updated with our latest press coverage and field reports."}
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {NEWS_IMAGES.map((img, index) => (
            <div
              key={index}
              className="break-inside-avoid rounded-2xl overflow-hidden bg-white shadow-lg"
            >
              <Image
                src={img.src}
                alt={img.alt}
                className="w-full h-auto block object-contain"
                width={600}
                height={400}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}