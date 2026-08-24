"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import WelcomeScreen from "./WelcomeScreen";
import type { ChatMessage } from "@/types/chat";

interface ChatWindowProps {
  messages: ChatMessage[];
  loading: boolean;
  onSuggestedClick: (question: string) => void;
  onClear: () => void;
  theme: "light" | "dark";
}

export default function ChatWindow({ messages, loading, onSuggestedClick, onClear, theme }: ChatWindowProps) {
  const bottomRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div ref={containerRef} className="flex-1 overflow-y-auto px-4 py-4">
      {messages.length === 0 ? (
        <WelcomeScreen onSuggestedClick={onSuggestedClick} theme={theme} />
      ) : (
        <div className="space-y-4">
          <AnimatePresence>
            {messages.map((msg, index) => (
              <MessageBubble
                key={msg.id}
                message={msg}
                isLast={index === messages.length - 1}
                theme={theme}
              />
            ))}
          </AnimatePresence>
          {loading && <TypingIndicator theme={theme} />}
        </div>
      )}
      <div ref={bottomRef} />
    </div>
  );
}
