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
}

export default function ChatInput({ value, onChange, onSend, onStop, loading }: ChatInputProps) {
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

  return (
    <div className="border-t border-white/10 bg-white/5 p-3 backdrop-blur-md">
      <div className="flex items-end gap-2">
        <textarea
          ref={textareaRef}
          rows={1}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about DDJC, legal rights, government schemes..."
          disabled={loading}
          className="max-h-40 flex-1 resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[15px] text-white placeholder:text-slate-500 outline-none focus:border-[#0A4DA2] focus:ring-1 focus:ring-[#0A4DA2] disabled:opacity-50"
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
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0A4DA2] text-white transition hover:bg-[#0A4DA2]/90 disabled:opacity-40"
            type="button"
            aria-label="Send message"
          >
            <Send size={16} />
          </motion.button>
        )}
      </div>
      <p className="mt-1.5 px-1 text-[10px] text-slate-500">
        Press Enter to send, Shift + Enter for new line
      </p>
    </div>
  );
}
