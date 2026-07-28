import { NextResponse } from "next/server";
import { JoinApplication as JoinApplicationModel } from "@/models/JoinApplication";
import { connectToDatabase } from "@/utils/db";

export async function GET() {
  try {
    await connectToDatabase();
    const applications = await JoinApplicationModel.find({}).sort({ createdAt: -1 }).lean();

    return NextResponse.json(
      applications.map((item) => ({
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
        status: "Pending",
        createdAt: item.createdAt?.toISOString?.() || "",
      }))
    );
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
      status,
      createdAt: updatedApplication.createdAt?.toISOString?.() || "",
    });
  } catch (error) {
    console.error("Admin join applications update error:", error);
    return NextResponse.json({ error: "Failed to update application" }, { status: 500 });
  }
}
