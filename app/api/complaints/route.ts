import { NextResponse } from "next/server";
import { connectToDatabase } from "@/utils/db";
import { Complaint } from "@/models/Complaint";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      phone,
      district,
      tehsil,
      category,
      incidentDate,
      description,
    } = body;

    const cleanedPayload = {
      fullName: String(fullName || "").trim(),
      phone: String(phone || "").trim(),
      district: String(district || "").trim(),
      tehsil: String(tehsil || "").trim(),
      category: String(category || "").trim(),
      incidentDate: String(incidentDate || "").trim(),
      description: String(description || "").trim(),
    };

    if (!cleanedPayload.fullName || !cleanedPayload.phone || !cleanedPayload.district || !cleanedPayload.tehsil || !cleanedPayload.category || !cleanedPayload.incidentDate || !cleanedPayload.description) {
      return NextResponse.json(
        { error: "Please fill in all required fields" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const complaint = await Complaint.create({
      ...cleanedPayload,
      status: "Pending Review",
    });

    return NextResponse.json({
      success: true,
      message: "Complaint registered successfully",
      complaintId: complaint._id.toString(),
    });
  } catch (error) {
    console.error("Complaint submission error:", error);
    return NextResponse.json(
      { error: "Failed to save complaint" },
      { status: 500 }
    );
  }
}
