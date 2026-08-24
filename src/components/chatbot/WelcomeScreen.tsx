"use client";

import { motion } from "framer-motion";
import SuggestedQuestions from "./SuggestedQuestions";

interface WelcomeScreenProps {
  onSuggestedClick: (question: string) => void;
  theme?: "light" | "dark";
}

export default function WelcomeScreen({ onSuggestedClick, theme = "dark" }: WelcomeScreenProps) {
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex h-full flex-col items-center justify-center text-center px-6"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl overflow-hidden"
      >
        <img src="/images/bot/chatbot.webp" alt="DDJC Bot" className="h-full w-full object-cover" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}
      >
        Welcome to DDJC AI
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className={`mt-2 max-w-[260px] text-xs leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}
      >
        Ask me anything about:
        <span className={`mt-1 block ${isDark ? "text-slate-300" : "text-slate-600"}`}>
          Legal Rights, Constitution, SC/ST Act, Government Schemes, DDJC Services
        </span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-6 w-full"
      >
        <SuggestedQuestions onSelect={onSuggestedClick} theme={theme} />
      </motion.div>
    </motion.div>
  );
}
