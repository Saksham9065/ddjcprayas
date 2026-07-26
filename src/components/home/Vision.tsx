"use client";

import React from "react";
import { FaShieldAlt } from "react-icons/fa";

export default function Vision() {
  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-4">
      <div className="w-14 h-14 bg-blue-50 text-[#2563EB] rounded-2xl flex items-center justify-center text-2xl border border-blue-100">
        <FaShieldAlt />
      </div>
      <h3 className="text-2xl font-bold text-[#0A2540]">Our Vision for Society</h3>
      <p className="text-slate-600 text-sm leading-relaxed">
        An equitable, inclusive society free from caste oppression, untouchability, and violence, where every citizen enjoys full constitutional guarantees and the rule of law.
      </p>
    </div>
  );
}