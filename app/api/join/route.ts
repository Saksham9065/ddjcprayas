import { NextResponse } from "next/server";

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
      statement,
    } = body;

    if (!fullName || !mobile || !joinType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Application received successfully",
      applicationId: `JOIN-${Date.now()}`,
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}