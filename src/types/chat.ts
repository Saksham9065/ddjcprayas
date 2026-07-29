export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

export interface ChatRequest {
  message: string;
  history: ChatMessage[];
}

export interface ChatResponse {
  reply: string;
}

export const SUGGESTED_QUESTIONS = [
  "What is DDJC?",
  "What legal help do you provide?",
  "Explain the SC/ST Act.",
  "How do I file an FIR?",
  "What constitutional rights do I have?",
  "How can I volunteer?",
];
