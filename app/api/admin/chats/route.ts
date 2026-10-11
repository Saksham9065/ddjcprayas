import { NextResponse } from "next/server";
import { ChatConversation } from "@/models/Chat";
import { connectToDatabase } from "@/utils/db";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") || "";
    const status = searchParams.get("status") || "";
    const isRead = searchParams.get("isRead");
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const sortOrder = searchParams.get("sort") === "asc" ? 1 : -1;

    await connectToDatabase();

    const query: Record<string, unknown> = {};

    if (search) {
      query.$or = [
        { sessionId: { $regex: search, $options: "i" } },
        { "messages.content": { $regex: search, $options: "i" } },
      ];
    }

    if (status) {
      query.status = status;
    }

    if (isRead === "true") {
      query.isRead = true;
    } else if (isRead === "false") {
      query.isRead = false;
    }

    const total = await ChatConversation.countDocuments(query);
    const conversations = await ChatConversation.find(query)
      .sort({ updatedAt: sortOrder, createdAt: sortOrder })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

    return NextResponse.json(
      {
        data: conversations.map((item) => ({
          id: item._id?.toString() || "",
          sessionId: item.sessionId,
          messageCount: item.messages?.length || 0,
          lastMessage: item.messages?.[item.messages.length - 1]?.content || "",
          firstMessage: item.messages?.[0]?.content || "",
          language: item.language,
          isRead: item.isRead,
          status: item.status || "Active",
          startedAt: item.startedAt?.toISOString?.() || "",
          endedAt: item.endedAt?.toISOString?.() || "",
          updatedAt: item.updatedAt?.toISOString?.() || "",
          createdAt: item.createdAt?.toISOString?.() || "",
        })),
        total,
        page,
        totalPages: Math.ceil(total / limit) || 1,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60",
        },
      }
    );
  } catch (error) {
    console.error("Admin chats fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch chats" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status, isRead } = body;

    if (!id) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const updateData: Record<string, unknown> = {};
    if (status) updateData.status = status;
    if (typeof isRead === "boolean") updateData.isRead = isRead;

    await connectToDatabase();
    const updatedConversation = await ChatConversation.findByIdAndUpdate(id, updateData, {
      new: true,
    }).lean();

    if (!updatedConversation) {
      return NextResponse.json({ error: "Conversation not found" }, { status: 404 });
    }

    return NextResponse.json({
      id: updatedConversation._id?.toString(),
      status: updatedConversation.status,
      isRead: updatedConversation.isRead,
    });
  } catch (error) {
    console.error("Admin chats update error:", error);
    return NextResponse.json({ error: "Failed to update chat" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ error: "Missing conversation id" }, { status: 400 });
    }

    await connectToDatabase();

    const deleted = await ChatConversation.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({ error: "Conversation not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Conversation deleted successfully" });
  } catch (error) {
    console.error("Admin chat delete error:", error);
    return NextResponse.json({ error: "Failed to delete chat" }, { status: 500 });
  }
}
