"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBalanceScale, FaBars, FaTimes, FaPhoneAlt, FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0A2540] text-white shadow-md border-b border-blue-900/40">
      <div className="container mx-auto px-6 max-w-6xl h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white text-xl shadow-md group-hover:scale-105 transition-transform">
            <FaBalanceScale />
          </div>
          <div>
            <span className="font-black text-lg tracking-tight block leading-none">DDJC</span>
            <span className="text-[10px] text-blue-300 uppercase tracking-widest font-bold">Dalit Dignity & Justice Center</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link>
          <Link href="/legal-aid" className="hover:text-blue-400 transition-colors">Legal Aid</Link>
          
          {/* Dropdown for Work */}
          <div className="relative group">
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 hover:text-blue-400 transition-colors py-2 focus:outline-none"
            >
              Our Work <FaChevronDown size={10} />
            </button>
            <div className="absolute top-full left-0 w-48 bg-white text-slate-800 rounded-2xl shadow-xl border border-slate-200 py-3 hidden group-hover:block">
              <Link href="/work/in-court" className="block px-4 py-2 text-xs font-bold hover:bg-slate-50 hover:text-[#2563EB]">In-Court Representation</Link>
              <Link href="/work/out-court" className="block px-4 py-2 text-xs font-bold hover:bg-slate-50 hover:text-[#2563EB]">Out-of-Court Advocacy</Link>
            </div>
          </div>

          <Link href="/resources" className="hover:text-blue-400 transition-colors">Resources</Link>
          <Link href="/media/news" className="hover:text-blue-400 transition-colors">Media</Link>
          <Link href="/team" className="hover:text-blue-400 transition-colors">Team</Link>
          <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/complaint"
            className="bg-[#2563EB] hover:bg-blue-600 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-all shadow-md"
          >
            File Complaint
          </Link>
          <Link
            href="/donate"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-5 py-2.5 rounded-xl text-xs transition-all"
          >
            Donate
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-2xl text-white focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0A2540] border-t border-blue-900 px-6 py-6 space-y-4">
          <Link href="/" onClick={() => setIsOpen(false)} className="block text-sm font-medium hover:text-blue-400">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block text-sm font-medium hover:text-blue-400">About Us</Link>
          <Link href="/legal-aid" onClick={() => setIsOpen(false)} className="block text-sm font-medium hover:text-blue-400">Legal Aid</Link>
          <Link href="/work/in-court" onClick={() => setIsOpen(false)} className="block text-sm font-medium hover:text-blue-400">In-Court Representation</Link>
          <Link href="/work/out-court" onClick={() => setIsOpen(false)} className="block text-sm font-medium hover:text-blue-400">Out-of-Court Advocacy</Link>
          <Link href="/resources" onClick={() => setIsOpen(false)} className="block text-sm font-medium hover:text-blue-400">Resources</Link>
          <Link href="/media/news" onClick={() => setIsOpen(false)} className="block text-sm font-medium hover:text-blue-400">Media</Link>
          <Link href="/team" onClick={() => setIsOpen(false)} className="block text-sm font-medium hover:text-blue-400">Team</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block text-sm font-medium hover:text-blue-400">Contact</Link>
          <div className="pt-4 flex flex-col gap-3">
            <Link href="/complaint" onClick={() => setIsOpen(false)} className="bg-[#2563EB] text-center text-white font-bold py-3 rounded-xl text-xs">File Complaint</Link>
            <Link href="/donate" onClick={() => setIsOpen(false)} className="bg-white/10 text-center text-white font-bold py-3 rounded-xl text-xs">Donate</Link>
          </div>
        </div>
      )}
    </header>
  );
}