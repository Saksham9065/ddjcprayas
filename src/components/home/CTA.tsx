"use client";

import React from "react";
import Link from "next/link";
import { FaFileSignature, FaArrowRight } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="bg-[#0A2540] text-white p-10 md:p-14 rounded-3xl text-center space-y-6 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">Need Legal Representation or Advice?</h2>
          <p className="text-blue-200 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            If you or someone you know has been subjected to atrocities or caste discrimination, file a formal complaint securely through our portal.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/complaint"
              className="bg-[#2563EB] hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-lg shadow-blue-500/20"
            >
              <FaFileSignature /> File a Complaint <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}