import { NextResponse } from "next/server";
import { Complaint as ComplaintModel } from "@/models/Complaint";
import { connectToDatabase } from "@/utils/db";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") || "";
    const status = searchParams.get("status") || "";
    const category = searchParams.get("category") || "";
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const sortOrder = searchParams.get("sort") === "asc" ? 1 : -1;

    await connectToDatabase();

    const query: Record<string, unknown> = {};

    if (search) {
      query.$or = [
        { fullName: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
        { district: { $regex: search, $options: "i" } },
        { tehsil: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    if (status) {
      query.status = status;
    }

    if (category) {
      query.category = category;
    }

    const total = await ComplaintModel.countDocuments(query);
    const complaints = await ComplaintModel.find(query)
      .sort({ createdAt: sortOrder })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

    return NextResponse.json({
      data: complaints.map((item) => ({
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
      })),
      total,
      page,
      totalPages: Math.ceil(total / limit) || 1,
    });
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

export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ error: "Missing complaint id" }, { status: 400 });
    }

    await connectToDatabase();

    const deleted = await ComplaintModel.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({ error: "Complaint not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Complaint deleted successfully" });
  } catch (error) {
    console.error("Admin complaint delete error:", error);
    return NextResponse.json({ error: "Failed to delete complaint" }, { status: 500 });
  }
}
