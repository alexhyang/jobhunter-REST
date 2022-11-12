const express = require("express");
const router = express.Router();

const posting_controller = require("../controllers/postingController");

router.get("/", posting_controller.posting_list);

router.get("/create", posting_controller.posting_create);
// router.post("/create", posting_controller.posting_create);
router.get("/:id", posting_controller.posting_detail);
router.get("/:id/update", posting_controller.posting_update);
// router.post("/:id/update", posting_controller.posting_update);
router.get("/:id/delete", posting_controller.posting_delete);
// router.post("/:id/delete", posting_controller.posting_delete);

module.exports = router;
