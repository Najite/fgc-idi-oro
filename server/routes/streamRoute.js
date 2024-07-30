const streamController = require("../controllers/streamController")
const express = require("express");


const router = express.Router();

router.post("/create", streamController.createStream);
router.get("/", streamController.getAllStreams);
router.delete("/:id", streamController.deleteStream);



