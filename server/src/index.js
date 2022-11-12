const app = require("./server");
const MongoClient = require("mongodb").MongoClient;
// const PostingsDAO = require("./dao/postingsDAO");

const client = new MongoClient(process.env.ATLAS_URI);

async function main() {
  try {
    const db = client.db("test");
    const test_postings = db.collection("test_postings");

    // Queries
    const query = { _id: 1 };
    const posting = await test_postings.findOne(query);

    const all_postings = await test_postings.find({
      title: "Full Stack Developer",
    });

    // console.log(all_postings);
    // console.log(JSON.stringify(posting));
    // console.log(typeof JSON.stringify(posting));
  } finally {
    await client.close();
  }
}

main().catch(console.dir);
