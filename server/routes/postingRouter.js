const express = require("express");
const router = express.Router();
const postingController = require("../controllers/postingController");

// router.get("/", postingController.posting_list);

// router.get("/create", postingController.posting_create);
// router.post("/create", postingController.posting_create);
router.get("/:id", postingController.getPosting);
// router.get("/:id/update", postingController.posting_update);
// router.post("/:id/update", postingController.posting_update);
// router.get("/:id/delete", postingController.posting_delete);
// router.post("/:id/delete", postingController.posting_delete);

module.exports = router;
