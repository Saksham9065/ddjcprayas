"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaShieldAlt, FaLock, FaEnvelope, FaExclamationCircle } from "react-icons/fa";
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
        setError("Invalid email address or password. Please use admin@ddjc.org / admin123.");
      }
    }, 1000);
  };

  return (
    <div className="bg-slate-50 min-h-screen flex items-center justify-center py-12 px-6">
      <div className="max-w-md w-full bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="w-16 h-16 bg-blue-50 text-[#2563EB] rounded-2xl flex items-center justify-center mx-auto text-2xl border border-blue-100 shadow-sm">
            <FaShieldAlt />
          </div>
          <h1 className="text-2xl font-black text-[#0A2540] tracking-tight">Admin Portal Sign In</h1>
          <p className="text-xs text-slate-500">
            Enter authorized administrator credentials to manage DDJC grievances and cases.
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
            <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Admin Email</label>
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
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#2563EB]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Password</label>
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
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#2563EB]"
              />
            </div>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-[11px] text-slate-500 space-y-1">
            <p className="font-bold text-slate-700">Demo Credentials:</p>
            <p>Email: <span className="font-mono text-slate-800">admin@ddjc.org</span></p>
            <p>Password: <span className="font-mono text-slate-800">admin123</span></p>
          </div>

          <Button type="submit" isLoading={loading} className="w-full py-4 text-sm">
            Sign In to Dashboard
          </Button>

        </form>

      </div>
    </div>
  );
}