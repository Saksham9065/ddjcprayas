"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { useApp } from "@/context/AppContext";

const LINK_GROUPS = [
  {
    titleKey: "footerAboutDDJC",
    links: [
      { nameKey: "footerAboutUs", href: "/about" },
      { nameKey: "footerOurTeam", href: "/team" },
      { nameKey: "footerMedia", href: "/media" },
    ],
  },
  {
    titleKey: "footerWhatWeDo",
    links: [
      { nameKey: "footerJusticeLegalSupport", href: "/work/in-court" },
      { nameKey: "footerWomensSafety", href: "/work/out-court" },
      { nameKey: "footerGovernmentSchemes", href: "/pdf/_Government Schemes.pdf" },
    ],
  },
  {
    titleKey: "footerContact",
    links: [
      { nameKey: "footerAddress", href: null },
      { nameKey: "footerPhone", href: "tel:+919235737691" },
      { nameKey: "footerEmail", href: "mailto:ddjc.prayas@gmail.com" },
    ],
  },
];

export default function Footer() {
  const { language } = useApp();

  const t = (en: string, hi: string) => (language === "en" ? en : hi);

  return (
    <footer className="relative bg-navy text-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gold/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 pt-10 pb-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
           {/* LEFT: Brand */}
           <div className="lg:col-span-4">
             <div className="flex items-center gap-3 mb-5">
               <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-gold/40 bg-white shrink-0 relative">
                 <Image src="/images/logo/ddjc-logo.jpg" alt="DDJC Logo" fill sizes="48px" className="h-full w-full object-cover" />
               </div>
               <div>
                 <h2 className="font-extrabold text-base leading-tight tracking-wide">
                   {t("Dalit Dignity & Justice Center", "दलित सम्मान व न्याय केन्द्र")}
                 </h2>
                 <p className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold mt-0.5">
                   {t("Justice, Dignity and Constitutional Rights", "न्याय, गरिमा और संवैधानिक अधिकार")}
                 </p>
               </div>
              </div>
              <p className="text-white/70 text-xs leading-relaxed mb-4">
                {t("A one-stop centre that helps communities access justice, rights, information and opportunities — building a new generation of informed and empowered citizens.", "गाँव-स्तरीय एकल केन्द्र जो समुदायों को न्याय, अधिकार, जानकारी और अवसर तक पहुँचने में मदद करते हैं — सूचित और सशक्त नागरिकों की नई पीढ़ी का निर्माण करते हैं।")}
              </p>
              <div className="bg-white/10 rounded-2xl p-4 border border-white/20 shadow-lg">
               <p className="text-xs text-white/90 leading-relaxed">
                 {t("Dr. B.R. Ambedkar", "बाबासाहेब डॉ. बी.आर. अम्बेडकर")} — {t("\"Justice has always given birth to the ideas of equality and complete evidence. In short, justice is another name for liberty, equality and fraternity.\"", "\"न्याय ने हमेशा समानता, पूर्तिकर प्रमाण के विचारों को जन्म दिया है। संक्षिप्त में, न्याय स्वतंत्रता, समानता और बंधुता का एक ही नाम है।\"")}
               </p>
              </div>

             <div className="flex gap-3 mt-5">
               {[
                 { icon: FaFacebookF, href: "https://www.facebook.com/DalitDignityJusticeCenter", color: "#1877F2" },
                 { icon: FaInstagram, href: "https://www.instagram.com/ddjc_up", color: "#E4405F" },
                 { icon: FaYoutube, href: "https://www.youtube.com/@ddjcUP", color: "#FF0000" },
                 { icon: FaWhatsapp, href: "https://wa.me/919453645931", color: "#25D366" },
               ].map((s, i) => (
                 <a
                   key={i}
                   href={s.href}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-transparent transition-all duration-300"
                 >
                   <s.icon size={14} style={{ color: s.color }} />
                 </a>
               ))}
             </div>
           </div>

          {/* MIDDLE: Link groups */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {LINK_GROUPS.map((group) => (
                <div key={group.titleKey}>
                   <h3 className="text-xs font-bold text-white uppercase tracking-[0.15em] mb-5">
                     {group.titleKey === "footerAboutDDJC" ? t("About DDJC", "DDJC के बारे में") : group.titleKey === "footerWhatWeDo" ? t("What We Do", "हम क्या करते हैं") : t("Contact", "संपर्क")}
                   </h3>
                   <ul className="space-y-3">
                     {group.links.map((l) => {
                       if (l.nameKey === "footerAddress") {
                         return (
                           <li key={l.nameKey}>
                             <span className="text-sm text-white/60 inline-flex items-start gap-1.5">
                               <MapPin size={12} className="text-gold mt-0.5 shrink-0" />
                               {t("Police Line – Baghaora, Urai – Jalaun, U.P. - 285001", "पुलिस लाइन – बघौरा, उरई – जालौन, उ.प्र. - 285001")}
                             </span>
                           </li>
                         );
                       }
                       if (l.nameKey === "footerPhone") {
                         return (
                           <li key={l.nameKey}>
                             <a href="tel:+919235737691" className="text-sm text-white/60 hover:text-gold transition-colors duration-200 inline-flex items-center gap-1.5 group">
                               <Phone size={12} className="text-gold shrink-0" />
                               +91 92357 37691
                             </a>
                           </li>
                         );
                       }
                       if (l.nameKey === "footerEmail") {
                         return (
                           <li key={l.nameKey}>
                             <a href="mailto:ddjc.prayas@gmail.com" className="text-sm text-white/60 hover:text-gold transition-colors duration-200 inline-flex items-center gap-1.5 group">
                               <Mail size={12} className="text-gold shrink-0" />
                               ddjc.prayas@gmail.com
                             </a>
                           </li>
                         );
                       }
                       const linkText = l.nameKey === "footerAboutUs" ? t("About Us", "हमारे बारे में") : l.nameKey === "footerOurTeam" ? t("Our Team", "हमारी टीम") : l.nameKey === "footerMedia" ? t("Media", "मीडिया") : l.nameKey === "footerJusticeLegalSupport" ? t("Justice & Legal Support", "न्याय और कानूनी सहायता") : l.nameKey === "footerWomensSafety" ? t("Women's Safety", "महिलाओं की सुरक्षा") : l.nameKey === "footerGovernmentSchemes" ? t("Government Schemes", "सरकारी योजनाएँ") : t("Contact", "संपर्क");
                       return (
                         <li key={l.nameKey}>
                           {l.href?.startsWith("/pdf/") ? (
                             <a
                               href={l.href}
                               target="_blank"
                               rel="noopener noreferrer"
                               className="text-sm text-white/60 hover:text-gold transition-colors duration-200 inline-flex items-center gap-1.5 group"
                             >
                               <ArrowRight size={9} className="opacity-0 -ml-3 group-hover:opacity-100 transition-all" />
                               {linkText}
                             </a>
                           ) : (
                             <Link
                               href={l.href || "#"}
                               className="text-sm text-white/60 hover:text-gold transition-colors duration-200 inline-flex items-center gap-1.5 group"
                             >
                               <ArrowRight size={9} className="opacity-0 -ml-3 group-hover:opacity-100 transition-all" />
                               {linkText}
                             </Link>
                           )}
                         </li>
                       );
                     })}
                   </ul>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: QR only */}
          <div className="lg:col-span-3 lg:translate-x-2 lg:-mt-8">
            <div className="rounded-2xl p-5 h-full">
              <h3 className="text-xs font-bold text-white uppercase tracking-[0.15em] mb-3">
                {t("Donate", "दान करें")}
              </h3>
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg bg-white">
                <Image src="/images/qr/qr.png" alt="Donation QR" width={400} height={400} priority className="w-full h-auto object-contain p-2" />
              </div>
              <p className="text-[10px] text-gold font-semibold uppercase tracking-wider text-center mt-1">
                {t("Scan to Donate", "दान करने के लिए स्कैन करें")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-navy-deep">
        <div className="container mx-auto px-5 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50 tracking-wide text-center sm:text-left">
            {t("© 2026 Dalit Dignity & Justice Center. All rights reserved.", "© 2024 दलित सम्मान व न्याय केन्द्र। सर्वाधिकार सुरक्षित।")}
          </p>
          <div className="flex items-center gap-5 text-xs text-white/50">
            <Link href="/privacy" className="hover:text-gold transition-colors">{t("Privacy Policy", "गोपनीयता नीति")}</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">{t("Terms & Conditions", "नियम और शर्तें")}</Link>
            <Link href="/sitemap" className="hover:text-gold transition-colors">{t("Sitemap", "साइटमैप")}</Link>
            <Link href="/admin/login" className="hover:text-gold transition-colors font-semibold">{t("Admin", "एडमिन")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
