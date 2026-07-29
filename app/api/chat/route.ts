import { NextResponse } from "next/server";
import { ChatRequest, ChatResponse, SUGGESTED_QUESTIONS } from "@/types/chat";
import { GoogleGenAI, type Content } from "@google/genai";

const SYSTEM_PROMPT = `You are an AI Assistant for DDJC (Dalit Dignity & Justice Centre). Your role is to help visitors by answering questions about:

- DDJC and its mission/vision
- Legal Rights, Constitution, SC/ST Act, FIR process, Legal Aid
- Government Schemes, Human Rights, Women Rights, Child Rights
- Digital Awareness, NGO activities, Contact information
- Website pages, Volunteer and Donation information

IMPORTANT RULES:
1. If users ask unrelated questions like "Who won IPL?", "Write Python code", "Tell me a joke", politely respond: "I am DDJC's AI Assistant and currently answer questions related to DDJC, legal awareness, constitutional rights, government schemes, and our services."
2. NEVER generate harmful legal advice. Always encourage users to contact qualified lawyers for case-specific guidance.
3. Reply in the same language as the user:
   - If user writes Hindi, reply in Hindi
   - If user writes English, reply in English
   - If user mixes both, reply naturally in Hinglish
4. Keep responses helpful, empathetic, and encouraging.
5. Be concise but informative.`;

function detectLanguage(message: string): "en" | "hi" | "hinglish" {
  const hindiRegex = /[\u0900-\u097F]/;
  const hasHindi = hindiRegex.test(message);
  if (!hasHindi) return "en";
  const hindiWords = ["क्या", "है", "में", "का", "की", "के", "से", "और", "यह", "मैं", "आप", "हम", "बताइए", "कैसे", "कब", "कहां", "क्यों", "कौन"];
  const lowerMessage = message.toLowerCase();
  const hindiWordCount = hindiWords.filter((w) => lowerMessage.includes(w)).length;
  return hindiWordCount >= 2 ? "hi" : "hinglish";
}

function looksUnrelated(message: string): boolean {
  const lower = message.toLowerCase();
  const unrelatedKeywords = [
    "ipl", "cricket", "football", "movie", "song", "joke",
    "python", "javascript", "code", "programming",
    "weather", "recipe", "game"
  ];
  return unrelatedKeywords.some((keyword) => lower.includes(keyword));
}

function getFallbackReply(message: string, language: string): string {
  const fallbackEn =
    "I am DDJC's AI Assistant and currently answer questions related to DDJC, legal awareness, constitutional rights, government schemes, and our services.";
  const fallbackHi =
    "मैं DDJC का AI असिस्टेंट हूं और वर्तमान में DDJC, कानूनी जागरूकता, संवैधानिक अधिकार, सरकारी योजनाओं और हमारी सेवाओं से संबंधित प्रश्नों का उत्तर देता हूं।";
  if (language === "hi") return fallbackHi;
  return fallbackEn;
}

export async function POST(request: Request) {
  try {
    const body: ChatRequest = await request.json();
    const { message, history } = body;

    const trimmed = String(message || "").trim();
    if (!trimmed) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }
    if (trimmed.length > 2000) {
      return NextResponse.json({ error: "Message too long" }, { status: 400 });
    }

    const language = detectLanguage(trimmed);
    const isUnrelated = looksUnrelated(trimmed);

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey });

    const recentHistory: Content[] = history.slice(-10).map((m) => ({
      role: m.role,
      parts: [{ text: m.content }],
    }));

    let reply = "";
    try {
      if (isUnrelated) {
        reply = getFallbackReply(trimmed, language);
      } else {
        const result = await ai.models.generateContentStream({
          model: "gemini-2.5-flash",
          contents: [...recentHistory, { role: "user" as const, parts: [{ text: trimmed }] }],
          config: {
            systemInstruction: SYSTEM_PROMPT,
          },
        });

        for await (const chunk of result) {
          const text = chunk.text;
          if (text) reply += text;
        }
        if (!reply.trim()) {
          reply = getFallbackReply(trimmed, language);
        }
      }
    } catch (geminiError: unknown) {
      console.error("Gemini error:", geminiError);
      const errorMessage =
        language === "hi"
          ? "क्षमा करें, मैं अभी उपलब्ध नहीं हूं। कृपया बाद में पुनः प्रयास करें या हमें संपर्क करें।"
          : "Sorry, I'm temporarily unavailable. Please try again later or contact us directly.";
      return NextResponse.json({ reply: errorMessage }, { status: 200 });
    }

    const response: ChatResponse = { reply };
    return NextResponse.json(response);
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ error: "Failed to process message" }, { status: 500 });
  }
}
