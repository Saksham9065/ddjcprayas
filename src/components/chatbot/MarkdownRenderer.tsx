"use client";

import ReactMarkdown from "react-markdown";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

function CodeBlock({ children, className, theme = "dark", ...props }: React.ComponentPropsWithoutRef<"pre"> & { theme?: "light" | "dark" }) {
  const [copied, setCopied] = useState(false);
  const match = /language-(\w+)/.exec(className || "");
  const isDark = theme === "dark";

  const handleCopy = async () => {
    const text = String(children).replace(/\n$/, "");
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  if (match) {
    return (
      <div className={`relative my-2 rounded-xl border ${isDark ? "border-white/10 bg-black/40" : "border-slate-200 bg-slate-900"}`}>
        <div className={`flex items-center justify-between px-3 py-2 text-xs ${isDark ? "text-slate-400" : "text-slate-300"}`}>
          <span>{match[1]}</span>
          <button
            onClick={handleCopy}
            className={`flex items-center gap-1 transition ${isDark ? "text-slate-400 hover:text-white" : "text-slate-400 hover:text-white"}`}
            type="button"
          >
            {copied ? <Check size={12} /> : <Copy size={12} />}
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

interface MarkdownRendererProps {
  content: string;
  theme?: "light" | "dark";
}

export default function MarkdownRenderer({ content, theme = "light" }: MarkdownRendererProps) {
  const isDark = theme === "dark";

  return (
    <div className={`prose prose-sm max-w-none ${isDark ? "prose-invert text-slate-200" : "text-slate-800"}`}>
      <ReactMarkdown
        components={{
          code: CodeBlock as never,
          p: ({ children }) => <p className="mb-1.5 last:mb-0">{children}</p>,
          ul: ({ children }) => <ul className="mb-1.5 ml-4 list-disc space-y-0.5">{children}</ul>,
          ol: ({ children }) => <ol className="mb-1.5 ml-4 list-decimal space-y-0.5">{children}</ol>,
          strong: ({ children }) => (
            <strong className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>{children}</strong>
          ),
          a: ({ children, href }) => (
            <a
              href={href}
              className={isDark ? "text-blue-400 underline break-all" : "text-blue-700 underline break-all"}
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
