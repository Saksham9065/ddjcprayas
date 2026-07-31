"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";
import { ChatMessage } from "@/types/chat";

let messageId = 0;

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort();
    };
  }, []);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userMessage: ChatMessage = {
      id: `user-${++messageId}`,
      role: "user",
      content: trimmed,
      timestamp: Date.now(),
    };

    const history = [...messages, userMessage];
    setMessages(history);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, history }),
      });

      if (!res.ok) throw new Error("Failed to send message");

      const data: { reply: string } = await res.json();

      const botMessage: ChatMessage = {
        id: `bot-${++messageId}`,
        role: "assistant",
        content: data.reply,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat send error:", error);
      const errorMessage: ChatMessage = {
        id: `bot-${++messageId}`,
        role: "assistant",
        content: "Sorry, I couldn't connect right now. Please try again later.",
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setMessages([]);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2 md:bottom-6 md:right-6">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative flex h-[600px] w-[350px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl backdrop-blur-xl md:h-[640px] md:w-[380px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-[#0A2540] px-4 py-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden">
                  <img src="/images/bot/chatbot.webp" alt="DDJC Bot" className="h-full w-full object-cover" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">DDJC AI Assistant</h3>
                  <p className="text-[10px] text-slate-300">
                    {loading ? "Typing..." : "Online"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleClear}
                  className="rounded-lg px-2.5 py-1.5 text-[11px] font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white"
                  type="button"
                >
                  Clear chat
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-300 transition hover:bg-white/10 hover:text-white"
                  type="button"
                  aria-label="Close chat"
                >
                  <FaTimes size={14} />
                </button>
              </div>
            </div>

            <ChatWindow
              messages={messages}
              loading={loading}
              onSuggestedClick={sendMessage}
              onClear={handleClear}
            />
            <ChatInput
              value={input}
              onChange={setInput}
              onSend={() => sendMessage(input)}
              loading={loading}
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
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0A2540] shadow-lg transition md:h-16 md:w-16 overflow-hidden p-0"
          aria-label="Open chat"
        >
          <img src="/images/bot/chatbot.webp" alt="Chat bot" className="h-full w-full object-cover" />
        </motion.button>
      )}
    </div>
  );
}

export default ChatWidget;
