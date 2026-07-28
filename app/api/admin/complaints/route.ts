import { NextResponse } from "next/server";
import { Complaint as ComplaintModel } from "@/models/Complaint";
import { connectToDatabase } from "@/utils/db";

export async function GET() {
  try {
    await connectToDatabase();
    const complaints = await ComplaintModel.find({}).sort({ createdAt: -1 }).lean();

    return NextResponse.json(
      complaints.map((item) => ({
        id: item._id?.toString() || "",
        fullName: item.fullName,
        phone: item.phone,
        district: item.district,
        tehsil: item.tehsil,
        category: item.category,
        incidentDate: item.incidentDate,
        description: item.description,
        status: item.status,
        createdAt: item.createdAt?.toISOString?.() || "",
      }))
    );
  } catch (error) {
    console.error("Admin complaints fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch complaints" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await connectToDatabase();
    const updatedComplaint = await ComplaintModel.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    ).lean();

    if (!updatedComplaint) {
      return NextResponse.json({ error: "Complaint not found" }, { status: 404 });
    }

    return NextResponse.json({
      id: updatedComplaint._id?.toString(),
      fullName: updatedComplaint.fullName,
      phone: updatedComplaint.phone,
      district: updatedComplaint.district,
      tehsil: updatedComplaint.tehsil,
      category: updatedComplaint.category,
      incidentDate: updatedComplaint.incidentDate,
      description: updatedComplaint.description,
      status: updatedComplaint.status,
      createdAt: updatedComplaint.createdAt?.toISOString?.() || "",
    });
  } catch (error) {
    console.error("Admin complaints update error:", error);
    return NextResponse.json({ error: "Failed to update complaint" }, { status: 500 });
  }
}
