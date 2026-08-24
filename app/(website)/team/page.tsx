"use client";

import React from "react";
import { motion } from "framer-motion";

function Team() {
  const leadership = [
    { name: "Adv. Kuldeep Kumar Baudh", role: "संस्थापक - DDJC", education: "MSW, LLB", experience: "15 वर्ष अनुभव", image: "/images/team/kuldeep.jpg" },
    { name: "Adv. Nikhat Parveen", role: "कार्यक्रम तथा कानूनी समन्वयक", education: "LLB, M.Sc. CS", experience: "5 वर्ष अनुभव", image: "/images/team/nikaht.jpg" },
    { name: "Pradeep Kumar Singh", role: "वित्त प्रबंधक तथा लेखाकार", education: "BA, MA, PGDCA", experience: "10 वर्ष अनुभव", image: "/images/team/pradeep.jpg" },
  ];

  const members = [
    { name: "Usha Devi", role: "तहसील समन्वयक (जालौन)", education: "BSC, BED", experience: "3 वर्ष अनुभव", image: "/images/team/usha.jpg" },
    { name: "Pradeep Kumar", role: "तहसील समन्वयक (उरई)", education: "BSC, LLB", experience: "5 वर्ष अनुभव", image: "/images/team/pradeep_k.png" },
    { name: "Anita Devi", role: "तहसील समन्वयक (कालपी)", education: "12th", experience: "7 वर्ष अनुभव", image: "/images/team/anita.jpg" },
    { name: "Sachin Kumar", role: "तहसील समन्वयक (मधौगढ़)", education: "BSC, LLB", experience: "3 वर्ष अनुभव", image: "/images/team/sachin.jpg" },
    { name: "Sneshraja", role: "तहसील समन्वयक (कोंच)", education: "BA", experience: "20 वर्ष अनुभव", image: "/images/team/snesh.jpg" },
  ];

  const containerVariants = { 
    hidden: { opacity: 0 }, 
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.08, delayChildren: 0.05 } 
    } 
  };
  
  const itemVariants = { 
    hidden: { opacity: 0, y: 25 }, 
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring" as const, damping: 20, stiffness: 120 }
    } 
  };

  return (
<div className="bg-white min-h-screen py-10 pt-16 md:py-16 md:pt-24">
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.05 }} 
        className="container mx-auto px-4 md:px-6 max-w-6xl"
      >
        
        <div className="text-center mb-10 flex flex-col items-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#000000] bg-slate-50 px-2.5 py-1 rounded-full mb-2 border border-slate-200">
            नेतृत्व एवं वकील
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-[#0A2540] tracking-tight">
            DDJC टीम से मिलें
          </h1>
          <p className="max-w-xl mx-auto mt-2 text-sm md:text-base text-slate-600 leading-relaxed">
            न्याय और गरिमा के लिए समर्पित हमारे वकीलों, सामाजिक कार्यकर्ताओं और क्षेत्रीय समन्वयकों की टीम।
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:gap-6">
          
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 w-full max-w-6xl items-stretch">
              {leadership.map((person, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants} 
                  className="bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-md"
                >
                  <div className="w-full aspect-4/3 bg-slate-100 overflow-hidden">
                    <img src={person.image} alt={person.name} className={`w-full h-full object-cover ${person.name === "Adv. Nikhat Parveen" || person.name === "Pradeep Kumar Singh" ? "object-top" : "object-center"}`} />
                  </div>
                  
                  <div className="p-4 flex flex-col grow justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="text-base font-bold text-[#0A2540] leading-tight tracking-tight">
                          {person.name}
                        </h3>
                        <span className="text-[11px] font-semibold text-[#000000] bg-slate-50 px-2 py-0.5 rounded shrink-0 whitespace-nowrap mt-0.5 border border-slate-200">
                          {person.experience}
                        </span>
                      </div>
                      <p className="text-slate-500 font-medium text-xs mt-1 mb-3">
                        {person.role}
                      </p>
                    </div>
                    
                    <div className="pt-2 border-t border-slate-200 flex items-center text-xs">
                      <span className="font-semibold text-slate-400 mr-1.5">शिक्षा:</span>
                      <span className="text-slate-600 font-medium truncate">{person.education}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 items-stretch">
            {members.map((member, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants} 
                className="bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-md"
              >
              <div className="w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                <img src={member.image} alt={member.name} className={`w-full h-full object-cover ${member.name === "Sachin Kumar" ? "object-top" : "object-center"}`} />
              </div>
            
            <div className="p-3 flex flex-col grow justify-between">
              <div>
                <div className="flex flex-col xl:flex-row justify-between items-start gap-1.5 mb-1">
                  <h4 className="text-sm font-bold text-[#0A2540] leading-tight tracking-tight">
                    {member.name}
                  </h4>
                  <span className="text-[9px] font-semibold text-[#000000] bg-slate-50 px-1.5 py-0.5 rounded shrink-0 whitespace-nowrap mt-0.5 border border-slate-200">
                    {member.experience}
                  </span>
                </div>
                <p className="text-slate-500 font-medium text-[10px] mt-1 mb-2 leading-snug">
                  {member.role}
                </p>
              </div>
              
              <div className="pt-2 border-t border-slate-200 flex items-center text-[10px]">
                <span className="font-semibold text-slate-400 mr-1">शिक्षा:</span>
                <span className="text-slate-600 font-medium truncate">{member.education}</span>
              </div>
            </div>
          </motion.div>
        ))}
          </div>

        </div>

      </motion.div>
    </div>
  );
}

export default Team;
