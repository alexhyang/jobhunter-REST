const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI);

async function connect() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
  } catch (err) {
    console.error("Failed to connect to MongoDB Atlas", err);
  }
}

module.exports = { connect, client };
