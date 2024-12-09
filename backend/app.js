const dotenv = require("dotenv");
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectToDb = require("./dataBase/db");
const userRoutes=require('./routes/userRoutes')
connectToDb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});
app.use("/users", userRoutes );
module.exports = app;
