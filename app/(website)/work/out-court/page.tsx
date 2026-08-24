"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCheckCircle, FaArrowRight, FaUsers, FaShieldAlt, FaBookOpen, FaHandHoldingUsd, FaUniversity } from "react-icons/fa";

export default function OutCourtPage() {
  return (
    <div className="bg-white min-h-screen py-10 pt-16 md:py-16 md:pt-24">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl space-y-16">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="bg-slate-50 text-[#000000] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block">
            समुदाय और प्रशासनिक कार्रवाई
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight">
            अदालत-बहिरा हस्तक्षेप और समुदाय सशक्तिकरण
          </h1>
          <blockquote className="italic text-slate-600 text-sm md:text-base border-l-4 border-[#000000] pl-4 py-1 mx-auto max-w-2xl text-left">
            “जब तक आप सामाजिक स्वतंत्रता हासिल नहीं कर लेते, कानून आपको जो भी स्वतंत्रता देता है, वह आपके किसी काम की नहीं है।” — बाबासाहब डॉ. बी. आर. आंबेडकर
          </blockquote>
        </div>

        {/* Featured Community Outreach Images Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-56 sm:h-64 md:h-80 rounded-3xl overflow-hidden shadow-md border border-slate-200">
            <Image
              src="/images/out of court/Community Meeting 8.jpeg"
              alt="Community awareness meeting and grassroots legal literacy camp"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="relative h-56 sm:h-64 md:h-80 rounded-3xl overflow-hidden shadow-md border border-slate-200">
            <Image
              src="/images/out of court/IMG20241217142146.jpg"
              alt="Fact-finding delegation and community support"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Introduction Philosophy */}
        <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 space-y-6">
          <h2 className="text-2xl font-black text-[#0A2540]">समुदाय सशक्तिकरण और जमीन-स्तर का आधार</h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            दलित गरिमा और न्याय केंद्र (DDJC) का मानना है कि न्याय का आधार काफी पहले बैठा होता है जब कोई किसी अदालत के कमरे में कदम रखता है—सामाजिक और प्रशासनिक स्तर पर। जब तक किसी पीड़ित परिवार को जमीन पर सामाजिक, प्रशासनिक और मनोवैज्ञानिक सहायता नहीं मिलती, कानूनी संघर्ष अपूर्ण रहता है। इसलिए, DDJC पीड़ितों के अधिकारों की रक्षा, त्वरित न्याय सुनिश्चित करने और समुदाय स्वावलंबन को बढ़ावा देने के लिए अदालतों के बाहरे जमीन पर मजबूती से काम करता है।
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 text-xs font-bold text-slate-700">
            <div className="bg-white p-4 rounded-xl border border-slate-200">✓ 125+ पंचायत पैरालेगल चैंपियनों की पहचान की गई</div>
            <div className="bg-white p-4 rounded-xl border border-slate-200">✓ कानूनी और नेतृत्व कार्यशालाओं के माध्यम से 79+ स्वयंसेवकों का प्रशिक्षण</div>
            <div className="bg-white p-4 rounded-xl border border-slate-200">✓ निरंतर समन्वय में 45+ पैनल वकील</div>
          </div>
        </div>

        {/* Card 1 */}
        <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-100 text-[#000000] rounded-2xl flex items-center justify-center text-xl border border-slate-200">
              <FaCheckCircle />
            </div>
            <h2 className="text-2xl font-black text-[#0A2540]">1. तथ्य-खोज मिशन: तथ्य-खोज और दस्तावेजीकरण</h2>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
            <blockquote className="italic text-slate-500 text-xs border-l-2 border-[#000000] pl-3 py-1">
              “सत्य कभी भी दावों से सिद्ध नहीं होता, बल्कि उसके लिए ठोस और अकाट्य तथ्यों की आवश्यकता होती है।” — महात्मा ज्योतिराव फुले
            </blockquote>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              जब भी कार्यस्थलों, जिलों या राज्य में दलितों के खिलाफ गंभीर अत्याचार, POCSO अपराध, या महिलाओं के खिलाफ हिंसा होती है, DDJC टीम स्थल पर जाती है। हम पुलिस या प्रशासनिक छिपे हुए मामलों को रोकने के लिए वैज्ञानिक अनुसंधान के माध्यम से प्राथमिक तथ्यों, गवाहों की बयान और परिस्थितियों का बारीकी से दस्तावेजीकरण करते हैं। यह दस्तावेजीकरण अदालती परीक्षण का आधार बनती है।
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-100 text-[#000000] rounded-2xl flex items-center justify-center text-xl border border-slate-200">
              <FaShieldAlt />
            </div>
            <h2 className="text-2xl font-black text-[#0A2540]">2. पुलिस स्टेशनों और प्रशासन में प्रभावी वकालत</h2>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
            <blockquote className="italic text-slate-500 text-xs border-l-2 border-[#000000] pl-3 py-1">
              “कमजोरों की सुरक्षा और उनके अधिकारों की रक्षा करना ही किसी भी सभ्य प्रशासन की पहली कसौटी है।” — नेल्सन मंडेला
            </blockquote>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              <strong>एफआईआर पंजीकरण सुनिश्चित करना:</strong> कानूनी ज्ञान की कमी के कारण, वंचित समूहों की शिकायतों को अक्सर पुलिस स्टेशनों पर नज़रअंदाज किया जाता है। उचित SC/ST अधिनियम, POCSO, और हिंसा प्रावधानों के तहत त्वरित एफआईआर पंजीकरण सुनिश्चित करने के लिए DDJC पीड़ितों के साथ पुलिस स्टेशनों पर कंधे से कंधा मिलाता है।<br />
              <strong>वरिष्ठ अधिकारी समन्वय:</strong> निष्पक्ष और समय-बंधित जांच के लिए पुलिस महानिरीक्षक (एसपी), जिला मजिस्ट्रेट (डीएम), और पुलिस महानिदेशक (डीजीपी) को शामिल करके लगातार दबाव बनाना।
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-100 text-[#000000] rounded-2xl flex items-center justify-center text-xl border border-slate-200">
              <FaBookOpen />
            </div>
            <h2 className="text-2xl font-black text-[#0A2540]">3. ग्राम और पंचायत कानूनी जागरूकता शिविर</h2>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
            <blockquote className="italic text-slate-500 text-xs border-l-2 border-[#000000] pl-3 py-1">
              “शिक्षा ही वह हथियार है जिससे आप दुनिया को बदल सकते हैं, और कानूनी शिक्षा वह ढाल है जिससे आप खुद को बचा सकते हैं।” — DDJC
            </blockquote>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              ग्रामीण और पंचायत स्तर पर नियमित जागरूकता बैठकें और विशेष कानूनी साक्षरता शिविर आयोजित करना। हम वंचित समुदायों को मूल अधिकारों, मानव अधिकारों और कानूनी प्रक्रियाओं की बुनियादी समझ प्रदान करते हैं, जटिल कानूनी अधिनियमों (SC/ST PoA अधिनियम, POCSO, घरेलू हिंसा अधिनियम) को सरल स्थानीय शब्दों में अनुवादित करके डर को खत्म करते हैं।
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-100 text-[#000000] rounded-2xl flex items-center justify-center text-xl border border-slate-200">
              <FaUsers />
            </div>
            <h2 className="text-2xl font-black text-[#0A2540]">4. स्वयंसेवकों और समुदाय चैंपियनों का निर्माण</h2>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
            <blockquote className="italic text-slate-500 text-xs border-l-2 border-[#000000] pl-3 py-1">
              “परिवर्तन तब नहीं आता जब हम किसी और व्यक्ति या किसी और समय का इंतजार करते हैं; हम खुद ही वो बदलाव हैं जिसकी हमें तलाश है।” — बराक ओबामा
            </blockquote>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              <strong>पहली पीढ़ी वकील क्षमता निर्माण:</strong> शोषित पृष्ठभूमि से आने वाले नए पहली पीढ़ी के वकीलों को उनकी कानूनी क्षमताओं को बढ़ाने के लिए मेंटरिंग और प्रशिक्षण देना।<br />
               <strong>पैरालेगल चैंपियन:</strong> हर पंचायत स्तर पर स्थानीय युवाओं और महिलाओं को &quot;पैरालेगल चैंपियन&quot; (दलित मानव अधिकार रक्षक) के रूप में तैयार करना जो अन्याय के खिलाफ पहली रक्षा की पंक्ति के रूप में कार्य करता है।
            </p>
          </div>
        </div>

        {/* Welfare Scheme Linkage */}
        <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-100 text-[#000000] rounded-2xl flex items-center justify-center text-xl border border-slate-200">
              <FaHandHoldingUsd />
            </div>
            <h2 className="text-2xl font-black text-[#0A2540]">5. कल्याण योजना संपर्क</h2>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
            <blockquote className="italic text-slate-500 text-xs border-l-2 border-[#000000] pl-3 py-1">
              “स्वतंत्रता का तब तक कोई अर्थ नहीं है, जब तक कि वह आर्थिक रूप से सबसे कमजोर व्यक्ति को भी गरिमापूर्ण जीवन न दे सके।” — कांशीराम जी
            </blockquote>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              केंद्रीय और राज्य कल्याण योजनाओं को सीधे दलित, आदिवासी और वंचित समुदायों तक ले जाना। शिक्षा, स्वास्थ्य सेवा, आवास और रोजगार में आवेदन पंजीकरण से लेकर प्रत्यक्ष लाभ स्थानांतरण तक हाथ बांधने की सहायता प्रदान करना।
            </p>
          </div>
        </div>

        {/* Human Rights Commissions */}
        <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-100 text-[#000000] rounded-2xl flex items-center justify-center text-xl border border-slate-200">
              <FaUniversity />
            </div>
            <h2 className="text-2xl font-black text-[#0A2540]">6. राष्ट्रीय और राज्य आयोगों के साथ वकालत</h2>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
            <blockquote className="italic text-slate-500 text-xs border-l-2 border-[#000000] pl-3 py-1">
              “मानवाधिकार कोई विशेषाधिकार नहीं हैं जो सरकारें आपको देती हैं। वे अधिकार हैं जिन्हें कोई आपसे छीन नहीं सकता।”
            </blockquote>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              जब स्थानीय पुलिस या प्रशासन पक्षपात दिखाता है, हमारी टीम तुरंत राष्ट्रीय/राज्य SC-ST आयोगों, NHRC, और महिला आयोगों के साथ मामले पंजीकृत करती है, जांच समितियों के गठन सुनिश्चित करती है ताकि न्याय दिया जा सके।
            </p>
          </div>
        </div>

        {/* Grassroots Pledge Banner */}
        <div className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl space-y-6 shadow-xl relative overflow-hidden text-center">
          <span className="text-xs font-bold uppercase tracking-widest bg-slate-1000/20 text-blue-300 px-3 py-1 rounded-full border border-slate-200 inline-block">
            हमारा जमीन-स्तर शपथ
          </span>
          <blockquote className="italic text-slate-200 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            “DDJC केवल अदालतों के कमरों में न्याय की गुहार नहीं लगाता, बल्कि समाज की रगों में न्याय का हौसला भरता है। भयमुक्त, समतामूलक और जाति-मुक्त भारत का निर्माण तब तक असंभव है, जब तक हमारे गांवों का हर नागरिक निडर होकर अपने अधिकारों के लिए खड़ा न हो जाए। हम इसी बदलाव का जरिया हैं।”
          </blockquote>
          <div className="pt-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#000000] hover:bg-slate-600 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg text-sm">
              फील्ड समन्वयकों से संपर्क करें <FaArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
