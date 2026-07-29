import { NextResponse } from "next/server";
import { connectToDatabase } from "@/utils/db";
import { Contact } from "@/models/Contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      fatherHusbandName,
      age,
      category,
      gender,
      education,
      mobile,
      email,
      address,
      incidentDescription,
      helpType,
    } = body;

    const cleanedPayload = {
      fullName: String(fullName || "").trim(),
      fatherHusbandName: String(fatherHusbandName || "").trim(),
      age: String(age || "").trim() || undefined,
      category: String(category || "").trim() || undefined,
      gender: String(gender || "").trim() || undefined,
      education: String(education || "").trim() || undefined,
      mobile: String(mobile || "").trim(),
      email: String(email || "").trim() || undefined,
      address: String(address || "").trim() || undefined,
      incidentDescription: String(incidentDescription || "").trim() || undefined,
      helpType: String(helpType || "").trim() || undefined,
    };

    if (!cleanedPayload.fullName || !cleanedPayload.fatherHusbandName || !cleanedPayload.mobile) {
      return NextResponse.json(
        { error: "Please fill in all required fields" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const contact = await Contact.create(cleanedPayload);

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
      contactId: contact._id.toString(),
    });
  } catch (error) {
    console.error("Contact submission error:", error);
    return NextResponse.json(
      { error: "Failed to save contact submission" },
      { status: 500 }
    );
  }
}
