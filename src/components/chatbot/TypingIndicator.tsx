"use client";

import { motion } from "framer-motion";

function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-white/10 px-4 py-3 text-sm text-slate-300"
    >
      <span className="sr-only">Bot is typing</span>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
          className="inline-block h-2 w-2 rounded-full bg-slate-400"
        />
      ))}
    </motion.div>
  );
}

export default TypingIndicator;
