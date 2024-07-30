const streamController = require("../controllers/streamController")
const express = require("express");


const router = express.Router();

router.post("/", streamController.createStream);
router.get("/", streamController.getAllStreams);
router.delete("/:id", (req, res, next) => {
    console.log('delete request', req.params.id);
    next();
}, streamController.deleteStream);

module.exports = router