const express = require("express");
const router = express.Router();

const posting_controller = require("../controllers/postingController");

router.get("/", posting_controller.posting_list);
router.get("/skills", posting_controller.skills_summary);
router.get("/notes", posting_controller.notes_summary);

module.exports = router;
