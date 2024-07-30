const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const schemaEvent = new Schema({
    title: {
        type: String,
        require: [true, "title is required"]
    },
    imageUrl: {
        type: String,
        required: false
    }
}, {timestamps: true})

module.exports = model("Event", schemaEvent);
