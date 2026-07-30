"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaSignOutAlt, FaUsers, FaFileAlt, FaHandHoldingHeart, FaUserPlus, FaGraduationCap, FaBriefcase, FaSpinner } from "react-icons/fa";
import { checkAdminAuth } from "@/lib/auth";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [stats, setStats] = useState({
    contacts: 0,
    complaints: 0,
    donations: 0,
    volunteers: 0,
    internships: 0,
    jobs: 0,
  });
  const [authStatus, setAuthStatus] = useState<boolean | null>(null);

  useEffect(() => {
    const isAuth = checkAdminAuth();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAuthStatus(isAuth);
    if (!isAuth) {
      router.push("/admin/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("ddjc_admin_session");
    router.push("/admin/login");
  };

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [contactsRes, complaintsRes, donationsRes, joinRes] = await Promise.all([
          fetch("/api/admin/contacts"),
          fetch("/api/admin/complaints"),
          fetch("/api/admin/donations"),
          fetch("/api/admin/join-applications"),
        ]);

        const contactsData = contactsRes.ok ? await contactsRes.json() : { total: 0 };
        const complaintsData = complaintsRes.ok ? await complaintsRes.json() : { total: 0 };
        const donationsData = donationsRes.ok ? await donationsRes.json() : { total: 0 };
        const joinData = joinRes.ok ? await joinRes.json() : { data: [] };

        const volunteerCount = (joinData.data || []).filter((a: Record<string, unknown>) => a.joinType === "Volunteer").length;
        const internshipCount = (joinData.data || []).filter((a: Record<string, unknown>) => a.joinType === "Internship").length;
        const jobsCount = (joinData.data || []).filter((a: Record<string, unknown>) => a.joinType === "Career" || a.joinType === "Jobs").length;

        setStats({
          contacts: contactsData.total || 0,
          complaints: complaintsData.total || 0,
          donations: donationsData.total || 0,
          volunteers: volunteerCount,
          internships: internshipCount,
          jobs: jobsCount,
        });
      } catch (error) {
        console.error("Failed to fetch stats:", error);
      }
    };

    fetchStats();
  }, []);

  const modules = [
    { label: "Contact Us", value: stats.contacts, href: "/admin/contacts", color: "bg-blue-500" },
    { label: "Complaints", value: stats.complaints, href: "/admin/complaints", color: "bg-amber-500" },
    { label: "Donations", value: stats.donations, href: "/admin/donations", color: "bg-emerald-500" },
    { label: "Volunteers", value: stats.volunteers, href: "/admin/volunteers", color: "bg-purple-500" },
    { label: "Internships", value: stats.internships, href: "/admin/internships", color: "bg-pink-500" },
    { label: "Jobs & Career", value: stats.jobs, href: "/admin/jobs", color: "bg-slate-800" },
  ];

  if (authStatus === null) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="flex items-center gap-3 text-slate-600 font-medium">
          <FaSpinner className="animate-spin text-[#000000]" size={24} />
          <span>Verifying Admin Session...</span>
        </div>
      </div>
    );
  }

  if (!authStatus) {
    return null;
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <header className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8 mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#000000] flex items-center justify-center text-lg shadow-md overflow-hidden">
              <img src="/images/logo/ddjc-logo.jpg" alt="DDJC Logo" className="h-full w-full object-cover" />
            </div>
            <div>
              <h1 className="font-black text-base tracking-tight text-[#0A2540]">DDJC Admin Portal</h1>
              <p className="text-xs text-slate-500">Grievance & Case Management System</p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-xl text-xs font-bold transition-colors border border-slate-700"
          >
            <FaSignOutAlt /> Sign Out
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((mod) => (
          <a
            key={mod.label}
            href={mod.href}
            className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-2xl ${mod.color} text-white flex items-center justify-center text-xl shadow-md`}>
                {mod.label === "Contact Us" && <FaUsers size={20} />}
                {mod.label === "Complaints" && <FaFileAlt size={20} />}
                {mod.label === "Donations" && <FaHandHoldingHeart size={20} />}
                {mod.label === "Volunteers" && <FaUserPlus size={20} />}
                {mod.label === "Internships" && <FaGraduationCap size={20} />}
                {mod.label === "Jobs & Career" && <FaBriefcase size={20} />}
              </div>
              <span className="text-3xl font-black text-[#0A2540]">{mod.value}</span>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{mod.label}</p>
            <p className="text-[10px] text-slate-400 mt-1 group-hover:text-[#000000] transition-colors">Click to manage records</p>
          </a>
        ))}
      </div>
    </div>
  );
}
