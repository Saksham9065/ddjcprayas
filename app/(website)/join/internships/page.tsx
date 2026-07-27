"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaGraduationCap, FaUsers, FaClock, FaCalendarAlt } from "react-icons/fa";

export default function InternshipsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    field: "",
    duration: "",
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
      setFormData({ name: "", email: "", phone: "", university: "", field: "", duration: "", message: "" });
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
            Internships
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            Join as an Intern
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Gain hands-on experience in human rights advocacy, legal aid, and community development with DDJC.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Available Internships</h2>
            <div className="space-y-4">
              {[
                { title: "Legal Internship", field: "Law / Legal Studies", duration: "3-6 months", stipend: "₹5,000/month", icon: FaGraduationCap },
                { title: "Research Internship", field: "Social Sciences / Research", duration: "2-4 months", stipend: "₹3,000/month", icon: FaUsers },
                { title: "Field Outreach Internship", field: "Social Work / Development", duration: "1-3 months", stipend: "₹2,500/month", icon: FaClock },
                { title: "Media & Communications", field: "Journalism / Mass Comm", duration: "2-3 months", stipend: "₹3,000/month", icon: FaCalendarAlt },
              ].map((internship, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-[#1ab9cb]/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-black/30 text-[#1ab9cb] flex items-center justify-center shrink-0">
                      <internship.icon size={18} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-base">{internship.title}</h3>
                      <p className="text-slate-400 text-xs mt-1">{internship.field}</p>
                      <div className="flex items-center gap-4 mt-3 text-xs text-slate-500">
                        <span className="flex items-center gap-1"><FaClock size={10} /> {internship.duration}</span>
                        <span className="flex items-center gap-1"><FaCalendarAlt size={10} /> {internship.stipend}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Apply for Internship</h2>
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700">
              {success && (
                <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-emerald-400 text-sm font-semibold">
                  Application submitted successfully! We will review your profile and get back to you.
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
                      placeholder="you@university.edu"
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
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-2">University / Institution</label>
                  <input
                    type="text"
                    required
                    value={formData.university}
                    onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-700 bg-slate-900 text-white text-sm focus:outline-none focus:border-[#1ab9cb]"
                    placeholder="Your university name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Field of Study</label>
                    <input
                      type="text"
                      required
                      value={formData.field}
                      onChange={(e) => setFormData({ ...formData, field: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-700 bg-slate-900 text-white text-sm focus:outline-none focus:border-[#1ab9cb]"
                      placeholder="e.g., Law, Social Work"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Duration</label>
                    <input
                      type="text"
                      required
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-700 bg-slate-900 text-white text-sm focus:outline-none focus:border-[#1ab9cb]"
                      placeholder="e.g., 3 months"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Why DDJC?</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-700 bg-slate-900 text-white text-sm focus:outline-none focus:border-[#1ab9cb]"
                    placeholder="Tell us about your interest and goals..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#000000] hover:bg-slate-600 text-white font-bold px-6 py-4 rounded-xl text-sm transition-all shadow-lg disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}