"use client";

import { KeyboardEvent, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaStop } from "react-icons/fa";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  onStop?: () => void;
  loading: boolean;
}

function ChatInput({ value, onChange, onSend, onStop, loading }: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 160)}px`;
    }
  }, [value]);

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!loading && value.trim()) onSend();
    }
  };

  return (
    <div className="border-t border-white/10 bg-slate-900 p-3">
      <div className="flex items-end gap-2">
        <textarea
          ref={textareaRef}
          rows={1}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          disabled={loading}
          className="max-h-40 flex-1 resize-none rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-[13px] text-white placeholder:text-slate-500 outline-none focus:border-[#0A2540] focus:ring-1 focus:ring-[#0A2540] disabled:opacity-50"
        />
        {loading ? (
          <button
            onClick={onStop}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-500 text-white transition hover:bg-red-600"
            type="button"
          >
            <FaStop size={12} />
          </button>
        ) : (
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={onSend}
            disabled={!value.trim()}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0A2540] text-white transition hover:bg-[#0A2540]/90 disabled:opacity-40"
            type="button"
          >
            <FaPaperPlane size={12} />
          </motion.button>
        )}
      </div>
    </div>
  );
}

export default ChatInput;
