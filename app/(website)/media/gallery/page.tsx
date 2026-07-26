"use client";

import React from "react";
import { FaImages } from "react-icons/fa";

export default function GalleryPage() {
  const images = [
    { title: "Legal Awareness Camp, Orai", tag: "Workshops" },
    { title: "Fact-Finding Delegation Meeting", tag: "Field Work" },
    { title: "Community Interaction Session", tag: "Outreach" },
    { title: "Advocacy Meeting at District Headquarters", tag: "Legal Aid" },
  ];

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-blue-50 text-[#2563EB] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-200 inline-block mb-4">
            Visual Documentation
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#0A2540] tracking-tight mb-6">
            Photo Gallery
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Glimpses from our legal camps, village awareness drives, and community gatherings across Bundelkhand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {images.map((img, index) => (
            <div key={index} className="bg-slate-100 h-72 rounded-3xl border border-slate-200 flex flex-col justify-end p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent z-10" />
              <div className="relative z-20 space-y-2">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider inline-block">
                  {img.tag}
                </span>
                <h3 className="text-white text-xl font-bold">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}