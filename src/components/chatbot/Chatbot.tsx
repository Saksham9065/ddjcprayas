"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useChat } from "./hooks/useChat";
import ChatHeader from "./ChatHeader";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";

type Theme = "light" | "dark";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");
  const { messages, input, setInput, loading, sendMessage, clearChat, newChat, stopGeneration } = useChat();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
  }, [theme]);

  const handleSuggestedClick = async (question: string) => {
    await sendMessage(question);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 md:bottom-6 md:right-6">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex h-[85vh] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-3xl border shadow-2xl backdrop-blur-xl md:h-[85vh] md:w-[420px]"
          >
            <ChatHeader
              onClose={() => setIsOpen(false)}
              onClear={clearChat}
              onNewChat={newChat}
              theme={theme}
              onToggleTheme={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
              loading={loading}
            />
            <ChatWindow
              messages={messages}
              loading={loading}
              onSuggestedClick={handleSuggestedClick}
              onClear={clearChat}
              theme={theme}
            />
            <ChatInput
              value={input}
              onChange={setInput}
              onSend={() => sendMessage(input)}
              loading={loading}
              onStop={stopGeneration}
              theme={theme}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => setIsOpen(true)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0A2540] shadow-lg transition md:h-14 md:w-14 overflow-hidden p-0"
          aria-label="Open chat"
        >
          <img src="/images/bot/chatbot.webp" alt="Chat bot" className="h-full w-full object-cover" />
        </motion.button>
      )}
    </div>
  );
}
