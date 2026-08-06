"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaUserPlus, FaUpload, FaCheckCircle } from "react-icons/fa";
import { useApp } from "@/context/AppContext";

export default function CareersPage() {
  const { language } = useApp();
  const isHindi = language === "hi";
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
    occupation: "",
    experience: "",
    position: "",
    resume: "",
    statement: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
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
          occupation: "",
          experience: "",
          position: "",
          resume: "",
          statement: "",
        });
      }
    } catch {
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
        occupation: "",
        experience: "",
        position: "",
        resume: "",
        statement: "",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white min-h-screen py-10 pt-16 md:py-16 md:pt-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-8">
          <Link href="/" className="flex items-center gap-2 text-[#0A2540] font-bold text-sm hover:underline">
            <FaArrowLeft size={12} /> {isHindi ? "होम पर वापस जाएँ" : "Back to Home"}
          </Link>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-slate-50 text-[#000000] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block mb-4">
            {isHindi ? "हमारी टीम में शामिल हों" : "Join Our Team"}
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#0A2540] tracking-tight mb-3 md:mb-4">
            {isHindi ? "करियर के अवसर" : "Career Opportunities"}
          </h1>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Change begins with oneself. If you wish to contribute your time, skills, and energy to social justice, human rights, and the upliftment of marginalized communities, you are welcome to the DDJC family.
          </p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          {success ? (
            <div className="text-center p-8 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl">
                <FaCheckCircle />
              </div>
              <h3 className="text-xl font-bold text-emerald-900">{isHindi ? "आवेदन सफलतापूर्वक जमा हुआ!" : "Application Submitted Successfully!"}</h3>
              <p className="text-sm text-emerald-700 max-w-md mx-auto">
                {isHindi ? "DDJC से जुड़ने में रुचि दिखाने के लिए धन्यवाद। हमारी टीम आपके आवेदन की समीक्षा करेगी और जल्द ही आपसे संपर्क करेगी।" : "Thank you for your interest in joining DDJC. Our team will review your application and contact you soon."}
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-[#0A2540] mb-2">{isHindi ? "आवेदन फॉर्म" : "Application Form"}</h2>
              <p className="text-slate-500 text-xs mb-8">
                Please fill in the details carefully below. Our team will contact you soon based on your interest.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Father&apos;s / Husband&apos;s Name *</label>
                    <input
                      type="text"
                      name="fatherHusbandName"
                      required
                      value={formData.fatherHusbandName}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                      placeholder="Father&apos;s or husband&apos;s name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Age *</label>
                    <input
                      type="number"
                      name="age"
                      required
                      min="18"
                      max="100"
                      value={formData.age}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                      placeholder="25"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Category *</label>
                    <select
                      name="category"
                      required
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                    >
                      <option value="">Select</option>
                      <option value="SC">SC</option>
                      <option value="ST">ST</option>
                      <option value="OBC">OBC</option>
                      <option value="Minorities">Minorities</option>
                      <option value="General">General</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Gender *</label>
                    <select
                      name="gender"
                      required
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Education *</label>
                  <input
                    type="text"
                    name="education"
                    required
                    value={formData.education}
                    onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                    placeholder="e.g., B.A., LLB, M.A., Ph.D."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Mobile Number *</label>
                    <input
                      type="tel"
                      name="mobile"
                      required
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Email (if any)</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Complete Address *</label>
                  <textarea
                    name="address"
                    required
                    rows={2}
                    value={formData.address}
                    onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                    placeholder="Full address with village/city, district, state, pin code"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Current Occupation *</label>
                  <div className="flex flex-wrap gap-4">
                    {[
                      { value: "Student", label: "Student" },
                      { value: "Working Professional", label: "Working Professional" },
                      { value: "Social Worker", label: "Social Worker" },
                      { value: "Other", label: "Other" },
                    ].map((opt) => (
                      <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="occupation"
                          value={opt.value}
                          required
                          checked={formData.occupation === opt.value}
                          onChange={handleChange}
                          className="accent-[#000000] w-4 h-4"
                        />
                        <span className="text-sm text-slate-700">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Experience *</label>
                  <select
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                  >
                    <option value="">Select experience level</option>
                    <option value="Fresher">Fresher (0-1 year)</option>
                    <option value="1-2 Years">1-2 Years</option>
                    <option value="2-3 Years">2-3 Years</option>
                    <option value="3-5 Years">3-5 Years</option>
                    <option value="5+ Years">5+ Years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Position Applying For *</label>
                  <select
                    name="position"
                    required
                    value={formData.position}
                    onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                  >
                    <option value="">Select a position</option>
                    <option value="Legal Advocate">Legal Advocate</option>
                    <option value="Field Coordinator">Field Coordinator</option>
                    <option value="Community Outreach Officer">Community Outreach Officer</option>
                    <option value="Research Analyst">Research Analyst</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Resume Upload *</label>
                  <div
                    onClick={() => document.getElementById("resume-file")?.click()}
                    className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-colors ${
                      formData.resume
                        ? "border-emerald-400 bg-emerald-50"
                        : "border-slate-300 bg-slate-50 hover:border-slate-400 hover:bg-slate-100"
                    }`}
                  >
                    <input
                      id="resume-file"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setFormData({ ...formData, resume: file.name });
                        }
                      }}
                    />
                    {formData.resume ? (
                      <div className="space-y-3">
                        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
                          <FaUpload size={24} />
                        </div>
                        <p className="text-sm font-bold text-emerald-700">{formData.resume}</p>
                        <p className="text-xs text-slate-500">Click to replace</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto text-slate-400 border border-slate-200">
                          <FaUpload size={28} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-700">Click to upload resume</p>
                          <p className="text-xs text-slate-500 mt-1">Supports PDF, DOC, DOCX (max 5MB)</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Brief Statement of Purpose *</label>
                  <p className="text-xs text-slate-500 mb-2">Why do you want to join DDJC and what is your past experience (if any)?</p>
                  <textarea
                    name="statement"
                    required
                    rows={4}
                    value={formData.statement}
                    onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                    placeholder="Tell us why you want to join DDJC and share any relevant past experience..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#000000] hover:bg-slate-600 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-lg disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  <FaUserPlus size={14} />
                  {loading ? "Submitting..." : "Submit Application"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}