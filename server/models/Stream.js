const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const streamSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    streamUrl: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: (v) => {
                return /^https?:\/\/[^\s$.?#].[^\s]*/.test(v);
            },
            message: props => `${props.value} is not a valid URL`
        }
    }
})


module.exports = model("Stream", streamSchema);
