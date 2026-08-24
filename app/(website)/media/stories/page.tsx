"use client";

import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

export default function StoriesPage() {
  const stories = [
    {
      name: "Vijay Valmiki",
      location: "Valmiki Nagar, Jalaun (20 km from Orai)",
      story: "अस्पताल के कार्यक्रम के लिए ऑटो-रिक्शा चलाने की कोशिश कर रहा था, और जब मेरी शादी की मंजूरी अचानक रद्द हो गई थी, तब मैंने अंधेरे में भी काम किया। जब झूठे धमकी और जातिवादी अपमान हिंसा में बदल गए, तो DDJC ने तथ्य- खोज मिशन के साथ कदम रखा। उनके कानूनी नेतृत्व प्रशिक्षण के माध्यम से, मैंने कानून स्कूल में पंजीकरण किया और काला कोट पहना। आज, मैं अपने बुंदेलखंड वाल्मिकि समुदाय के पहले दलित युवा वकील के रूप में गर्व से खड़ा हूँ, अपने मामलों की लड़ाई लड़ रहा हूँ और पूरी गरिमा के साथ दूसरों का प्रतिनिधित्व कर रहा हूँ।",
    },
    {
      name: "Goldy Devi",
      location: "Nibhana Village, Tehsil Mehwa, Jalaun",
      story: "चंबल की खाइयों की एक युवा महिला के रूप में डॉक्टर बनने के सपने को देख रही थी, जब महुआ में अपने चिकित्सा प्रयोग के रास्ते में भयंकर हमला और अपहरण की कोशिश हुई। एफआईआर दर्ज करने के बाद, हमें समझौते के लिए जबरन दबाव बैठना पड़ा। DDJC ने कठोर परामर्श और कानूनी पीछे से हस्तक्षेप किया। न केवल हमारी टीम ने आरोपी का बैल हटाने का विरोध किया, बल्कि सफलतापूर्वक उसकी जमानत की मंजूरी को रद्द करवा दिया।",
    },
    {
      name: "Savitri Bai",
      location: "Baghaura, Konch, Jalaun",
      story: "केन्द्र ने मुझे मेरे अधिकार समझने और अपने गाँव में भेदभाव के खिलाफ खड़े होने में मदद की। आज मैं अन्य महिलाओं को भी ऐसा करने में मदद करती हूँ।",
    },
    {
      name: "Raju",
      location: "Konch, Jalaun",
      story: "मैं संविधान के बारे में जानने के लिए युवा हब से जुड़ा। अब मैं अपने ब्लॉक में जागरूकता शिविर लगाता हूँ और अन्य युवाओं का नेतृत्व करता हूँ।",
    },
    {
      name: "Pooja",
      location: "Jalaun, Uttar Pradesh",
      story: "DDJC ने मुझे वह छात्रवृत्ति के लिए आवेदन करने में मार्गदर्शन दिया जिसके बारे में मुझे पता ही नहीं था। शिक्षा मेरे परिवार के लिए सच्चाई बन गई।",
    },
    {
      name: "Ramdas",
      location: "Baghaura, Konch, Jalaun",
      story: "जब मेरी जमीन के कागजों को चुनौती दी गई, तो केंद्र ने मुझे कानूनी सहायता से जोड़ा। मैंने अपनी जमीन और अपनी गरिमा बचाई।",
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
            प्रभाव और जीवन
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight mb-4 md:mb-6">
            सफलता की कहानियाँ
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            सामुदायिक एकजुटता और कानूनी सहायता के माध्यम से लचीलेपन, कानूनी जीत और गरिमा की वास्तविक कहानियाँ।
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