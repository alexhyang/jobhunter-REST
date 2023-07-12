const express = require("express");
const { client } = require("../db/conn");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const collection = client.db("test").collection("new");
    const documents = await collection.find({ jobLevel: "Junior" }).toArray();
    res.json(documents);
  } catch (err) {
    console.error("Error retrieving document:", err);
    res.status(500).send("An error occurred while retrieving the document.");
  }
});

module.exports = router;
