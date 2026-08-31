"use client";

import { useState, useRef, useCallback } from "react";
import type { ChatMessage, UseChatReturn } from "@/types/chat";

const STORAGE_KEY = "ddjc_chat_history";

function loadHistory(): ChatMessage[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as ChatMessage[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveHistory(messages: ChatMessage[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  } catch {
    // ignore storage errors
  }
}

export function useChat(): UseChatReturn {
  const [messages, setMessages] = useState<ChatMessage[]>(loadHistory);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  const sendMessage = useCallback(async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
      role: "user",
      content: trimmed,
      timestamp: Date.now(),
    };

    const history = [...messages, userMessage];
    setMessages(history);
    setInput("");
    setLoading(true);

    abortControllerRef.current?.abort();
    abortControllerRef.current = new AbortController();

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, history }),
        signal: abortControllerRef.current.signal,
      });

      if (!res.ok) throw new Error("Failed to send message");

      const data: { reply: string } = await res.json();

      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        role: "assistant",
        content: data.reply,
        timestamp: Date.now(),
      };

      setMessages((prev) => {
        const next = [...prev, botMessage];
        saveHistory(next);
        return next;
      });
    } catch (error) {
      if ((error as Error).name === "AbortError") return;
      const errorMessage: ChatMessage = {
        id: `bot-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        role: "assistant",
        content: "Sorry, I couldn't connect right now. Please try again later.",
        timestamp: Date.now(),
      };
      setMessages((prev) => {
        const next = [...prev, errorMessage];
        saveHistory(next);
        return next;
      });
    } finally {
      setLoading(false);
      abortControllerRef.current = null;
    }
  }, [messages, loading]);

  const clearChat = useCallback(() => {
    setMessages([]);
    saveHistory([]);
  }, []);

  const newChat = useCallback(() => {
    setMessages([]);
    saveHistory([]);
    setInput("");
  }, []);

  const stopGeneration = useCallback(() => {
    abortControllerRef.current?.abort();
    setLoading(false);
  }, []);

  return {
    messages,
    input,
    setInput,
    loading,
    sendMessage,
    clearChat,
    newChat,
    stopGeneration,
  };
}
