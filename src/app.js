const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");



const errorHandler = require("./middleware/error.middleware")

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.json({
        message: "Authentication API is running"
    });
});
app.use(errorHandler);

module.exports = app;