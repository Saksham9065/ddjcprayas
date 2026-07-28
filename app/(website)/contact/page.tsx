"use client";

import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Button from "@/components/ui/Button";

export default function ContactPage() {
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
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-[#0A2540] tracking-tight mb-6">
            Get Help &amp; Legal Support
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
            न्याय की इस लड़ाई में आप अकेले नहीं हैं। यदि आपके या आपके किसी परिचित के साथ कोई अन्याय, जातिगत अत्याचार या हिंसा हुई है, तो नीचे दिए गए फॉर्म (Intake Form) को भरें। DDJC की कानूनी टीम जल्द से जल्द आपसे संपर्क करेगी।
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Reach out to our legal coordinators, support staff, or visit our office in Orai for urgent assistance and inquiries.
          </p>
        </div>

        {success && (
          <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-2xl text-sm font-semibold">
            Thank you! Your intake form has been submitted successfully. Our team will contact you shortly.
          </div>
        )}

        {/* Intake Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-[#0A2540] mb-4">Contact Us</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                  placeholder="........................................................................................"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Father&apos;s / Husband&apos;s Name</label>
                <input
                  type="text"
                  required
                  value={formData.fatherHusbandName}
                  onChange={(e) => setFormData({ ...formData, fatherHusbandName: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                  placeholder="..................................................................."
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Age</label>
                <input
                  type="text"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                  placeholder="..................."
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Category (SC / ST / OBC / Minorities / General)</label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                  placeholder="..................................."
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Gender (Male / Female / Others)</label>
                <input
                  type="text"
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                  placeholder=".........................................................."
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Education</label>
                <input
                  type="text"
                  value={formData.education}
                  onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                  placeholder="........................................................................................"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Mobile Number</label>
                <input
                  type="tel"
                  required
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                  placeholder="................................................................................."
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Email (if any)</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                placeholder="...................................................................................."
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Complete Address</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                placeholder=".............................................................................."
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Brief Description of the Incident/Case &amp; Current Status</label>
              <textarea
                rows={4}
                value={formData.incidentDescription}
                onChange={(e) => setFormData({ ...formData, incidentDescription: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                placeholder="........................................................................................................"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-2">What kind of help/support do you want from DDJC?</label>
              <textarea
                rows={3}
                value={formData.helpType}
                onChange={(e) => setFormData({ ...formData, helpType: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                placeholder="........................................................................................................"
              />
            </div>

            <Button type="submit" isLoading={loading} className="w-full py-4 text-sm">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}