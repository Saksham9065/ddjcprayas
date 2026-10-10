import { NextResponse } from "next/server";
import { Contact as ContactModel } from "@/models/Contact";
import { Complaint as ComplaintModel } from "@/models/Complaint";
import { Donation as DonationModel } from "@/models/Donation";
import { JoinApplication as JoinApplicationModel } from "@/models/JoinApplication";
import { connectToDatabase } from "@/utils/db";

export async function GET() {
  try {
    await connectToDatabase();

    const [contactsTotal, complaintsTotal, donationsTotal, applications] = await Promise.all([
      ContactModel.countDocuments(),
      ComplaintModel.countDocuments(),
      DonationModel.countDocuments(),
      JoinApplicationModel.find({}, { joinType: 1 }).lean(),
    ]);

    const volunteerCount = applications.filter((a) => a.joinType === "Volunteer").length;
    const internshipCount = applications.filter((a) => a.joinType === "Internship").length;

    return NextResponse.json({
      contacts: contactsTotal,
      complaints: complaintsTotal,
      donations: donationsTotal,
      volunteers: volunteerCount,
      internships: internshipCount,
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=60',
      },
    });
  } catch (error) {
    console.error("Admin stats fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 });
  }
}