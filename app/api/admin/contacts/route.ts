import { NextResponse } from "next/server";
import { Contact as ContactModel } from "@/models/Contact";
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
        { fullName: { $regex: search, $options: "i" } },
        { mobile: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { address: { $regex: search, $options: "i" } },
      ];
    }

    if (status) {
      query.status = status;
    }

    const total = await ContactModel.countDocuments(query);
    const contacts = await ContactModel.find(query)
      .sort({ createdAt: sortOrder })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

    return NextResponse.json({
      data: contacts.map((item) => ({
        id: item._id?.toString() || "",
        fullName: item.fullName,
        fatherHusbandName: item.fatherHusbandName,
        age: item.age,
        category: item.category,
        gender: item.gender,
        education: item.education,
        mobile: item.mobile,
        email: item.email,
        address: item.address,
        incidentDescription: item.incidentDescription,
        helpType: item.helpType,
        status: item.status,
        isRead: item.isRead,
        createdAt: item.createdAt?.toISOString?.() || "",
      })),
      total,
      page,
      totalPages: Math.ceil(total / limit) || 1,
    });
  } catch (error) {
    console.error("Admin contacts fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch contacts" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json({ error: "Missing contact id" }, { status: 400 });
    }

    await connectToDatabase();

    const updatedContact = await ContactModel.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true }
    ).lean();

    if (!updatedContact) {
      return NextResponse.json({ error: "Contact not found" }, { status: 404 });
    }

    return NextResponse.json({
      id: updatedContact._id?.toString(),
      fullName: updatedContact.fullName,
      fatherHusbandName: updatedContact.fatherHusbandName,
      age: updatedContact.age,
      category: updatedContact.category,
      gender: updatedContact.gender,
      education: updatedContact.education,
      mobile: updatedContact.mobile,
      email: updatedContact.email,
      address: updatedContact.address,
      incidentDescription: updatedContact.incidentDescription,
      helpType: updatedContact.helpType,
      status: updatedContact.status,
      isRead: updatedContact.isRead,
      createdAt: updatedContact.createdAt?.toISOString?.() || "",
    });
  } catch (error) {
    console.error("Admin contact update error:", error);
    return NextResponse.json({ error: "Failed to update contact" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ error: "Missing contact id" }, { status: 400 });
    }

    await connectToDatabase();

    const deleted = await ContactModel.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({ error: "Contact not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Contact deleted successfully" });
  } catch (error) {
    console.error("Admin contact delete error:", error);
    return NextResponse.json({ error: "Failed to delete contact" }, { status: 500 });
  }
}
