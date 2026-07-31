"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { ChatMessage } from "@/types/chat";
import { FaCopy, FaCheck } from "react-icons/fa";

function CodeBlock({ children, className, ...props }: React.ComponentPropsWithoutRef<"pre"> & { inline?: boolean }) {
  const [copied, setCopied] = useState(false);
  const match = /language-(\w+)/.exec(className || "");

  const handleCopy = async () => {
    const text = String(children).replace(/\n$/, "");
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  if (match) {
    return (
      <div className="relative my-2 rounded-lg border border-white/10 bg-black/40">
        <div className="flex items-center justify-between px-3 py-2 text-xs text-slate-400">
          <span>{match[1]}</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 hover:text-white transition"
            type="button"
          >
            {copied ? <FaCheck /> : <FaCopy />}
            <span>{copied ? "Copied" : "Copy"}</span>
          </button>
        </div>
        <pre className="overflow-x-auto px-3 pb-3 pt-1 text-sm leading-relaxed">
          <code className={className} {...props}>
            {children}
          </code>
        </pre>
      </div>
    );
  }

  return (
    <code className={className} {...props}>
      {children}
    </code>
  );
}

function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";
  const time = new Date(message.timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div className={`max-w-[85%] md:max-w-[75%] ${isUser ? "items-end" : "items-start"}`}>
        <div
          className={`rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
            isUser
              ? "rounded-br-md bg-[#0A2540] text-white"
              : "rounded-bl-md bg-white/10 text-slate-200"
          }`}
        >
          {isUser ? (
            <p className="whitespace-pre-wrap break-words">{message.content}</p>
          ) : (
            <div className="prose prose-invert prose-sm max-w-none dark:prose-invert">
              <ReactMarkdown
                components={{
                  code: CodeBlock as never,
                  p: ({ children }) => <p className="mb-1.5 last:mb-0">{children}</p>,
                  ul: ({ children }) => <ul className="mb-1.5 ml-4 list-disc space-y-0.5">{children}</ul>,
                  ol: ({ children }) => <ol className="mb-1.5 ml-4 list-decimal space-y-0.5">{children}</ol>,
                  strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
                  a: ({ children, href }) => (
                    <a href={href} className="text-blue-400 underline break-all" target="_blank" rel="noopener noreferrer">
                      {children}
                    </a>
                  ),
                }}
              >
                {message.content}
              </ReactMarkdown>
            </div>
          )}
        </div>
        <span className={`mt-1 block px-1 text-[10px] text-slate-500 ${isUser ? "text-right" : "text-left"}`}>
          {time}
        </span>
      </div>
    </motion.div>
  );
}

export default MessageBubble;
