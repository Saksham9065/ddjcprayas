import { NextResponse } from "next/server";
import { ChatConversation } from "@/models/Chat";
import { connectToDatabase } from "@/utils/db";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ error: "Missing conversation id" }, { status: 400 });
    }

    await connectToDatabase();
    const conversation = await ChatConversation.findById(id).lean();

    if (!conversation) {
      return NextResponse.json({ error: "Conversation not found" }, { status: 404 });
    }

    if (!conversation.isRead) {
      await ChatConversation.findByIdAndUpdate(id, { isRead: true });
    }

    return NextResponse.json({
      id: conversation._id?.toString(),
      sessionId: conversation.sessionId,
      messages: conversation.messages.map((m) => ({
        role: m.role,
        content: m.content,
        timestamp: m.timestamp?.toISOString?.() || "",
      })),
      language: conversation.language,
      isRead: true,
      status: conversation.status,
      startedAt: conversation.startedAt?.toISOString?.() || "",
      endedAt: conversation.endedAt?.toISOString?.() || "",
      createdAt: conversation.createdAt?.toISOString?.() || "",
      updatedAt: conversation.updatedAt?.toISOString?.() || "",
    });
  } catch (error) {
    console.error("Admin chat detail fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch chat details" }, { status: 500 });
  }
}
