"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Reveal, SectionHeading } from "./primitives";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useApp } from "@/context/AppContext";

interface Story {
  name: string;
  roleEn: string;
  roleHi: string;
  quoteEn: string;
  quoteHi: string;
  img: string;
}

const STORIES: Story[] = [
  {
    name: "Savitri Bai",
    roleEn: "Village Worker",
    roleHi: "ग्राम कार्यकर्ता",
    quoteEn:
      "The centre helped me understand my rights and stand up against discrimination in my own village. Today I help other women do the same.",
    quoteHi:
      "केन्द्र ने मुझे मेरे अधिकार समझने और अपने गाँव में भेदभाव के खिलाफ खड़े होने में मदद की। आज मैं अन्य महिलाओं को भी ऐसा करने में मदद करती हूँ।",
    img: "/images/team/usha.jpg",
  },
  {
    name: "Raju",
    roleEn: "Youth Volunteer",
    roleHi: "युवा स्वयंसेवक",
    quoteEn:
      "I joined the youth hub to learn about the Constitution. Now I organise awareness camps in my block and lead other young people.",
    quoteHi:
      "मैं संविधान के बारे में जानने के लिए युवा हब से जुड़ा। अब मैं अपने ब्लॉक में जागरूकता शिविर लगाता हूँ और अन्य युवाओं का नेतृत्व करता हूँ।",
    img: "/images/team/sachin.jpg",
  },
  {
    name: "Pooja",
    roleEn: "Student Leader",
    roleHi: "छात्र नेता",
    quoteEn:
      "DDJC guided me to apply for the scholarship I didn't know existed. Education became a real possibility for my family.",
    quoteHi:
      "DDJC ने मुझे वह छात्रवृत्ति के लिए आवेदन करने में मार्गदर्शन दिया जिसके बारे में मुझे पता ही नहीं था। शिक्षा मेरे परिवार के लिए सच्चाई बन गई।",
    img: "/images/team/anita.jpg",
  },
  {
    name: "Ramdas",
    roleEn: "Farmer",
    roleHi: "किसान",
    quoteEn:
      "When my land papers were challenged, the centre connected me to legal aid. I kept my land and my dignity.",
    quoteHi:
      "जब मेरी ज़मीन के काग़ज़ात को चुनौती मिली, केन्द्र ने मुझे कानूनी सहायता से जोड़ा। मैंने अपनी ज़मीन और अपनी गरिमा दोनों बचाई।",
    img: "/images/team/pradeep.jpg",
  },
];

export default function Stories() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { language } = useApp();

  const t = (en: string, hi: string) => (language === "en" ? en : hi);

  const scrollByCard = (dir: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("div");
    const width = card ? card.offsetWidth + 24 : 320;
    track.scrollBy({ left: dir * width, behavior: "smooth" });
  };

  return (
    <section id="stories" className="py-10 md:py-16 bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow={t("Voices", "आवाज़ें")}
              title={t("Stories of Change", "बदलाव की कहानियाँ")}
              subtitle={t("Real people. Real stories. Real impact.", "असली लोग। असली कहानियाँ। असली प्रभाव।")}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex gap-2">
              <button
                onClick={() => scrollByCard(-1)}
                aria-label={t("Previous stories", "पिछली कहानियाँ")}
                className="w-11 h-11 rounded-full border border-slate-200 text-navy hover:bg-navy hover:text-white transition-colors flex items-center justify-center"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scrollByCard(1)}
                aria-label={t("Next stories", "अगली कहानियाँ")}
                className="w-11 h-11 rounded-full border border-slate-200 text-navy hover:bg-navy hover:text-white transition-colors flex items-center justify-center"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </Reveal>
        </div>

        <div
          ref={trackRef}
          className="mt-10 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {STORIES.map((story) => (
            <div
              key={story.name}
              className="snap-start shrink-0 w-[85%] sm:w-[48%] lg:w-[31%] bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <p className="text-sm text-slate-600 leading-relaxed mb-5 line-clamp-4">
                  “{language === "en" ? story.quoteEn : story.quoteHi}”
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-navy text-gold flex items-center justify-center font-bold text-sm">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-navy text-sm leading-tight">{story.name}</p>
                    <p className="text-xs text-slate-500">{language === "en" ? story.roleEn : story.roleHi}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/media/stories"
            className="inline-flex items-center gap-2 border border-navy text-navy hover:bg-navy hover:text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-colors"
          >
            {t("Read More Stories", "और कहानियाँ पढ़ें")} <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}
