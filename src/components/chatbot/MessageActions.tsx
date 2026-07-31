"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Trash2, RefreshCw } from "lucide-react";

interface MessageActionsProps {
  content: string;
  onRegenerate?: () => void;
}

export default function MessageActions({ content, onRegenerate }: MessageActionsProps) {
  const [copied, setCopied] = useState(false);

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
        className="flex items-center justify-center rounded-lg p-1.5 text-slate-400 transition hover:bg-white/10 hover:text-white"
        type="button"
        aria-label="Copy"
      >
          {copied ? <Check size={12} /> : <Copy size={12} />}
      </button>
      {onRegenerate && (
        <button
          onClick={onRegenerate}
          className="flex items-center justify-center rounded-lg p-1.5 text-slate-400 transition hover:bg-white/10 hover:text-white"
          type="button"
          aria-label="Regenerate"
        >
          <RefreshCw size={12} />
        </button>
      )}
    </motion.div>
  );
}
