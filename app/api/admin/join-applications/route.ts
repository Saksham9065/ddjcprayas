import { NextResponse } from "next/server";
import { JoinApplication as JoinApplicationModel } from "@/models/JoinApplication";
import { connectToDatabase } from "@/utils/db";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") || "";
    const status = searchParams.get("status") || "";
    const joinType = searchParams.get("joinType") || "";
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
        { education: { $regex: search, $options: "i" } },
        { address: { $regex: search, $options: "i" } },
      ];
    }

    if (status) {
      query.status = status;
    }

    if (joinType) {
      query.joinType = joinType;
    }

    const total = await JoinApplicationModel.countDocuments(query);
    const applications = await JoinApplicationModel.find(query)
      .sort({ createdAt: sortOrder })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

    return NextResponse.json({
      data: applications.map((item) => ({
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
        occupation: item.occupation,
        joinType: item.joinType,
        workMode: item.workMode,
        statement: item.statement,
        experience: item.experience,
        position: item.position,
        resume: item.resume,
        university: item.university,
        field: item.field,
        status: "Pending",
        createdAt: item.createdAt?.toISOString?.() || "",
      })),
      total,
      page,
      totalPages: Math.ceil(total / limit) || 1,
    });
  } catch (error) {
    console.error("Admin join applications fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch applications" }, { status: 500 });
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
    const updatedApplication = await JoinApplicationModel.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    ).lean();

    if (!updatedApplication) {
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }

    return NextResponse.json({
      id: updatedApplication._id?.toString(),
      fullName: updatedApplication.fullName,
      fatherHusbandName: updatedApplication.fatherHusbandName,
      age: updatedApplication.age,
      category: updatedApplication.category,
      gender: updatedApplication.gender,
      education: updatedApplication.education,
      mobile: updatedApplication.mobile,
      email: updatedApplication.email,
      address: updatedApplication.address,
      occupation: updatedApplication.occupation,
      joinType: updatedApplication.joinType,
      workMode: updatedApplication.workMode,
      statement: updatedApplication.statement,
      experience: updatedApplication.experience,
      position: updatedApplication.position,
      resume: updatedApplication.resume,
      university: updatedApplication.university,
      field: updatedApplication.field,
      status,
      createdAt: updatedApplication.createdAt?.toISOString?.() || "",
    });
  } catch (error) {
    console.error("Admin join applications update error:", error);
    return NextResponse.json({ error: "Failed to update application" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ error: "Missing application id" }, { status: 400 });
    }

    await connectToDatabase();

    const deleted = await JoinApplicationModel.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Application deleted successfully" });
  } catch (error) {
    console.error("Admin application delete error:", error);
    return NextResponse.json({ error: "Failed to delete application" }, { status: 500 });
  }
}
