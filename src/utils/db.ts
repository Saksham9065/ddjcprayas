import mongoose from "mongoose";

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

const MONGODB_URI = process.env.MONGODB_URI;

const globalWithMongoose = globalThis as typeof globalThis & {
  mongoose?: MongooseCache;
};

export async function connectToDatabase() {
  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI environment variable is not configured");
  }

  let cached = globalWithMongoose.mongoose;

  if (!cached) {
    cached = { conn: null, promise: null };
    globalWithMongoose.mongoose = cached;
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
      dbName: "ddjcprayas",
    });
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    cached.promise = null;
    cached.conn = null;

    throw new Error(
      `Failed to connect to MongoDB: ${error instanceof Error ? error.message : String(error)
      }`
    );
  }
}