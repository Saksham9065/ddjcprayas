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
    <div className="flex items-center justify-between border-b border-white/10 bg-[#0A2540] px-3 py-2.5">
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg overflow-hidden">
          <img src="/images/bot/chatbot.webp" alt="DDJC Bot" className="h-full w-full object-cover" />
        </div>
        <div className="min-w-0">
          <h3 className="text-xs font-bold text-white leading-tight truncate">DDJC AI Assistant</h3>
          <div className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
            <span className="text-[10px] text-slate-300">
              {loading ? "Typing..." : "Online"}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-0.5">
        <button
          onClick={onNewChat}
          className="rounded-md px-2 py-1 text-[10px] font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white"
          type="button"
        >
          New Chat
        </button>
        <button
          onClick={onClear}
          className="rounded-md px-2 py-1 text-[10px] font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white"
          type="button"
        >
          Clear
        </button>
        <button
          onClick={onToggleTheme}
          className="rounded-md p-1.5 text-slate-300 transition hover:bg-white/10 hover:text-white"
          type="button"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={12} /> : <Moon size={12} />}
        </button>
        <button
          onClick={onClose}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white/10 text-white transition hover:bg-red-500"
          type="button"
          aria-label="Close chat"
        >
          <X size={12} />
        </button>
      </div>
    </div>
  );
}
