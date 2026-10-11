import { Schema, model, models, type Document } from "mongoose";

export interface IChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: Date;
}

export interface IChatConversation extends Document {
  sessionId: string;
  userId?: string;
  messages: IChatMessage[];
  language?: "en" | "hi" | "hinglish";
  isRead: boolean;
  status: "Active" | "Resolved" | "Archived";
  ipAddress?: string;
  userAgent?: string;
  startedAt: Date;
  endedAt?: Date;
}

const chatMessageSchema = new Schema<IChatMessage>(
  {
    role: { type: String, enum: ["user", "assistant", "system"], required: true },
    content: { type: String, required: true, trim: true },
    timestamp: { type: Date, default: Date.now },
  },
  { _id: false }
);

const chatConversationSchema = new Schema<IChatConversation>(
  {
    sessionId: { type: String, required: true, trim: true, unique: true },
    userId: { type: String, trim: true },
    messages: [chatMessageSchema],
    language: { type: String, enum: ["en", "hi", "hinglish"] },
    isRead: { type: Boolean, default: false },
    status: {
      type: String,
      enum: ["Active", "Resolved", "Archived"],
      default: "Active",
    },
    ipAddress: { type: String, trim: true },
    userAgent: { type: String, trim: true },
    startedAt: { type: Date, default: Date.now },
    endedAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

chatConversationSchema.index({ createdAt: -1 });
chatConversationSchema.index({ isRead: 1, createdAt: -1 });
chatConversationSchema.index({ status: 1, createdAt: -1 });
chatConversationSchema.index({ sessionId: 1 });

export const ChatConversation =
  models.ChatConversation ||
  model<IChatConversation>("ChatConversation", chatConversationSchema);
