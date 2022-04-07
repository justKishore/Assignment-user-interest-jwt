// S2 Create Nodejs Server and connect to database

require("dotenv").config(); // S2

require("./config/database").connect(); // S2
const { application } = require("express"); // S2
const express = require("express"); // S2

const app = express(); // S2

app.use(express.json()); // S2

module.exports = app;
