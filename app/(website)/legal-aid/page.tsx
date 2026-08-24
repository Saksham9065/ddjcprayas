"use client";

import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

export default function LegalAidPage() {
  return (
    <div className="bg-white min-h-screen py-10 pt-16 md:py-16 md:pt-24">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="bg-slate-50 text-[#000000] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block mb-4">
            न्याय तक पहुंच
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight mb-4 md:mb-6">
            मुफ्त कानूनी सहायता और समर्थन
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            DDJC यह सुनिश्चित करता है कि वंचित पीड़ितों और कम आय वाले परिवारों को वित्तीय बाधाओं के कारण न्याय से कभी नहीं रोका जाए।
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <h3 className="text-2xl font-bold text-[#0A2540] mb-4">हम किसे कवर करते हैं</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2"><FaCheckCircle className="text-[#000000] mt-1 shrink-0" /> SC/ST अत्याचार अधिनियम के मामले और एफआईआर दर्ज करने में सहायता।</li>
              <li className="flex items-start gap-2"><FaCheckCircle className="text-[#000000] mt-1 shrink-0" /> भूमि, संपत्ति और नागरिक अधिकार विवाद।</li>
              <li className="flex items-start gap-2"><FaCheckCircle className="text-[#000000] mt-1 shrink-0" /> जमानत आवेदन और निचली तथा उच्च न्यायालयों में ट्रायल मॉनिटरिंग।</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <h3 className="text-2xl font-bold text-[#0A2540] mb-4">कौन पात्र है?</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2"><FaCheckCircle className="text-[#000000] mt-1 shrink-0" /> सामाजिक भेदभाव और जाति-आधारित हिंसा के पीड़ित।</li>
              <li className="flex items-start gap-2"><FaCheckCircle className="text-[#000000] mt-1 shrink-0" /> वकील की फीस के लिए पैसा नहीं होने वाले आर्थिक रूप से कमजोर व्यक्ति।</li>
              <li className="flex items-start gap-2"><FaCheckCircle className="text-[#000000] mt-1 shrink-0" /> महिलाएँ और बच्चे जो मानव अधिकारों के उल्लंघन का सामना कर रहे हैं।</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link href="/complaint" className="inline-flex items-center gap-2 bg-[#000000] hover:bg-slate-600 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg">
            मामला / शिकायत दर्ज करें <FaArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}