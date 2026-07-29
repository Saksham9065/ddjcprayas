import { NextResponse } from "next/server";
import { connectToDatabase } from "@/utils/db";
import { JoinApplication } from "@/models/JoinApplication";

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
      occupation,
      joinType,
      workMode,
      experience,
      position,
      resume,
      university,
      field,
      statement,
    } = body;

    let inferredJoinType = "Volunteer";
    if (experience || position) {
      inferredJoinType = "Career";
    } else if (university || field) {
      inferredJoinType = "Internship";
    } else if (joinType) {
      inferredJoinType = String(joinType).trim();
    }

    const cleanedPayload = {
      fullName: String(fullName || "").trim(),
      fatherHusbandName: String(fatherHusbandName || "").trim(),
      age: age ? Number(age) : undefined,
      category: String(category || "").trim(),
      gender: String(gender || "").trim(),
      education: String(education || "").trim(),
      mobile: String(mobile || "").trim(),
      email: String(email || "").trim(),
      address: String(address || "").trim(),
      occupation: String(occupation || "").trim(),
      joinType: inferredJoinType,
      workMode: String(workMode || "").trim() || undefined,
      statement: String(statement || "").trim() || undefined,
      experience: String(experience || "").trim() || undefined,
      position: String(position || "").trim() || undefined,
      resume: String(resume || "").trim() || undefined,
      university: String(university || "").trim() || undefined,
      field: String(field || "").trim() || undefined,
    };

    if (!cleanedPayload.fullName || !cleanedPayload.mobile) {
      return NextResponse.json(
        { error: "Please fill in the required fields" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const application = await JoinApplication.create(cleanedPayload);

    return NextResponse.json({
      success: true,
      message: "Application received successfully",
      applicationId: application._id.toString(),
    });
  } catch (error) {
    console.error("Join application error:", error);
    return NextResponse.json(
      { error: "Failed to save application" },
      { status: 500 }
    );
  }
}
