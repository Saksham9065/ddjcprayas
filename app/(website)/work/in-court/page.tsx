"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGavel, FaCheckCircle, FaArrowRight, FaBalanceScale, FaShieldAlt, FaFileAlt, FaHandHoldingUsd } from "react-icons/fa";

export default function InCourtPage() {
  return (
    <div className="bg-white min-h-screen py-10 pt-16 md:py-16 md:pt-24">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl space-y-16">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="bg-slate-100 text-gold px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block">
            न्यायिक हस्तक्षेप
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight">
            अदालत में संचालन और कानूनी वकालत
          </h1>
          <blockquote className="italic text-slate-600 text-sm md:text-base border-l-4 border-gold pl-4 py-1 mx-auto max-w-2xl text-left">
            “अन्याय कहीं भी हो, वह हर जगह के न्याय के लिए खतरा है।” — डॉ. मार्टिन लूथर किंग जूनियर
          </blockquote>
        </div>

        {/* Featured Court Images Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-56 sm:h-64 md:h-80 rounded-3xl overflow-hidden shadow-sm border border-slate-200">
            <Image
              src="/images/court/allhabad court.png"
              alt="ALLAHABAD HIGH COURT"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <p className="text-white text-xs font-bold uppercase tracking-wider">ALLAHABAD HIGH COURT</p>
            </div>
          </div>

          <div className="relative h-56 sm:h-64 md:h-80 rounded-3xl overflow-hidden shadow-sm border border-slate-200">
            <Image
              src="/images/court/image.png"
              alt="DISTRICT COURT JALAUN (ORAI)"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <p className="text-white text-xs font-bold uppercase tracking-wider">DISTRICT COURT JALAUN (ORAI)</p>
            </div>
          </div>
        </div>

        {/* Key Impact Statistics Banner */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-50 text-[#0A2540] p-8 rounded-3xl shadow-sm border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white text-gold flex items-center justify-center text-lg border border-slate-200">
              <FaBalanceScale />
            </div>
            <h3 className="text-xl font-bold">सक्रिय मामले पोर्टफोलियो</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              DDJC वर्तमान में <strong className="text-[#0A2540] font-mono">191+ मामलों</strong> में मुफ्त कानूनी सहायता प्रदान कर रहा है (जिसमें SC/ST PoA अत्याचार, POCSO, और घरेलू हिंसा अपराध शामिल हैं), <strong className="text-[#0A2540] font-mono">95+ मामलों</strong> में सीधे अदालत में वकालत, और <strong className="text-[#0A2540] font-mono">105+ मामलों</strong> में सक्रिय अदालत निगरानी।
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white text-gold flex items-center justify-center text-lg border border-slate-200">
              <FaHandHoldingUsd />
            </div>
            <h3 className="text-xl font-bold text-[#0A2540]">मुआवजा सुरक्षित</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              सक्रिय जिला प्रशासन समन्वय और कठोर अदालती वकालत के माध्यम से, DDJC ने पीड़ितों के लिए <strong className="text-[#0A2540] font-mono">₹75 लाख+</strong> की वैधानिक राहत और मुआवजा सुरक्षित की है, जो <strong className="text-[#0A2540] font-mono">45+ मामलों</strong> में से है।
            </p>
          </div>
        </div>

        {/* Core Belief & Description */}
        <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-2xl font-black text-[#0A2540]">न्याय की असली परीक्षा</h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            दलित गरिमा और न्याय केंद्र (DDJC) मजबूत रूप से विश्वास करता है कि न्याय की सच्ची परीक्षा अदालत की दीवारों के भीतर होती है। यह सुनिश्चित करने के लिए कि किसी पीड़ित को उचित कानूनी जानकारी और वित्तीय बंधनों के कारण न्याय से वंचित न हो, DDJC की कानूनी टीम जिला न्यायालयों से लेकर उच्च न्यायालय और सर्वोच्च न्यायालय तक समर्पित और प्रभावी वकालत प्रदान करती है।
          </p>
        </div>

        {/* Detailed Sections Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-white text-gold rounded-2xl flex items-center justify-center text-xl border border-slate-200">
              <FaGavel />
            </div>
            <h3 className="text-xl font-bold text-[#0A2540]">1. समर्पित वकीलों द्वारा मुफ्त प्रतिनिधित्व</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              “न्याय में देरी का मतलब न्याय का निराकरण है, और हम इस खामोशी को पूरा करने के लिए समर्पित हैं।” DDJC में जिला न्यायालयों, उच्च न्यायालयों और सर्वोच्च न्यायालय में अग्रसी और अनुभवी वकीलों की एक समर्पित पैनल है, जो वंचित और शोषित पीड़ितों को वित्तीय बोझ के बिना उत्कृष्ट कानूनी प्रतिनिधित्व प्रदान करती है।
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-white text-gold rounded-2xl flex items-center justify-center text-xl border border-slate-200">
              <FaShieldAlt />
            </div>
            <h3 className="text-xl font-bold text-[#0A2540]">2. विशेष अधिनियमों के तहत प्रभावी वकालत</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              हम अदालतों के अंदर गंभीर अपराधों और संवेदनशील मामलों पर ज्यादा ध्यान देते हैं:
              <br />• <strong>SC/ST (अत्याचार निवारण) अधिनियम:</strong> जाति भेद और हिंसा के मामलों में कठोर वैधानिक प्रावधानों का प्रयोग।
              <br />• <strong>POCSO अधिनियम:</strong> बाल यौन शोषण पीड़ितों के लिए मनोवैज्ञानिक दबाव के बिना त्वरित न्याय सुनिश्चित करना।
              <br />• <strong>घरेलू हिंसा अधिनियम (DVA):</strong> घरेलू और सामाजिक दुराचरण से बचने वाली महिलाओं के अधिकारों की रक्षा।
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-white text-gold rounded-2xl flex items-center justify-center text-xl border border-slate-200">
              <FaFileAlt />
            </div>
            <h3 className="text-xl font-bold text-[#0A2540]">3. साक्ष्य-आधारित मुकदमा और परीक्षण निगरानी</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              “सत्य साबित करने के लिए ठोस साक्ष्य की आवश्यकता होती है, और हम अदालत के सामने वही सत्य लाते हैं।” हमारे केंद्र द्वारा किए गए जमीन-स्तर के तथ्य-अन्वेषण और दस्तावेजीकरण कानूनी रूप से मजबूत किए जाते हैं और प्रस्तुत किए जाते हैं। बाद में, हम आरोपपत्रों से लेकर गवाहों के बयान तक कठोर परीक्षण निगरानी बनाए रखते हैं ताकि अपराधी तकनीकी दोषों के कारण बच न सकें।
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-white text-gold rounded-2xl flex items-center justify-center text-xl border border-slate-200">
              <FaCheckCircle />
            </div>
            <h3 className="text-xl font-bold text-[#0A2540]">4. जमानत का विरोध और दंड सुनिश्चित करना</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              गंभीर अपराधों में आरोपियों के अनुचित जमानत के खिलाफ पीड़ितों और गवाहों की सुरक्षा बनाए रखने के लिए हमारी टीम मजबूत रूप से विरोध करती है। हर सुनवाई की तारीख पर प्रभावी वकालत के माध्यम से, हम मामलों को उनके तार्किक निष्कर्ष तक ले जाते हैं—अपराधियों के लिए कठोर दंड सुनिश्चित करते हैं।
            </p>
          </div>

        </div>

        {/* Protection, Compensation & DLSA Coordination */}
        <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-2xl font-black text-[#0A2540]">5. पीड़ित सुरक्षा, मुआवजा और संस्थानिक समन्वय</h2>
          <div className="grid md:grid-cols-2 gap-6 text-xs md:text-sm text-slate-600">
            <div className="space-y-2 bg-white p-5 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-[#0A2540]">गवाह सुरक्षा और राहत</h4>
              <p>अदालत से विशेष पुलिस सुरक्षा और डर-मुक्त वातावरण मांगना ताकि अदालत परिसर में अत्याचार के कारण पीड़ितों और गवाहों को धमकियों से बचाया जा सके।</p>
            </div>
            <div className="space-y-2 bg-white p-5 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-[#0A2540]">अंतरिम और अंतिम मुआवजा</h4>
              <p>कानूनी चैनलों के माध्यम से पीड़ितों को अंतरिम और अंतिम सरकारी राहत/मुआवजा पैकेजों को जल्दी से मंजूर और स्थानांतरित करना।</p>
            </div>
            <div className="space-y-2 bg-white p-5 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-[#0A2540]">NALSA / SLSA / DLSA समन्वय</h4>
              <p>पूरक कानूनी सुरक्षा, राज्य सलाहकार, और वैधानिक लाभ प्राप्त करने के लिए राष्ट्रीय, राज्य और जिला कानूनी सेवा प्राधिकरणों के साथ सहयोग करना।</p>
            </div>
            <div className="space-y-2 bg-white p-5 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-[#0A2540]">मामला समीक्षा और प्रशासनिक अनुवर्ती कार्रवाई</h4>
              <p>न्यायिक कार्यवाही के दौरान नियमित रूप से मामले की प्रगति की समीक्षा करना और प्रशासनिक या कानूनी बाधाओं को दूर करना।</p>
            </div>
          </div>
        </div>

        {/* Courtroom Pledge Banner */}
        <div className="bg-slate-50 text-[#0A2540] p-8 md:p-10 rounded-3xl space-y-6 shadow-sm relative overflow-hidden text-center border border-slate-200">
          <span className="text-xs font-bold uppercase tracking-widest bg-white text-gold px-3 py-1 rounded-full border border-slate-200 inline-block">
            हमारा अदालत शपथ
          </span>
          <blockquote className="italic text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            “जब तक न्याय का फैसला पूर्ण गरिमा के साथ पीड़ित के पक्ष में नहीं आता, DDJC का कानूनी संघर्ष कभी नहीं रुकता। हम अदालत की दहलीज पर हर दबा हुआ आवाज़ एक शक्तिशाली गरज में बदल देते हैं।”
          </blockquote>
          <div className="pt-4">
            <Link href="/complaint" className="inline-flex items-center gap-2 bg-[#000000] hover:bg-slate-600 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-sm text-sm">
              अदालत सहायता का अनुरोध करें <FaArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
