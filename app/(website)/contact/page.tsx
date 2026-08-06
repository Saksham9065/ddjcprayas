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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Failed to submit form");
      }

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
    } catch (error) {
      console.error("Contact form submission error:", error);
      alert(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 pt-16 md:py-16 md:pt-24">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-black text-[#0A2540] tracking-tight mb-3 md:mb-4">
            {language === "en" ? "Get Help & Legal Support" : "सहायता और कानूनी समर्थन प्राप्त करें"}
          </h1>
          <p className="text-slate-600 text-xs md:text-sm lg:text-base leading-relaxed mb-3">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                  />
                </div>
                <div>
                  <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 md:px-4 py-3 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                  >
                    <option value="">Select Category</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
                    <option value="OBC">OBC</option>
                    <option value="Minorities">Minorities</option>
                    <option value="General">General</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5">Gender</label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-3 md:px-4 py-3 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
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
                />
              </div>

              <div>
                <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5">Complete Address</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-3 md:px-4 py-3 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                />
              </div>

              <div>
                <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5">Brief Description of the Incident/Case &amp; Current Status</label>
                <textarea
                  rows={3}
                  value={formData.incidentDescription}
                  onChange={(e) => setFormData({ ...formData, incidentDescription: e.target.value })}
                  className="w-full px-3 md:px-4 py-3 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                />
              </div>

              <div>
                <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5">What kind of help/support do you want from Dalit Dignity & Justice Centre?</label>
                <textarea
                  rows={3}
                  value={formData.helpType}
                  onChange={(e) => setFormData({ ...formData, helpType: e.target.value })}
                  className="w-full px-3 md:px-4 py-3 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                />
              </div>

              <Button type="submit" isLoading={loading} className="w-full py-3 md:py-4 text-xs md:text-sm">
                Submit
              </Button>
            </div>
          </form>

          {/* Address & Map */}
          <div className="space-y-6">
            <div className="bg-white p-4 md:p-8 lg:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-[#0A2540] mb-3 md:mb-4">{language === "en" ? "Our Office" : "हमारा कार्यालय"}</h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                {language === "en" ? (
                  <>
                    Police Line – Baghaura, Orai – Jalaun, UP - 285001
                  </>
                ) : (
                  <>
                    पुलिस लाइन – बघौरा, ओराई – जालौन, उतर प्रदेश - 285001
                  </>
                )}
              </p>
              <div className="space-y-2 text-xs md:text-sm text-slate-600">
                <p><span className="font-bold text-[#0A2540]">Email:</span> ddjc.prayas@gmail.com</p>
                <p><span className="font-bold text-[#0A2540]">Phone:</span> +91 9235737691, +91 9453645931</p>
                <p><span className="font-bold text-[#0A2540]">{language === "en" ? "Hours" : "समय"}:</span> {language === "en" ? "Mon - Sat: 9:00 AM - 6:00 PM" : "सोम - शनि: सुबह 9:00 बजे - शाम 6:00 बजे"}</p>
              </div>
            </div>

            <div className="bg-white p-4 md:p-8 lg:p-10 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-lg md:text-xl font-bold text-[#0A2540] mb-3 md:mb-4">{language === "en" ? "Location Map" : "स्थान मानचित्र"}</h3>
              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <iframe
                  title="DDJC Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.2554086349876!2d79.4590809!3d26.0060011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399d7f0043955461%3A0x4a732dd1efb3257e!2sDalit%20Dignity%20%26%20Justice%20Center(DDJC)!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
