const express = require("express");
const upload = require("../middlewares/uploads");
// import controllers
const eventController = require("../controllers/eventController");

const router = express.Router();


// // define route
router.post("/", upload.single("image"), eventController.createEvent); 
router.get("/", eventController.getAllEvents); 
router.delete("/:id", eventController.deleteEvent);

module.exports = router;