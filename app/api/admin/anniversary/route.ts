import { NextResponse } from "next/server";
import { AnniversarySettings } from "@/models/AnniversarySettings";
import { connectToDatabase } from "@/utils/db";
import { verifyAdminSession } from "@/lib/admin-session";

const defaults = {
  enabled: false,
  title: "Celebrating Our Journey",
  message: "Thank you for being part of the DDJC journey.",
  delaySeconds: 3,
};

export async function GET(request: Request) {
  if (!verifyAdminSession(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    await connectToDatabase();
    const settings = await AnniversarySettings.findOne({ key: "homepage" }).lean();
    return NextResponse.json(settings ? {
      enabled: settings.enabled,
      title: settings.title,
      message: settings.message,
      delaySeconds: settings.delaySeconds,
    } : defaults);
  } catch (error) {
    console.error("Admin anniversary settings fetch error:", error);
    return NextResponse.json({ error: "Unable to load settings" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  if (!verifyAdminSession(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const body: unknown = await request.json();
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid settings payload" }, { status: 400 });
    }
    const input = body as Record<string, unknown>;
    if (typeof input.enabled !== "boolean" ||
        typeof input.title !== "string" || input.title.trim().length < 1 || input.title.length > 120 ||
        typeof input.message !== "string" || input.message.trim().length < 1 || input.message.length > 2000 ||
        typeof input.delaySeconds !== "number" || !Number.isInteger(input.delaySeconds) ||
        input.delaySeconds < 0 || input.delaySeconds > 60) {
      return NextResponse.json({ error: "Please provide a valid title, message, enabled flag, and delay from 0–60 seconds." }, { status: 400 });
    }

    await connectToDatabase();
    const settings = await AnniversarySettings.findOneAndUpdate(
      { key: "homepage" },
      {
        $set: {
          enabled: input.enabled,
          title: input.title.trim(),
          message: input.message.trim(),
          delaySeconds: input.delaySeconds,
        },
        $setOnInsert: { key: "homepage" },
      },
      { new: true, upsert: true, runValidators: true, setDefaultsOnInsert: true }
    ).lean();

    return NextResponse.json({
      enabled: settings?.enabled ?? defaults.enabled,
      title: settings?.title ?? defaults.title,
      message: settings?.message ?? defaults.message,
      delaySeconds: settings?.delaySeconds ?? defaults.delaySeconds,
    });
  } catch (error) {
    console.error("Admin anniversary settings save error:", error);
    return NextResponse.json({ error: "Unable to save settings" }, { status: 500 });
  }
}
