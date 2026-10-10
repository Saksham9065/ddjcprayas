"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

type PopupSettings = {
  enabled: boolean;
  title: string;
  message: string;
  delaySeconds: number;
};

export default function AnniversaryPopup() {
  const [settings, setSettings] = useState<PopupSettings | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    let cancelled = false;

    async function loadSettings() {
      try {
        const response = await fetch("/api/anniversary", { cache: "no-store" });
        if (!response.ok) return;
        const data = (await response.json()) as PopupSettings;
        if (cancelled || !data.enabled) return;
        setSettings(data);
        timer = setTimeout(() => setVisible(true), Math.max(0, data.delaySeconds) * 1000);
      } catch {
        // The rest of the homepage should remain available if settings cannot load.
      }
    }

    void loadSettings();
    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setVisible(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [visible]);

  if (!visible || !settings) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setVisible(false);
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="anniversary-popup-title"
        className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/60 bg-white p-6 shadow-2xl sm:p-10"
      >
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#0A2540] via-amber-400 to-[#0A2540]" />
        <button
          type="button"
          aria-label="Close anniversary message"
          onClick={() => setVisible(false)}
          className="absolute right-4 top-5 rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
        >
          <X size={20} />
        </button>
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-3xl" aria-hidden="true">
          🎉
        </div>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-700">DDJC • A shared journey</p>
        <h2 id="anniversary-popup-title" className="pr-7 text-2xl font-black leading-tight tracking-tight text-[#0A2540] sm:text-3xl">
          {settings.title}
        </h2>
        <p className="mt-4 whitespace-pre-wrap text-sm leading-7 text-slate-600 sm:text-base">
          {settings.message}
        </p>
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="mt-7 w-full rounded-xl bg-[#0A2540] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#12385d] sm:w-auto"
        >
          Continue to website
        </button>
      </section>
    </div>
  );
}
