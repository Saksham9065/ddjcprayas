"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";

const GALLERY_IMAGES = [
  { src: "/images/gallery/Camp -8.jpeg", alt: "Camp 8" },
  { src: "/images/gallery/Certiificate.jpg", alt: "Certificate" },
  { src: "/images/gallery/Community Meeting 8.jpeg", alt: "Community Meeting 8" },
  { src: "/images/gallery/Community Meeting.jpeg", alt: "Community Meeting" },
  { src: "/images/gallery/DM Meeting - 2.jpeg", alt: "DM Meeting 2" },
  { src: "/images/gallery/gallery1.jpg", alt: "Gallery 1" },
  { src: "/images/gallery/gallery2.jpg", alt: "Gallery 2" },
  { src: "/images/gallery/gallery4.jpg", alt: "Gallery 4" },
  { src: "/images/gallery/IMG20240628161108.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG20240828140543_BURST019.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG20240829135229.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG20240911120006.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG20241116125941.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG20241118131601.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG20241119120936.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG20241119121337.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG20241128123229.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG20241210132008.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG20241210143735.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG20241210151200.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG20241217142146.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG20241217142500.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG20250320161928.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG20250320163658.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG20251224163945.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG20260222130605.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG20260222132758_01.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG20260402114354.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG20260402124411.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG20260402152340.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG20260402154228.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG20260523163202.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG20260524105325.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG20260524105840.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG20260524123703_01.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG20260524123910_01.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG20260530124316.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG20260530131214_01.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG20260530133035.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG20260531134749.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG20260531161926_01.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG-20250417-WA0212.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG-20251220-WA0058.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG-20251224-WA0121.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG-20260524-WA0009.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG-20260524-WA0012.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG_20250408_133609569.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/IMG_20260613_205224.jpg", alt: "Gallery Image" },
  { src: "/images/gallery/Madhaugadh Kotwali(2).jpeg", alt: "Madhaugadh Kotwali" },
  { src: "/images/gallery/Meeting with Jalaun - SDM(1).jpeg", alt: "Meeting with Jalaun SDM" },
  { src: "/images/gallery/Meeting with Jalaun - SWO(5).jpeg", alt: "Meeting with Jalaun SWO" },
  { src: "/images/gallery/Meeting with Kalpi - SDM(1).jpeg", alt: "Meeting with Kalpi SDM" },
  { src: "/images/gallery/Training .jpg", alt: "Training" },
  { src: "/images/gallery/Volunteers Certificate .jpg", alt: "Volunteers Certificate" },
  { src: "/images/gallery/WhatsApp Image 2024-02-11 at 17.30.42.jpeg", alt: "WhatsApp Image Feb 2024" },
  { src: "/images/gallery/WhatsApp Image 2024-12-01 at 22.02.06.jpeg", alt: "WhatsApp Image Dec 2024" },
  { src: "/images/gallery/WhatsApp Image 2025-08-06 at 18.01.21.jpeg", alt: "WhatsApp Image Aug 2025" },
  { src: "/images/gallery/WhatsApp Image 2026-04-07 at 4.40.23 PM (1).jpeg", alt: "WhatsApp Image Apr 2026" },
  { src: "/images/gallery/WhatsApp Image 2026-04-09 at 10.14.13 PM.jpeg", alt: "WhatsApp Image Apr 2026 2" },
  { src: "/images/gallery/WhatsApp Image 2026-04-10 at 7.52.00 PM (4).jpeg", alt: "WhatsApp Image Apr 2026 3" },
  { src: "/images/gallery/WhatsApp Image 2026-04-11 at 11.39.40 PM (3).jpeg", alt: "WhatsApp Image Apr 2026 4" },
  { src: "/images/gallery/WhatsApp Image 2026-06-16 at 12.20.16 AM.jpeg", alt: "WhatsApp Image Jun 2026" },
  { src: "/images/gallery/WhatsApp Image 2026-06-16 at 12.20.26 AM (1).jpeg", alt: "WhatsApp Image Jun 2026 2" },
  { src: "/images/gallery/WhatsApp Image 2026-07-05 at 12.15.45 PM.jpeg", alt: "WhatsApp Image Jul 2026" },
];

export default function GalleryPage() {
  return (
    <div className="bg-white min-h-screen py-16 pt-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-8">
          <Link href="/" className="flex items-center gap-2 text-[#0A2540] font-bold text-sm hover:underline">
            <FaArrowLeft size={12} /> Back to Home
          </Link>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-slate-50 text-[#000000] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block mb-4">
            Photo Gallery
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#0A2540] tracking-tight mb-4">
            Gallery
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Glimpses from our legal camps, village awareness drives, and community gatherings across Bundelkhand.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((img, index) => (
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