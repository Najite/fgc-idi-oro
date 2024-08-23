const bannerController = require("../controllers/bannerController");
const upload = require("../middlewares/uploads")

const express = require("express");
const router = express.Router();


router.get("/",  bannerController.getAllBanner);
router.post("/", bannerController.createBanner);
router.delete("/:id", bannerController.deleteBanner);

module.exports = router;