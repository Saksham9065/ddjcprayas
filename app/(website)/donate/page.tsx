"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { FaUniversity, FaUpload, FaCheckCircle } from "react-icons/fa";
import Button from "@/components/ui/Button";

export default function DonatePage() {
  const [donorName, setDonorName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("donorName", donorName);
      formData.append("phone", phone);
      formData.append("email", email);
      if (screenshot) {
        formData.append("screenshot", screenshot);
      }

      const res = await fetch("/api/donations", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Submission failed. Please try again.");
      }

      setSuccess(true);
      setDonorName("");
      setPhone("");
      setEmail("");
      setScreenshot(null);
      setPreviewUrl(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setScreenshot(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-4xl space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="bg-slate-50 text-[#000000] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block">
            Support Justice & Equality
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#0A2540] tracking-tight">
            Contribute to DDJC
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Your generous contribution directly funds free legal aid, courtroom advocacy, and grassroots legal awareness camps for marginalized victims.
          </p>
        </div>

        <div className="bg-[#0A2540] text-white p-8 md:p-10 rounded-3xl shadow-xl grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-400/30 inline-block">
              Direct Bank Transfer / UPI
            </span>
            <h3 className="text-2xl font-bold">Official Bank Details</h3>
            <div className="space-y-2 text-sm text-slate-300">
              <p><strong className="text-white">Account Name:</strong> Prayas Jan Utthan Samiti</p>
              <p><strong className="text-white">A/C Number:</strong> <span className="font-mono">7108466367</span></p>
              <p><strong className="text-white">Bank Name:</strong> Indian Bank</p>
              <p><strong className="text-white">IFSC Code:</strong> <span className="font-mono">IDIB000O029</span></p>
              <p><strong className="text-white">Branch Address:</strong> Orai Branch, Prakash Complex, Opp District Court, Orai – Jalaun, UP.</p>
            </div>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl border border-white/20 text-center space-y-4 backdrop-blur-sm">
            <div className="flex justify-center mb-2">
              <div className="relative h-14 w-14 rounded-full overflow-hidden shadow-md border border-white/20 bg-slate-50">
                <Image
                  src="/images/logo/ddjc-logo.jpg"
                  alt="DDJC Logo"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div>
              <h4 className="font-bold text-base mb-1">Scan & Donate via QR</h4>
              <p className="text-xs text-slate-300">Scan using any UPI app (Google Pay, PhonePe, Paytm)</p>
            </div>
            <div className="relative w-48 h-48 mx-auto bg-white rounded-xl overflow-hidden p-2 shadow-inner">
              <Image
                src="/images/qr/qr.jpeg"
                alt="Prayas Jan Utthan Samiti Donation QR Code"
                fill
                className="object-contain p-2"
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-[#0A2540] mb-6">Upload Payment Proof</h3>
          {success ? (
            <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl">
                <FaCheckCircle />
              </div>
              <h4 className="text-xl font-bold text-emerald-800">Thank You for Your Contribution!</h4>
              <p className="text-xs text-emerald-700 max-w-md mx-auto">
                Your payment proof has been received. Our team will verify the transaction and update the status shortly.
              </p>
              <button
                type="button"
                onClick={() => setSuccess(false)}
                className="mt-4 bg-[#0A2540] text-white px-6 py-2.5 rounded-xl text-xs font-bold"
              >
                Make Another Contribution
              </button>
            </div>
          ) : (
            <form onSubmit={handleDonate} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="supporter@example.com"
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-3">Upload Payment Screenshot</label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-colors ${
                    screenshot
                      ? "border-emerald-400 bg-emerald-50"
                      : "border-slate-300 bg-slate-50 hover:border-slate-400 hover:bg-slate-100"
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    capture="environment"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  {screenshot ? (
                    <div className="space-y-3">
                      <div className="w-24 h-24 mx-auto rounded-xl overflow-hidden border border-slate-200">
                        {previewUrl && (
                          <Image
                            src={previewUrl}
                            alt="Payment screenshot preview"
                            width={96}
                            height={96}
                            className="object-cover w-full h-full"
                          />
                        )}
                      </div>
                      <p className="text-sm font-bold text-emerald-700">{screenshot.name}</p>
                      <p className="text-xs text-slate-500">Click to replace</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto text-slate-400 border border-slate-200">
                        <FaUpload size={28} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-700">Click to upload payment proof</p>
                        <p className="text-xs text-slate-500 mt-1">Supports JPG, PNG, WebP (max 10MB)</p>
                      </div>
                    </div>
                  )}
                </div>
                {error && <p className="text-red-600 text-xs font-bold mt-2">{error}</p>}
              </div>

              <Button type="submit" isLoading={loading} className="w-full py-4 text-sm">
                <FaUpload /> Submit Payment Proof
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}