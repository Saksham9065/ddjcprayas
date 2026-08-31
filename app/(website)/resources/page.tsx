"use client";

import React from "react";
import { FaDownload, FaFilePdf } from "react-icons/fa";
import { useApp } from "@/context/AppContext";

export default function ResourcesPage() {
  const { language } = useApp();

  return (
    <div className="bg-white min-h-screen py-10 pt-16 md:py-16 md:pt-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="bg-slate-50 text-[#000000] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block mb-4">
            {language === "en" ? "Knowledge Hub" : "ज्ञान केंद्र"}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight mb-4 md:mb-6">
            {language === "en" ? "Legal Resources and Guides" : "कानूनी संसाधन और गाइड"}
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            {language === "en"
              ? "Download educational pamphlets, constitutional guides, and statutory handbooks to empower yourself with legal knowledge."
              : "कानूनी ज्ञान से अपने आप को सशक्त बनाने के लिए शैक्षिक पैम्फलेट्स, संवैधानिक गाइड और वैधानिक हैंडबुक डाउनलोड करें।"}
          </p>
        </div>

        <article className="bg-slate-50 rounded-3xl border border-slate-200 p-6 md:p-10">
          <h2 className="text-xl md:text-2xl font-black text-[#0A2540] leading-snug mb-6">
            {language === "en"
              ? "SC/ST (Prevention of Atrocities) Act, 1989 — Hindi Training Material"
              : "अनुसूचित जाति और अनुसूचित जनजाति (अत्याचार निवारण) अधिनियम, 1989 पर हिंदी प्रशिक्षण सामग्री"}
          </h2>

          <div className="prose prose-slate max-w-none text-slate-700 text-sm md:text-base leading-relaxed space-y-4">
            <p>
              {language === "en"
                ? "To make legal information and rights easier to understand, our team has prepared a new training material — \"Mera Adhikar\". This easy-language booklet helps understand the SC/ST (Prevention of Atrocities) Act, 1989."
                : "कानूनी जानकारी और अधिकारों से जुड़ी बातों को आसान और समझने लायक बनाने के लिए, हमारी टीम ने एक नया ट्रेनिंग मैटेरियल तैयार किया है – \"मेरा अधिकार\"। यह एक आसान भाषा में लिखी गई किताब है, जो अनुसूचित जाति और अनुसूचित जनजाति (अत्याचार निवारण) अधिनियम, 1989 को समझने में मदद करती है।"}
            </p>

            <p>
              {language === "en"
                ? "This booklet is based on experiences from our previous trainings. It is available in Hindi because we work mostly in Hindi-speaking states like Bihar, Delhi and Uttar Pradesh."
                : "यह किताब हमारे पिछले प्रशिक्षणों से मिले अनुभवों पर आधारित है। यह हिंदी में उपलब्ध है क्योंकि हम ज़्यादातर बिहार, दिल्ली और उत्तर प्रदेश जैसे हिंदी बोलने वाले राज्यों में काम करते हैं।"}
            </p>

            <h3 className="text-base font-bold text-[#0A2540] mt-6 mb-3">
              {language === "en" ? "What's inside this booklet?" : "इस किताब में क्या है?"}
            </h3>

            <ul className="list-disc pl-5 space-y-2">
              <li>
                {language === "en"
                  ? "What to do if police does not file FIR or delays investigation"
                  : "अगर पुलिस FIR दर्ज न करे या जाँच में देरी हो, तो क्या करें"}
              </li>
              <li>
                {language === "en"
                  ? "Simple introduction to SC/ST (Prevention of Atrocities) Act, 1989"
                  : "SC/ST (अत्याचार निवारण) अधिनियम, 1989 का आसान परिचय"}
              </li>
              <li>
                {language === "en"
                  ? "What does 'atrocity' mean under this law"
                  : "इस कानून के अनुसार 'अत्याचार' का मतलब क्या है"}
              </li>
              <li>
                {language === "en"
                  ? "Essential legal steps and timelines"
                  : "कानूनी प्रक्रिया के ज़रूरी स्टेप्स और समय-सीमाएं"}
              </li>
              <li>
                {language === "en"
                  ? "Rights of victims, survivors and witnesses"
                  : "पीड़ितों, सर्वाइवर और गवाहों के अधिकार"}
              </li>
              <li>
                {language === "en"
                  ? "Relief and rehabilitation: who gets it, how, how much, and by when"
                  : "राहत और मुआवज़े की जानकारी: किसे मिल सकता है, कैसे मिल सकता है, कितनी राशि मिलती है और कब तक मिलनी चाहिए"}
              </li>
              <li>
                {language === "en"
                  ? "Step-by-step guidance from filing FIR to taking the case to court"
                  : "FIR दर्ज कराने से लेकर कोर्ट में मामले को आगे बढ़ाने तक की स्टेप-बाय-स्टेप जानकारी"}
              </li>
              <li>
                {language === "en"
                  ? "Monitoring and accountability mechanisms: district-level monitoring committees and the role of government officers"
                  : "निगरानी और जवाबदेही के तरीके: जैसे ज़िला स्तर की निगरानी समितियाँ और सरकारी अफसरों की भूमिका"}
              </li>
            </ul>

            <p>
              {language === "en"
                ? "This booklet is a resource for community members, grassroots workers, youth leaders, and legal awareness volunteers — so they can understand the law and raise their voices for their rights."
                : "यह किताब समुदाय के लोगों, जमीनी स्तर पर काम करने वालों, युवा नेताओं और कानूनी जागरूकता फैलाने वालों के लिए एक मदद का साधन है, जिससे वे कानून को समझ सकें और अपने अधिकारों के लिए आवाज़ उठा सकें।"}
            </p>

            <p className="text-slate-600 italic">
              {language === "en"
                ? "If you have any suggestions about this booklet or would like it in another language, please contact us at ddjc.prayas@gmail.com and we will try to help."
                : "अगर आप इस किताब के बारे में कोई सुझाव देना चाहते हैं या इसे किसी और भाषा में पाना चाहते हैं, तो हमसे ज़रूर संपर्क करें – ddjc.prayas@gmail.com हम आपकी मदद करने की कोशिश करेंगे।"}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200">
              <a
                href="/pdf/PoA-Booklet-6.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0A2540] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#0A2540]/90 transition-colors"
              >
                <FaFilePdf size={18} />
                {language === "en" ? "Download PoA Booklet" : "PoA बुकलेट डाउनलोड करें"}
              </a>
          </div>
        </article>
      </div>
    </div>
  );
}
