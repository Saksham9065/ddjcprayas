"use client";

import React from "react";
import Link from "next/link";
import { FaDownload, FaFilePdf, FaBookOpen, FaBalanceScale, FaVenus, FaTools, FaFileSignature, FaGavel, FaShieldAlt, FaGraduationCap, FaHome, FaLock } from "react-icons/fa";
import { useApp } from "@/context/AppContext";

interface Resource {
  titleEn: string;
  titleHi: string;
  descEn: string;
  descHi: string;
  pdf: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const RESOURCES: Resource[] = [
  {
    titleEn: "Constitution 101",
    titleHi: "संविधान 101",
    descEn: "Learn about fundamental rights, directive principles, and the structure of the Indian Constitution.",
    descHi: "भारतीय संविधान के मौलिक अधिकार, निर्देशक तत्वों और संरचना के बारे में जानें।",
    pdf: "/pdf/Constitution 101 (1).pdf",
    icon: FaBookOpen,
  },
  {
    titleEn: "Dalit Rights",
    titleHi: "दलित अधिकार",
    descEn: "Know your rights under the SC/ST Prevention of Atrocities Act and other legal protections.",
    descHi: "SC/ST अत्याचार निवारण अधिनियम और अन्य कानूनी सुरक्षाओं के तहत अपने अधिकार जानें।",
    pdf: "/pdf/Dalit Rights.pdf",
    icon: FaBalanceScale,
  },
  {
    titleEn: "Women & Girls",
    titleHi: "महिलाएँ और बालिकाएँ",
    descEn: "Legal protections, support mechanisms, and rights for women and girl children.",
    descHi: "महिलाओं और बालिकाओं के लिए कानूनी सुरक्षा, सहायता तंत्र और अधिकार।",
    pdf: "/pdf/Women & Girls.pdf",
    icon: FaVenus,
  },
  {
    titleEn: "Workers' Rights",
    titleHi: "श्रमिक अधिकार",
    descEn: "Information on labour laws, minimum wages, workplace safety, and grievance redressal.",
    descHi: "श्रम कानून, न्यूनतम मजदूरी, कार्यस्थल सुरक्षा और शिकायत निवारण पर जानकारी।",
    pdf: "/pdf/Workers' Rights  (1).pdf",
    icon: FaTools,
  },
  {
    titleEn: "Government Schemes",
    titleHi: "सरकारी योजनाएँ",
    descEn: "Comprehensive guide to welfare schemes, reservations, and entitlements for marginalized communities.",
    descHi: "वंचित समुदायों के लिए कल्याण योजनाएँ, आरक्षण और अधिकारों पर व्यापक गाइड।",
    pdf: "/pdf/_Government Schemes.pdf",
    icon: FaFileSignature,
  },
  {
    titleEn: "Legal Help",
    titleHi: "कानूनी सहायता",
    descEn: "How to get free legal aid, find a lawyer, and navigate the justice system.",
    descHi: "मुफ्त कानूनी सहायता कैसे लें, वकील कैसे ढूँढें और न्याय व्यवस्था में कैसे नेविगेट करें।",
    pdf: "/pdf/Legal Help.pdf",
    icon: FaGavel,
  },
  {
    titleEn: "Police & FIR",
    titleHi: "पुलिस और एफ.आई.आर.",
    descEn: "Step-by-step guide to filing an FIR, understanding police procedures, and your rights during investigation.",
    descHi: "एफ.आई.आर. दर्ज करने, पुलिस प्रक्रियाओं को समझने और जांच के दौरान अपने अधिकारों के लिए चरणबद्ध गाइड।",
    pdf: "/pdf/Police & FIR.pdf",
    icon: FaShieldAlt,
  },
  {
    titleEn: "Scholarships & Education",
    titleHi: "छात्रवृत्ति और शिक्षा",
    descEn: "List of scholarships, educational schemes, and reservations for SC/ST/OBC students.",
    descHi: "SC/ST/OBC छात्रों के लिए छात्रवृत्तियों, शैक्षिक योजनाओं और आरक्षणों की सूची।",
    pdf: "/pdf/Scholarships & Education.pdf",
    icon: FaGraduationCap,
  },
  {
    titleEn: "Land & Housing",
    titleHi: "ज़मीन और आवास",
    descEn: "Guidance on land rights, documentation, housing schemes, and protection against illegal eviction.",
    descHi: "ज़मीन के अधिकार, दस्तावेजीकरण, आवास योजनाएँ और अवैध बहाली से सुरक्षा पर मार्गदर्शन।",
    pdf: "/pdf/_Land & Housing.pdf",
    icon: FaHome,
  },
  {
    titleEn: "Digital Safety",
    titleHi: "डिजिटल सुरक्षा",
    descEn: "Stay safe online: cybercrime reporting, digital privacy, and protecting yourself from online harassment.",
    descHi: "ऑनलाइन सुरक्षित रहें: साइबरक्राइम की रिपोर्टिंग, डिजिटल गोपनीयता और ऑनलाइन उत्पीड़न से बचाव।",
    pdf: "/pdf/Digital Safety.pdf",
    icon: FaLock,
  },
  {
    titleEn: "SC/ST Prevention of Atrocities Act - Handbook",
    titleHi: "SC/ST अत्याचार निवारण अधिनियम - हैंडबुक",
    descEn: "Complete statutory guide on provisions, penalties, and immediate relief compensation rules.",
    descHi: "प्रावधान, दंड और तात्कालिक राहत पुरस्कार नियमों पर पूर्ण वैधानिक गाइड।",
    pdf: "/pdf/SC_ST.pdf",
    icon: FaFilePdf,
  },
  {
    titleEn: "Constitutional Rights & Legal Safeguards Guide",
    titleHi: "संवैधानिक अधिकार और कानूनी सुरक्षा गाइड",
    descEn: "An educational booklet detailing fundamental rights and remedies against discrimination.",
    descHi: "मौलिक अधिकारों और भेदभाव के खिलाफ उपचारों पर विस्तृत शैक्षिक पुस्तिका।",
    pdf: "/pdf/Constitutional%20Rights%20and%20legal.pdf",
    icon: FaBookOpen,
  },
];

export default function ResourcesPage() {
  const { language } = useApp();
  const isHindi = language === "hi";

  return (
    <div className="bg-white min-h-screen py-10 pt-16 md:py-16 md:pt-24">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="bg-slate-50 text-[#000000] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block mb-4">
            {isHindi ? "ज्ञान केंद्र" : "Knowledge Hub"}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight mb-4 md:mb-6">
            {isHindi ? "कानूनी संसाधन और गाइड" : "Legal Resources & Guides"}
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            {isHindi ? "कानूनी ज्ञान से अपने आप को सशक्त बनाने के लिए शैक्षिक pamphlets, संवैधानिक गाइड और वैधानिक हैंडबुक डाउनलोड करें।" : "Download educational pamphlets, constitutional guides, and statutory handbooks to empower yourself with legal knowledge."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESOURCES.map((res, index) => (
            <div key={index} className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200 flex flex-col hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-[#000000] flex items-center justify-center text-xl shrink-0">
                  <res.icon size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0A2540] leading-snug">{isHindi ? res.titleHi : res.titleEn}</h3>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-6 flex-1">{isHindi ? res.descHi : res.descEn}</p>
              <div className="pt-4 border-t border-slate-200">
                <a
                  href={res.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#000000] hover:underline"
                >
                  <FaDownload size={11} /> {isHindi ? "PDF डाउनलोड करें" : "Download PDF"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
