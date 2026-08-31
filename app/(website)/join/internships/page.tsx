"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaUserPlus, FaCheckCircle } from "react-icons/fa";
import { useApp } from "@/context/AppContext";

export default function InternshipsPage() {
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
    university: "",
    field: "",
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
        university: "",
        field: "",
        statement: "",
      });
    } catch (error) {
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
             <FaArrowLeft className="w-2.5 h-2.5 md:w-3 md:h-3" /> {language === "en" ? "Back to Home" : "होम पर वापस जाएँ"}
          </Link>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <span className="bg-slate-50 text-[#000000] px-3 py-1.5 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block mb-3 md:mb-4">
            {language === "en" ? "Internship" : "इन्टर्नशिप"}
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#0A2540] tracking-tight mb-3 md:mb-4">
            {language === "en" ? "Join as an Intern" : "इन्टर्न के रूप में शामिल हों"}
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {language === "en" ? "If you wish to dedicate your time, skills, and energy for the upliftment of social justice, human rights, and marginalized communities, you are welcome to the DDJC family." : "यदि आप सामाजिक न्याय, मानवीय अधिकारों और वंचित समुदायों के उत्थान के लिए अपना समय, कौशल और ऊर्जा देना चाहते हैं, तो आप DDJC परिवार में स्वागत हैं।"}
          </p>
        </div>

        <div className="bg-white p-4 md:p-6 lg:p-8 xl:p-10 rounded-2xl md:rounded-3xl border border-slate-200 shadow-sm space-y-4 md:space-y-6">
          {success ? (
            <div className="text-center p-6 md:p-8 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-3 md:space-y-4">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-xl md:text-2xl">
                <FaCheckCircle />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-emerald-900">{language === "en" ? "Application Submitted Successfully!" : "आवेदन सफलतापूर्वक जमा हो गया!"}</h3>
              <p className="text-xs md:text-sm text-emerald-700 max-w-md mx-auto">
                {language === "en" ? "Thank you for your interest in joining DDJC. Our team will review your application and get in touch with you soon." : "DDJC से जुड़ने में रुचि दिखाने के लिए धन्यवाद। हमारी टीम आपके आवेदन की समीक्षा करेगी और जल्द ही आपसे संपर्क करेगी।"}
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-xl md:text-2xl font-bold text-[#0A2540] mb-2">{language === "en" ? "Application Form" : "आवेदन फॉर्म"}</h2>
              <p className="text-slate-500 text-[10px] md:text-xs mb-6 md:mb-8">
                {language === "en" ? "Please fill in the details carefully. Our team will contact you soon based on your interest." : "कृपया नीचे विवरणों को ध्यान से भरें। हमारी टीम आपकी रुचि के आधार पर जल्द ही आपसे संपर्क करेगी।"}
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
                      placeholder={language === "en" ? "Father's or husband's name" : "पिता या पति का नाम"}
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
                    placeholder={language === "en" ? "E.g., BA, LLB, MA, PhD" : "उदाहरण: बीए, एलएलबी, एमए, फीडीएच"}
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
                    placeholder={language === "en" ? "Village/City, District, State, PIN code" : "ग्राम/शहर, जिला, राज्य, पिन कोड सहित पूरा पता"}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5 md:mb-2">{language === "en" ? "University / Institution" : "यूनिवर्सिटी / संस्थान"}</label>
                    <input
                      type="text"
                      name="university"
                      value={formData.university}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 md:px-4 md:py-3.5 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                      placeholder={language === "en" ? "Your university name" : "आपकी यूनिवर्सिटी का नाम"}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5 md:mb-2">{language === "en" ? "Field of Study" : "अध्ययन क्षेत्र"}</label>
                    <input
                      type="text"
                      name="field"
                      value={formData.field}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 md:px-4 md:py-3.5 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                      placeholder={language === "en" ? "E.g., Law, Social Work" : "उदाहरण: कानून, सामाजिक कार्य"}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5 md:mb-2">Brief Statement of Purpose *</label>
                  <p className="text-[10px] md:text-xs text-slate-500 mb-1.5 md:mb-2">{language === "en" ? "Why do you want to join DDJC and what is your past experience (if any)?" : "आप DDJC में जाने के लिए क्यों चाहते हैं और आपका अतीत क्या अनुभव है (यदि कोई है)?"}</p>
                  <textarea
                    name="statement"
                    required
                    rows={3}
                    value={formData.statement}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 md:px-4 md:py-3.5 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                    placeholder={language === "en" ? "Tell us why you want to join DDJC and share any relevant past experience..." : "आपको DDJC में जाना चाहते हैं और प्रासंगिक अतीत अनुभव साझा करें..."}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#000000] hover:bg-slate-600 text-white font-bold px-6 py-3 md:px-8 md:py-4 rounded-xl text-xs md:text-sm transition-all shadow-lg disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  <FaUserPlus className="w-3 h-3 md:w-[14px] md:h-[14px]" />
                  {loading ? "Submitting..." : (language === "en" ? "Submit Application" : "आवेदन सबमिट करें")}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
