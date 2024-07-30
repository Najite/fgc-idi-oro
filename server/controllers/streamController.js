const Stream = require("../models/Stream");


// stream creation
const createStream = async (req, res) => {
    try {
        const { title, streamUrl } = req.body;

        const newStream = new Stream({
            title,
            streamUrl
        });

        await newStream.save();

        res.status(201).json({
            success:true,
            data: newStream
        });
    } catch (error) {
        console.error("Error creating stream", error);
        res.status(400).json({
            success: false,
            message: "failed to create stream",
            error: error.message
        });
    }
};


const getAllStreams = async (req, res) => {
    try {
        const streams = await Stream.find()

        res.status(201).json({
            success: true,
            data: streams
        });
    } catch (error) {
        console.error("Error fetching stream: ", error);
        res.status(500).json({
            success: false,
            message: "failed to fetch stream",
            error: error.message
        });
    };
};


// stream deletion
const deleteStream = async (req, res) => {
    try {
        const {id} = req.params.id
        const deletedStream = await Stream.findByIdAndDelete(id);

        if (!deletedStream) {
            return res.status(401).json({
                success: false,
                message: "failed to delete stream"
            });
        }

        res.status(201).json({
            success: true,
            message: "stream deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting stream:", error);
        res.status(500).json({
            success: false,
            message: "failed to delete stream",
            error: error.message
        })
    }
}

module.exports = {
    createStream,
    getAllStreams,
    deleteStream
}