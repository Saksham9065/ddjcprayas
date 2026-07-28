"use client";

import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

export default function StoriesPage() {
  const stories = [
    {
      name: "Vijay Valmiki",
      location: "Valmiki Nagar, Jalaun (20 km from Orai)",
      story: "Coming from a family where my father worked as a contractual sanitation worker and my mother engaged in manual scavenging, I faced untouchability and discrimination every day of my life—from school to trying to run an auto-rickshaw, and even when my wedding alliance broke down abruptly. When false threats and casteist abuse escalated into a violent attack, DDJC stepped in with a fact-finding mission. Through their legal leadership training, I enrolled in law school and donned the black coat. Today, I stand proudly as my Bundelkhand Valmiki community's first Dalit youth lawyer, fighting my own cases and representing others with complete dignity.",
    },
    {
      name: "Goldy Devi",
      location: "Nibhana Village, Tehsil Mehwa, Jalaun",
      story: "As a young woman from the Chambal ravines dreaming of becoming a doctor to serve our region where female doctors are non-existent, I faced a horrific assault and attempted abuse on my way to my medical practice in Mehwa. After filing an FIR, we faced immense pressure to compromise. DDJC intervened with rigorous counseling and legal backing. Not only did our team ensure the chargesheet was filed, but they successfully opposed and secured the rejection of the accused's bail all the way up to the Allahabad High Court. Furthermore, through a High Court writ petition filed by DDJC, the DM and SWO were directed to immediately credit ₹1,50,000 in statutory compensation to my account. Today, my dream of becoming a doctor is alive once more.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[#0A2540] text-white py-4">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex items-center justify-center gap-3">
            <span className="text-lg md:text-xl font-bold tracking-wider uppercase">Support Justice &amp; Equality</span>
          </div>
        </div>
      </div>
      <div className="py-16 pt-24">
        <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative h-20 w-20 rounded-full overflow-hidden shadow-md border border-slate-200 bg-slate-50">
              <Image
                src="/images/logo/ddjc-logo.jpg"
                alt="DDJC Logo"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
          <span className="bg-slate-50 text-[#000000] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block mb-4">
            Impact & Lives
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#0A2540] tracking-tight mb-6">
            Success Stories
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Real accounts of resilience, legal victories, and dignity restored through community solidarity and legal aid.
          </p>
        </div>

        <div className="space-y-8">
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
    </div>
  );
}