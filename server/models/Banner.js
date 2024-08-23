const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const schemaBanner = new Schema({
    title:{
        type: String,
        require: [true, "title is required"],
        trim: true
    },
    imageUrl: {
        type: String,
        require: true
    }
})

module.exports = model("Banner", schemaBanner);