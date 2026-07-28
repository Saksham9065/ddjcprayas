"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";
import { useApp } from "@/context/AppContext";

export default function ContactPage() {
  const { language } = useApp();
  const [formData, setFormData] = useState({
    fullName: "",
    fatherHusbandName: "",
    age: "",
    category: "",
    gender: "",
    education: "",
    mobile: "",
    email: "",
    address: "",
    incidentDescription: "",
    helpType: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({
        fullName: "",
        fatherHusbandName: "",
        age: "",
        category: "",
        gender: "",
        education: "",
        mobile: "",
        email: "",
        address: "",
        incidentDescription: "",
        helpType: "",
      });
    }, 1000);
  };

  return (
<div className="bg-slate-50 min-h-screen py-16 pt-24">
       <div className="container mx-auto px-4 md:px-6 max-w-6xl">
         {/* Header */}
         <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
           <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#0A2540] tracking-tight mb-4 md:mb-6">
             {language === "en" ? "Get Help & Legal Support" : "सहायता और कानूनी समर्थन प्राप्त करें"}
           </h1>
           <p className="text-slate-600 text-xs md:text-sm lg:text-base leading-relaxed mb-4">
             {language === "en" ? "You are not alone in this fight for justice. If you or someone you know has faced injustice, caste-based atrocity, or violence, please fill out the form below. DDJC’s legal team will contact you shortly." : "न्याय की इस लड़ाई में आप अकेले नहीं हैं। यदि आप या आपका कोई परिचित किसी अन्याय, जातिगत अत्याचार या हिंसा का शिकार हुआ है, तो कृपया नीचे दिया गया फॉर्म भरें। DDJC की कानूनी टीम जल्द ही आपसे संपर्क करेगी।"}
           </p>
           <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
             {language === "en" ? "Reach out to our legal coordinators, support staff, or visit our office in Orai for urgent assistance and inquiries." : "आपातकालीन सहायता और जानकारी के लिए हमारे कानूनी समन्वयकों, समर्थन स्टाफ से संपर्क करें या ओराई स्थित हमारे कार्यालय में आएँ।"}
           </p>
         </div>

         {success && (
           <div className="mb-4 md:mb-6 p-3 md:p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-2xl text-xs md:text-sm font-semibold">
             Thank you! Your intake form has been submitted successfully. Our team will contact you shortly.
           </div>
         )}

         {/* Intake Form */}
         <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
           <div className="bg-white p-4 md:p-8 lg:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-4 md:space-y-6">
             <h3 className="text-lg md:text-xl font-bold text-[#0A2540] mb-3 md:mb-4">{language === "en" ? "Contact Us" : "हमसे संपर्क करें"}</h3>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
               <div>
                 <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5">Full Name</label>
                 <input
                   type="text"
                   required
                   value={formData.fullName}
                   onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                   className="w-full px-3 md:px-4 py-3 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                   placeholder="........................................................................................"
                 />
               </div>
               <div>
                 <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5">Father&apos;s / Husband&apos;s Name</label>
                 <input
                   type="text"
                   required
                   value={formData.fatherHusbandName}
                   onChange={(e) => setFormData({ ...formData, fatherHusbandName: e.target.value })}
                   className="w-full px-3 md:px-4 py-3 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                   placeholder="..................................................................."
                 />
               </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
               <div>
                 <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5">Age</label>
                 <input
                   type="text"
                   value={formData.age}
                   onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                   className="w-full px-3 md:px-4 py-3 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                   placeholder="..................."
                 />
               </div>
               <div>
                 <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5">Category (SC / ST / OBC / Minorities / General)</label>
                 <input
                   type="text"
                   value={formData.category}
                   onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                   className="w-full px-3 md:px-4 py-3 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                   placeholder="..................................."
                 />
               </div>
               <div>
                 <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5">Gender (Male / Female / Others)</label>
                 <input
                   type="text"
                   value={formData.gender}
                   onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                   className="w-full px-3 md:px-4 py-3 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                   placeholder=".........................................................."
                 />
               </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
               <div>
                 <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5">Education</label>
                 <input
                   type="text"
                   value={formData.education}
                   onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                   className="w-full px-3 md:px-4 py-3 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                   placeholder="........................................................................................"
                 />
               </div>
               <div>
                 <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5">Mobile Number</label>
                 <input
                   type="tel"
                   required
                   value={formData.mobile}
                   onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                   className="w-full px-3 md:px-4 py-3 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                   placeholder="................................................................................."
                 />
               </div>
             </div>

             <div>
               <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5">Email (if any)</label>
               <input
                 type="email"
                 value={formData.email}
                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                 className="w-full px-3 md:px-4 py-3 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                 placeholder="...................................................................................."
               />
             </div>

             <div>
               <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5">Complete Address</label>
               <input
                 type="text"
                 value={formData.address}
                 onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                 className="w-full px-3 md:px-4 py-3 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                 placeholder=".............................................................................."
               />
             </div>

             <div>
               <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5">Brief Description of the Incident/Case &amp; Current Status</label>
               <textarea
                 rows={3}
                 value={formData.incidentDescription}
                 onChange={(e) => setFormData({ ...formData, incidentDescription: e.target.value })}
                 className="w-full px-3 md:px-4 py-3 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                 placeholder="........................................................................................................"
               />
             </div>

             <div>
               <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5">What kind of help/support do you want from Dalit Dignity & Justice Centre?</label>
               <textarea
                 rows={3}
                 value={formData.helpType}
                 onChange={(e) => setFormData({ ...formData, helpType: e.target.value })}
                 className="w-full px-3 md:px-4 py-3 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                 placeholder="........................................................................................................"
               />
             </div>

             <Button type="submit" isLoading={loading} className="w-full py-3 md:py-4 text-xs md:text-sm">
               Submit
             </Button>
           </div>
         </form>
       </div>
     </div>
  );
}