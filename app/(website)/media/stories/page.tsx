"use client";

import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { useApp } from "@/context/AppContext";

export default function StoriesPage() {
  const { language } = useApp();

  const stories = [
    {
      name: "Vijay Valmiki",
      location: "Valmiki Nagar, Jalaun (20 km from Orai)",
      story: language === "en" ? "I was trying to drive an auto-rickshaw for a hospital program, and when my marriage proposal was suddenly canceled, I continued working in the dark. When false threats and caste-based insults turned into violence, DDJC stepped in with a fact-finding mission. Through their legal leadership training, I enrolled in law school and donned the black coat. Today, I stand proudly as the first Dalit youth lawyer from my Bundelkhand Valmiki community, fighting my own cases and representing others with full dignity." : "अस्पताल के कार्यक्रम के लिए ऑटो-रिक्शा चलाने की कोशिश कर रहा था, और जब मेरी शादी की मंजूरी अचानक रद्द हो गई थी, तब मैंने अंधेरे में भी काम किया। जब झूठे धमकी और जातिवादी अपमान हिंसा में बदल गए, तो DDJC ने तथ्य- खोज मिशन के साथ कदम रखा। उनके कानूनी नेतृत्व प्रशिक्षण के माध्यम से, मैंने कानून स्कूल में पंजीकरण किया और काला कोट पहना। आज, मैं अपने बुंदेलखंड वाल्मिकि समुदाय के पहले दलित युवा वकील के रूप में गर्व से खड़ा हूँ, अपने मामलों की लड़ाई लड़ रहा हूँ और पूरी गरिमा के साथ दूसरों का प्रतिनिधित्व कर रहा हूँ।",
    },
    {
      name: "Goldy Devi",
      location: "Nibhana Village, Tehsil Mehwa, Jalaun",
      story: language === "en" ? "As a young woman from the ravines of Chambal, I was dreaming of becoming a doctor when a brutal attack and attempted abduction occurred on my way to a medical exam in Mahua. After filing an FIR, we were forced to face pressure to settle. DDJC provided strong counsel and legal intervention. Not only did our team oppose the accused's bail, but we also successfully got his bail approval canceled." : "चंबल की खाइयों की एक युवा महिला के रूप में डॉक्टर बनने के सपने को देख रही थी, जब महुआ में अपने चिकित्सा प्रयोग के रास्ते में भयंकर हमला और अपहरण की कोशिश हुई। एफआईआर दर्ज करने के बाद, हमें समझौते के लिए जबरन दबाव बैठना पड़ा। DDJC ने कठोर परामर्श और कानूनी पीछे से हस्तक्षेप किया। न केवल हमारी टीम ने आरोपी का बैल हटाने का विरोध किया, बल्कि सफलतापूर्वक उसकी जमानत की मंजूरी को रद्द करवा दिया।",
    },
    {
      name: "Savitri Bai",
      location: "Baghaura, Konch, Jalaun",
      story: language === "en" ? "The center helped me understand my rights and stand against discrimination in my village. Today, I help other women do the same." : "केन्द्र ने मुझे मेरे अधिकार समझने और अपने गाँव में भेदभाव के खिलाफ खड़े होने में मदद की। आज मैं अन्य महिलाओं को भी ऐसा करने में मदद करती हूँ।",
    },
    {
      name: "Raju",
      location: "Konch, Jalaun",
      story: language === "en" ? "I joined the youth hub to learn about the constitution. Now I conduct awareness camps in my block and lead other youth." : "मैं संविधान के बारे में जानने के लिए युवा हब से जुड़ा। अब मैं अपने ब्लॉक में जागरूकता शिविर लगाता हूँ और अन्य युवाओं का नेतृत्व करता हूँ।",
    },
    {
      name: "Pooja",
      location: "Jalaun, Uttar Pradesh",
      story: language === "en" ? "DDJC guided me to apply for a scholarship I didn't even know about. Education has become a reality for my family." : "DDJC ने मुझे वह छात्रवृत्ति के लिए आवेदन करने में मार्गदर्शन दिया जिसके बारे में मुझे पता ही नहीं था। शिक्षा मेरे परिवार के लिए सच्चाई बन गई।",
    },
    {
      name: "Ramdas",
      location: "Baghaura, Konch, Jalaun",
      story: language === "en" ? "When my land documents were challenged, the center connected me with legal aid. I saved my land and my dignity." : "जब मेरी जमीन के कागजों को चुनौती दी गई, तो केंद्र ने मुझे कानूनी सहायता से जोड़ा। मैंने अपनी जमीन और अपनी गरिमा बचाई।",
    },
  ];

  return (
    <div className="bg-white min-h-screen py-10 pt-16 md:py-16 md:pt-24">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex justify-center mb-6">
            <div className="relative h-20 w-20 rounded-full overflow-hidden shadow-md border border-slate-200 bg-slate-50">
              <Image
                src="/images/logo/ddjc-logo.jpg"
                alt="DDJC Logo"
                fill
                sizes="80px"
                className="object-cover object-center"
              />
            </div>
          </div>
          <span className="bg-slate-50 text-[#000000] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block mb-4">
            {language === "en" ? "Impact & Life" : "प्रभाव और जीवन"}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight mb-4 md:mb-6">
            {language === "en" ? "Stories of Success" : "सफलता की कहानियाँ"}
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            {language === "en" ? "Real stories of resilience, legal victories, and dignity through community solidarity and legal aid." : "सामुदायिक एकजुटता और कानूनी सहायता के माध्यम से लचीलेपन, कानूनी जीत और गरिमा की वास्तविक कहानियाँ।"}
          </p>
        </div>

        <div className="space-y-6">
          {stories.map((item, index) => (
            <div key={index} className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 space-y-4 shadow-sm">
              <FaQuoteLeft className="text-[#000000] text-3xl opacity-40" />
              <p className="text-slate-700 text-base md:text-lg italic leading-relaxed">
                &ldquo;{item.story}&rdquo;
              </p>
              <div className="pt-4 border-t border-slate-200 flex justify-between items-center text-xs">
                <span className="font-bold text-[#0A2540] text-sm">{item.name}</span>
                <span className="text-slate-400">{item.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
