import mongoose from "mongoose";

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

const MONGODB_URI = process.env.MONGODB_URI ?? "";

const globalWithMongoose = globalThis as typeof globalThis & {
  mongoose?: MongooseCache;
};

let cached = globalWithMongoose.mongoose;

if (!cached) {
  cached = { conn: null, promise: null };
  globalWithMongoose.mongoose = cached;
}

export async function connectToDatabase() {
  if (MONGODB_URI.length === 0) {
    throw new Error("Please define the MONGODB_URI environment variable in .env.local");
  }

  if (cached?.conn) {
    return cached.conn;
  }

  if (!cached) {
    cached = { conn: null, promise: null };
    globalWithMongoose.mongoose = cached;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 10000,
      dbName: "ddjcprayas",
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
