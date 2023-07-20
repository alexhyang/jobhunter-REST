const Posting = require("../models/Posting");

const PostingController = {
  createPosting: async (req, res) => {
    try {
      const newPosting = await Posting.create(req.body);
      res.status(201).json(newPosting);
    } catch (error) {
      console.log("Error creating user:", error);
      res.status(500).json({ error: "Failed to create posting" });
    }
  },
  getAllPostings: async (req, res) => {
    try {
      const postings = await Posting.find();
      return res.status(200).json(postings);
    } catch (error) {
      console.error("Error retrieving postings:", error);
      res.status(500).json({ error: "Failed to retrieve postings" });
    }
  },
  getPostingById: async (req, res) => {
    try {
      const posting = await Posting.findById(req.params.id);
      if (!posting) {
        return res.status(404).json({ error: "Posting not found" });
      }
      return status(200).json(posting);
    } catch (error) {
      console.error("Error retrieving posting:", error);
      res.status(500).json({ error: "Failed to retrieve posting" });
    }
  }
};

module.exports = PostingController;
