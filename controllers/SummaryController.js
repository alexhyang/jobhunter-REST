const Posting = require("../models/Posting");

const SummaryController = {
  getSkills: async (req, res) => {
    const projectSkills = { $project: { skills: 1 } };
    const projectName = { $project: { _id: 1 } };
    const unwindStage = { $unwind: "$skills" };
    const groupStage = { $group: { _id: "$skills", count: { $count: {} } } };

    try {
      const postings = await Posting.aggregate([
        projectSkills, unwindStage, groupStage, projectName
      ]);
      res.status(200).json(postings);
    } catch (error) {
      console.error("Error retrieving postings:", error);
      res.status(500).json({ error: "Failed to retrieve postings" });
    }
  },

  getNotes: async (req, res) => {
    try {
      const postings = await Posting.find(
        { other: { $ne: "" } },
        { jobLevel: 1, other: 1 }
      ).sort({ applicationDueDate: -1 });
      res.status(200).json(postings);
    } catch (error) {
      console.error("Error retrieving notes:", error);
      res.status(500).json({ error: "Failed to retrieve notes" });
    }
  }
};

module.exports = SummaryController;
