"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { translations } from "@/lib/i18n";
import {
  FaBars,
  FaTimes,
  FaGlobe,
  FaHandHoldingHeart,
  FaChevronDown,
  FaDonate,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

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
      { key: "resources", nameKey: "resources", path: "/resources" },
    ],
  },
  {
    key: "what",
    nameKey: "ourWork",
    path: "/work",
    children: [
      { key: "in-court", nameKey: "inCourt", path: "/work/in-court" },
      { key: "out-court", nameKey: "outCourt", path: "/work/out-court" },
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
    ],
  },
  {
    key: "involved",
    nameKey: "joinUs",
    path: "/join",
    children: [
      { key: "careers", nameKey: "careers", path: "/join/careers" },
      { key: "internships", nameKey: "internships", path: "/join/internships" },
      { key: "volunteers", nameKey: "volunteers", path: "/join/volunteers" },
    ],
  },
  { key: "contact", nameKey: "contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, toggleLanguage } = useApp();
  const content = translations[language] as Record<string, string>;

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header className="sticky top-0 z-100 bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-8 max-w-[1600px]">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" onClick={closeMenu} className="flex items-center gap-3 group shrink-0">
            <div className="h-11 w-11 md:h-14 md:w-14 rounded-full overflow-hidden shadow-sm border border-slate-200 transition-transform group-hover:scale-105 bg-white flex items-center justify-center">
              <img src="/images/logo/ddjc-logo.jpg" alt="DDJC Logo" className="h-full w-full object-cover object-center" />
            </div>
            <div className="hidden sm:flex flex-col justify-center">
              <h1 className="text-[15px] md:text-[17px] font-black text-navy leading-tight tracking-tight group-hover:text-gold transition-colors">
                {content.siteTitle}
              </h1>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.18em] mt-0.5">
                {content.siteSubtitle}
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
                        active ? "text-gold" : "text-navy hover:text-gold"
                      }`}
                    >
                       {content[item.nameKey]}
                       <FaChevronDown size={11} className="opacity-70" />
                     </button>
                     <div className="absolute top-full left-0 w-52 rounded-2xl bg-white shadow-xl border border-slate-100 py-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                       {item.children.map((child) => (
                         <Link
                           key={child.key}
                           href={child.path}
                           className="block px-4 py-2.5 text-sm font-semibold text-navy hover:text-gold hover:bg-slate-50"
                         >
                           {content[child.nameKey]}
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
                      active ? "text-gold" : "text-navy hover:text-gold"
                    }`}
                  >
                     {content[item.nameKey]}
                     <span className={`absolute bottom-3 left-3 right-3 h-[2.5px] rounded-full bg-gold transition-transform ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            <button
              onClick={toggleLanguage}
              className="hidden sm:flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-navy hover:border-gold hover:text-gold transition"
              aria-label="Toggle language"
            >
              <FaGlobe size={13} />
               <span>{content.languageLabel}</span>
             </button>

             <Link
               href="/donate"
               className="hidden sm:inline-flex items-center gap-2 border border-navy text-navy hover:bg-navy hover:text-white font-bold px-4 md:px-5 py-2.5 rounded-xl text-xs md:text-sm transition-all hover:scale-[1.03]"
             >
               <FaDonate size={14} />
               {content.donate}
             </Link>

             <Link
               href="/complaint"
               className="hidden sm:inline-flex items-center gap-2 bg-gold hover:bg-gold-soft text-navy font-bold px-4 md:px-5 py-2.5 rounded-xl text-xs md:text-sm transition-all hover:scale-[1.03] shadow-sm"
             >
               <FaHandHoldingHeart size={14} />
               {content.needSupport}
             </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden relative w-11 h-11 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-navy hover:bg-slate-100 transition-all"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                <motion.div key={menuOpen ? "close" : "open"} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
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
            className="lg:hidden overflow-hidden bg-white border-t border-slate-100"
          >
            <div className="flex flex-col px-5 py-5 gap-1 max-h-[80vh] overflow-y-auto">
              {NAV_ITEMS.map((item) => (
                <div key={item.key}>
                  <Link
                    href={item.path}
                    onClick={closeMenu}
                    className="flex items-center justify-between font-bold text-[16px] text-navy hover:text-gold py-3 border-b border-slate-50 transition-colors"
                  >
                     {content[item.nameKey]}
                     {item.children && <FaChevronDown size={12} className="opacity-60" />}
                   </Link>
                   {item.children && (
                     <div className="pl-4 pb-2">
                       {item.children.map((child) => (
                         <Link
                           key={child.key}
                           href={child.path}
                           onClick={closeMenu}
                           className="block py-2 text-sm font-semibold text-slate-600 hover:text-gold transition-colors"
                         >
                           {content[child.nameKey]}
                         </Link>
                       ))}
                     </div>
                   )}
                </div>
              ))}
              <div className="flex items-center gap-3 pt-4">
                <button
                  onClick={() => { toggleLanguage(); }}
                  className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-navy"
                >
                  <FaGlobe size={14} />
                   {content.languageLabelFull}
                 </button>
                 <Link
                   href="/donate"
                   onClick={closeMenu}
                   className="flex-1 inline-flex items-center justify-center gap-2 border border-navy text-navy font-bold px-4 py-2.5 rounded-xl text-sm"
                 >
                   <FaDonate size={14} />
                   {content.donate}
                 </Link>
                 <Link
                   href="/complaint"
                   onClick={closeMenu}
                   className="flex-1 inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-soft text-navy font-bold px-4 py-2.5 rounded-xl text-sm"
                 >
                   <FaHandHoldingHeart size={14} />
                   {content.needSupport}
                 </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
