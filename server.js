const express = require("express");
const connectDb = require("./config/dbConnection");
require("dotenv").config();

const app = express();
connectDb();

//middleware
//routes
//Error handlers middleware
//Listen to server
const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`Server is up and running on ${PORT}`));
