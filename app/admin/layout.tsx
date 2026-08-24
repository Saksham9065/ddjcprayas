"use client";

import React, { ReactNode, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { checkAdminAuth } from "@/lib/auth";
import { FaSignOutAlt, FaHome, FaUsers, FaFileAlt, FaHandHoldingHeart, FaUserPlus, FaBriefcase, FaGraduationCap, FaBars } from "react-icons/fa";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [authChecking, setAuthChecking] = useState(true);

  React.useEffect(() => {
    if (pathname !== "/admin/login" && !checkAdminAuth()) {
      window.location.href = "/admin/login";
    } else {
      setAuthChecking(false);
    }
  }, [pathname]);

  const navItems = [
    { href: "/admin", label: "डैशबोर्ड", icon: FaHome },
    { href: "/admin/contacts", label: "संपर्क करें", icon: FaUsers },
    { href: "/admin/complaints", label: "शिकायतें", icon: FaFileAlt },
    { href: "/admin/donations", label: "दान", icon: FaHandHoldingHeart },
    { href: "/admin/volunteers", label: "स्वयंसेवक", icon: FaUserPlus },
    { href: "/admin/internships", label: "इंटर्नशिप", icon: FaGraduationCap },
    { href: "/admin/jobs", label: "नौकरी और करियर", icon: FaBriefcase },
  ];

  const handleLogout = () => {
    localStorage.removeItem("ddjc_admin_session");
    window.location.href = "/admin/login";
  };

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  if (authChecking) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="flex items-center gap-3 text-slate-600 font-medium">
          <span className="animate-spin text-[#000000] text-xl">⟳</span>
          <span>एडमिन सत्र सत्यापित किया जा रहा है...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen flex">
      {/* Mobile header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-[#0A2540] text-white flex items-center justify-between px-4 z-40 shadow-md">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="p-2 -ml-2 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="मेनू खोलें"
          >
            <FaBars size={18} />
          </button>
          <span className="font-black text-sm tracking-tight">DDJC Admin</span>
        </div>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 w-64 bg-[#0A2540] text-white flex-col z-50
        transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0 md:z-auto
        ${sidebarOpen ? 'translate-x-0 flex' : '-translate-x-full hidden md:flex'}
      `}>
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#000000] flex items-center justify-center text-lg shadow-md overflow-hidden">
              <img src="/images/logo/ddjc-logo.jpg" alt="DDJC Logo" className="h-full w-full object-cover" />
            </div>
            <div>
              <h1 className="font-black text-base tracking-tight">DDJC Admin</h1>
              <p className="text-[10px] text-slate-300">पोर्टल</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-colors ${
                  isActive
                    ? "bg-white text-[#0A2540] shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                <item.icon size={14} />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-slate-800">
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-xs font-bold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <FaSignOutAlt size={14} />
            साइन आउट
          </button>
        </div>
      </aside>

      <div className="flex-1 md:ml-0">
        <main className="p-4 md:p-8 pt-20 md:pt-8">{children}</main>
      </div>
    </div>
  );
}
