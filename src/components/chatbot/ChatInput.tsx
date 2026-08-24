"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Square } from "lucide-react";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  onStop?: () => void;
  loading: boolean;
  theme: "light" | "dark";
}

export default function ChatInput({ value, onChange, onSend, onStop, loading, theme }: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
  }, [value]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!loading && value.trim()) onSend();
    }
  };

  const isDark = theme === "dark";

  return (
    <div className={`border-t p-3 backdrop-blur-md ${isDark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white"}`}>
      <div className="flex items-end gap-2">
        <textarea
          ref={textareaRef}
          rows={1}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about DDJC, legal rights, government schemes..."
          disabled={loading}
          className={`max-h-40 flex-1 resize-none rounded-xl border px-4 py-3 text-[15px] outline-none focus:ring-1 disabled:opacity-50 ${
            isDark
              ? "border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:border-[#0A4DA2] focus:ring-[#0A4DA2]"
              : "border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-[#0A2540] focus:ring-[#0A2540]"
          }`}
        />
        {loading ? (
          <button
            onClick={onStop}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500 text-white transition hover:bg-red-600"
            type="button"
            aria-label="Stop generation"
          >
            <Square size={14} />
          </button>
        ) : (
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={onSend}
            disabled={!value.trim()}
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white transition disabled:opacity-40 ${
              isDark ? "bg-[#0A4DA2] hover:bg-[#0A4DA2]/90" : "bg-[#0A2540] hover:bg-slate-600"
            }`}
            type="button"
            aria-label="Send message"
          >
            <Send size={16} />
          </motion.button>
        )}
      </div>
      <p className={`mt-1.5 px-1 text-[10px] ${isDark ? "text-slate-500" : "text-slate-400"}`}>
        Press Enter to send, Shift + Enter for new line
      </p>
    </div>
  );
}
