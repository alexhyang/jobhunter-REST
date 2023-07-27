const Posting = require("../models/Posting");

const SummaryController = {
  getSkills: async (req, res) => {
    const { option } = req.query;
    if (option !== undefined && option === "unique") {
      try {
        const postings = await Posting.distinct("skills");
        return res.status(200).json(postings);
      } catch (error) {
        console.error("Error retrieving unique skills:", error);
        return res.status(500).json({ error: "Failed to retrieve unique skills" });
      }
    }

    const projectSkills = { $project: { skills: 1 } };
    const unwindStage = { $unwind: "$skills" };
    const groupStage = { $group: { _id: "$skills", count: { $count: {} } } };
    const sortStage = { $sort: { count: -1 } };
    const limitStage = { $limit: 30 };

    const aggregateStages = [
      projectSkills,
      unwindStage,
      groupStage,
      sortStage,
      limitStage
    ];

    try {
      const postings = await Posting.aggregate(aggregateStages);
      res.status(200).json(postings);
    } catch (error) {
      console.error("Error retrieving skills count:", error);
      res.status(500).json({ error: "Failed to retrieve skills count" });
    }
  },

  getNotes: async (req, res) => {
    try {
      const postings = await Posting.find(
        { other: { $ne: "" } },
        { jobTitle: 1, jobLevel: 1, other: 1 }
      ).sort({ applicationDueDate: -1 });
      res.status(200).json(postings);
    } catch (error) {
      console.error("Error retrieving notes:", error);
      res.status(500).json({ error: "Failed to retrieve notes" });
    }
  }
};

module.exports = SummaryController;
