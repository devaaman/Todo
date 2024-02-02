// index.js
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');  // added dotenv module
const dbConnect = require("./config/Database");
const cors=require('cors');
dotenv.config();  // load environment variables from .env file

const PORT = process.env.PORT || 4000;
app.use(cors({origin:"http://localhost:3000",credentials:true}))
app.use(express.json());
const todoRoutes = require("./routes/todo");

app.use("/api/v1", todoRoutes);

// Corrected the function name here
dbConnect();

app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
});


