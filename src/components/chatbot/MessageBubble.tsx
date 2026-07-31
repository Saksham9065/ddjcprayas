"use client";

import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import MarkdownRenderer from "./MarkdownRenderer";
import MessageActions from "./MessageActions";
import type { ChatMessage } from "@/types/chat";

interface MessageBubbleProps {
  message: ChatMessage;
  isLast?: boolean;
  onRegenerate?: () => void;
}

export default function MessageBubble({ message, isLast, onRegenerate }: MessageBubbleProps) {
  const isUser = message.role === "user";
  const time = new Date(message.timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div className={`flex max-w-[75%] gap-2 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
        {!isUser && (
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl overflow-hidden">
            <img src="/images/bot/chatbot.webp" alt="DDJC Bot" className="h-full w-full object-cover" />
          </div>
        )}

        <div className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}>
          <div
            className={`rounded-2xl px-4 py-2.5 text-[15px] leading-relaxed ${
              isUser
                ? "rounded-br-md bg-gradient-to-br from-[#0A4DA2] to-[#2563EB] text-white"
                : "rounded-bl-md bg-white/10 text-slate-200"
            }`}
          >
            {isUser ? (
              <p className="whitespace-pre-wrap break-words">{message.content}</p>
            ) : (
              <MarkdownRenderer content={message.content} />
            )}
          </div>

          <div className={`mt-1 flex items-center gap-2 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
            <span className="text-[10px] text-slate-500">{time}</span>
            {!isUser && isLast && <MessageActions content={message.content} onRegenerate={onRegenerate} />}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
