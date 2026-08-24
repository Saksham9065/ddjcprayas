"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaLock, FaEnvelope, FaExclamationCircle } from "react-icons/fa";
import { verifyAdminCredentials, setAdminAuth } from "@/lib/auth";
import { useApp } from "@/context/AppContext";
import Button from "@/components/ui/Button";

export default function AdminLoginPage() {
  const router = useRouter();
  const { setIsAdminLoggedIn } = useApp();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      const isValid = verifyAdminCredentials(email, password);
      if (isValid) {
        setAdminAuth(true);
        setIsAdminLoggedIn(true);
        router.push("/admin/dashboard");
      } else {
        setError("अमान्य ईमेल पता या पासवर्ड। कृपया admin@ddjc.org / admin123 का उपयोग करें।");
      }
    }, 1000);
  };

  return (
    <div className="bg-slate-50 min-h-screen flex items-center justify-center py-12 px-6">
      <div className="max-w-md w-full bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto border border-slate-100 shadow-sm overflow-hidden">
            <img src="/images/logo/ddjc-logo.jpg" alt="DDJC Logo" className="h-full w-full object-cover" />
          </div>
          <h1 className="text-2xl font-black text-[#0A2540] tracking-tight">एडमिन पोर्टल साइन इन</h1>
          <p className="text-xs text-slate-500">
            DDJC शिकायतों और मामलों को प्रबंधित करने के लिए अधिकृत व्यवस्थापक क्रेडेंशियल दर्ज करें।
          </p>
        </div>

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3 text-xs text-red-800">
            <FaExclamationCircle className="text-red-600 shrink-0 mt-0.5" size={14} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          
          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-2">एडमिन ईमेल</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400">
                <FaEnvelope size={14} />
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@ddjc.org"
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-2">पासवर्ड</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400">
                <FaLock size={14} />
              </span>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#000000]"
              />
            </div>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-[11px] text-slate-500 space-y-1">
            <p className="font-bold text-slate-700">डेमो क्रेडेंशियल:</p>
            <p>ईमेल: <span className="font-mono text-slate-800">admin@ddjc.org</span></p>
            <p>पासवर्ड: <span className="font-mono text-slate-800">admin123</span></p>
          </div>

          <Button type="submit" isLoading={loading} className="w-full py-4 text-sm">
            डैशबोर्ड में साइन इन करें
          </Button>

        </form>

      </div>
    </div>
  );
}
