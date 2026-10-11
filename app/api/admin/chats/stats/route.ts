import { NextResponse } from "next/server";
import { ChatConversation } from "@/models/Chat";
import { connectToDatabase } from "@/utils/db";

export async function GET() {
  try {
    await connectToDatabase();

    const total = await ChatConversation.countDocuments();
    const unread = await ChatConversation.countDocuments({ isRead: false });
    const active = await ChatConversation.countDocuments({ status: "Active" });
    const resolved = await ChatConversation.countDocuments({ status: "Resolved" });
    const archived = await ChatConversation.countDocuments({ status: "Archived" });

    return NextResponse.json(
      {
        total,
        unread,
        active,
        resolved,
        archived,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60",
        },
      }
    );
  } catch (error) {
    console.error("Admin chat stats error:", error);
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 });
  }
}
