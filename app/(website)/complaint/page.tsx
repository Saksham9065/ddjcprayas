"use client";

import React, { useState } from "react";
import { FaFileSignature, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import Button from "@/components/ui/Button";
import { useApp } from "@/context/AppContext";

export default function ComplaintPage() {
  const { language } = useApp();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    district: "Jalaun",
    tehsil: "",
                      category: "",
    incidentDate: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [successId, setSuccessId] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/complaints", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit complaint");
      }

      setSuccessId(data.complaintId || `CMP-${Date.now()}`);
    } catch (error) {
      console.error("Complaint submission error:", error);
      alert(error instanceof Error ? error.message : "Unable to submit complaint");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen py-8 pt-14 md:py-12 md:pt-16 lg:py-16 lg:pt-24">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 max-w-6xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <span className="bg-slate-50 text-[#000000] px-3 py-1.5 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block mb-3 md:mb-4">
            {language === "en" ? "Grievance Redressal" : "शिकायत निवारण"}
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-black text-[#0A2540] tracking-tight mb-3 md:mb-4">
            {language === "en" ? "Report your CASE /Grievance" : "अपना मामला /शिकायत रिपोर्ट करें"}
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            {language === "en" ? "Submit your grievance regarding caste discrimination, violence, police inaction, or land disputes. Our legal team will review your case promptly." : "जातिगत भेदभाव, हिंसा, पुलिस की निष्क्रियता या भूमि विवाद के बारे में अपनी शिकायत सबमिट करें। हमारी कानूनी टीम आपके मामले की जल्द से जल्द समीक्षा करेगी।"}
          </p>
        </div>

        {/* Form Container */}
            <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl border border-slate-200 shadow-sm space-y-4 md:space-y-6">
            {successId ? (
            <div className="p-6 md:p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-4">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-xl md:text-2xl">
                <FaCheckCircle />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-emerald-900">{language === "en" ? "Complaint Registered Successfully" : "शिकायत सफलतापूर्वक दर्ज हो गई"}</h3>
              <p className="text-xs md:text-sm text-emerald-700 max-w-md mx-auto">
                {language === "en" ? "Your grievance has been safely logged into the DDJC system. Your reference tracking ID is:" : "आपकी शिकायत DDJC सिस्टम में सुरक्षित रूप से लॉग हो गई है। आपका रेफरेंस ट्रैकिंग ID है:"}
              </p>
              <div className="inline-block bg-white border border-emerald-300 px-4 py-2 md:px-6 md:py-3 rounded-xl font-mono font-bold text-emerald-800 text-base md:text-lg shadow-sm">
                {successId}
              </div>
              <p className="text-[10px] md:text-xs text-slate-500 pt-2">
                {language === "en" ? "Save this tracking number. Our field coordinator or panel advocate will contact you shortly." : "इस ट्रैकिंग नंबर को सुरक्षित रखें। हमारा फील्ड समन्वयक या पैनल वकील जल्द ही आपसे संपर्क करेगा।"}
              </p>
              <div className="pt-3 md:pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setSuccessId("");
                    setFormData({
                      fullName: "",
                      phone: "",
                      district: "Jalaun",
                      tehsil: "",
    category: "",
                      incidentDate: "",
                      description: "",
                    });
                  }}
                  className="bg-[#000000] text-white px-5 py-2.5 md:px-6 md:py-3 rounded-xl text-[11px] md:text-xs font-bold"
                >
                  {language === "en" ? "File Another Complaint" : "एक और शिकायत दर्ज करें"}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5 md:mb-2">{language === "en" ? "Complainant / Victim Name" : "वादी / पीड़ित का नाम"}</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder={language === "en" ? "Enter full name" : "पूरा नाम दर्ज करें"}
                    className="w-full px-3 py-2.5 md:px-4 md:py-3.5 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5 md:mb-2">{language === "en" ? "Phone Number" : "फोन नंबर"}</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2.5 md:px-4 md:py-3.5 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5 md:mb-2">{language === "en" ? "District" : "जिला"}</label>
                  <select
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full px-3 py-2.5 md:px-4 md:py-3.5 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                  >
                    <option value="Jalaun">{language === "en" ? "Jalaun" : "जालौन"}</option>
                    <option value="Jhansi">{language === "en" ? "Jhansi" : "झांसी"}</option>
                    <option value="Lalitpur">{language === "en" ? "Lalitpur" : "ललितपुर"}</option>
                    <option value="Hamirpur">{language === "en" ? "Hamirpur" : "हमीरपुर"}</option>
                    <option value="Banda">{language === "en" ? "Banda" : "बांदा"}</option>
                    <option value="Chitrakoot">{language === "en" ? "Chitrakoot" : "चित्रकूट"}</option>
                    <option value="Mahoba">{language === "en" ? "Mahoba" : "महोबा"}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5 md:mb-2">{language === "en" ? "Tehsil / Block / Village" : "तहसील / ब्लॉक / ग्राम"}</label>
                  <input
                    type="text"
                    required
                    value={formData.tehsil}
                    onChange={(e) => setFormData({ ...formData, tehsil: e.target.value })}
                    placeholder={language === "en" ? "e.g. Orai, Konch, Kalpi" : "उदाहरण: उरई, कोंच, कालपी"}
                    className="w-full px-3 py-2.5 md:px-4 md:py-3.5 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5 md:mb-2">{language === "en" ? "Grievance Category" : "शिकायत की श्रेणी"}</label>
                  <input
                    type="text"
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    placeholder={language === "en" ? "e.g. Atrocity, Police Inaction, Land Dispute, Discrimination, etc." : "उदाहरण: अत्याचार, पुलिस की निष्क्रियता, भूमि विवाद, भेदभाव, आदि।"}
                    className="w-full px-3 py-2.5 md:px-4 md:py-3.5 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5 md:mb-2">{language === "en" ? "Date of Incident" : "घटना की तारीख"}</label>
                  <input
                    type="date"
                    required
                    value={formData.incidentDate}
                    onChange={(e) => setFormData({ ...formData, incidentDate: e.target.value })}
                    className="w-full px-3 py-2.5 md:px-4 md:py-3.5 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] md:text-xs font-bold uppercase text-slate-700 mb-1.5 md:mb-2">{language === "en" ? "Detailed Description of Incident" : "घटना का विस्तारित विवरण"}</label>
                <textarea
                  rows={4}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder={language === "en" ? "Provide a factual summary of what happened, persons involved, and current status with local police..." : "जो हुआ, पीड़ितों की स्थिति और स्थानीय पुलिस के साथ वर्तमान स्थिति का तथ्यात्मक सारांश प्रदान करें..."}
                  className="w-full px-3 py-2.5 md:px-4 md:py-3.5 rounded-xl border border-slate-200 text-xs md:text-sm focus:outline-none focus:border-[#000000]"
                />
              </div>

              <div className="p-3 md:p-4 bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl flex items-start gap-2 md:gap-3 text-[10px] md:text-xs text-[#0A2540]">
                <FaExclamationTriangle className="text-[#000000] shrink-0 mt-0.5 w-3 h-3 md:w-[14px] md:h-[14px]" />
                <span>{language === "en" ? "All submitted details are kept confidential under advocate-client privilege guidelines and handled strictly by authorized DDJC legal personnel." : "सभी जमा की गई जानकारी वकील-ग्राहक अधिकार दिशानिर्देशों के तहत गोपनीय रखी जाती है और केवल अधिकृत DDJC कानूनी कर्मचारियों द्वारा सख्ती से संभाली जाती है।"}</span>
              </div>

              <Button type="submit" isLoading={loading} className="w-full py-3 md:py-4 text-xs md:text-sm">
                <FaFileSignature className="mr-2" /> {language === "en" ? "Submit Complaint for Review" : "समीक्षा के लिए शिकायत सबमिट करें"}
              </Button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}