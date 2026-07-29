import { NextResponse } from "next/server";
import { ChatRequest, ChatResponse } from "@/types/chat";
import { GoogleGenAI, type Content } from "@google/genai";

const SYSTEM_PROMPT = `You are an AI Assistant for DDJC (Dalit Dignity & Justice Centre) in India. Your role is to help visitors by answering questions about DDJC's mission, vision, activities, legal awareness, and services. If users ask unrelated questions like sports, movies, jokes, or coding, politely decline and say you only answer questions related to DDJC, legal awareness, constitutional rights, government schemes, and their services. Never give harmful legal advice. Always encourage consulting a qualified lawyer for case-specific guidance. Reply in the same language the user uses: Hindi for Hindi, English for English, Hinglish for mixed.`;

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

const AVAILABLE_MODELS = [
  "gemini-flash-latest",
  "gemini-2.5-flash-lite",
  "gemini-2.5-flash",
] as const;

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function generateWithRetry(
  ai: GoogleGenAI,
  modelName: string,
  contents: Content[],
  systemInstruction: string,
  maxRetries = 2
): Promise<string> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`[Chat API] Trying model ${modelName} attempt ${attempt}/${maxRetries}`);
      const result = await ai.models.generateContentStream({
        model: modelName,
        contents,
        config: { systemInstruction },
      });

      let streamed = "";
      for await (const chunk of result) {
        const text = chunk.text;
        if (text) streamed += text;
      }

      if (streamed.trim()) {
        console.log(`[Chat API] Model ${modelName} succeeded on attempt ${attempt}`);
        return streamed;
      }
    } catch (error) {
      console.error(`[Chat API] Model ${modelName} attempt ${attempt} failed:`, error);
      if (attempt < maxRetries) {
        const waitMs = 500 * attempt;
        console.log(`[Chat API] Waiting ${waitMs}ms before retry...`);
        await sleep(waitMs);
      }
    }
  }
  throw new Error(`Model ${modelName} failed after ${maxRetries} attempts`);
}

export async function POST(request: Request) {
  const startTime = Date.now();
  console.log("[Chat API] Incoming request:", request.method, request.url);

  try {
    const body: ChatRequest = await request.json();
    const { message, history } = body;

    const trimmed = String(message || "").trim();
    console.log("[Chat API] User message:", trimmed);
    console.log("[Chat API] History length:", history?.length ?? 0);

    if (!trimmed) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }
    if (trimmed.length > 2000) {
      return NextResponse.json({ error: "Message too long" }, { status: 400 });
    }

    const language = detectLanguage(trimmed);
    const isUnrelated = looksUnrelated(trimmed);

    const apiKey = process.env.GEMINI_API_KEY;
    console.log("[Chat API] GEMINI_API_KEY present:", !!apiKey);
    if (!apiKey) {
      console.error("[Chat API] Missing GEMINI_API_KEY");
      return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey });
    const recentHistory: Content[] = history.slice(-10).map((m) => ({
      role: m.role,
      parts: [{ text: m.content }],
    }));

    let reply = "";
    let usedModel = "";

    if (isUnrelated) {
      reply = getFallbackReply(trimmed, language);
      usedModel = "fallback-filter";
    } else {
      let lastError: unknown = null;
      for (const modelName of AVAILABLE_MODELS) {
        try {
          reply = await generateWithRetry(ai, modelName, [
            ...recentHistory,
            { role: "user" as const, parts: [{ text: trimmed }] },
          ], SYSTEM_PROMPT);
          usedModel = modelName;
          break;
        } catch (modelError) {
          lastError = modelError;
          console.error(`[Chat API] Model ${modelName} unavailable:`, modelError);
        }
      }

      if (!reply) {
        const errorMessage =
          language === "hi"
            ? "क्षमा करें, मैं अभी उपलब्ध नहीं हूं। कृपया बाद में पुनः प्रयास करें या हमें संपर्क करें।"
            : "Sorry, I'm temporarily unavailable. Please try again later or contact us directly.";
        console.error("[Chat API] All models failed. Last error:", lastError);
        return NextResponse.json({ reply: errorMessage, debug: { usedModel, lastError: String(lastError) } }, { status: 200 });
      }
    }

    const duration = Date.now() - startTime;
    console.log("[Chat API] Success - model:", usedModel, "duration:", duration, "ms");

    const response: ChatResponse = { reply };
    return NextResponse.json(response);
  } catch (error) {
    const duration = Date.now() - startTime;
    console.error("[Chat API] Request failed after", duration, "ms:", error);
    console.error("[Chat API] Stack:", error instanceof Error ? error.stack : "N/A");
    return NextResponse.json({ error: "Failed to process message" }, { status: 500 });
  }
}
