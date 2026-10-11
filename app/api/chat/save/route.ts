import { NextResponse } from "next/server";
import { ChatConversation, IChatMessage } from "@/models/Chat";
import { connectToDatabase } from "@/utils/db";
import { randomUUID } from "crypto";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { sessionId, messages, language, status, ipAddress, userAgent } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Messages are required" }, { status: 400 });
    }

    await connectToDatabase();

    const sid = sessionId || randomUUID();
    const formattedMessages: IChatMessage[] = messages.map((m) => ({
      role: m.role,
      content: String(m.content || "").trim(),
      timestamp: m.timestamp ? new Date(m.timestamp) : new Date(),
    }));

    const conversation = await ChatConversation.findOneAndUpdate(
      { sessionId: sid },
      {
        $setOnInsert: {
          sessionId: sid,
          startedAt: formattedMessages[0]?.timestamp || new Date(),
          ipAddress,
          userAgent,
        },
        $set: {
          messages: formattedMessages,
          language,
          status: status || "Active",
          isRead: false,
          updatedAt: new Date(),
        },
      },
      { upsert: true, new: true }
    ).lean();

    return NextResponse.json({
      success: true,
      sessionId: sid,
      id: conversation._id?.toString(),
      messageCount: conversation.messages?.length || formattedMessages.length,
    });
  } catch (error) {
    console.error("Chat save error:", error);
    return NextResponse.json({ error: "Failed to save chat" }, { status: 500 });
  }
}
