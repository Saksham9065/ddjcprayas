"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { Reveal, SectionHeading } from "./primitives";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useApp } from "@/context/AppContext";

interface Story {
  id: number;
  name: string;
  location: string;
  summaryEn: string;
  summaryHi: string;
  img: string;
}

const STORIES: Story[] = [
  {
    id: 1,
    name: "Tota Kumari",
    location: "Harsinghpur, Jalaun, Uttar Pradesh",
    summaryEn:
      "A Dalit mother fought for justice after her minor daughter was assaulted.",
    summaryHi:
      "एक दलित माँ ने अपनी नाबालिग बेटी पर हमले के बाद न्याय के लिए संघर्ष किया।",
    img: "/images/team/usha.jpg",
  },
  {
    id: 2,
    name: "Goldy Devi",
    location: "Nibhahana, Chambal ravines, Jalaun",
    summaryEn:
      "A young Dalit woman aspiring to be a doctor survived an attempted assault.",
    summaryHi:
      "डॉक्टर बनने का सपना देखने वाली दलित युवती हमले के प्रयास से बची।",
    img: "/images/team/anita.jpg",
  },
  {
    id: 3,
    name: "Vijay Valmiki",
    location: "Valmiki Nagar, Jalaun, Uttar Pradesh",
    summaryEn:
      "From sanitation work to studying law, Vijay became a community advocate.",
    summaryHi:
      "सफाई कार्य से कानून की पढ़ाई तक, विजय समुदाय के लिए आवाज बने।",
    img: "/images/team/sachin.jpg",
  },
  {
    id: 4,
    name: "Ayush",
    location: "Bajida, Uttar Pradesh",
    summaryEn:
      "Despite discrimination, Ayush built a coaching centre and became a PLV.",
    summaryHi:
      "भेदभाव के बावजूद आयुष ने कोचिंग शुरू किया और PLV बने।",
    img: "/images/team/pradeep.jpg",
  },
  {
    id: 5,
    name: "Vineeta and Pooja",
    location: "Bajida, Uttar Pradesh",
    summaryEn:
      "Two women deceived by the same husband stood together and pursued justice.",
    summaryHi:
      "एक ही पति द्वारा ठगी गई दो महिलाओं ने साथ खड़े होकर न्याय की लड़ाई लड़ी।",
    img: "/images/team/kuldeep.jpg",
  },
  {
    id: 6,
    name: "Shri Ram",
    location: "Jalaun, Uttar Pradesh",
    summaryEn:
      "A Dalit farmer fought against false allegations and regained his land.",
    summaryHi:
      "एक दलित किसान ने झूठे आरोपों के खिलाफ लड़कर अपनी जमीन वापस पाई।",
    img: "/images/team/usha.jpg",
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

  useEffect(() => {
    const timer = setInterval(() => {
      const track = trackRef.current;
      if (!track) return;
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (track.scrollLeft >= maxScroll) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const card = track.querySelector("div");
        const width = card ? card.offsetWidth + 24 : 320;
        track.scrollBy({ left: width, behavior: "smooth" });
      }
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="stories" className="py-10 md:py-16 bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col items-center gap-6">
          <Reveal>
            <SectionHeading
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
            <Link
              key={story.id}
              href={{ pathname: "/media/stories", query: { id: String(story.id) } }}
              passHref
              legacyBehavior
              className="block"
            >
              <div
                className="snap-start shrink-0 w-[85%] sm:w-[48%] lg:w-[31%] bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="p-6">
                  <p className="text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3">
                    “{language === "en" ? story.summaryEn : story.summaryHi}”
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-navy text-gold flex items-center justify-center font-bold text-sm">
                      {story.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-navy text-sm leading-tight">{story.name}</p>
                      <p className="text-xs text-slate-500">{story.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
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
