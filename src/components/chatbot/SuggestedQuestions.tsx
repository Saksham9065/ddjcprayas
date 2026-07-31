"use client";

import { motion } from "framer-motion";

interface SuggestedQuestionsProps {
  onSelect: (question: string) => void;
}

export default function SuggestedQuestions({ onSelect }: SuggestedQuestionsProps) {
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
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300 transition hover:border-[#0A4DA2] hover:bg-white/10 hover:text-white"
          type="button"
        >
          {q}
        </motion.button>
      ))}
    </motion.div>
  );
}
