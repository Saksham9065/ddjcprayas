"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaUserPlus, FaUpload, FaCheckCircle } from "react-icons/fa";
import { useApp } from "@/context/AppContext";

export default function CareersPage() {
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

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || "Unable to submit application");
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
        occupation: "",
        experience: "",
        position: "",
        resume: "",
        statement: "",
      });
    } catch (error) {
      console.error("Career submission error:", error);
      alert(error instanceof Error ? error.message : "Unable to submit application");
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
    <div className="bg-white min-h-screen py-8 pt-14 md:py-12 md:pt-16 lg:py-16 lg:pt-24">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 max-w-6xl">
        <div className="mb-6 md:mb-8">
          <Link href="/" className="flex items-center gap-1.5 md:gap-2 text-[#0A2540] font-bold text-xs sm:text-sm hover:underline">
             <FaArrowLeft className="w-2.5 h-2.5 md:w-3 md:h-3" /> {language === "en" ? "Go back to Home" : "होम पर वापस जाएँ"}
          </Link>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <span className="bg-slate-50 text-[#000000] px-3 py-1.5 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block mb-3 md:mb-4">
            {language === "en" ? "Join Our Team" : "हमारी टीम में शामिल हों"}
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#0A2540] tracking-tight mb-3 md:mb-4">
            {language === "en" ? "Career Opportunities" : "करियर के अवसर"}
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {language === "en" ? "If you want to give your time, skills, and energy for social justice, human rights, and the upliftment of underprivileged communities, you are welcome to the DDJC family." : "यदि आप सामाजिक न्याय, मानवीय अधिकारों और वंचित समुदायों के उत्थान के लिए अपना समय, कौशल और ऊर्जा देना चाहते हैं, तो आप DDJC परिवार में स्वागत हैं।"}
          </p>
        </div>

        <div className="bg-white p-4 md:p-6 lg:p-8 xl:p-10 rounded-2xl md:rounded-3xl border border-slate-200 shadow-sm space-y-4 md:space-y-6">
          {success ? (
            <div className="text-center p-6 md:p-8 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-3 md:space-y-4">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-xl md:text-2xl">
                <FaCheckCircle />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-emerald-900">{language === "en" ? "Application submitted successfully!" : "आवेदन सफलतापूर्वक जमा हो गया!"}</h3>
              <p className="text-xs md:text-sm text-emerald-700 max-w-md mx-auto">
                {language === "en" ? "Thank you for showing interest in joining DDJC. Our team will review your application and contact you soon." : "DDJC से जुड़ने में रुचि दिखाने के लिए धन्यवाद। हमारी टीम आपके आवेदन की समीक्षा करेगी और जल्द ही आपसे संपर्क करेगी।"}
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-xl md:text-2xl font-bold text-[#0A2540] mb-2">{language === "en" ? "Application Form" : "आवेदन फॉर्म"}</h2>
              <p className="text-slate-500 text-[10px] md:text-xs mb-6 md:mb-8">
                {language === "en" ? "Please fill in the details below carefully. Our team will contact you soon based on your interest." : "कृपया नीचे विवरणों को ध्यान से भरें। हमारी टीम आपकी रुचि के आधार पर जल्द ही आपसे संपर्क करेगी।"}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5 md:mb-2">{language === "en" ? "Full Name *" : "पूरा नाम *"}</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 md:px-4 md:py-3.5 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                      placeholder={language === "en" ? "Your full name" : "आपका पूरा नाम"}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5 md:mb-2">{language === "en" ? "Father / Husband Name *" : "पिता / पति का नाम *"}</label>
                    <input
                      type="text"
                      name="fatherHusbandName"
                      required
                      value={formData.fatherHusbandName}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 md:px-4 md:py-3.5 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                      placeholder={language === "en" ? "Father or husband's name" : "पिता या पति का नाम"}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  <div>
                    <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5 md:mb-2">{language === "en" ? "Age *" : "आयु *"}</label>
                    <input
                      type="number"
                      name="age"
                      required
                      min="18"
                      max="100"
                      value={formData.age}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 md:px-4 md:py-3.5 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                      placeholder="25"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5 md:mb-2">{language === "en" ? "Category *" : "वर्ग *"}</label>
                    <select
                      name="category"
                      required
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 md:px-4 md:py-3.5 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                    >
                      <option value="">{language === "en" ? "Select" : "चुनें"}</option>
                      <option value="SC">SC</option>
                      <option value="ST">ST</option>
                      <option value="OBC">OBC</option>
                      <option value="Minorities">{language === "en" ? "Minorities" : "अल्पसंख्यक"}</option>
                      <option value="General">{language === "en" ? "General" : "सामान्य"}</option>
                    </select>
                  </div>
                  <div className="hidden sm:block">
                    <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5 md:mb-2">{language === "en" ? "Gender *" : "लिंग *"}</label>
                    <select
                      name="gender"
                      required
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 md:px-4 md:py-3.5 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                    >
                      <option value="">{language === "en" ? "Select" : "चुनें"}</option>
                      <option value="Male">{language === "en" ? "Male" : "पुरुष"}</option>
                      <option value="Female">{language === "en" ? "Female" : "महिला"}</option>
                      <option value="Others">{language === "en" ? "Others" : "अन्य"}</option>
                    </select>
                  </div>
                  <div className="block sm:hidden">
                    <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5 md:mb-2">{language === "en" ? "Gender *" : "लिंग *"}</label>
                    <select
                      name="gender"
                      required
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 md:px-4 md:py-3.5 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                    >
                      <option value="">{language === "en" ? "Select" : "चुनें"}</option>
                      <option value="Male">{language === "en" ? "Male" : "पुरुष"}</option>
                      <option value="Female">{language === "en" ? "Female" : "महिला"}</option>
                      <option value="Others">{language === "en" ? "Others" : "अन्य"}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5 md:mb-2">{language === "en" ? "Education *" : "शिक्षा *"}</label>
                  <input
                    type="text"
                    name="education"
                    required
                    value={formData.education}
                    onChange={handleChange}
                      className="w-full px-3 py-2.5 md:px-4 md:py-3.5 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                    placeholder={language === "en" ? "e.g. BA, LLB, MA, PhD" : "उदाहरण: बीए, एलएलबी, एमए, पीएचडी"}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5 md:mb-2">{language === "en" ? "Mobile Number *" : "मोबाइल नंबर *"}</label>
                    <input
                      type="tel"
                      name="mobile"
                      required
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 md:px-4 md:py-3.5 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5 md:mb-2">{language === "en" ? "Email (if any)" : "ईमेल (यदि हो तो)"}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 md:px-4 md:py-3.5 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                      placeholder={language === "en" ? "your@email.com" : "आपका@ईमेल.com"}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5 md:mb-2">{language === "en" ? "Full Address *" : "पूरा पता *"}</label>
                  <textarea
                    name="address"
                    required
                    rows={2}
                    value={formData.address}
                    onChange={handleChange}
                      className="w-full px-3 py-2.5 md:px-4 md:py-3.5 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                    placeholder={language === "en" ? "Complete address including village/city, district, state, pin code" : "ग्राम/शहर, जिला, राज्य, पिन कोड सहित पूरा पता"}
                  />
                </div>

                <div>
                  <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5 md:mb-2">{language === "en" ? "Current Occupation *" : "वर्तमान पेशा *"}</label>
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    {[
                      { value: "Student", labelEn: "Student", labelHi: "छात्र" },
                      { value: "Working Professional", labelEn: "Working Professional", labelHi: "पेशेवर" },
                      { value: "Social Worker", labelEn: "Social Worker", labelHi: "सामाजिक कार्यकर्ता" },
                      { value: "Other", labelEn: "Other", labelHi: "अन्य" },
                    ].map((opt) => (
                      <label key={opt.value} className="flex items-center gap-1.5 md:gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="occupation"
                          value={opt.value}
                          required
                          checked={formData.occupation === opt.value}
                          onChange={handleChange}
                          className="accent-[#000000] w-3.5 h-3.5 md:w-4 md:h-4"
                        />
                        <span className="text-xs md:text-sm text-slate-700">{language === "en" ? opt.labelEn : opt.labelHi}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5 md:mb-2">{language === "en" ? "Experience *" : "अनुभव *"}</label>
                  <select
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleChange}
                      className="w-full px-3 py-2.5 md:px-4 md:py-3.5 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                  >
                    <option value="">{language === "en" ? "Select experience level" : "अनुभव स्तर चुनें"}</option>
                    <option value="Fresher">{language === "en" ? "Fresher (0-1 years)" : "फ्रेशर (0-1 वर्ष)"}</option>
                    <option value="1-2 Years">1-2 {language === "en" ? "Years" : "वर्ष"}</option>
                    <option value="2-3 Years">2-3 {language === "en" ? "Years" : "वर्ष"}</option>
                    <option value="3-5 Years">3-5 {language === "en" ? "Years" : "वर्ष"}</option>
                    <option value="5+ Years">5+ {language === "en" ? "Years" : "वर्ष"}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5 md:mb-2">{language === "en" ? "Applying Position *" : "आवेदन कर रहे पद *"}</label>
                  <select
                    name="position"
                    required
                    value={formData.position}
                    onChange={handleChange}
                      className="w-full px-3 py-2.5 md:px-4 md:py-3.5 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                  >
                    <option value="">{language === "en" ? "Select a position" : "एक पद चुनें"}</option>
                    <option value="Legal Advocate">{language === "en" ? "Legal Advocate" : "कानूनी वकील"}</option>
                    <option value="Field Coordinator">{language === "en" ? "Field Coordinator" : "फील्ड समन्वयक"}</option>
                    <option value="Community Outreach Officer">{language === "en" ? "Community Outreach Officer" : "सामुदायिक आउटरीच ऑफिसर"}</option>
                    <option value="Research Analyst">{language === "en" ? "Research Analyst" : "रिसर्च एनालिस्ट"}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5 md:mb-2">{language === "en" ? "Upload Resume *" : "रिज्यूमे अपलोड *"}</label>
                  <div
                    onClick={() => document.getElementById("resume-file")?.click()}
                    className={`border-2 border-dashed rounded-xl md:rounded-2xl p-4 md:p-6 text-center cursor-pointer transition-colors ${
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
                      <div className="space-y-2 md:space-y-3">
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-emerald-100 text-emerald-600 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto">
                          <FaUpload className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <p className="text-xs md:text-sm font-bold text-emerald-700">{formData.resume}</p>
                        <p className="text-[10px] md:text-xs text-slate-500">{language === "en" ? "Click to change" : "बदलने के लिए क्लिक करें"}</p>
                      </div>
                    ) : (
                      <div className="space-y-2 md:space-y-3">
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl flex items-center justify-center mx-auto text-slate-400 border border-slate-200">
                          <FaUpload className="w-[22px] h-[22px] md:w-7 md:h-7" />
                        </div>
                        <div>
                          <p className="text-xs md:text-sm font-bold text-slate-700">{language === "en" ? "Click to upload resume" : "रिज्यूमे अपलोड करने के लिए क्लिक करें"}</p>
                          <p className="text-[10px] md:text-xs text-slate-500 mt-1">{language === "en" ? "PDF, DOC, DOCX supported (max 5MB)" : "PDF, DOC, DOCX (अधिकतम 5MB) समर्थित"}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5 md:mb-2">{language === "en" ? "Statement of Purpose *" : "उद्देश्य का संक्षिप्त विवरण *"}</label>
                  <p className="text-[10px] md:text-xs text-slate-500 mb-1.5 md:mb-2">{language === "en" ? "Why do you want to join DDJC and what is your previous experience (if any)?" : "आप DDJC में क्यों जुड़ना चाहते हैं और आपका पुराना अनुभव (यदि कोई हो) क्या है?"}</p>
                  <textarea
                    name="statement"
                    required
                    rows={3}
                    value={formData.statement}
                    onChange={handleChange}
                      className="w-full px-3 py-2.5 md:px-4 md:py-3.5 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                    placeholder={language === "en" ? "Tell us why you want to join DDJC and share your relevant previous experience..." : "बताएं कि आप DDJC में क्यों जुड़ना चाहते हैं और अपना प्रासंगिक पुराना अनुभव साझा करें..."}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#000000] hover:bg-slate-600 text-white font-bold px-6 py-3 md:px-8 md:py-4 rounded-xl text-xs md:text-sm transition-all shadow-lg disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  <FaUserPlus className="w-3 h-3 md:w-[14px] md:h-[14px]" />
                  {loading ? (language === "en" ? "Submitting..." : "सबमिट हो रहा है...") : (language === "en" ? "Submit Application" : "आवेदन सबमिट करें")}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
