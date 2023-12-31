const Posting = require("../models/Posting");
const { generateSortQuery, generateProjQuery } = require("../utils/queryUtils")

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
    const { sort, limit, fields } = req.query;

    // TODO: complete filter query later
    const filterQuery = {};
    const projQuery = generateProjQuery(fields);
    const sortQuery = generateSortQuery(sort);
    let limitCount = limit || 30;

    try {
      const postings = await Posting.find(filterQuery, projQuery)
        .sort(sortQuery)
        .limit(limitCount);
      res.status(200).json(postings);
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
      res.status(200).json(posting);
    } catch (error) {
      console.error("Error retrieving posting:", error);
      res.status(500).json({ error: "Failed to retrieve posting" });
    }
  },

  updatePostingById: async (req, res) => {
    try {
      const updatedPosting = await Posting.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true
        }
      );
      if (!updatedPosting) {
        return res.status(404).json({ error: "Posting not found" });
      }
      status(200).json(updatedPosting);
    } catch (error) {
      console.error("Error updating posting:", error);
      res.status(500).json({ error: "Failed to update posting" });
    }
  },

  deletePostingById: async (req, res) => {
    try {
      const deletedPosting = await Posting.findByIdAndDelete(req.params.id);
      if (!deletedPosting) {
        return res.status(404).json({ error: "Posting not found" });
      }
      status(200).json({ message: "Posting deleted succcessfully" });
    } catch (error) {
      console.error("Error deleting posting:", error);
      res.status(500).json({ error: "Failed to delete posting" });
    }
  }
};

module.exports = PostingController;
