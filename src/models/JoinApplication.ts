import { Schema, model, models, type Document } from "mongoose";

export interface IJoinApplication extends Document {
  fullName: string;
  fatherHusbandName?: string;
  age?: number;
  category?: string;
  gender?: string;
  education?: string;
  mobile: string;
  email?: string;
  address?: string;
  occupation?: string;
  joinType: string;
  workMode?: string;
  statement?: string;
  experience?: string;
  position?: string;
  resume?: string;
  university?: string;
  field?: string;
  status?: string;
}

const joinApplicationSchema = new Schema<IJoinApplication>(
  {
    fullName: { type: String, required: true, trim: true },
    fatherHusbandName: { type: String, trim: true },
    age: { type: Number },
    category: { type: String, trim: true },
    gender: { type: String, trim: true },
    education: { type: String, trim: true },
    mobile: { type: String, required: true, trim: true },
    email: { type: String, trim: true, lowercase: true },
    address: { type: String, trim: true },
    occupation: { type: String, trim: true },
    joinType: { type: String, required: true, trim: true, default: "Volunteer" },
    workMode: { type: String, trim: true },
    statement: { type: String, trim: true },
    experience: { type: String, trim: true },
    position: { type: String, trim: true },
    resume: { type: String, trim: true },
    university: { type: String, trim: true },
    field: { type: String, trim: true },
    status: { type: String, trim: true, default: "Pending" },
  },
  {
    timestamps: true,
  }
);

joinApplicationSchema.index({ createdAt: -1 });
joinApplicationSchema.index({ status: 1, createdAt: -1 });
joinApplicationSchema.index({ joinType: 1, createdAt: -1 });
joinApplicationSchema.index({
  fullName: "text",
  mobile: "text",
  email: "text",
  education: "text",
  address: "text",
  fatherHusbandName: "text",
  occupation: "text",
  joinType: "text",
  workMode: "text",
  statement: "text",
  experience: "text",
  position: "text",
  resume: "text",
  university: "text",
  field: "text",
});

export const JoinApplication =
  models.JoinApplication ||
  model<IJoinApplication>("JoinApplication", joinApplicationSchema);
