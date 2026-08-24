"use client";

import React from "react";
import { useApp } from "@/context/AppContext";

export default function PrivacyPage() {
  const { language } = useApp();
  const isHindi = language === "hi";

  return (
    <div className="bg-white min-h-screen py-10 pt-16 md:py-16 md:pt-24">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="bg-slate-50 text-[#000000] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block mb-4">
            {isHindi ? "गोपनीयता" : "Privacy"}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight mb-4 md:mb-6">
            {isHindi ? "गोपनीयता नीति" : "Privacy Policy"}
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            {isHindi
              ? "हम आपकी गोपनीयता का सम्मान करते हैं। यह नीति बताती है कि हम आपकी जानकारी कैसे संग्रहीत, उपयोग और सुरक्षित करते हैं।"
              : "We respect your privacy. This policy explains how we collect, use, and protect your information."}
          </p>
        </div>

        <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 space-y-6 max-w-4xl mx-auto">
          <div className="space-y-4 text-slate-700 text-sm md:text-base leading-relaxed">
            <p>
              {isHindi
                ? "दलित सम्मान व न्याय केन्द्र (DDJC) अपने उपयोगकर्ताओं की गोपनीयता की रक्षा करने के लिए प्रतिबद्ध है। हम केवल आपकी सेवा प्रदान करने के लिए आवश्यक जानकारी एकत्र करते हैं।"
                : "Dalit Dignity & Justice Center (DDJC) is committed to protecting the privacy of its users. We only collect information necessary to provide you with our services."}
            </p>
            <p>
              {isHindi
                ? "हम आपकी व्यक्तिगत जानकारी को किसी तीसरे पक्ष के साथ साझा नहीं करते हैं, ब्लैक मेल, वित्तीय लेन-देन या अन्य कानूनी कार्रवाई के अलावा।"
                : "We do not share your personal information with third parties, except for blackmail, financial transactions, or other legal actions."}
            </p>
            <p>
              {isHindi
                ? "आपकी जानकारी सुरक्षित सर्वरों पर संग्रहीत की जाती है और हम उपयोगकर्ता डेटा की सुरक्षा के लिए उपयुक्त कदम उठाते हैं।"
                : "Your information is stored on secure servers, and we take appropriate measures to protect user data."}
            </p>
            <p>
              {isHindi
                ? "यदि आपके कोई प्रश्न हैं तो कृपया हमसे संपर्क करें: ddjc.prayas@gmail.com"
                : "If you have any questions, please contact us at: ddjc.prayas@gmail.com"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
