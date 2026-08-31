"use client";

import Image from "next/image";
import { Reveal, SectionHeading } from "./primitives";
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
        <Reveal>
          <SectionHeading
            eyebrow={t("Our Partners", "हमारे साथी")}
            title={t("Friends of DDJC", "DDJC के मित्र")}
            subtitle={t("DDJC is proud to partner & collaborate with following prestigious Donors, Agencies, Institution and Networks for Dalit's Dignity & Justice.", "DDJC दलितों की गरिमा और न्याय के लिए निम्न प्रतिष्ठित दाताओं, एजेंसियों, संस्थानों और नेटवर्क के साथ साझेदारी और सहयोग करने के लिए गर्वित है।")}
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
          {LOGOS.map((src, i) => (
            <Reveal key={i} delay={(i % 4) * 0.08}>
              <div className="flex items-center justify-center p-4 bg-white border border-slate-200 rounded-2xl hover:shadow-md transition-all h-32">
                <Image
                  src={src}
                  alt={`Friend of DDJC ${i + 1}`}
                  width={200}
                  height={120}
                  className="w-full h-full object-contain"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
