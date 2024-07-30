const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
require("dotenv").config();


// // import routes
const eventRoute = require("./routes/eventRoute");
const streamRoute = require("./routes/streamRoute");

// configure upload directory
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir)
}

// initialize express
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));


// connect to mongoose
mongoose.connect("mongodb://localhost/church")
.then(() => {
    console.log("connected to mongodb")
})
.catch((error) => {
    console.log("error connecting to db", error.message)
});


// configure static files
app.use("/uploads", express.static(uploadsDir));

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

// configure routes
app.use("/api/events/", eventRoute);
app.use("/api/stream/", streamRoute);



// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
}); 