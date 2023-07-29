const express = require("express");
const router = express.Router();
const SummaryController = require("../controllers/SummaryController");

router.get("/skills", SummaryController.getSkills);
router.get("/skills/count", SummaryController.getSkillCounts);
router.get("/notes", SummaryController.getNotes);

module.exports = router;
