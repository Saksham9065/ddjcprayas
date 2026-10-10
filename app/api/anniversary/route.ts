import { NextResponse } from "next/server";
import { AnniversarySettings } from "@/models/AnniversarySettings";
import { connectToDatabase } from "@/utils/db";

export const dynamic = "force-dynamic";

const defaults = {
  enabled: false,
  title: "Celebrating Our Journey",
  message: "Thank you for being part of the DDJC journey.",
  delaySeconds: 3,
};

export async function GET() {
  try {
    await connectToDatabase();
    const settings = await AnniversarySettings.findOne({ key: "homepage" }).lean();
    return NextResponse.json(settings ? {
      enabled: settings.enabled,
      title: settings.title,
      message: settings.message,
      delaySeconds: settings.delaySeconds,
    } : defaults, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    console.error("Anniversary settings fetch error:", error);
    return NextResponse.json(defaults, {
      headers: { "Cache-Control": "no-store" },
    });
  }
}
