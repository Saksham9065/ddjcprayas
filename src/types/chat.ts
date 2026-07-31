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

export interface UseChatOptions {
  onError?: (error: Error) => void;
}

export interface UseChatReturn {
  messages: ChatMessage[];
  input: string;
  setInput: (value: string) => void;
  loading: boolean;
  sendMessage: (text: string) => Promise<void>;
  clearChat: () => void;
  newChat: () => void;
  stopGeneration: () => void;
}

export const SUGGESTED_QUESTIONS = [
  "What is DDJC?",
  "Explain SC/ST Act",
  "How can I get legal aid?",
  "How do I file an FIR?",
  "Volunteer with DDJC",
];
