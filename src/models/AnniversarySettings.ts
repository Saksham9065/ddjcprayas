import mongoose, { Schema, type Model } from "mongoose";

export interface AnniversarySettingsDocument {
  key: string;
  enabled: boolean;
  title: string;
  message: string;
  delaySeconds: number;
  updatedAt?: Date;
}

const AnniversarySettingsSchema = new Schema<AnniversarySettingsDocument>(
  {
    key: { type: String, required: true, unique: true, default: "homepage" },
    enabled: { type: Boolean, default: false },
    title: { type: String, default: "Celebrating Our Journey" },
    message: { type: String, default: "Thank you for being part of the DDJC journey." },
    delaySeconds: { type: Number, min: 0, max: 60, default: 3 },
  },
  { timestamps: true }
);

export const AnniversarySettings: Model<AnniversarySettingsDocument> =
  (mongoose.models.AnniversarySettings as Model<AnniversarySettingsDocument>) ||
  mongoose.model<AnniversarySettingsDocument>("AnniversarySettings", AnniversarySettingsSchema);
