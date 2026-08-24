"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaImage, FaTrash, FaUpload } from "react-icons/fa";

export default function AdminGalleryPage() {
  const [galleryItems] = useState([
    { id: "img-1", title: "कानूनी सहायता शिविर - औरैया", date: "2026-06-20", category: "कार्यक्रम" },
    { id: "img-2", title: "सामुदायिक कार्यशाला", date: "2026-06-18", category: "कार्यशाला" },
    { id: "img-3", title: "न्यायालय सुनवाई सहायता", date: "2026-06-15", category: "कानूनी" },
    { id: "img-4", title: "जागरूकता रैली", date: "2026-06-12", category: "कार्यक्रम" },
    { id: "img-5", title: "स्वयंसेवक प्रशिक्षण", date: "2026-06-10", category: "प्रशिक्षण" },
    { id: "img-6", title: "जिला बैठक", date: "2026-06-08", category: "बैठक" },
  ]);

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div>
            <h1 className="text-2xl font-black text-[#0A2540] tracking-tight">गैलरी</h1>
            <p className="text-xs text-slate-500 mt-1">गैलरी छवियों और मीडिया का प्रबंधन करें</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex items-center gap-2 bg-[#000000] hover:bg-slate-600 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-all shadow-md"
            >
              <FaUpload size={12} /> मीडिया अपलोड करें
            </button>
            <Link href="/admin/dashboard" className="flex items-center gap-2 text-[#000000] font-bold text-sm hover:underline">
              <FaArrowLeft size={12} /> डैशबोर्ड पर वापस जाएं
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden group">
              <div className="aspect-video bg-slate-100 flex items-center justify-center">
                <FaImage className="text-slate-300 text-4xl" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#0A2540] text-sm mb-1">{item.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-slate-500">{item.date}</span>
                  <span className="text-[10px] bg-slate-50 text-[#000000] px-2 py-0.5 rounded-full font-bold">{item.category}</span>
                </div>
                <div className="mt-3 flex justify-end">
                  <button
                    type="button"
                    className="text-red-400 hover:text-red-600 transition-colors text-xs font-bold flex items-center gap-1"
                  >
                    <FaTrash size={10} /> हटाएं
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
