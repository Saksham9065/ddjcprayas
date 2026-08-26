import { NextResponse } from "next/server";
import { Donation as DonationModel } from "@/models/Donation";
import { connectToDatabase } from "@/utils/db";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") || "";
    const status = searchParams.get("status") || "";
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const sortOrder = searchParams.get("sort") === "asc" ? 1 : -1;

    await connectToDatabase();

    const query: Record<string, unknown> = {};

    if (search) {
      query.$or = [
        { donorName: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ];
    }

    if (status) {
      query.status = status;
    }

    const total = await DonationModel.countDocuments(query);
    const donations = await DonationModel.find(query)
      .sort({ createdAt: sortOrder })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

    return NextResponse.json({
      data: donations.map((item) => ({
        id: item._id?.toString() || "",
        donorName: item.donorName,
        phone: item.phone,
        email: item.email,
        status: item.status,
        createdAt: item.createdAt?.toISOString?.() || "",
      })),
      total,
      page,
      totalPages: Math.ceil(total / limit) || 1,
    });
  } catch (error) {
    console.error("Admin donations fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch donations" }, { status: 500 });
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

    const updatedDonation = await DonationModel.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    ).lean();

    if (!updatedDonation) {
      return NextResponse.json({ error: "Donation not found" }, { status: 404 });
    }

    return NextResponse.json({
      id: updatedDonation._id?.toString(),
      donorName: updatedDonation.donorName,
      phone: updatedDonation.phone,
      email: updatedDonation.email,
      status: updatedDonation.status,
      createdAt: updatedDonation.createdAt?.toISOString?.() || "",
    });
  } catch (error) {
    console.error("Admin donation update error:", error);
    return NextResponse.json({ error: "Failed to update donation" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ error: "Missing donation id" }, { status: 400 });
    }

    await connectToDatabase();

    const deleted = await DonationModel.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({ error: "Donation not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Donation deleted successfully" });
  } catch (error) {
    console.error("Admin donation delete error:", error);
    return NextResponse.json({ error: "Failed to delete donation" }, { status: 500 });
  }
}
