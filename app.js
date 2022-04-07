// S2 Create Nodejs Server and connect to database

// S3 Create user model and route

require("dotenv").config(); // S2

require("./config/database").connect(); // S2
const { application } = require("express"); // S2
const express = require("express"); // S2
const User = require("./model/user"); // S3

const app = express(); // S2

app.use(express.json()); // S2

// S3

// Home
app.get("/", (req, res) => {
  res.send("HI");
});

// Sign UP
app.post("/signup", (res, req) => {});

module.exports = app;
