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
    joinType: { type: String, required: true, trim: true },
    workMode: { type: String, trim: true },
    statement: { type: String, trim: true },
  },
  {
    timestamps: true,
  }
);

export const JoinApplication =
  models.JoinApplication || model<IJoinApplication>("JoinApplication", joinApplicationSchema);
