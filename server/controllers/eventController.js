const Event = require("../models/Events");
const fs = require("fs");
const path = require("path");

const createEvent = async (req, res) => {
    try {
    const { title } = req.body;
    const imageUrl = req.file ? req.file.path : "";

    const newEvent = new Event({
        title,
        imageUrl,
    });

    await newEvent.save();
    
    res.status(201).json({
        success: true,
        data: newEvent
    })
    
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// list all events
const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(201).json({
            success: true,
            data: events
        });
    } catch (error) {
        console.log(`Error fetching events: ${error.message }`);
        res.status(500).json({
            success: false, 
            message: "An error occured while fetching data",
            error: error.message
        });
    }
};

// delete events
const deleteEvent = async (req, res) => {
    try {
        // find event by id
        const event = await Event.findById(req.params.id);

        if (!event) {
            return res.status(404).json({
                success: false,
                message: "event not found"
            });
        }

        await Event.findByIdAndDelete(event);

        // delete the associated image file if it exists
        if (event.imageUrl) {
            
            const imagePath = path.join(__dirname, "..", event.imageUrl);

            fs.unlink(imagePath, (err) => {
                if (err) {
                    console.log(`Error deleting image file: ${err.message}`)
                }
            });
        }


        res.status(200).json({
            success: true,
            message: "Event deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    createEvent,
    getAllEvents,
    deleteEvent,
}