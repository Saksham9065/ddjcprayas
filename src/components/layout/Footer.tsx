"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import { useApp } from "@/context/AppContext";
import { translations } from "@/lib/i18n";

function Footer() {
  const { language } = useApp();
  const content = translations[language];
  const year = new Date().getFullYear();

  const QUICK_LINKS = [
    { name: content.footerHome, path: "/" },
    { name: content.footerAbout, path: "/about" },
    { name: content.footerContact, path: "/contact" },
    { name: content.footerDonate, path: "/donate" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] as const },
    },
  };

  return (
    <footer className="relative bg-linear-to-b from-slate-900 to-black text-white overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#1ab9cb]/5 blur-[100px] pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        className="container mx-auto px-6 pt-24 pb-8 relative z-10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          <motion.div variants={itemVariants} className="flex flex-col text-left lg:pr-4">
            <div className="flex items-center gap-4 mb-5 group cursor-pointer">
              <div className="h-10 w-10 md:h-14 md:w-14 rounded-full bg-white overflow-hidden shadow-lg border-2 border-white/10 shrink-0 transition-transform duration-500 group-hover:scale-105 group-hover:border-[#1ab9cb]/50 group-hover:shadow-[0_0_20px_rgba(26,185,203,0.3)]">
                <img
                  src="/images/logo/ddjc-logo.jpg"
                  alt="DDJC Logo"
                  className="h-full w-full object-cover object-center p-1 rounded-full"
                />
              </div>
              <div>
                <h2 className="text-white font-extrabold text-base leading-tight tracking-wide transition-colors duration-300 group-hover:text-[#1ab9cb]">
                  {content.siteTitle}
                </h2>
              </div>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
              {content.footerTagline}
            </p>

            <div className="flex items-center gap-3">
              {[
                { icon: FaFacebookF, href: "https://www.facebook.com/DalitDignityJusticeCenter", color: "hover:bg-[#1877F2]" },
                { icon: FaInstagram, href: "https://www.instagram.com/ddjc_up", color: "hover:bg-[#E4405F]" },
                { icon: FaYoutube, href: "https://www.youtube.com/@ddjcUP", color: "hover:bg-[#FF0000]" },
                { icon: FaWhatsapp, href: "https://wa.me/919453645931", color: "hover:bg-[#25D366]" },
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`h-8 w-8 md:h-9 md:w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:-translate-y-1 transition-all duration-300 hover:border-transparent hover:shadow-lg ${social.color}`}
                >
                  <social.icon size={14} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col text-left lg:pl-8">
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-[0.15em]">
              {content.footerQuickLinks}
            </h3>
            
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`group text-sm font-medium flex items-center transition-all duration-300 hover:translate-x-2 ${
                      link.path === "/"
                        ? "text-[#1ab9cb]" 
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <span className="text-[#1ab9cb] mr-3 opacity-0 -ml-4 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0 shrink-0">
                      —
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col text-left">
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-widest">
              {content.footerOurVideo}
            </h3>

            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/30">
              <video
                controls
                preload="metadata"
                className="w-full aspect-video object-cover rounded-xl"
              >
                <source
                  src="/images/video/vidssave.com सूखा, पानी की किल्लत और जाति आधारित भेदभाव, Climate Change के कारण ग्रामीण भारत ऐसा असर (BBC Hindi) 720P.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col text-left">
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-[0.15em]">
              {content.footerContactUs}
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="mt-0.5 w-6 h-6 md:w-7 md:h-7 rounded-full bg-white/5 flex items-center justify-center text-[#1ab9cb] group-hover:bg-[#1ab9cb] group-hover:text-white transition-colors duration-300 shrink-0">
                  <FaMapMarkerAlt size={10} />
                </div>
                <span className="text-slate-400 text-sm leading-relaxed font-medium group-hover:text-white transition-colors duration-300">
                  {content.footerAddress}
                </span>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="mt-0.5 w-6 h-6 md:w-7 md:h-7 rounded-full bg-white/5 flex items-center justify-center text-[#1ab9cb] group-hover:bg-[#1ab9cb] group-hover:text-white transition-colors duration-300 shrink-0">
                  <FaPhoneAlt size={10} />
                </div>
                <div className="text-slate-400 text-sm leading-relaxed font-medium">
                  <a href="tel:+919235737691" className="block hover:text-[#1ab9cb] transition-colors duration-300">9235737691</a>
                  <a href="tel:+919453645931" className="block hover:text-[#1ab9cb] transition-colors duration-300">9453645931</a>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-white/5 flex items-center justify-center text-[#1ab9cb] group-hover:bg-[#1ab9cb] group-hover:text-white transition-colors duration-300 shrink-0">
                  <FaEnvelope size={10} />
                </div>
                <a
                  href="mailto:ddjc.prayas@gmail.com"
                  className="text-slate-400 hover:text-[#1ab9cb] text-sm font-medium transition-colors duration-300"
                >
                  ddjc.prayas@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Ambedkar Quote Banner */}
      <div className="bg-black/60 border-t border-white/10">
        <div className="container mx-auto px-6 py-6 max-w-3xl text-center">
          <p className="text-slate-300 text-sm md:text-base italic leading-relaxed mb-3">
            &ldquo;Justice has always evoked ideas of equality, of proportion of compensation. In short, Justice is another name of Liberty, Equality and Fraternity.&rdquo;
          </p>
          <span className="text-xs font-bold text-[#1ab9cb] uppercase tracking-widest block">
            - Babasaheb Dr. B.R. Ambedkar
          </span>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/40">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/admin/login"
            className="text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors duration-300 inline-flex items-center gap-2"
          >
            Admin Login
          </Link>
          <p className="text-slate-500 text-xs tracking-wider uppercase font-semibold text-center">
            {content.footerCopyright.replace("{year}", year.toString())}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;