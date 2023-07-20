const express = require("express");
const router = express.Router();
const PostingController = require("../controllers/PostingController");

router.post("/postings", PostingController.createPosting);
router.get("/postings", PostingController.getAllPostings);
router.get("/postings/:id", PostingController.getPostingById);
router.put("/postings/:id", PostingController.updatePostingById);
router.delete("/postings/:id", PostingController.deleteUserById);

module.exports = router;
