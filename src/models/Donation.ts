import { Schema, model, models, type Document } from "mongoose";

export interface IDonation extends Document {
  donorName: string;
  phone: string;
  email: string;
  screenshotPath?: string | null;
  status: "Pending Verification" | "Verified" | "Rejected";
}

const donationSchema = new Schema<IDonation>(
  {
    donorName: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    screenshotPath: { type: String, default: null },
    status: {
      type: String,
      enum: ["Pending Verification", "Verified", "Rejected"],
      default: "Pending Verification",
    },
  },
  {
    timestamps: true,
  }
);

donationSchema.index({ createdAt: -1 });
donationSchema.index({ status: 1, createdAt: -1 });
donationSchema.index({
  donorName: "text",
  phone: "text",
  email: "text",
});

export const Donation =
  models.Donation || model<IDonation>("Donation", donationSchema);
