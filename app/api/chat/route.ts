import { NextResponse } from "next/server";
import { ChatRequest, ChatResponse } from "@/types/chat";
import { GoogleGenAI, type Content } from "@google/genai";

const SYSTEM_PROMPT = `You are the official AI Assistant of the Dalit Dignity & Justice Centre (DDJC), a non-profit organization dedicated to promoting justice, equality, constitutional rights, legal awareness, and social empowerment.

Your purpose is to assist visitors by answering only questions related to DDJC and its areas of work.

You may answer questions about:
• DDJC (mission, vision, objectives, services)
• Legal rights and constitutional rights in India
• Fundamental Rights and Fundamental Duties
• SC/ST (Prevention of Atrocities) Act
• FIR filing process
• Police complaints and legal procedures
• Free legal aid and legal awareness
• Human rights
• Women's rights
• Child rights
• Senior citizen rights
• Government welfare schemes
• Social justice
• Education rights
• RTI (Right to Information)
• Digital safety and cyber awareness
• NGO activities and campaigns
• Volunteer opportunities
• Donations
• Contact information
• Website content
• Frequently Asked Questions

Response Rules:
1. If the question is related to DDJC or the topics above, provide a clear, accurate, friendly, and easy-to-understand answer.
2. If the question is about legal matters, explain general legal information only. Do not provide personalized legal advice. Encourage users to consult a qualified lawyer or the appropriate government authority for case-specific guidance.
3. If the question is unrelated to DDJC's purpose (for example: movies, cricket, coding, gaming, celebrities, recipes, mathematics, travel, jokes, general AI questions, etc.), politely decline.
4. Never invent information.
5. If you do not know the answer, say so honestly and suggest contacting DDJC directly.

Language Rules:
• If the user writes in Hindi, reply in Hindi.
• If the user writes in English, reply in English.
• If the user mixes Hindi and English, reply naturally in Hinglish.

Tone:
• Professional
• Respectful
• Helpful
• Neutral
• Clear
• Supportive

Always prioritize factual accuracy and user safety.`;

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
    "weather", "recipe", "game", "actor", "actress",
    "celebrity", "politics", "modi", "rahul", "bjp", "congress",
    "gaming", "pubg", "valorant", "anime", "netflix",
    "mathematics", "maths", "science", "physics", "chemistry",
    "travel", "hotel", "flight", "tourism", "shayari",
    "love", "relationship", "girlfriend", "boyfriend",
    "stock market", "trading", "crypto", "bitcoin",
    "general ai", "openai", "chatgpt", "claude"
  ];
  return unrelatedKeywords.some((keyword) => lower.includes(keyword));
}

function getFallbackReply(message: string, language: string): string {
  const fallbackEn =
    "Thank you for your question. I am DDJC's AI Assistant and my role is to provide information related to DDJC, legal awareness, constitutional rights, government welfare schemes, and social justice. I'm unable to assist with topics outside these areas. If you have a question related to DDJC or legal awareness, I'll be happy to help.";
  const fallbackHi =
    "आपके प्रश्न के लिए धन्यवाद। मैं DDJC का AI असिस्टेंट हूं और मेरा कार्य DDJC, कानूनी जागरूकता, संवैधानिक अधिकार, सरकारी कल्याण योजनाओं और सामाजिक न्याय से संबंधित जानकारी प्रदान करना है। मैं इन क्षेत्रों से बाहर के विषयों में सहायता करने में असमर्थ हूं। यदि आपके पास DDJC या कानूनी जागरूकता से संबंधित कोई प्रश्न है, तो मैं सहायता करने में खुशी महसूस करूंगा।";
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
        return streamed;
      }
    } catch {
      if (attempt < maxRetries) {
        const waitMs = 500 * attempt;
        await sleep(waitMs);
      }
    }
  }
  throw new Error(`Model ${modelName} failed after ${maxRetries} attempts`);
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
        }
      }

      if (!reply) {
        const errorMessage =
          language === "hi"
            ? "क्षमा करें, मैं अभी उपलब्ध नहीं हूं। कृपया बाद में पुनः प्रयास करें या हमें संपर्क करें।"
            : "Thank you for your question. I am DDJC's AI Assistant and my role is to provide information related to DDJC, legal awareness, constitutional rights, government welfare schemes, and social justice. I'm unable to assist with this topic right now. If you have a question related to DDJC or legal awareness, I'll be happy to help.";
        return NextResponse.json({ reply: errorMessage, debug: { usedModel, lastError: String(lastError) } }, { status: 200 });
      }
    }

    const response: ChatResponse = { reply };
    return NextResponse.json(response);
  } catch {
    return NextResponse.json({ error: "Failed to process message" }, { status: 500 });
  }
}
