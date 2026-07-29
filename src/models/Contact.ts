import { Schema, model, models, type Document } from "mongoose";

export interface IContact extends Document {
  fullName: string;
  fatherHusbandName: string;
  age?: string;
  category?: string;
  gender?: string;
  education?: string;
  mobile: string;
  email?: string;
  address?: string;
  incidentDescription?: string;
  helpType?: string;
  status: "New" | "Contacted" | "Resolved";
  isRead: boolean;
}

const contactSchema = new Schema<IContact>(
  {
    fullName: { type: String, required: true, trim: true },
    fatherHusbandName: { type: String, required: true, trim: true },
    age: { type: String, trim: true },
    category: { type: String, trim: true },
    gender: { type: String, trim: true },
    education: { type: String, trim: true },
    mobile: { type: String, required: true, trim: true },
    email: { type: String, trim: true, lowercase: true },
    address: { type: String, trim: true },
    incidentDescription: { type: String, trim: true },
    helpType: { type: String, trim: true },
    status: {
      type: String,
      enum: ["New", "Contacted", "Resolved"],
      default: "New",
    },
    isRead: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Contact = models.Contact || model<IContact>("Contact", contactSchema);
