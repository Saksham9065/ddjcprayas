"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { translations, type Language } from "@/lib/i18n";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface MenuItem {
  key: keyof typeof translations.en;
  name: string;
  path: string;
  dropdown?: boolean;
  children?: MenuItem[];
}

interface SocialLink {
  Icon: React.ComponentType<{ size?: number }>;
  href: string;
  hoverColor: string;
}

const MENU_ITEMS: MenuItem[] = [
  {
    key: "about",
    name: "About",
    path: "#",
    dropdown: true,
    children: [
      { key: "aboutUs", name: "About Us", path: "/about" },
      { key: "team", name: "Team", path: "/team" },
      { key: "resources", name: "Resources", path: "/resources" },
    ],
  },
  {
    key: "ourWork",
    name: "Our Work",
    path: "#",
    dropdown: true,
    children: [
      { key: "inCourt", name: "In the Court", path: "/work/in-court" },
      { key: "outCourt", name: "Out of the Court", path: "/work/out-court" },
    ],
  },
  {
    key: "media",
    name: "Media",
    path: "#",
    dropdown: true,
    children: [
      { key: "news", name: "News", path: "/media/news" },
      { key: "photoGallery", name: "Photo Gallery", path: "/media/gallery" },
      { key: "stories", name: "Stories", path: "/media/stories" },
    ],
  },
  {
    key: "joinUs",
    name: "Join Us",
    path: "#",
    dropdown: true,
    children: [
      { key: "careers", name: "Jobs/Careers", path: "/join/careers" },
      { key: "internships", name: "Internships", path: "/join/internships" },
      { key: "volunteers", name: "Volunteers", path: "/join/volunteers" },
    ],
  },
  { key: "contact", name: "Contact", path: "/contact" },
  { key: "donate", name: "Donate", path: "/donate" },
];

const SOCIAL_LINKS: SocialLink[] = [
  { Icon: FaFacebookF, href: "https://www.facebook.com/DalitDignityJusticeCenter", hoverColor: "hover:bg-[#1877F2]" },
  { Icon: FaInstagram, href: "https://www.instagram.com/ddjc_up", hoverColor: "hover:bg-[#E4405F]" },
  { Icon: FaYoutube, href: "https://www.youtube.com/@ddjcUP", hoverColor: "hover:bg-[#FF0000]" },
  { Icon: FaWhatsapp, href: "https://wa.me/919453645931", hoverColor: "hover:bg-[#25D366]" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const { language } = useApp();

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
  }, []);

  const toggleDropdown = useCallback((name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  }, []);

  return (
    <header className="sticky top-0 z-100 bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-8 max-w-[1600px]">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" onClick={closeMenu} className="flex items-center gap-4 group shrink-0">
            <div className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-full overflow-hidden shadow-sm border border-slate-200 transition-transform duration-300 group-hover:scale-105 shrink-0 bg-slate-50 flex items-center justify-center">
              <img src="/images/logo/ddjc-logo.jpg" alt="DDJC Logo" className="h-full w-full object-cover object-center" />
            </div>
            <div className="hidden sm:flex flex-col justify-center">
              <h1 className="text-base md:text-[17px] font-black text-[#0A2540] leading-tight tracking-tight group-hover:text-[#2563EB] transition-colors duration-300">
                {translations[language].siteTitle}
              </h1>
              <p className="text-[10px] md:text-[9px] font-bold text-gray-500 uppercase tracking-[0.2em] mt-0.5">
                {translations[language].siteSubtitle}
              </p>
            </div>
          </Link>

          <DesktopMenu
            menuItems={MENU_ITEMS}
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
            pathname={pathname}
            language={language}
          />

          <div className="flex items-center gap-5 shrink-0">
            <SocialIcons links={SOCIAL_LINKS} />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden relative w-11 h-11 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-[#0A2540] hover:bg-slate-50 hover:text-[#2563EB] transition-all duration-300 overflow-hidden"
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
      <MobileMenu
        menuItems={MENU_ITEMS}
        menuOpen={menuOpen}
        activeDropdown={activeDropdown}
        toggleDropdown={toggleDropdown}
        closeMenu={closeMenu}
        language={language}
      />
    </header>
  );
}

interface DesktopMenuProps {
  menuItems: MenuItem[];
  activeDropdown: string | null;
  setActiveDropdown: React.Dispatch<React.SetStateAction<string | null>>;
  pathname: string;
  language: Language;
}

function DesktopMenu({ menuItems, activeDropdown, setActiveDropdown, pathname, language }: DesktopMenuProps) {
  return (
    <ul className="hidden md:flex items-center justify-center gap-6 2xl:gap-8 flex-1 px-4 h-full list-none m-0 p-0">
      {menuItems.map((item) => {
        return item.dropdown ? (
          <DesktopDropdownItem key={item.name} item={item} activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} language={language} />
        ) : (
          <DesktopNavLink key={item.path} item={item} pathname={pathname} language={language} />
        );
      })}
    </ul>
  );
}

interface DesktopDropdownItemProps {
  item: MenuItem;
  activeDropdown: string | null;
  setActiveDropdown: React.Dispatch<React.SetStateAction<string | null>>;
  language: Language;
}

function DesktopDropdownItem({ item, activeDropdown, setActiveDropdown, language }: DesktopDropdownItemProps) {
  const pathname = usePathname();
  const isActive = activeDropdown === item.key;
  return (
    <li className="relative group shrink-0 h-full flex items-center list-none" onMouseEnter={() => setActiveDropdown(item.key)} onMouseLeave={() => setActiveDropdown(null)}>
      <button className={`flex items-center gap-1.5 h-full px-2 font-bold text-sm md:text-[16px] tracking-wide transition-colors duration-300 ${isActive ? "text-[#2563EB]" : "text-[#0A2540] hover:text-[#2563EB]"}`}>
        <span className="relative flex items-center gap-1.5 py-1">
          {translations[language][item.key]}
          <motion.div animate={{ rotate: isActive ? 180 : 0 }}><FaChevronDown className="text-[11px] opacity-60" /></motion.div>
          <span className={`absolute bottom-0 left-0 w-full h-[2.5px] rounded-full bg-[#2563EB] transition-transform ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
        </span>
      </button>
      <AnimatePresence>
        {isActive && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-0 z-50 w-56">
            <div className="bg-white/95 backdrop-blur-3xl rounded-b-2xl shadow-xl border border-slate-200/60 p-2.5 flex flex-col gap-1">
              {item.children?.map((child) => (
                <Link key={child.path} href={child.path} className={`px-4 py-2.5 text-[15px] font-semibold rounded-xl ${pathname === child.path ? "text-[#2563EB] bg-slate-50" : "text-slate-600 hover:text-[#2563EB] hover:bg-slate-50"}`}>
                  {translations[language][child.key]}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

interface DesktopNavLinkProps {
  item: MenuItem;
  pathname: string;
  language: Language;
}

function DesktopNavLink({ item, pathname, language }: DesktopNavLinkProps) {
  return (
    <li className="shrink-0 h-full flex items-center list-none group">
      <Link href={item.path} className={`flex items-center h-full px-2 font-bold text-sm md:text-[16px] transition-colors ${item.path !== "#" && pathname === item.path ? "text-[#2563EB]" : "text-[#0A2540] hover:text-[#2563EB]"}`}>
        <span className="relative py-1">
          {translations[language][item.key]}
          <span className={`absolute bottom-0 left-0 w-full h-[2.5px] rounded-full bg-[#2563EB] transition-transform ${item.path !== "#" && pathname === item.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
        </span>
      </Link>
    </li>
  );
}

interface SocialIconsProps {
  links: SocialLink[];
}

function SocialIcons({ links }: SocialIconsProps) {
  return (
    <div className="hidden md:flex items-center gap-2.5 border-l border-slate-200 pl-6 ml-2 shrink-0">
      {links.map(({ Icon, href, hoverColor }, index) => (
        <a key={index} href={href} target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#0A2540] ${hoverColor} transition-all`}>
          <Icon size={16} />
        </a>
      ))}
    </div>
  );
}

interface MobileMenuProps {
  menuItems: MenuItem[];
  menuOpen: boolean;
  activeDropdown: string | null;
  toggleDropdown: (name: string) => void;
  closeMenu: () => void;
  language: Language;
}

function MobileMenu({ menuItems, menuOpen, activeDropdown, toggleDropdown, closeMenu, language }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="md:hidden overflow-hidden bg-slate-50 absolute w-full z-40">
          <div className="flex flex-col items-center py-6 gap-4">
            {menuItems.map((item) => (
              <div key={item.name} className="w-full text-center">
                {item.dropdown ? (
                  <div className="flex flex-col">
                     <button onClick={() => toggleDropdown(item.key)} className="font-bold text-base md:text-[18px] text-[#0A2540]">{translations[language][item.key]}</button>
                    {activeDropdown === item.key && (
                      <div className="flex flex-col gap-2 pt-2">
                        {item.children?.map(child => <Link key={child.path} href={child.path} onClick={closeMenu} className="text-slate-500">{translations[language][child.key]}</Link>)}
                      </div>
                    )}
                  </div>
                ) : (
                   <Link href={item.path} onClick={closeMenu} className="font-bold text-base md:text-[18px] text-[#0A2540]">{translations[language][item.key]}</Link>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Navbar;