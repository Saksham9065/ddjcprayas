"use client";

import React from "react";
import Link from "next/link";
import { FaBalanceScale, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0A2540] text-white pt-16 pb-12 border-t border-blue-900/40 font-sans">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Intro */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white text-xl shadow-md">
                <FaBalanceScale />
              </div>
              <div>
                <span className="font-black text-lg tracking-tight block leading-none">Dalit Dignity &</span>
                <span className="font-black text-lg tracking-tight block leading-none text-blue-400">Justice Center</span>
              </div>
            </div>
            <p className="text-slate-300 text-xs tracking-wider uppercase font-semibold">
              Access to Justice • Equality • Human Rights
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-blue-400 mb-4">Quick Links</h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <span className="text-blue-500">—</span>
                <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">—</span>
                <Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">—</span>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">—</span>
                <Link href="/donate" className="hover:text-blue-400 transition-colors">Donate</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-blue-400">Contact Us</h4>
            
            <div className="flex items-start gap-3 text-xs text-slate-300">
              <FaMapMarkerAlt className="text-blue-400 mt-0.5 shrink-0" />
              <span>Police Line – Baghaura, Orai – Jalaun, UP - 285001</span>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-300">
              <FaPhoneAlt className="text-blue-400 shrink-0" />
              <div className="space-y-0.5">
                <p>9235737691</p>
                <p>9453645931</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-300">
              <FaEnvelope className="text-blue-400 shrink-0" />
              <span>ddjc.prayas@gmail.com</span>
            </div>
          </div>

        </div>

        {/* Ambedkar Quote Banner */}
        <div className="py-10 border-b border-slate-800 text-center max-w-3xl mx-auto">
          <p className="text-slate-300 text-sm md:text-base italic leading-relaxed mb-4">
            &ldquo;Justice has always evoked ideas of equality, of proportion of compensation. In short, Justice is another name of Liberty, Equality and Fraternity.&rdquo;
          </p>
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block">
            - Babasaheb Dr. B.R. Ambedkar
          </span>
        </div>

        {/* Bottom Copyright & Admin link */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>© 2026 Dalit Dignity & Justice Center. All Rights Reserved.</p>
          <Link href="/admin/login" className="hover:text-blue-400 transition-colors">Admin Login</Link>
        </div>
      </div>
    </footer>
  );
}