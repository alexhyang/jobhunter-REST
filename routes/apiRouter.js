const express = require("express");
const { client } = require("../db/conn");

const router = express.Router();

// get all postings
// "rootUrl/api"
router.get("/", async (req, res) => {
  try {
    const collection = client.db("test").collection("playground");
    const documents = await collection.find().sort({ _id: 1 }).toArray();
    res.json(documents);
  } catch (err) {
    console.error("Error retrieving document:", err);
    res.status(500).send("An error occurred while retrieving the document.");
  }
});

// get posting by id
// "rootUrl/api/posting/:id"

// add posting
// "rootUrl/api/posting/new"
router.get("/posting/new", async (req, res) => {
  try {
    // const collection = client.db("test").collection("playground");
    // const documents = await collection.insertOne();
    // res.json(documents);
    console.log(req.body);
    res.json({ message: "Posting Added" });
  } catch (err) {
    console.error("Error retrieving document:", err);
    res.status(500).send("An error occurred while retrieving the document.");
  }
});

module.exports = router;
