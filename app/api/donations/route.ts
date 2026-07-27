import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const UPLOADS_DIR = path.join(process.cwd(), "public", "uploads", "donations");

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const donorName = formData.get("donorName") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const amount = formData.get("amount") as string;
    const screenshot = formData.get("screenshot") as File | null;

    if (!donorName || !phone || !email || !amount) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    let screenshotPath: string | null = null;

    if (screenshot && screenshot instanceof File) {
      if (!fs.existsSync(UPLOADS_DIR)) {
        fs.mkdirSync(UPLOADS_DIR, { recursive: true });
      }

      const bytes = await screenshot.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const timestamp = Date.now();
      const ext = path.extname(screenshot.name) || ".png";
      const filename = `${timestamp}-${donorName.replace(/\s+/g, "-")}${ext}`;
      const filepath = path.join(UPLOADS_DIR, filename);

      fs.writeFileSync(filepath, buffer);
      screenshotPath = `/uploads/donations/${filename}`;
    }

    return NextResponse.json({
      success: true,
      message: "Donation submitted successfully",
      data: {
        donorName,
        phone,
        email,
        amount,
        screenshotPath,
      },
    });
  } catch (error) {
    console.error("Donation submission error:", error);
    return NextResponse.json(
      { error: "Failed to process donation" },
      { status: 500 }
    );
  }
}