"use client";

import React, { useState } from "react";
import { FaFileSignature, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import Button from "@/components/ui/Button";

export default function ComplaintPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    district: "Jalaun",
    tehsil: "",
    category: "Atrocity / Violence",
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
    <div className="bg-slate-50 min-h-screen py-16 pt-24">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="bg-slate-50 text-[#000000] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block mb-4">
            Grievance Redressal
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-[#0A2540] tracking-tight mb-4">
            File a Formal Complaint
          </h1>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Submit your grievance regarding caste discrimination, violence, police inaction, or land disputes. Our legal team will review your case promptly.
          </p>
        </div>

        {/* Form Container */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          {successId ? (
            <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl">
                <FaCheckCircle />
              </div>
              <h3 className="text-2xl font-bold text-emerald-900">Complaint Registered Successfully</h3>
              <p className="text-sm text-emerald-700 max-w-md mx-auto">
                Your grievance has been safely logged into the DDJC system. Your reference tracking ID is:
              </p>
              <div className="inline-block bg-white border border-emerald-300 px-6 py-3 rounded-xl font-mono font-bold text-emerald-800 text-lg shadow-sm">
                {successId}
              </div>
              <p className="text-xs text-slate-500 pt-2">
                Save this tracking number. Our field coordinator or panel advocate will contact you shortly.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setSuccessId("");
                    setFormData({
                      fullName: "",
                      phone: "",
                      district: "Jalaun",
                      tehsil: "",
                      category: "Atrocity / Violence",
                      incidentDate: "",
                      description: "",
                    });
                  }}
                  className="bg-slate-800 text-white px-6 py-3 rounded-xl text-xs font-bold"
                >
                  File Another Complaint
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Complainant / Victim Name</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter full name"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-2">District</label>
                  <select
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                  >
                    <option value="Jalaun">Jalaun</option>
                    <option value="Jhansi">Jhansi</option>
                    <option value="Lalitpur">Lalitpur</option>
                    <option value="Hamirpur">Hamirpur</option>
                    <option value="Banda">Banda</option>
                    <option value="Chitrakoot">Chitrakoot</option>
                    <option value="Mahoba">Mahoba</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Tehsil / Block / Village</label>
                  <input
                    type="text"
                    required
                    value={formData.tehsil}
                    onChange={(e) => setFormData({ ...formData, tehsil: e.target.value })}
                    placeholder="e.g. Orai, Konch, Kalpi"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Grievance Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                  >
                    <option value="Atrocity / Violence">Atrocity / Physical Violence</option>
                    <option value="Police Inaction">Police Inaction / Refusal to Register FIR</option>
                    <option value="Land Dispute">Land & Property Dispute / Illegal Eviction</option>
                    <option value="Social Boycott">Social Boycott / Discrimination</option>
                    <option value="Compensation Delay">Delayed Statutory Compensation</option>
                    <option value="Other">Other Legal Issue</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Date of Incident</label>
                  <input
                    type="date"
                    required
                    value={formData.incidentDate}
                    onChange={(e) => setFormData({ ...formData, incidentDate: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Detailed Description of Incident</label>
                <textarea
                  rows={5}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Provide a factual summary of what happened, persons involved, and current status with local police..."
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                />
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-start gap-3 text-xs text-slate-900">
                <FaExclamationTriangle className="text-[#000000] shrink-0 mt-0.5" size={14} />
                <span>All submitted details are kept confidential under advocate-client privilege guidelines and handled strictly by authorized DDJC legal personnel.</span>
              </div>

              <Button type="submit" isLoading={loading} className="w-full py-4 text-sm">
                <FaFileSignature className="mr-2" /> Submit Complaint for Review
              </Button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}