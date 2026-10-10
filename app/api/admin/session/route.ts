import { NextResponse } from "next/server";
import { verifyAdminSession } from "@/lib/admin-session";

export async function GET(request: Request) {
  return NextResponse.json({ authenticated: verifyAdminSession(request) }, {
    headers: { "Cache-Control": "no-store" },
  });
}
