const fs = require("fs");
const mongoose = require("mongoose");

const env = fs.readFileSync(".env.local", "utf8");
const match = env.match(/^MONGODB_URI=(.+)$/m);
if (!match) {
  console.error("MONGODB_URI not found");
  process.exit(1);
}

const uri = match[1].trim();

(async () => {
  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 15000,
      dbName: "ddjcprayas",
    });
    console.log("CONNECTED");
    const db = mongoose.connection.db;
    const collections = [
      "complaints",
      "joinapplications",
      "donations",
      "volunteers",
    ];
    for (const name of collections) {
      try {
        const count = await db.collection(name).countDocuments();
        console.log(`${name}:${count}`);
      } catch (err) {
        console.log(`${name}:ERROR:${err.message}`);
      }
    }
    const list = await db.listCollections().toArray();
    console.log("COLLECTIONS:" + list.map((c) => c.name).join(","));
    await mongoose.disconnect();
  } catch (err) {
    console.error("CONNECTION_ERROR:" + err.message);
    process.exit(1);
  }
})();
