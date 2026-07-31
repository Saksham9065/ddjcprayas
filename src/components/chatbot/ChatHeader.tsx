"use client";

import { X, Trash2, RefreshCw, Moon, Sun } from "lucide-react";

interface ChatHeaderProps {
  onClose: () => void;
  onClear: () => void;
  onNewChat: () => void;
  theme: "light" | "dark";
  onToggleTheme: () => void;
  loading: boolean;
  onRegenerate?: () => void;
}

export default function ChatHeader({
  onClose,
  onClear,
  onNewChat,
  theme,
  onToggleTheme,
  loading,
  onRegenerate,
}: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 bg-[#0A2540] px-4 py-3">
      <div className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden">
          <img src="/images/bot/chatbot.webp" alt="DDJC Bot" className="h-full w-full object-cover" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-white leading-tight">DDJC AI Assistant</h3>
          <div className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-[10px] text-slate-300">
              {loading ? "Typing..." : "Online"}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <button
          onClick={onNewChat}
          className="rounded-lg px-2.5 py-1.5 text-[11px] font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white"
          type="button"
        >
          New Chat
        </button>
          <button
            onClick={onClear}
            className="rounded-lg px-2.5 py-1.5 text-[11px] font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white"
            type="button"
          >
            Clear
          </button>
          {onRegenerate && (
            <button
              onClick={onRegenerate}
              disabled={loading}
              className="rounded-lg p-1.5 text-slate-300 transition hover:bg-white/10 hover:text-white disabled:opacity-50"
              type="button"
              aria-label="Regenerate"
            >
              <RefreshCw size={14} />
            </button>
          )}
          <button
            onClick={onToggleTheme}
            className="rounded-lg p-1.5 text-slate-300 transition hover:bg-white/10 hover:text-white"
            type="button"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <button
            onClick={onClose}
            className="flex h-7 w-7 items-center justify-center rounded-md bg-white/10 text-white transition hover:bg-red-500"
            type="button"
            aria-label="Close chat"
          >
            <X size={14} />
          </button>
      </div>
    </div>
  );
}
