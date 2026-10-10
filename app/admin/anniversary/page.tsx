"use client";

import { useEffect, useState, type FormEvent } from "react";
import { CheckCircle2, CircleAlert, LoaderCircle, Save, Sparkles } from "lucide-react";

type PopupSettings = {
  enabled: boolean;
  title: string;
  message: string;
  delaySeconds: number;
};

const initialSettings: PopupSettings = {
  enabled: false,
  title: "Celebrating Our Journey",
  message: "Thank you for being part of the DDJC journey.",
  delaySeconds: 3,
};

export default function AdminAnniversaryPage() {
  const [settings, setSettings] = useState<PopupSettings>(initialSettings);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/admin/anniversary", { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) throw new Error("Could not load the current settings.");
        return (await response.json()) as PopupSettings;
      })
      .then((data) => {
        if (!cancelled) setSettings(data);
      })
      .catch((error: unknown) => {
        if (!cancelled) setNotice({ type: "error", text: error instanceof Error ? error.message : "Could not load settings." });
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  const update = <K extends keyof PopupSettings>(key: K, value: PopupSettings[K]) => {
    setSettings((current) => ({ ...current, [key]: value }));
    setNotice(null);
  };

  async function saveSettings(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setNotice(null);
    try {
      const response = await fetch("/api/admin/anniversary", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Could not save settings.");
      setSettings(result as PopupSettings);
      setNotice({ type: "success", text: "Anniversary popup settings saved." });
    } catch (error) {
      setNotice({ type: "error", text: error instanceof Error ? error.message : "Could not save settings." });
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6 py-3 md:py-6">
      <header className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
            <Sparkles size={23} />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight text-[#0A2540] sm:text-2xl">Anniversary Popup</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Manage the announcement shown on the DDJC homepage. Changes are stored in MongoDB and apply to visitors without a code change.
            </p>
          </div>
        </div>
      </header>

      <form onSubmit={saveSettings} className="space-y-6">
        <section className="space-y-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="font-extrabold text-slate-900">Popup visibility</h2>
              <p className="mt-1 text-sm text-slate-500">Turn the homepage popup on or off.</p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={settings.enabled}
              onClick={() => update("enabled", !settings.enabled)}
              className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition ${settings.enabled ? "bg-emerald-600" : "bg-slate-300"}`}
            >
              <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${settings.enabled ? "translate-x-6" : "translate-x-1"}`} />
            </button>
          </div>
          <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold ${settings.enabled ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-600"}`}>
            <span className={`h-2 w-2 rounded-full ${settings.enabled ? "bg-emerald-500" : "bg-slate-400"}`} />
            {settings.enabled ? "Enabled on homepage" : "Disabled on homepage"}
          </div>
        </section>

        <section className="space-y-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div>
            <h2 className="font-extrabold text-slate-900">Popup content</h2>
            <p className="mt-1 text-sm text-slate-500">Keep the message clear and welcoming.</p>
          </div>
          <div className="space-y-2">
            <label htmlFor="popup-title" className="block text-sm font-bold text-slate-700">Heading</label>
            <input
              id="popup-title"
              required
              maxLength={120}
              value={settings.title}
              onChange={(event) => update("title", event.target.value)}
              placeholder="Celebrating Our Journey"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#0A2540] focus:ring-2 focus:ring-[#0A2540]/10"
            />
            <p className="text-right text-xs text-slate-400">{settings.title.length}/120</p>
          </div>
          <div className="space-y-2">
            <label htmlFor="popup-message" className="block text-sm font-bold text-slate-700">Message</label>
            <textarea
              id="popup-message"
              required
              maxLength={2000}
              rows={5}
              value={settings.message}
              onChange={(event) => update("message", event.target.value)}
              placeholder="Write the announcement visitors will see..."
              className="w-full resize-y rounded-xl border border-slate-200 px-4 py-3 text-sm leading-6 outline-none transition focus:border-[#0A2540] focus:ring-2 focus:ring-[#0A2540]/10"
            />
            <p className="text-right text-xs text-slate-400">{settings.message.length}/2000</p>
          </div>
          <div className="max-w-sm space-y-2">
            <label htmlFor="popup-delay" className="block text-sm font-bold text-slate-700">Display delay</label>
            <div className="flex items-center gap-3">
              <input
                id="popup-delay"
                type="number"
                min={0}
                max={60}
                step={1}
                required
                value={settings.delaySeconds}
                onChange={(event) => update("delaySeconds", Number(event.target.value))}
                className="w-28 rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#0A2540] focus:ring-2 focus:ring-[#0A2540]/10"
              />
              <span className="text-sm text-slate-500">seconds after homepage load (0–60)</span>
            </div>
          </div>
        </section>

        {notice && (
          <div role="status" className={`flex items-start gap-2 rounded-2xl border p-4 text-sm ${notice.type === "success" ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-red-200 bg-red-50 text-red-800"}`}>
            {notice.type === "success" ? <CheckCircle2 size={18} className="mt-0.5 shrink-0" /> : <CircleAlert size={18} className="mt-0.5 shrink-0" />}
            <span>{notice.text}</span>
          </div>
        )}

        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={() => setSettings(initialSettings)}
            disabled={loading || saving}
            className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50 disabled:opacity-50"
          >
            Reset form
          </button>
          <button
            type="submit"
            disabled={loading || saving}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0A2540] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#12385d] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {saving ? <LoaderCircle size={17} className="animate-spin" /> : <Save size={17} />}
            {saving ? "Saving..." : "Save settings"}
          </button>
        </div>
      </form>
    </div>
  );
}
