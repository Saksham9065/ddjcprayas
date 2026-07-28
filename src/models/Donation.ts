import { Schema, model, models, type Document } from "mongoose";

export interface IDonation extends Document {
  donorName: string;
  phone: string;
  email: string;
  screenshotPath?: string | null;
}

const donationSchema = new Schema<IDonation>(
  {
    donorName: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    screenshotPath: { type: String, default: null },
  },
  {
    timestamps: true,
  }
);

export const Donation =
  models.Donation || model<IDonation>("Donation", donationSchema);
