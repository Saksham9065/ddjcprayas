"use client";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";
import { useApp } from "@/context/AppContext";
import { translations } from "@/lib/i18n";

function TopBar() {
  const { language, toggleLanguage } = useApp();
  const content = translations[language];

  return (
    <div className="bg-[#0A2540] text-white text-xs sm:text-sm md:text-base">
      <div className="container mx-auto px-2 sm:px-6">
        <div className="flex justify-between items-center py-2 sm:py-3">
          <div className="flex items-center gap-2 sm:gap-8">
            <a
              href="tel:+919235737691"
              className="flex items-center gap-1 sm:gap-2 hover:text-slate-300 transition"
            >
              <FaPhoneAlt />
              <span>+91 92357 37691</span>
            </a>

            <a
              href="mailto:ddjc.prayas@gmail.com"
              className="flex items-center gap-1 sm:gap-2 hover:text-slate-300 transition"
            >
              <FaEnvelope />
              <span>ddjc.prayas@gmail.com</span>
            </a>

            <div className="flex items-center gap-1 sm:gap-2">
              <FaMapMarkerAlt />
              <span>{language === "en" ? "Police Line, Baghaura, Orai, Jalaun, Uttar Pradesh" : "पुलिस लाइन, बघौरा, ओराई, जालौन, उत्तर प्रदेश"}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-6">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 sm:gap-2 rounded-full border border-white/20 bg-white/10 px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold transition hover:bg-white/20"
            >
              <FaGlobe />
              <span>{language === "en" ? "EN | हिन्दी" : "हिंदी | EN"}</span>
            </button>

            <span className="text-slate-300 font-semibold text-xs sm:text-sm">
              {content.topbarTagline}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;