"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Trash2, RefreshCw } from "lucide-react";

interface MessageActionsProps {
  content: string;
  onRegenerate?: () => void;
  theme?: "light" | "dark";
}

export default function MessageActions({ content, onRegenerate, theme = "dark" }: MessageActionsProps) {
  const [copied, setCopied] = useState(false);
  const isDark = theme === "dark";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center gap-1"
    >
      <button
        onClick={handleCopy}
        className={`flex items-center justify-center rounded-lg p-1.5 transition ${
          isDark
            ? "text-slate-400 hover:bg-white/10 hover:text-white"
            : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"
        }`}
        type="button"
        aria-label="Copy"
      >
          {copied ? <Check size={12} /> : <Copy size={12} />}
      </button>
      {onRegenerate && (
        <button
          onClick={onRegenerate}
          className={`flex items-center justify-center rounded-lg p-1.5 transition ${
            isDark
              ? "text-slate-400 hover:bg-white/10 hover:text-white"
              : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"
          }`}
          type="button"
          aria-label="Regenerate"
        >
          <RefreshCw size={12} />
        </button>
      )}
    </motion.div>
  );
}
