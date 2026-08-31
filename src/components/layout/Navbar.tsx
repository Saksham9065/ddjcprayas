"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  Cross,
  Globe,
  HeartHandshake,
  ChevronDown,
  IndianRupeeIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/context/AppContext";

interface NavChild {
  key: string;
  nameKey: string;
  path: string;
}

interface NavItem {
  key: string;
  nameKey: string;
  path: string;
  children?: NavChild[];
}

const NAV_ITEMS: NavItem[] = [
  {
    key: "about",
    nameKey: "about",
    path: "/about",
    children: [
      { key: "about-us", nameKey: "aboutUs", path: "/about" },
      { key: "team", nameKey: "team", path: "/team" },
      { key: "contact", nameKey: "contact", path: "/contact" },
    ],
  },
  {
    key: "what",
    nameKey: "ourWork",
    path: "/work",
    children: [
      { key: "in-court", nameKey: "inCourt", path: "/work/in-court" },
      { key: "out-court", nameKey: "communityEngagement", path: "/work/out-court" },
      { key: "legal-fellowship", nameKey: "legalFellowship", path: "/work/legal-fellowship" },
    ],
  },
  {
    key: "impact",
    nameKey: "media",
    path: "/#impact",
    children: [
      { key: "news", nameKey: "news", path: "/media/news" },
      { key: "gallery", nameKey: "photoGallery", path: "/media/gallery" },
      { key: "stories", nameKey: "storiesOfChange", path: "/media/stories" },
      { key: "resources", nameKey: "resources", path: "/resources" },
    ],
  },
  {
    key: "involved",
    nameKey: "joinUs",
    path: "/join",
    children: [
      { key: "internships", nameKey: "internships", path: "/join/internships" },
      { key: "volunteers", nameKey: "volunteers", path: "/join/volunteers" },
    ],
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const pathname = usePathname();
  const { language, toggleLanguage } = useApp();

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setExpandedItems([]);
  }, []);

  const toggleExpand = useCallback((key: string) => {
    setExpandedItems((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  }, []);

  const t = (en: string, hi: string) => (language === "en" ? en : hi);

  return (
    <header className="sticky top-0 z-100 bg-navy shadow-md border-b border-white/10">
      <div className="container mx-auto px-4 md:px-8 max-w-[1600px]">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" onClick={closeMenu} className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <div className="h-9 w-9 sm:h-11 sm:w-11 md:h-14 md:w-14 rounded-full overflow-hidden shadow-sm border border-slate-200 transition-transform group-hover:scale-105 bg-white relative">
              <Image
                src="/images/logo/ddjc-logo.jpg"
                alt="DDJC Logo"
                fill
                sizes="36px sm:44px md:56px"
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-[11px] sm:text-[13px] md:text-[15px] lg:text-[17px] font-black text-white leading-tight tracking-tight group-hover:text-gold transition-colors">
                {t("Dalit Dignity & Justice Center", "दलित सम्मान व न्याय केन्द्र")}
              </h1>
              <p className="text-[8px] sm:text-[9px] md:text-[10px] font-bold text-white/80 uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.18em] mt-0.5">
                 {t("Justice, Dignity and Constitutional Rights", "न्याय, गरिमा और संवैधानिक अधिकार")}
              </p>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center justify-center gap-1 flex-1 px-4 h-full list-none m-0 p-0">
            {NAV_ITEMS.map((item) => {
              const base = item.path.split("#")[0];
              const isHash = item.path.includes("#");
              const childActive = item.children?.some((c) =>
                c.path === "/" ? pathname === "/" : pathname.startsWith(c.path.split("#")[0])
              );
              const active = item.children
                ? !!childActive
                : item.path === "/"
                ? pathname === "/"
                : !isHash && pathname.startsWith(base);

              if (item.children) {
                return (
                  <li key={item.key} className="relative group h-full flex items-center list-none">
                    <button
                      className={`flex items-center gap-1 h-full px-3 text-[15px] font-bold transition-colors ${
                        active ? "text-gold" : "text-white hover:text-gold"
                      }`}
                    >
                       {item.nameKey === "about" ? t("About Us", "हमारे बारे में") : item.nameKey === "ourWork" ? t("Our Work", "हमारा काम") : item.nameKey === "media" ? t("Media", "मीडिया") : item.nameKey === "joinUs" ? t("Join Us", "हमसे जुड़ें") : t("Contact", "संपर्क")}
                       <ChevronDown size={11} className="opacity-70" />
                    </button>
                      <div className="absolute top-full left-0 w-52 rounded-2xl bg-navy shadow-xl border border-white/20 py-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                        {item.children.map((child) => (
                          <Link
                            key={child.key}
                            href={child.path}
                            className="block px-4 py-2.5 text-sm font-semibold text-white/90 hover:text-gold hover:bg-white/10"
                          >
{child.nameKey === "aboutUs" ? t("About Us", "हमारे बारे में") : child.nameKey === "team" ? t("Team", "टीम") : child.nameKey === "resources" ? t("Resources", "संसाधन") : child.nameKey === "inCourt" ? t("In Court", "अदालत में") : child.nameKey === "communityEngagement" ? t("Community engagement & field work", "कम्युनिटी एंगेजमेंट और फील्ड वर्क") : child.nameKey === "legalFellowship" ? t("Legal Fellowship", "कानूनी फेलोशिप") : child.nameKey === "news" ? t("News", "समाचार") : child.nameKey === "photoGallery" ? t("Photo Gallery", "फोटो गैलरी") : child.nameKey === "storiesOfChange" ? t("Stories of Change", "बदलाव की कहानियाँ") : child.nameKey === "internships" ? t("Internships", "इन्टर्नशिप") : child.nameKey === "volunteers" ? t("Volunteers", "स्वयंसेवक") : t("Contact", "संपर्क")}
                          </Link>
                        ))}
                      </div>
                  </li>
                );
              }

              return (
                <li key={item.key} className="h-full flex items-center list-none">
                  <Link
                    href={item.path}
                     className={`relative flex items-center h-full px-3 text-[15px] font-bold transition-colors ${
                       active ? "text-gold" : "text-white hover:text-gold"
                     }`}
                  >
                     {item.nameKey === "about" ? t("About Us", "हमारे बारे में") : item.nameKey === "ourWork" ? t("Our Work", "हमारा काम") : item.nameKey === "media" ? t("Media", "मीडिया") : item.nameKey === "joinUs" ? t("Join Us", "हमसे जुड़ें") : t("Contact", "संपर्क")}
                     <span className={`absolute bottom-3 left-3 right-3 h-[2.5px] rounded-full bg-gold transition-transform ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 shrink-0">
            <button
              onClick={toggleLanguage}
              className="hidden md:flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-2.5 py-1.5 md:px-3 md:py-1.5 text-[10px] md:text-xs font-semibold text-white hover:border-gold hover:text-gold transition"
              aria-label={t("Change language", "भाषा बदलें")}
            >
              <Globe size={13} />
               <span>{t("हिंदी / EN", "हिंदी / EN")}</span>
            </button>

             <Link
               href="/donate"
                className="hidden sm:inline-flex items-center gap-1.5 md:gap-2 border border-white/30 text-white hover:bg-white/10 font-bold px-3 md:px-4 lg:px-5 py-2 md:py-2.5 rounded-xl text-[10px] md:text-xs lg:text-sm transition-all hover:scale-[1.03]"
             >
                <IndianRupeeIcon size={14} />
               {t("Donate", "दान करें")}
             </Link>

             <Link
               href="/complaint"
               className="hidden sm:inline-flex items-center gap-1.5 md:gap-2 bg-gold hover:bg-gold-soft text-navy font-bold px-3 md:px-4 lg:px-5 py-2 md:py-2.5 rounded-xl text-[10px] md:text-xs lg:text-sm transition-all hover:scale-[1.03] shadow-sm"
             >
                <HeartHandshake size={14} />
               {t("I Need Help", "मुझे सहायता चाहिए")}
             </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden relative w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
              aria-label={t("Open/Close menu", "मेनू खोलें/बंद करें")}
            >
              <AnimatePresence mode="wait">
                <motion.div key={menuOpen ? "close" : "open"} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  {menuOpen ? <Cross size={20} /> : <Menu size={20} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
             className="lg:hidden overflow-hidden bg-navy border-t border-white/10"
          >
            <div className="flex flex-col px-4 py-4 gap-1 max-h-[80vh] overflow-y-auto">
              {NAV_ITEMS.map((item) => {
                const isExpanded = expandedItems.includes(item.key);
                return (
                  <div key={item.key}>
                    <button
                      onClick={() => {
                        if (item.children) {
                          toggleExpand(item.key);
                        } else {
                          closeMenu();
                        }
                      }}
                      className="flex items-center justify-between font-bold text-[15px] md:text-[16px] text-white hover:text-gold py-3 border-b border-white/10 transition-colors w-full text-left"
                    >
                      {item.nameKey === "about" ? t("About Us", "हमारे बारे में") : item.nameKey === "ourWork" ? t("Our Work", "हमारा काम") : item.nameKey === "media" ? t("Media", "मीडिया") : item.nameKey === "joinUs" ? t("Join Us", "हमसे जुड़ें") : t("Contact", "संपर्क")}
                      {item.children && <ChevronDown size={12} className={`opacity-60 transition-transform ${isExpanded ? "rotate-180" : ""}`} />}
                    </button>
                    {item.children && isExpanded && (
                      <div className="pl-3 md:pl-4 pb-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.key}
                            href={child.path}
                            onClick={closeMenu}
                            className="block py-2 text-sm font-semibold text-white/80 hover:text-gold transition-colors"
                          >
{child.nameKey === "aboutUs" ? t("About Us", "हमारे बारे में") : child.nameKey === "team" ? t("Team", "टीम") : child.nameKey === "resources" ? t("Resources", "संसाधन") : child.nameKey === "inCourt" ? t("In Court", "अदालत में") : child.nameKey === "communityEngagement" ? t("Community engagement & field work", "कम्युनिटी एंगेजमेंट और फील्ड वर्क") : child.nameKey === "legalFellowship" ? t("Legal Fellowship", "कानूनी फेलोशिप") : child.nameKey === "news" ? t("News", "समाचार") : child.nameKey === "photoGallery" ? t("Photo Gallery", "फोटो गैलरी") : child.nameKey === "storiesOfChange" ? t("Stories of Change", "बदलाव की कहानियाँ") : child.nameKey === "internships" ? t("Internships", "इन्टर्नशिप") : child.nameKey === "volunteers" ? t("Volunteers", "स्वयंसेवक") : t("Contact", "संपर्क")}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="flex flex-col gap-2 pt-4">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white"
                >
                  <Globe size={14} />
                   {t("हिंदी / English", "हिंदी / English")}
                </button>
                  <div className="grid grid-cols-2 gap-2">
                   <Link
                     href="/donate"
                     onClick={closeMenu}
                     className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-bold px-4 py-2.5 rounded-xl text-sm"
                   >
                     <IndianRupeeIcon size={14} />
                     {t("Donate", "दान करें")}
                   </Link>
                   <Link
                     href="/complaint"
                     onClick={closeMenu}
                     className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-soft text-navy font-bold px-4 py-2.5 rounded-xl text-sm"
                   >
                     <HeartHandshake size={14} />
                     {t("I Need Help", "मुझे सहायता चाहिए")}
                   </Link>
                  </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
