"use client";

import React, { useState } from "react";
import { FaHandHoldingUsd, FaShieldAlt, FaCheckCircle, FaLock } from "react-icons/fa";
import Button from "@/components/ui/Button";

export default function DonatePage() {
  const [amount, setAmount] = useState("1000");
  const [customAmount, setCustomAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  const selectedValue = customAmount || amount;

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="bg-blue-50 text-[#2563EB] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-200 inline-block mb-4">
            Support Justice & Equality
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#0A2540] tracking-tight mb-6">
            Contribute to DDJC
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Your generous contribution directly funds free legal aid, courtroom advocacy, and grassroots legal awareness camps for marginalized victims.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
          {success ? (
            <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl">
                ✓
              </div>
              <h4 className="text-xl font-bold text-emerald-800">Thank You for Your Support!</h4>
              <p className="text-xs text-emerald-700 max-w-md mx-auto">
                Your donation of ₹{selectedValue} has been successfully simulated through our secure payment gateway. A receipt has been emailed to you.
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
              {/* Amount Selection */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-3">Select Contribution Amount (₹)</label>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {["500", "1000", "5000"].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => {
                        setAmount(val);
                        setCustomAmount("");
                      }}
                      className={`py-4 rounded-2xl font-bold text-sm border transition-all ${
                        amount === val && !customAmount
                          ? "bg-[#2563EB] text-white border-[#2563EB] shadow-md"
                          : "bg-slate-50 text-[#0A2540] border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      ₹{val}
                    </button>
                  ))}
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Or enter custom amount (₹)"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#2563EB]"
                  />
                </div>
              </div>

              {/* Donor Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder="Supporter Name"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#2563EB]"
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
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#2563EB]"
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
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#2563EB]"
                />
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-center gap-3 text-xs text-slate-500">
                <FaLock className="text-[#2563EB] shrink-0 text-base" />
                <span>All transactions are encrypted and secured via industry-standard protocols.</span>
              </div>

              <Button type="submit" isLoading={loading} className="w-full py-4 text-sm">
                <FaHandHoldingUsd className="mr-2" /> Proceed to Pay ₹{selectedValue || "0"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}