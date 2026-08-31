"use client";

import Image from "next/image";
import { SectionHeading } from "./primitives";
import { useApp } from "@/context/AppContext";

const LOGOS = [
  "/images/friends%20logo/image.png",
  "/images/friends%20logo/image%20copy.png",
  "/images/friends%20logo/image%20copy%202.png",
  "/images/friends%20logo/image%20copy%203.png",
  "/images/friends%20logo/image%20copy%204.png",
  "/images/friends%20logo/image%20copy%205.png",
  "/images/friends%20logo/image%20copy%206.jpeg",
  "/images/friends%20logo/image%20copy%207.png",
];

export default function FriendsOfDDJC() {
  const { language } = useApp();

  const t = (en: string, hi: string) => (language === "en" ? en : hi);

  return (
    <section id="friends" className="py-10 md:py-16 bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <SectionHeading
          eyebrow={t("Our Partners", "हमारे साथी")}
          title={t("Friends of DDJC", "DDJC के मित्र")}
          subtitle={t("DDJC is proud to partner & collaborate with following prestigious Donors, Agencies, Institution and Networks for Dalit's Dignity & Justice.", "DDJC दलितों की गरिमा और न्याय के लिए निम्न प्रतिष्ठित दाताओं, एजेंसियों, संस्थानों और नेटवर्क के साथ साझेदारी और सहयोग करने के लिए गर्वित है।")}
        />

        <div className="mt-10 overflow-hidden">
          <div className="marquee-container flex gap-6">
            {[...LOGOS, ...LOGOS].map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center p-4 bg-white border border-slate-200 rounded-2xl hover:shadow-md transition-all w-40 h-28"
              >
                <Image
                  src={src}
                  alt={`Friend of DDJC ${(i % LOGOS.length) + 1}`}
                  width={160}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          animation: marquee 20s linear infinite;
        }
        .marquee-container:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
