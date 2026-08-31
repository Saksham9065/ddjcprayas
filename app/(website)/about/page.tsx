"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBullseye, FaEye, FaArrowRight } from "react-icons/fa";
import { useApp } from "@/context/AppContext";

export default function AboutPage() {
  const { language } = useApp();

  return (
    <div className="bg-white min-h-screen py-10 pt-16 md:py-16 md:pt-24">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl space-y-16">

        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="bg-slate-50 text-[#000000] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block">
            {language === "en" ? "About Us" : "हमारे बारे में"}
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#0A2540] tracking-tight">
            {language === "en" ? "About Dalit Dignity & Justice Center (DDJC)" : "दलित सम्मान व न्याय केन्द्र (DDJC) के बारे में"}
          </h1>
        </div>

        {/* Introduction */}
        <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 space-y-6">
          <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
            <p>
              {language === "en"
                ? "The Dalit Dignity & Justice Center (DDJC) was established on 9 October 2023 by the Prayas Jan Utthan Samiti (PJUS) to advance access to justice, constitutional rights and dignity for communities facing caste-based discrimination, violence and social and economic exclusion."
                : "दलित सम्मान व न्याय केन्द्र (DDJC) की स्थापना 9 अक्टूबर 2023 को प्रयास जन उत्थान समिति (पीजेयूएस) द्वारा जाति-आधारित भेदभाव, हिंसा और सामाजिक-आर्थिक बहिष्कार का सामना करने वाले समुदायों के लिए न्याय, संवैधानिक अधिकारों और गरिमा तक पहुंच बढ़ाने के लिए की गई थी।"}
            </p>
            <p>
              {language === "en"
                ? "DDJC works at the intersection of law, human rights, social justice and grassroots action. We believe that justice is meaningful only when people can understand their rights, access institutions without fear, and receive fair and dignified treatment from the systems meant to protect them."
                : "DDJC कानून, मानव अधिकारों, सामाजिक न्याय और जमीनी कार्य के चौराहे पर काम करता है। हमारा मानना है कि न्याय तब ही सार्थक होता है जब लोग अपने अधिकारों को समझ सकें, बिना डर के संस्थानों तक पहुंच सकें और उन्हें संरक्षित करने वाली प्रणालियों से निष्पक्ष और गरिमापूर्ण व्यवहार प्राप्त हो सके।"}
            </p>
          </div>
        </div>

        {/* Why DDJC is Needed */}
        <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 space-y-6">
          <h2 className="text-2xl md:text-3xl font-black text-[#0A2540] tracking-tight">
            {language === "en" ? "Why DDJC is Needed" : "DDJC की आवश्यकता क्यों है"}
          </h2>
          <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
            <p>
              {language === "en"
                ? "For many marginalized communities, the formal justice system remains difficult to navigate. Survivors and families may have to move repeatedly between police stations, government offices, lawyers and courts, often without adequate information, legal representation or institutional support."
                : "कई वंचित समुदायों के लिए औपचारिक न्याय प्रणाली में नेविगेट करना कठिन बना रहता है। पीड़ितों और परिवारों को अक्सर पुलिस स्टेशन, सरकारी दफ्तरों, वकीलों और न्यायालयों के बीच बार-बार घूमना पड़ता है, अक्सर पर्याप्त जानकारी, कानूनी प्रतिनिधित्व या संस्थागत समर्थन के बिना।"}
            </p>
            <p>
              {language === "en"
                ? "A lack of legal knowledge, weak institutional accountability, delayed investigations and social discrimination can prevent victims from securing justice. The consequences extend beyond an individual case, affecting families, livelihoods, dignity and entire communities."
                : "कानूनी ज्ञान की कमी, कमजोर संस्थागत जवाबदehी, देरी से की जाने वाली जांच और सामाजिक भेदभाव पीड़ितों को न्याय प्राप्त करने से रोक सकता है। परिणाम व्यक्तिगत मामले से परे तक फैलते हैं, जो परिवारों, आजीविका, गरिमा और पूरे समुदायों को प्रभावित करते हैं।"}
            </p>
            <p>
              {language === "en"
                ? "DDJC works to bridge this gap. We provide legal assistance, strengthen community legal awareness, document violations, support survivors and engage with institutions to make justice systems more accessible and accountable."
                : "DDJC इस खाई को पाटने के लिए काम करता है। हम कानूनी सहायता प्रदान करते हैं, सामुदायिक कानूनी जागरूकता बढ़ाते हैं, उल्लंघनों का दस्तावेजीकरण करते हैं, पीड़ितों का समर्थन करते हैं और न्याय प्रणालियों को अधिक सुलभ और जवाबदeh बनाने के लिए संस्थानों के साथ जुड़ते हैं।"}
            </p>
            <p>
              {language === "en"
                ? "Our work also helps marginalized communities access government welfare schemes and constitutional entitlements, recognizing that access to justice is inseparable from access to social and economic rights."
                : "हमारा काम वंचित समुदायों को सरकारी कल्याण योजनाओं और संवैधानिक अधिकारों तक पहुंचने में भी मदद करता है, यह मानते हुए कि न्याय तक पहुंच को सामाजिक और आर्थिक अधिकारों तक पहुंच से अलग नहीं किया जा सकता है।"}
            </p>
          </div>
        </div>

        {/* Justice in a Climate-Sensitive Bundelkhand */}
        <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 space-y-6">
          <h2 className="text-2xl md:text-3xl font-black text-[#0A2540] tracking-tight">
            {language === "en" ? "Justice in a Climate-Sensitive Bundelkhand" : "जलवायु-संवेदनशील बुंदेलखंड में न्याय"}
          </h2>
          <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
            <p>
              {language === "en"
                ? "DDJC is rooted in Bundelkhand, a semi-arid and historically drought-prone region spread across Uttar Pradesh and Madhya Pradesh. The region is characterized by rain-dependent agriculture, water stress, degraded natural resources and recurring drought. Government and disaster-management assessments identify several Bundelkhand districts, including Jalaun, Banda, Chitrakoot, Hamirpur, Jhansi, Lalitpur and Mahoba, as severely vulnerable to drought."
                : "DDJC बुंदेलखंड में जड़ें है, यह अर्ध-शुष्क और ऐतिहासिक रूप से सूखे के प्रति संवेदनशील क्षेत्र है जो उत्तर प्रदेश और मध्य प्रदेश में फैला है। इस क्षेत्र की पहचान वर्षा-आधारित कृषि, जल stresses, अपवित्र प्राकृतिक संसाधनों और बार-बार आने वाले सूखे से है। सरकारी और आपदा प्रबंधन मूल्यांकन बुंदेलखंड के कई जिलों—जालौन, बांदा, चित्रकूट, हमीरपुर, जांसी, ललितपुर और महोबा—को सूखे के लिए गंभीर रूप से संवेदनशील पहचानते हैं।"}
            </p>
            <p>
              {language === "en"
                ? "Climate variability, crop losses and livelihood insecurity have also contributed to seasonal and distress migration. These environmental vulnerabilities intersect with deep social inequalities. Around 25% of Bundelkhand's population has been identified as Dalit/Scheduled Caste, while historical assessments have found more than one-third of rural households living below the poverty line."
                : "जलवायु विचलन, फसल नुकसान और आजीविका की असुरक्षा ने मौसमी और कष्ट प्रवासन में योगदान दिया है। ये पर्यावरणीय कमजोरियां गहरी सामाजिक असमानताओं के साथ मिलती हैं। बुंदेलखंड की लगभग 25% जनसंख्या को दलित/अनुसूचित जाति के रूप में पहचाना गया है, जबकि ऐतिहासिक मूल्यांकनों में ग्रामीण घरों का एक तिहाई से ज्यादा गरीबी रेखा के नीचे रहता है पाया गया।"}
            </p>
            <p>
              {language === "en"
                ? "Climate stress does not affect everyone equally. Landlessness, insecure livelihoods, caste discrimination and limited access to public resources can leave Dalit and other marginalised communities particularly exposed to drought, livelihood loss and displacement. Women experience these vulnerabilities in distinct and often intensified ways. Caste and gender discrimination can restrict women's control over land, income, mobility, education and public institutions. Women from Dalit and other marginalised communities may also face heightened risks of violence, exploitation and exclusion while having fewer resources to seek legal remedies. For DDJC, therefore, climate justice, gender justice, caste equality and access to justice are interconnected concerns."
                : "जलवायु तनाव सभी को बराबर प्रभावित नहीं करता। बिना जमीन, असुरक्षित आजीविका, जाति भेदभाव और सार्वजनिक संसाधनों तक सीमित पहुंच दलित और अन्य वंचित समुदायों को सूखे, आजीविका हानि और विस्थापन के प्रति विशेष रूप से संवेदनशील छोड़ सकती है। महिलाएँ इन कमजोरियों को अलग और अक्सर बढ़ी हुई तरीके से अनुभव करती हैं। जाति और लिंग भेदभाव महिलाओं की भूमि, आय, गतिशीलता, शिक्षा और सार्वजनिक संस्थानों पर नियंत्रण को सीमित कर सकता है। दलित और अन्य वंचित समुदायों की महिलाओं को हिंसा, शोषण और बहिष्कार के बढ़े हुए जोखिम का सामना करना पड़ सकता है जबकि कानूनी उपचार के लिए कम संसाधन हों। इसलिए, DDJC के लिए जलवायु न्याय, लिंग न्याय, जाति समानता और न्याय तक पहुंच परस्पर जुड़े मुद्दे हैं।"}
            </p>
          </div>
        </div>

        {/* Our Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#000000] flex items-center justify-center text-xl">
              <FaBullseye />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540]">{language === "en" ? "Our Mission" : "हमारा मिशन"}</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              {language === "en"
                ? "To provide accessible and effective legal aid, institutional representation and constitutional awareness to marginalised communities, while challenging the systemic barriers that prevent people from exercising their rights to justice, equality, liberty and dignity."
                : "वंचित समुदायों को सुलभ और प्रभावी कानूनी सहायता, संस्थागत प्रतिनिधित्व और संवैधानिक जागरूकता प्रदान करना, साथ ही उन तंत्रिक बाधाओं का सामना करना जो लोगों को न्याय, समानता, स्वतंत्रता और गरिमा के अधिकारों का उपयोग करने से रोकते हैं।"}
            </p>
          </div>

          <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#000000] flex items-center justify-center text-xl">
              <FaEye />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540]">{language === "en" ? "Our Vision" : "हमारी दृष्टि"}</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              {language === "en"
                ? "A fear-free, egalitarian and caste-free India where every person can exercise their constitutional rights and access justice with equality, dignity and liberty."
                : "एक भयमुक्त, समतावादी और जातिहीन भारत जहां हर व्यक्ति अपने संवैधानिक अधिकारों का उपयोग कर सकता है और समानता, गरिमा और स्वतंत्रता के साथ न्याय तक पहुंच सकता है।"}
            </p>
          </div>
        </div>

        {/* What We Do */}
        <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-2xl md:text-3xl font-black text-[#0A2540]">{language === "en" ? "What We Do" : "हम क्या करते हैं"}</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-700">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-slate-100 text-[#000000] flex items-center justify-center shrink-0 font-bold">1</span>
              <p>{language === "en" ? "Access to Justice: We support individuals and families in navigating legal and justice institutions and work towards fair, effective and dignified legal outcomes." : "न्याय तक पहुंच: हम कानूनी और न्याय संस्थानों में नेविगेट करने में व्यक्तियों और परिवारों का समर्थन करते हैं और निष्पक्ष, प्रभावी और गरिमापूर्ण कानूनी परिणामों की दिशा में काम करते हैं।"}</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-slate-100 text-[#000000] flex items-center justify-center shrink-0 font-bold">2</span>
              <p>{language === "en" ? "Community Legal Empowerment: We conduct village- and panchayat-level awareness programmes, legal literacy camps and community meetings, and help marginalised communities access government schemes and entitlements." : "सामुदायिक कानूनी सशक्तिकरण: हम ग्राम और पंचायत स्तरीय जागरूकता कार्यक्रम, कानूनी साक्षरता शिविर और सामुदायिक बैठकें आयोजित करते हैं, और वंचित समुदायों को सरकारी योजनाओं और अधिकारों तक पहुंचने में मदद करते हैं।"}</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-slate-100 text-[#000000] flex items-center justify-center shrink-0 font-bold">3</span>
              <p>{language === "en" ? "Building Local Legal Capacity: We develop the capacities of first-generation lawyers and panchayat-level paralegal volunteers and community justice champions, enabling communities to better understand and exercise their rights." : "स्थानीय कानूनी क्षमता निर्माण: हम प्रथम पीढ़ी के वकीलों और पंचायत स्तरीय पैरालेगल स्वयंसेवकों और सामुदायिक न्याय चैंपियनों की क्षमताओं का विकास करते हैं, जिससे समुदाय अपने अधिकारों को बेहतर ढंग से समझ सकें और उपयोग कर सकें।"}</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-slate-100 text-[#000000] flex items-center justify-center shrink-0 font-bold">4</span>
              <p>{language === "en" ? "Documentation and Research: We document incidents at the district and state levels, undertake ground-level fact-finding, and produce evidence-based research dossiers to strengthen advocacy and institutional accountability." : "दस्तावेजीकरण और अनुसंधान: हम जिला और राज्य स्तर पर घटनाओं का दस्तावेजीकरण करते हैं, जमीन-स्तरीय तथ्यान्वेषण करते हैं, और वकालत और संस्थागत जवाबदehी को मजबूत करने के लिए साक्ष्य-आधारित अनुसंधान डॉशियर तैयार करते हैं।"}</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-slate-100 text-[#000000] flex items-center justify-center shrink-0 font-bold">5</span>
              <p>{language === "en" ? "Legal Aid for Survivors: We provide free legal assistance in cases involving the Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act, POCSO Act, domestic violence and other serious violations of rights." : "पीड़ितों के लिए कानूनी सहायता: हम अनुसूचित जातियों और अनुसूचित जनजातियों (अत्याचार निवारण) अधिनियम, पॉक्सो अधिनियम, घरेलू हिंसा और अधिकारों के अन्य गंभीर उल्लंघनों वाले मामलों में मुफ्त कानूनी सहायता प्रदान करते हैं।"}</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-slate-100 text-[#000000] flex items-center justify-center shrink-0 font-bold">6</span>
              <p>{language === "en" ? "Strategic Legal Representation: We work with a dedicated network of experienced lawyers to support effective advocacy before District Courts, High Courts and the Supreme Court of India." : "रणनीतिक कानूनी प्रतिनिधित्व: हम जिला न्यायालयों, उच्च न्यायालयों और भारत के सर्वोच्च न्यायालय में प्रभावी वकालत का समर्थन करने के लिए अनुभवी वकीलों की एक समर्पित नेटवर्क के साथ काम करते हैं।"}</p>
            </div>
          </div>
        </div>

        {/* Rooted in Bundelkhand */}
        <div className="bg-[#0A2540] text-white p-8 md:p-10 rounded-3xl shadow-xl space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">{language === "en" ? "Rooted in Bundelkhand" : "बुंदेलखंड की जड़ता से जुड़ा"}</h2>
          <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
            <p>
              {language === "en"
                ? "Based in Orai, Jalaun, DDJC works across tehsil and district levels, staying closely connected to communities and their lived realities. Our approach combines community engagement, field-based fact-finding, police and administrative follow-up, legal research and courtroom representation. This allows us to respond not only to individual cases, but also to the systemic conditions that produce exclusion and injustice."
                : "औरई, जालौन में स्थित DDJC तहसील और जिला स्तरों पर काम करता है, समुदायों और उनकी वास्तविकताओं से घनिष्ट रूप से जुड़ा रहता है। हमारा दृष्टिकोण सामुदायिक सहभागिता, क्षेत्र-आधारित तथ्यान्वेषण, पुलिस और प्रशासनिक फॉलो-अप, कानूनी अनुसंधान और न्यायालयी प्रतिनिधित्व को मिलाता है। यह हमें केवल व्यक्तिगत मामलों के जवाब देना ही नहीं बल्कि उन तंत्रिक परिस्थितियों का जवाब देने की अनुमति देता है जो बहिष्कार और अन्याय उत्पन्न करती हैं।"}
            </p>
            <p>
              {language === "en"
                ? "We believe that legal intervention becomes stronger when it is rooted in community knowledge, and that lasting social change requires both institutional accountability and community power."
                : "हमारा मानना है कि कानूनी हस्तक्षेप तब मजबूत होता है जब यह सामुदायिक ज्ञान में जड़ें है, और स्थायी सामाजिक परिवर्तन के लिए संस्थागत जवाबदehी और सामुदायिक शक्ति दोनों की आवश्यकता होती है।"}
            </p>
          </div>
        </div>

        {/* Founder's Message */}
        <div className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl space-y-6 shadow-xl relative overflow-hidden">
          <span className="text-xs font-bold uppercase tracking-widest bg-white/10 text-gold px-3 py-1 rounded-full border border-white/20 inline-block">
            {language === "en" ? "Founder's Message" : "संस्थापक का संदेश"}
          </span>
          <blockquote className="italic text-slate-200 text-base md:text-lg leading-relaxed border-l-4 border-gold pl-4 py-1">
            {language === "en"
              ? `"Babasaheb Dr. B.R. Ambedkar reminded us that liberty, equality and fraternity must become principles of everyday life. Whenever a person's dignity and self-respect are denied because of caste, our democracy is diminished. DDJC is not doing anyone a favour. We are working to secure the constitutional rights that belong to every citizen. The Constitution guarantees these rights; our responsibility is to ensure that they reach those who have been historically denied them. Leave fear behind in the journey towards justice. We stand with you."`
              : `बाबासाहेब डॉ. बी.आर. अम्बेडकर ने हमें याद दिलाया कि स्वतंत्रता, समानता और भाईचारा रोजमर्रा के जीवन के सिद्धांत बनने चाहिए। जब भी किसी व्यक्ति की गरिमा और आत्मसम्मान को जाति के आधार पर अस्वीकार किया जाता है, तब हमारी लोकतंत्र की कमी होती है। DDJC किसी का कोई एहसान नहीं कर रहा है। हम हर नागरिक के स्वामित्व वाले संवैधानिक अधिकारों को सुरक्षित करने के लिए काम कर रहे हैं। संविधान इन अधिकारों की गारंटी देता है; हमारी जिम्मेदारी है कि यह सुनिश्चित करें कि वे उन तक पहुंचें जिनसे ऐतिहासिक रूप से इन्हें वंचित किया गया है। न्याय की यात्रा में डर को पीछे छोड़ दो। हम आपके साथ खड़े हैं।`}
          </blockquote>
          <div className="pt-2">
            <p className="font-bold text-white">Adv. Kuldeep Kumar Baudh</p>
            <p className="text-xs text-gold">{language === "en" ? "Founder, Dalit Dignity & Justice Center (DDJC)" : "संस्थापक, दलित सम्मान व न्याय केन्द्र (DDJC)"}</p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center space-y-4">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-soft text-navy font-bold px-8 py-4 rounded-2xl transition-all shadow-lg text-sm md:text-base">
            {language === "en" ? "Contact DDJC" : "DDJC से संपर्क करें"} <FaArrowRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  );
}
