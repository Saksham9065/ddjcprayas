"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaUsers, FaGraduationCap, FaHandHoldingHeart, FaBookOpen } from "react-icons/fa";
import { useApp } from "@/context/AppContext";

export default function LegalFellowshipPage() {
  const { language } = useApp();

  return (
    <div className="bg-white min-h-screen py-10 pt-16 md:py-16 md:pt-24">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl space-y-16">

        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="bg-slate-50 text-[#000000] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block">
            {language === "en" ? "Legal Fellowship" : "कानूनी फेलोशिप"}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight">
            {language === "en" ? "Legal Fellowship for Young Lawyers" : "युवा वकीलों के लिए कानूनी फेलोशिप"}
          </h1>
          <blockquote className="italic text-slate-600 text-sm md:text-base border-l-4 border-[#000000] pl-4 py-1 mx-auto max-w-2xl text-left">
            {language === "en" ? `"The law is not a profession, it is a calling. And the true lawyer is not one who knows the law, but one who uses the law to serve the people." — Dr. B.R. Ambedkar` : "“कानून एक पेशा नहीं, बल्कि एक आह्वान है। और सच्चा वकील वह नहीं जो कानून जानता है, बल्कि जो लोगों की सेवा के लिए कानून का उपयोग करता है।” — डॉ. बी.आर. अम्बेडकर"}
          </blockquote>
        </div>

        {/* Overview */}
        <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 space-y-6">
          <h2 className="text-2xl font-black text-[#0A2540]">{language === "en" ? "Overview" : "अवलोकन"}</h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            {language === "en" ? "The DDJC Legal Fellowship is an initiative designed to empower first-generation Dalit-Bahujan lawyers from the Jalaun, Jhansi, and Bundelkhand districts. The program aims to strengthen litigation skills, foster ethical legal practice, and build a cadre of community-rooted, public-spirited lawyers committed to delivering quality legal aid to marginalized communities." : "DDJC लीगल फेलोशिप जालौन, जांसी और बुंदेलखंड जिलों के पहली पीढ़ी के दलित-बहुजन वकीलों को सशक्त करने के लिए डिज़ाइन की गई एक पहल है। यह कार्यक्रम मुकदमा कौशल को मजबूत करने, नैतिक कानूनी प्रथा को बढ़ावा देने और वंचित समुदायों के लिए गुणवत्तापूर्ण कानूनी सहायता प्रदान करने के लिए समर्पित सामुदायिक-जड़ों वाले, जनकल्याणात्मक वकीलों की एक टुकड़ी बनाने का लक्ष्य रखता है।"}
          </p>
        </div>

        {/* Key Highlights */}
        <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-2xl font-black text-[#0A2540]">{language === "en" ? "Key Highlights of the Program" : "कार्यक्रम के मुख्य आकर्षण"}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white text-[#000000] rounded-2xl flex items-center justify-center text-xl border border-slate-200">
                  <FaGraduationCap size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#0A2540]">{language === "en" ? "Induction Programme" : "परिचय कार्यक्रम"}</h3>
              </div>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                {language === "en" ? "A comprehensive orientation at the start of the fellowship to lay the DDJC foundation for legal practice and advocacy." : "कानूनी प्रथा और वकालत के लिए DDJC की नींव रखने के लिए फेलोशिप की शुरुआत में एक व्यापक परिचय कार्यक्रम।"}
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white text-[#000000] rounded-2xl flex items-center justify-center text-xl border border-slate-200">
                  <FaUsers size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#0A2540]">{language === "en" ? "Mentorship & Guidance" : "मेन्टरशिप और मार्गदर्शन"}</h3>
              </div>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                {language === "en" ? "Continuous mentorship from experienced legal professionals—primarily High Court practitioners—to guide fellows through complex litigation and case management." : "अनुभवी कानूनी पेशेवरों—मुख्य रूप से हाई कोर्ट पेशेवरों—से लगातार मेन्टरशिप, जो फेलो को जटिल मुकदमा और मामला प्रबंधन के माध्यम से मार्गदर्शन करते हैं।"}
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white text-[#000000] rounded-2xl flex items-center justify-center text-xl border border-slate-200">
                  <FaBookOpen size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#0A2540]">{language === "en" ? "Capacity Building & Training" : "क्षमता निर्माण और प्रशिक्षण"}</h3>
              </div>
              <div className="space-y-2 text-slate-600 text-xs md:text-sm leading-relaxed">
                <p><strong>{language === "en" ? "Quarterly Workshops:" : "त्रैमासिक कार्यशालाएँ:"}</strong> {language === "en" ? "A 2-day in-person practical training every quarter focused on procedural law and courtroom litigation skills." : "प्रत्यावर्ती कानून और अदालती मुकदमा कौशल पर केंद्रित त्रैमासिक 2-दिवसीय व्यावहारिक प्रशिक्षण।"}</p>
                <p><strong>{language === "en" ? "Monthly Virtual Sessions:" : "मासिक वर्चुअल सत्र:"}</strong> {language === "en" ? "At least 2 hours of specialized online training every month." : "हर महीने कम से कम 2 घंटे का विशेष ऑनलाइन प्रशिक्षण।"}</p>
              </div>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white text-[#000000] rounded-2xl flex items-center justify-center text-xl border border-slate-200">
                  <FaHandHoldingHeart size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#0A2540]">{language === "en" ? "Pro-Bono Legal Aid" : "निश्काम कानूनी सहायता"}</h3>
              </div>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                {language === "en" ? "To ensure direct impact, each fellow will provide free legal support and representation in pro-bono cases during their fellowship period." : "सीधा प्रभाव सुनिश्चित करने के लिए, प्रत्येक फेलो अपने फेलोशिप अवधि के दौरान निश्काम मामलों में मुफ्त कानूनी सहायता और प्रतिनिधित्व प्रदान करेगा।"}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-deep text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg text-sm md:text-base">
            {language === "en" ? "Apply for Fellowship" : "फेलोशिप के लिए आवेदन करें"} <FaArrowRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  );
}
