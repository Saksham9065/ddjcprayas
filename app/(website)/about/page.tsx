"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBullseye, FaEye, FaArrowRight } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen py-10 pt-16 md:py-16 md:pt-24">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl space-y-16">
        
         {/* Header Banner */}
         <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="bg-slate-50 text-[#000000] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block">
              हम हम हैं
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-[#0A2540] tracking-tight">
               दलित सम्मान व न्याय केन्द्र (DDJC) के बारे में
            </h1>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              न्याय और गरिमा की दिशा में कदम। 9 अक्टूबर 2023 को बुंदेलखंड दलित अधिकार मंच द्वारा स्थापित।
            </p>
          </div>

         {/* Why DDJC is Needed */}
         <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 space-y-6">
            <h2 className="text-2xl md:text-3xl font-black text-[#0A2540] tracking-tight">
              DDJC की आवश्यकता क्यों है?
            </h2>
            <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
              <p>
                अखबारों, टेलीविजन चैनलों, सोशल मीडिया और अपने आसपास के माहौल के माध्यम से हर दिन हम विभिन्न घटनाओं का साक्षी बनते हैं। ऐसी घटनाओं के बाद पीड़ितों को अक्सर न्यायालयों और कानूनी दफ्तरों में संघर्ष करते हुए देखा जाता है। वे थानाओं और न्यायालयों में न्याय के लिए प्रयास करते हैं; हालांकि, अक्सर उचित जानकारी और कानूनी ज्ञान की कमी के कारण वे न्याय तक नहीं पहुंच पाते। इसका प्रभाव पीड़ितों पर सबसे अधिक गहरा होता है, जो विभिन्न रूप से उनके पूरे परिवारों और समुदायों को प्रभावित करता है।
              </p>
              <p>
                यह सुनिश्चित करने के लिए कि हर व्यक्ति को न्याय तक पहुंच, मानव अधिकारों की समझ और पीड़ितों को गरिमा के साथ न्याय मिले—और विशेष रूप से दलित और वंचित समुदायों के लिए सरकारी कल्याण योजनाओं तक पहुंच बढ़ाने के लिए—दलित सम्मान व न्याय केन्द्र (DDJC) की स्थापना 9 अक्टूबर 2023 को की गई थी।
              </p>
            </div>
             <div className="grid md:grid-cols-2 gap-6">
               <Image src="/images/contact/office.jpg" alt="DDJC Office" width={1189} height={630} className="w-full h-auto" />
               <Image src="/images/hero/1.jpg" alt="DDJC Team" width={3976} height={1923} className="w-full h-auto" />
             </div>
          </div>

         {/* Core Purpose & Vision / Mission */}
         <div className="grid md:grid-cols-2 gap-6">
           <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 space-y-4">
             <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#000000] flex items-center justify-center text-xl">
               <FaBullseye />
             </div>
             <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540]">हमारा मिशन</h2>
             <p className="text-slate-600 text-sm md:text-base leading-relaxed">
               वंचित समुदायों को बिना किसी समझौते के कानूनी सहायता, संस्थागत प्रतिनिधित्व और संवैधानिक जागरूकता प्रदान करना, ताकि सिस्टमिक बाधाएँ कभी भी किसी भी व्यक्ति के न्याय और गरिमा के अधिकार से वंचित न हों।
             </p>
           </div>

           <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 space-y-4">
             <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#000000] flex items-center justify-center text-xl">
               <FaEye />
             </div>
             <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540]">हमारी दृष्टि</h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                एक भयमुक्त, समतामूलक और जातिहीन भारत की रचना जहाँ प्रत्येक नागरिक को गरिमापूर्ण न्याय, समानता और स्वतंत्रता का अधिकार प्राप्त हो।
              </p>
           </div>
         </div>

         {/* DDJC Main Focus Areas */}
         <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
           <h2 className="text-2xl md:text-3xl font-black text-[#0A2540]">DDJC के प्रमुख फोकस क्षेत्र</h2>
           <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-700">
             <div className="flex items-start gap-3">
               <span className="w-8 h-8 rounded-lg bg-slate-100 text-[#000000] flex items-center justify-center shrink-0 font-bold">1</span>
               <p>हर व्यक्ति को न्याय तक पहुंच सुनिश्चित करना और पीड़ितों के लिए गरिमापूर्ण कानूनी परिणाम सुनिश्चित करने के लिए प्रयास करना।</p>
             </div>
             <div className="flex items-start gap-3">
               <span className="w-8 h-8 rounded-lg bg-slate-100 text-[#000000] flex items-center justify-center shrink-0 font-bold">2</span>
               <p>ग्राम/पंचायत स्तरीय जागरूकता बैठकें, कानूनी साक्षरता शिविर आयोजित करना और वंचित समूहों को सरकारी योजनाओं से जोड़ना।</p>
             </div>
             <div className="flex items-start gap-3">
               <span className="w-8 h-8 rounded-lg bg-slate-100 text-[#000000] flex items-center justify-center shrink-0 font-bold">3</span>
               <p>प्रथम पीढ़ी के वकीलों और पंचायत स्तरीय पैरालेगल स्वयंसेवकों (चैंपियन) को बेहतर कानूनी क्षमता के साथ तैयार करना।</p>
             </div>
             <div className="flex items-start gap-3">
               <span className="w-8 h-8 rounded-lg bg-slate-100 text-[#000000] flex items-center justify-center shrink-0 font-bold">4</span>
               <p>राज्य और जिला स्तरीय घटनाओं को दस्तावेजीकरण करना, ग्राउंड-जीरो तथ्यान्वेषण करना और कठोर अनुसंधान डॉशियर तैयार करना।</p>
             </div>
             <div className="flex items-start gap-3">
               <span className="w-8 h-8 rounded-lg bg-slate-100 text-[#000000] flex items-center justify-center shrink-0 font-bold">5</span>
               <p>एससी/एसटी अत्याचार अधिनियम, पॉक्सो अधिनियम, घरेलू हिंसा और विशेष मामलों के पीड़ितों के लिए मुफ्त कानूनी सहायता प्रदान करना।</p>
             </div>
             <div className="flex items-start gap-3">
               <span className="w-8 h-8 rounded-lg bg-slate-100 text-[#000000] flex items-center justify-center shrink-0 font-bold">6</span>
               <p>जिला न्यायालयों, उच्च न्यायालयों और सर्वोच्च न्यायालय में प्रभावी वकालत के लिए अनुभवी वकीलों की एक समर्पित पैनल बनाए रखना।</p>
             </div>
           </div>
         </div>

         {/* Founder's Note */}
         <div className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl space-y-6 shadow-xl relative overflow-hidden">
           <span className="text-xs font-bold uppercase tracking-widest bg-white/10 text-gold px-3 py-1 rounded-full border border-white/20 inline-block">
             संस्थापक का संदेश
           </span>
            <blockquote className="italic text-slate-200 text-base md:text-lg leading-relaxed border-l-4 border-gold pl-4 py-1">
              बाबासाहेब डॉ. बी.आर. अंबेडकर ने कहा था कि स्वतंत्रता, समानता और भाईचारा जीवन के सिद्धांत होने चाहिए। आज भी जब भी किसी भी कोने में किसी की जाति के आधार पर आत्मसम्मान कुचलता है, तब हमारी लोकतंत्र से खून बहता है। DDJC किसी का कोई ऋण नहीं चुका रहा है; बल्कि यह हर वंचित नागरिक के लिए वह संवैधानिक अधिकार सुनिश्चित करने के लिए संघर्ष कर रहा है जो हमारे राष्ट्र की श्रेष्ठ कानून और संविधान द्वारा गारंटी दिया गया है। न्याय की इस यात्रा में डर को पीछे छोड़ दो; हम आपके साथ हैं।
            </blockquote>
           <div className="pt-2">
             <p className="font-bold text-white">Adv. Kuldeep Kumar Baudh</p>
             <p className="text-xs text-gold">संस्थापक, दलित सम्मान व न्याय केन्द्र (DDJC)</p>
           </div>
         </div>

         {/* Rooted in Bundelkhand's Grassroots */}
         <div className="bg-[#0A2540] text-white p-8 md:p-10 rounded-3xl shadow-xl space-y-6">
           <h2 className="text-2xl md:text-3xl font-bold">बुंदेलखंड की जड़ता से जुड़ा</h2>
           <p className="text-slate-300 text-sm md:text-base leading-relaxed">
             औरई, जालौं से कार्यरत, हमारी टीम तहसील और जिला स्तर पर बिना थके काम करती है। हम क्षेतीय तथ्यान्वेषण, थाना फॉलो-अप और पेशेवर न्यायालयी मुकदमे को मिलाकर कमजोर पीड़ितों और न्यायिक प्रणालियों के बीच की खाई को पाटती है।
           </p>
           <div className="pt-4 flex flex-wrap gap-4">
             <Link
               href="/team"
               className="inline-flex items-center gap-2 bg-[#000000] hover:bg-slate-600 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-md text-sm"
             >
               हमारी टीम से मिलें
               <FaArrowRight size={14} />
             </Link>
           </div>
         </div>

      </div>
    </div>
  );
}
