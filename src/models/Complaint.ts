import { Schema, model, models, type Document } from "mongoose";

export interface IComplaint extends Document {
  fullName: string;
  phone: string;
  district: string;
  tehsil: string;
  category: string;
  incidentDate: string;
  description: string;
  status: "Pending Review" | "In Progress" | "Resolved";
}

const complaintSchema = new Schema<IComplaint>(
  {
    fullName: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    district: { type: String, required: true, trim: true },
    tehsil: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    incidentDate: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: ["Pending Review", "In Progress", "Resolved"],
      default: "Pending Review",
    },
  },
  {
    timestamps: true,
  }
);

export const Complaint = models.Complaint || model<IComplaint>("Complaint", complaintSchema);
