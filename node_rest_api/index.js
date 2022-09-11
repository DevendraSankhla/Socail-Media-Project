const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users.js");
const authRoute = require("./routes/auth.js");
const postRoute = require("./routes/posts.js");

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true}, ()=>{
        console.log("Connected to MongoDB");
    })

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get("/", (req, res) => {
    res.send("Welcome to Homepage");
})

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(8800, ()=>{
    console.log("Backend server is running");
})