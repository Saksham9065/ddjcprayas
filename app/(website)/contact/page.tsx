"use client";

import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-slate-50 text-[#000000] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block mb-4">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#0A2540] tracking-tight mb-6">
            Contact DDJC Team
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Reach out to our legal coordinators, support staff, or visit our office in Orai for urgent assistance and inquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information Sidebar */}
          <div className="bg-[#0A2540] text-white p-8 md:p-10 rounded-3xl shadow-xl flex flex-col justify-between space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                Our doors and helplines are open for victims, human rights defenders, and citizens seeking legal guidance.
              </p>
              
              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-black/30 border border-black/30 flex items-center justify-center shrink-0 text-slate-400">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <span className="font-bold block text-white mb-1">Office Address</span>
                    <span className="text-slate-300 leading-relaxed text-xs">
                      Police Line – Baghaura, Orai – Jalaun, Uttar Pradesh - 285001
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-black/30 border border-black/30 flex items-center justify-center shrink-0 text-slate-400">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <span className="font-bold block text-white mb-1">Phone Numbers</span>
                    <span className="text-slate-300 text-xs block">+91 9235737691</span>
                    <span className="text-slate-300 text-xs block">+91 9453645931</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-black/30 border border-black/30 flex items-center justify-center shrink-0 text-slate-400">
                    <FaEnvelope />
                  </div>
                  <div>
                    <span className="font-bold block text-white mb-1">Email Address</span>
                    <span className="text-slate-300 text-xs">ddjc.prayas@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 text-xs text-slate-400">
              Response Time: Within 24-48 working hours.
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-[#0A2540] mb-6">Send Us a Message</h3>

            {success && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-2xl text-sm font-semibold">
                Thank you! Your message has been sent successfully. Our team will contact you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                    placeholder="Ramesh Kumar"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                    placeholder="ramesh@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Subject / Inquiry Type</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                    placeholder="Legal Consultation Inquiry"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Your Message</label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                  placeholder="Please describe your inquiry or details..."
                />
              </div>

              <Button type="submit" isLoading={loading} className="w-full py-4 text-sm">
                <FaPaperPlane className="mr-2" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}