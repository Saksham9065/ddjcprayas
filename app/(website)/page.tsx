"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaBalanceScale, 
  FaBookOpen, 
  FaHandsHelping, 
  FaArrowRight, 
  FaChevronDown, 
  FaPhoneAlt, 
  FaMapMarkerAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useApp } from "@/context/AppContext";

function AnimatedCounter({ target, suffix = "+", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = 0;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(start + (target - start) * eased);
            setCount(current);
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    const element = ref.current;

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [target, duration]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-black text-slate-400 block mb-2">
      {count.toLocaleString("en-IN")}{suffix}
    </span>
  );
}

const HERO_IMAGES = [
  "/images/hero/1.jpg",
  "/images/hero/2.jpg",
  "/images/hero/3.jpg",
  "/images/hero/4.jpg",
  "/images/hero/5.jpeg",
  "/images/hero/6.jpeg",
  "/images/hero/7.jpg",
  "/images/hero/8.jpeg",
  "/images/hero/9.jpg",
  "/images/hero/10.jpg",
  "/images/hero/hero-banner.jpg",
];

export default function HomePage() {
  const { language } = useApp();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);
  const isHindi = language === "hi";

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  };

  useEffect(() => {
    slideInterval.current = setInterval(nextSlide, 4000);
    return () => {
      if (slideInterval.current) clearInterval(slideInterval.current);
    };
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen font-sans text-slate-200">
      
      {/* 1. HERO SECTION WITH SLIDER */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        
        {/* Image Slider */}
        <div className="relative h-[300px] md:h-[500px] lg:h-[700px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={HERO_IMAGES[currentSlide]}
                alt={`Hero slide ${currentSlide + 1}`}
                className="w-full h-full object-cover"
                width={1920}
                height={1080}
              />
            </motion.div>
          </AnimatePresence>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors md:w-10 md:h-10 md:left-4"
          >
            <FaChevronLeft size={14} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors md:w-10 md:h-10 md:right-4"
          >
            <FaChevronRight size={14} />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {HERO_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-white w-8" : "bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Hero Text Content */}
<div className="absolute inset-0 flex items-center z-10">
             <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10 text-center pt-24 md:pt-16">
               <span className="bg-black/30 border border-white/20 text-white px-3 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest inline-block mb-6">
                 {isHindi ? "न्याय तक पहुंच • समानता • मानवाधिकार" : "Access to Justice • Equality • Human Rights"}
               </span>
               <h1 className="text-2xl md:text-4xl lg:text-6xl font-black tracking-tight mb-4 md:mb-6 leading-tight text-white">
                 {isHindi ? "दलित गरिमा एवं न्याय केंद्र" : "Dalit Dignity & Justice Centre"}
               </h1>
               <p className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">
                 {isHindi ? "हर नागरिक के लिए न्याय" : "Justice For Every Citizen"}
               </p>
               <blockquote className="max-w-2xl mx-auto italic text-white/80 text-xs md:text-sm lg:text-base mb-6 md:mb-10 pl-4 py-1">
                 {isHindi ? "“न्याय सामाजिक संस्थानों की पहली vertu है।” — डॉ. बी.आर. अम्बेडकर" : "“Justice is the first virtue of social institutions.” — Dr. B.R. Ambedkar"}
               </blockquote>
               <p className="max-w-3xl mx-auto text-white/80 text-xs md:text-sm lg:text-base leading-relaxed mb-6 md:mb-10">
                 {isHindi ? "हम वंचित समुदायों को मुफ्त कानूनी सहायता, संवैधानिक जागरूकता, मानवाधिकार वकालत और समर्थन प्रदान करते हैं ताकि गरिमा, समानता और न्याय सुनिश्चित हो।" : "We provide free legal aid, constitutional awareness, human rights advocacy, and support for marginalized communities to ensure dignity, equality, and justice."}
               </p>
               
               <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                 <Link
                   href="/complaint"
                   className="bg-[#000000] hover:bg-slate-600 text-white font-bold px-5 py-3 md:px-8 md:py-4 rounded-xl transition-all shadow-lg hover:scale-105 inline-flex items-center gap-2 text-xs md:text-sm"
                 >
                   {isHindi ? "शिकायत दर्ज करें" : "File a Complaint"}
                   <FaArrowRight size={14} />
                 </Link>
                 <Link
                   href="/donate"
                   className="hidden md:inline-flex bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 font-bold px-5 py-3 md:px-8 md:py-4 rounded-xl transition-all backdrop-blur-sm text-xs md:text-sm"
                 >
                   {isHindi ? "हमारे उद्देश्य का समर्थन करें" : "Support Our Cause"}
                 </Link>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* 2. WHY DDJC IS NEEDED SECTION */}
      <section className="py-20 pt-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-white p-8 md:p-14 rounded-3xl shadow-sm border border-slate-200">
            <span className="text-xs font-bold text-[#000000] uppercase tracking-wider block mb-2">{isHindi ? "पृष्ठभूमि और उद्देश्य" : "Background & Purpose"}</span>
            <h2 className="text-2xl md:text-3xl font-black text-[#0A2540] mb-6 tracking-tight">
              {isHindi ? "दलित गरिमा एवं न्याय केंद्र (DDJC) की आवश्यकता क्यों है?" : "Why is the Dalit Dignity & Justice Centre (DDJC) needed?"}
            </h2>
              <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
                <p>
                  Every day, through newspapers, TV channels, social media, and our surroundings, we witness various incidents. After these incidents, we see victims struggling in courts and legal offices. They strive for justice at police stations and courts; however, often due to a lack of proper information and legal knowledge, they fail to reach justice. The impact of this is most severe on the victims, affecting their entire families and communities in various ways.
                </p>
                <p>
                  To ensure that every individual has access to justice, an understanding of human rights, and that victims receive justice with dignity—and to improve access to government welfare schemes, especially for Dalit and marginalized communities—the Dalit Dignity & Justice Centre (DDJC) was launched in October 2023 by the Bundelkhand Dalit Adhikar Manch.
                </p>
              </div>
              <Image
                src="/images/contact/office.jpg"
                alt="DDJC Office"
                className="w-full h-auto"
                width={1189}
                height={630}
              />
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[#000000] font-bold text-sm hover:underline"
                >
                  {isHindi ? "हमारे बारे में और जानें" : "Learn More About Us"} <FaArrowRight size={12} />
                </Link>
              </div>
          </div>
        </div>
      </section>

      {/* 3. KEY SERVICES SECTION */}
      <section className="py-20 pt-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="bg-slate-50 text-[#000000] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block mb-3">
              {isHindi ? "हम क्या करते हैं" : "What We Do"}
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0A2540] tracking-tight mb-4">
              {isHindi ? "हमारी प्रमुख सेवाएँ" : "Our Key Services"}
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              {isHindi ? "DDJC कानूनी सहायता, सार्वजनिक जागरूकता और समुदाय सहभागिता के माध्यम से न्याय, समानता और गरिमा सुनिश्चित करने का काम करता है।" : "DDJC works to ensure justice, equality, and dignity through legal assistance, public awareness, and community engagement."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-slate-100 text-[#000000] rounded-2xl flex items-center justify-center text-xl mb-6">
                <FaBalanceScale />
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-3">{isHindi ? "मुफ्त कानूनी सहायता" : "Free Legal Aid"}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {isHindi ? "हम व्यक्तियों को उनके कानूनी अधिकारों को समझने और उन्हें लागू करने में मदद करने के लिए कानूनी मार्गदर्शन, मामला समर्थन और सहायता प्रदान करते हैं।" : "We provide legal guidance, case support, and assistance to help individuals understand and exercise their legal rights."}
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-slate-100 text-[#000000] rounded-2xl flex items-center justify-center text-xl mb-6">
                <FaBookOpen />
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-3">{isHindi ? "जागरूकता कार्यक्रम" : "Awareness Programs"}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {isHindi ? "DDJC संवैधानिक अधिकार, समानता और सामाजिक न्याय पर कार्यशालाएँ, सेमिनार और जागरूकता अभियान चलाता है।" : "DDJC conducts workshops, seminars, and awareness campaigns on constitutional rights, equality, and social justice."}
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-slate-100 text-[#000000] rounded-2xl flex items-center justify-center text-xl mb-6">
                <FaHandsHelping />
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-3">Human Rights Advocacy</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We advocate for dignity, equality, and justice by supporting marginalized communities through outreach and policy awareness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. IMPACT COUNTERS SECTION */}
      <section className="py-20 pt-24 bg-white text-slate-800">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <span className="bg-slate-100 text-[#000000] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-block mb-3 border border-slate-200">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-[#0A2540]">
            Creating Change Through Justice
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto mb-16">
            Every number reflects our commitment to protecting rights, empowering communities, and ensuring equal access to justice.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm">
              <AnimatedCounter target={2000} suffix="+" />
              <span className="text-xs uppercase font-bold tracking-wider text-slate-500">People Reached</span>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm">
              <AnimatedCounter target={200} suffix="+" />
              <span className="text-xs uppercase font-bold tracking-wider text-slate-500">Legal Cases</span>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm">
              <AnimatedCounter target={150} suffix="+" />
              <span className="text-xs uppercase font-bold tracking-wider text-slate-500">Court Matters</span>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm">
              <AnimatedCounter target={70} suffix="+" />
              <span className="text-xs uppercase font-bold tracking-wider text-slate-500">Awareness Camps</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LEGAL ACTION & EMERGENCY GUIDE SECTION */}
      <section className="py-20 pt-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="bg-slate-50 text-[#000000] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block mb-3">
              Legal Action
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0A2540] tracking-tight mb-4">
              Legal Support When You Need It Most
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              DDJC provides free legal guidance, constitutional awareness, and court assistance to ensure equal protection under the law.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="text-[#000000] text-2xl font-black mb-4">01</div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-2">Report Immediately</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Follow our professional protocol to ensure your case is documented and supported legally from day one.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="text-[#000000] text-2xl font-black mb-4">02</div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-2">Preserve Evidence</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Secure photographs, medical reports, and witness details to establish a strong statutory basis for justice.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="text-[#000000] text-2xl font-black mb-4">03</div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-2">Seek Assistance</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Connect directly with our Tehsil coordinators and legal advocates for step-by-step judicial guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMPLAINT PROCESS SECTION */}
      <section className="py-20 pt-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="bg-slate-50 text-[#000000] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block mb-3">
              Step-by-Step Guide
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0A2540] tracking-tight mb-4">
              Our Complaint Process
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              Clear pathways designed to transition victims from distress to secure judicial intervention.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
              <span className="text-xs font-black bg-slate-100 text-[#000000] px-2.5 py-1 rounded-md">Step 01</span>
              <h3 className="text-lg font-bold text-[#0A2540] mt-4 mb-2">Report the Incident</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Immediately report the incident to the nearest police station or contact DDJC for guidance.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
              <span className="text-xs font-black bg-slate-100 text-[#000000] px-2.5 py-1 rounded-md">Step 02</span>
              <h3 className="text-lg font-bold text-[#0A2540] mt-4 mb-2">Collect Evidence</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Preserve photographs, videos, medical reports, and witness details related to the incident.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
              <span className="text-xs font-black bg-slate-100 text-[#000000] px-2.5 py-1 rounded-md">Step 03</span>
              <h3 className="text-lg font-bold text-[#0A2540] mt-4 mb-2">Legal Consultation</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Meet our team to understand your rights, prepare documentation, and receive free advice.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
              <span className="text-xs font-black bg-slate-100 text-[#000000] px-2.5 py-1 rounded-md">Step 04</span>
              <h3 className="text-lg font-bold text-[#0A2540] mt-4 mb-2">Court Support</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                DDJC assists with legal representation, case monitoring, and ongoing judicial guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ ACCORDION SECTION */}
      <section className="py-20 pt-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <span className="bg-slate-50 text-[#000000] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block mb-3">
              Got Questions?
            </span>
            <h2 className="text-3xl font-black text-[#0A2540] tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Who can receive free legal aid?",
                a: "Free legal aid is provided to marginalized individuals, victims of atrocities, Dalits, and economically weaker sections who lack resources to hire legal counsel."
              },
              {
                q: "Are services free?",
                a: "Yes, consultation, legal guidance, and support provided through DDJC and its panel advocates are completely free of charge."
              },
              {
                q: "How to report a case?",
                a: "You can file an online complaint through our portal, contact our helpline numbers directly, or visit our district office in Orai, Jalaun."
              },
              {
                q: "Can I become a volunteer?",
                a: "Yes! Law students, activists, and community members passionate about human rights are welcome to join our volunteer network."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left font-bold text-[#0A2540] flex justify-between items-center focus:outline-none"
                >
                  <span className="text-sm md:text-base">{faq.q}</span>
                  <FaChevronDown 
                    className={`text-[#000000] transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`} 
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. QUOTE & CONTACT BANNER */}
      <section className="py-20 pt-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="bg-gradient-to-br from-[#0A2540] to-slate-900 text-white p-10 md:p-16 rounded-3xl shadow-xl relative overflow-hidden">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Need more help? Contact Us</h3>
            <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              &ldquo;Justice has always evoked ideas of equality, of proportion of compensation. In short, Justice is another name of Liberty, Equality and Fraternity.&rdquo; — Babasaheb Dr. B.R. Ambedkar
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-xs md:text-sm font-semibold mb-8">
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl">
                <FaMapMarkerAlt className="text-slate-400" /> Police Line – Baghaura, Orai – Jalaun, UP - 285001
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl">
                <FaPhoneAlt className="text-slate-400" /> +91 9235737691 / 9453645931
              </span>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#000000] hover:bg-slate-600 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:scale-105 text-sm"
            >
              Get in Touch <FaArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}