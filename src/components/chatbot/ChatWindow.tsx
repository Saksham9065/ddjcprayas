"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MessageBubble from "./Message";
import TypingIndicator from "./TypingIndicator";
import { ChatMessage, SUGGESTED_QUESTIONS } from "@/types/chat";

interface ChatWindowProps {
  messages: ChatMessage[];
  loading: boolean;
  onSuggestedClick: (question: string) => void;
  onClear: () => void;
}

function ChatWindow({ messages, loading, onSuggestedClick, onClear }: ChatWindowProps) {
  const bottomRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div>
          <h3 className="text-sm font-semibold text-white">DDJC AI Assistant</h3>
          <p className="text-xs text-slate-400">
            {loading ? "Typing..." : "Online"}
          </p>
        </div>
        <button
          onClick={onClear}
          className="rounded-lg px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
          type="button"
        >
          Clear chat
        </button>
      </div>

      <div
        ref={containerRef}
        className="flex-1 space-y-4 overflow-y-auto px-4 py-4"
      >
        {messages.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex h-full flex-col items-center justify-center text-center"
          >
            <p className="text-lg font-medium text-white">👋 Welcome to DDJC.</p>
            <p className="mt-1 text-sm text-slate-300">I am your AI Assistant.</p>
            <p className="mt-1 max-w-65 text-xs leading-relaxed text-slate-400">
              I can help you understand your legal rights, government schemes, our NGO activities, and answer questions about DDJC.
            </p>
            
            <div className="mt-6 grid gap-2">
              <p className="text-xs font-medium text-slate-500">Suggested questions</p>
              <div className="grid grid-cols-1 gap-2">
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => onSuggestedClick(q)}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-left text-xs text-slate-300 transition hover:border-[#0A2540] hover:bg-white/10"
                    type="button"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <AnimatePresence>
            {messages.map((msg) => (
              <MessageBubble key={msg.id} message={msg} />
            ))}
            {loading && <TypingIndicator />}
          </AnimatePresence>
        )}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}

export default ChatWindow;
