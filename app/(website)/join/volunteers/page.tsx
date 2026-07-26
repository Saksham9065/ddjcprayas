"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaHandsHelping, FaUsers, FaHeart, FaCheckCircle } from "react-icons/fa";

export default function VolunteersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    availability: "",
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
      setFormData({ name: "", email: "", phone: "", interest: "", availability: "", message: "" });
    }, 1000);
  };

  return (
    <div className="bg-slate-900 min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-8">
          <Link href="/" className="flex items-center gap-2 text-[#1ab9cb] font-bold text-sm hover:underline">
            <FaArrowLeft size={12} /> Back to Home
          </Link>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-black/30 text-[#1ab9cb] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-700 inline-block mb-4">
            Volunteer With Us
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            Become a Volunteer
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Join our network of volunteers dedicated to upholding dignity, equality, and justice for all communities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Why Volunteer with DDJC?</h2>
            <div className="space-y-4">
              {[
                { title: "Make a Real Impact", desc: "Contribute directly to justice and human rights advocacy in Bundelkhand." },
                { title: "Learn & Grow", desc: "Gain hands-on experience in legal aid, community outreach, and social advocacy." },
                { title: "Connect with Communities", desc: "Work alongside grassroots organizations and marginalized communities." },
                { title: "Flexible Commitment", desc: "Choose your level of involvement — from one-time events to ongoing support." },
              ].map((reason, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-black/30 text-[#1ab9cb] flex items-center justify-center shrink-0 mt-1">
                      <FaCheckCircle size={18} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">{reason.title}</h3>
                      <p className="text-slate-400 text-xs mt-1 leading-relaxed">{reason.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Register as Volunteer</h2>
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700">
              {success && (
                <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-emerald-400 text-sm font-semibold">
                  Registration successful! We will reach out to you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-700 bg-slate-900 text-white text-sm focus:outline-none focus:border-[#1ab9cb]"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-700 bg-slate-900 text-white text-sm focus:outline-none focus:border-[#1ab9cb]"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Phone</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-700 bg-slate-900 text-white text-sm focus:outline-none focus:border-[#1ab9cb]"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Area of Interest</label>
                  <select
                    required
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-700 bg-slate-900 text-white text-sm focus:outline-none focus:border-[#1ab9cb]"
                  >
                    <option value="">Select an area</option>
                    <option value="legal">Legal Aid & Advocacy</option>
                    <option value="outreach">Community Outreach</option>
                    <option value="research">Research & Documentation</option>
                    <option value="media">Media & Communications</option>
                    <option value="events">Event Coordination</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Availability</label>
                  <input
                    type="text"
                    required
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-700 bg-slate-900 text-white text-sm focus:outline-none focus:border-[#1ab9cb]"
                    placeholder="e.g., Weekends, 10-15 hrs/week"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Why do you want to volunteer?</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-700 bg-slate-900 text-white text-sm focus:outline-none focus:border-[#1ab9cb]"
                    placeholder="Tell us about your motivation..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1ab9cb] hover:bg-emerald-600 text-white font-bold px-6 py-4 rounded-xl text-sm transition-all shadow-lg disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Register as Volunteer"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}