const express = require("express");
const router = express.Router();
const PostingController = require("../controllers/PostingController");

router.post("/", PostingController.createPosting);
router.get("/", PostingController.getAllPostings);
router.get("/:id", PostingController.getPostingById);
router.put("/:id", PostingController.updatePostingById);
router.delete("/:id", PostingController.deletePostingById);

module.exports = router;
