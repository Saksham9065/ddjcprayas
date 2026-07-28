"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

function Team() {
  const leadership = [
    { name: "Adv. Kuldeep Kumar Baudh", role: "Founder - DDJC", education: "MSW, LLB", experience: "15 Yrs Exp", image: "/images/team/kuldeep.jpg" },
    { name: "Adv. Nikhat Parveen", role: "Prog. & Legal Coordinator", education: "LLB, M.Sc. CS", experience: "5 Yrs Exp", image: "/images/team/nikaht.jpg" },
    { name: "Pradeep Kumar Singh", role: "Finance Manager & Accountant", education: "BA, MA, PGDCA", experience: "10 Yrs Exp", image: "/images/team/pradeep.jpg" },
  ];

  const members = [
    { name: "Usha Devi", role: "Tehseel Coordinator (Jalaun)", education: "BSC, BED", experience: "3 Yrs Exp", image: "/images/team/usha.jpg" },
    { name: "Pradeep Kumar", role: "Tehseel Coordinator (Orai)", education: "BSC, LLB", experience: "5 Yrs Exp", image: "/images/team/pradeep_k.png" },
    { name: "Anita Devi", role: "Tehseel Coordinator (Kalpi)", education: "12th", experience: "7 Yrs Exp", image: "/images/team/anita.jpg" },
    { name: "Sachin Kumar", role: "Tehseel Coordinator (Madhaugadh)", education: "BSC, LLB", experience: "3 Yrs Exp", image: "/images/team/sachin.jpg" },
    { name: "Sneshraja", role: "Tehseel Coordinator (Konch)", education: "BA", experience: "20 Yrs Exp", image: "/images/team/snesh.jpg" },
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
<section className="py-16 pt-24 md:py-24 bg-white">
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.05 }} 
        className="container mx-auto px-4 max-w-7xl"
      >
        
        <div className="text-center mb-12 flex flex-col items-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#000000] bg-slate-50 px-2.5 py-1 rounded-md mb-2 border border-slate-200">
            Leadership & Advocates
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0A2540] tracking-tight">
            Meet the DDJC Team
          </h2>
          <p className="max-w-xl mx-auto mt-2 text-sm md:text-base text-slate-600 leading-relaxed">
            Our dedicated team of lawyers, social activists, and field coordinators working tirelessly for justice and dignity.
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8">
          
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-4xl items-stretch">
              {leadership.map((person, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants} 
                  className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-md"
                >
                  <div className="w-full aspect-[4/3] bg-slate-100 overflow-hidden">
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
                      <span className="font-semibold text-slate-400 mr-1.5">Education:</span>
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
                className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-md"
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
                <span className="font-semibold text-slate-400 mr-1">Edu:</span>
                <span className="text-slate-600 font-medium truncate">{member.education}</span>
              </div>
            </div>
          </motion.div>
        ))}
          </div>

        </div>

      </motion.div>
    </section>
  );
}

export default Team;