"use client";

import { motion } from "framer-motion";

interface SuggestedQuestionsProps {
  onSelect: (question: string) => void;
  theme?: "light" | "dark";
}

export default function SuggestedQuestions({ onSelect, theme = "dark" }: SuggestedQuestionsProps) {
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="flex flex-wrap justify-center gap-2"
    >
      {[
        "What is DDJC?",
        "Explain SC/ST Act",
        "How can I get legal aid?",
        "How do I file an FIR?",
        "Volunteer with DDJC",
      ].map((q, index) => (
        <motion.button
          key={q}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 + index * 0.05 }}
          onClick={() => onSelect(q)}
          className={`rounded-full border px-4 py-2 text-xs transition ${
            isDark
              ? "border-white/10 bg-white/5 text-slate-300 hover:border-[#0A4DA2] hover:bg-white/10 hover:text-white"
              : "border-slate-200 bg-white text-slate-600 hover:border-[#0A2540] hover:bg-slate-50 hover:text-[#0A2540]"
          }`}
          type="button"
        >
          {q}
        </motion.button>
      ))}
    </motion.div>
  );
}
