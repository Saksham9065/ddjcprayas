import { NextResponse } from "next/server";
import { connectToDatabase } from "@/utils/db";
import { Donation } from "@/models/Donation";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const donorName = String(formData.get("donorName") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();

    if (!donorName || !phone || !email) {
      return NextResponse.json(
        { error: "Please fill in the donor details" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const donation = await Donation.create({
      donorName,
      phone,
      email,
    });

    return NextResponse.json({
      success: true,
      message: "Donation submitted successfully",
      data: {
        donorName,
        phone,
        email,
        donationId: donation._id.toString(),
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