"use client";

import React from "react";

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen py-10 pt-16 md:py-16 md:pt-24">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="bg-slate-50 text-[#000000] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block mb-4">
            नियम
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight mb-4 md:mb-6">
            नियम और शर्तें
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            DDJC वेबसाइट का उपयोग करके, आप निम्नलिखित नियमों और शर्तों से सहमत होते हैं।
          </p>
        </div>

        <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 space-y-6 max-w-4xl mx-auto">
          <div className="space-y-4 text-slate-700 text-sm md:text-base leading-relaxed">
            <p>
              यह वेबसाइट सूचना और शिक्षा के उद्देश्य से है। इसमें दी गई जानकारी केवल सामान्य मार्गदर्शन के लिए है और कानूनी सलाह का विकल्प नहीं है।
            </p>
            <p>
              DDJC अपनी सामग्री की सटीकता और अपडेट रहने के लिए प्रयास करता है, लेकिन कोई भी गारंटी नहीं है। उपयोगकर्ता अपनी जिम्मेदारी से सलाह लें।
            </p>
            <p>
              वेबसाइट का गैर-व्यावसायिक, गैर-विरोधी उपयोग ही अनुमति है। किसी भी प्रकार के दुरुपयोग पर कार्रवाई हो सकती है।
            </p>
            <p>
              इन शर्तों को किसी भी समय बिना पूर्व सूचना के बदला जा सकता है।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
