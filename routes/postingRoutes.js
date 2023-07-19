const express = require("express");
const PostingController = require("../controllers/PostingController");
// const { client } = require("../db/conn");

const router = express.Router();

router.post("/postings", PostingController.createPosting);
router.get("/postings", PostingController.getAllPostings);
router.get("/postings/:id", PostingController.getPostingById);
router.put("/postings/:id", PostingController.updatePostingById);
router.delete("/postings/:id", PostingController.deleteUserById);

module.exports = router;
