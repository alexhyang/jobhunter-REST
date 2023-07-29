const Posting = require("../models/Posting");
const { generateSortQuery } = require("../utils/queryUtils");

const SummaryController = {
  getSkills: async (req, res) => {
    try {
      const postings = await Posting.distinct("skills");
      return res.status(200).json(postings);
    } catch (error) {
      console.error("Error retrieving unique skills:", error);
      return res
        .status(500)
        .json({ error: "Failed to retrieve unique skills" });
    }
  },

  getSkillCounts: async (req, res) => {
    const { sort, limit, skillName } = req.query;
    if (skillName !== undefined) {
      const skill = skillName.replace(/\++/g, " ");
      try {
        const skillCount = await Posting.aggregate([
          { $match: { skills: { $elemMatch: { $eq: skill } } } },
          { $count: "count" }
        ]);
        return res.status(200).json(skillCount);
      } catch (error) {
        console.error("Error retrieving skill count:", error);
        return res
          .status(500)
          .json({ error: "Failed to retrieve skill count" });
      }
    }

    const aggregateStages = [
      { $project: { skills: 1 } },
      { $unwind: "$skills" },
      { $group: { _id: "$skills", count: { $count: {} } } }
    ];
    if (sort !== undefined) {
      const sortQuery = generateSortQuery(sort);
      aggregateStages.push({ $sort: sortQuery });
    }
    if (limit !== undefined) {
      aggregateStages.push({ $limit: parseInt(limit) });
    }

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
