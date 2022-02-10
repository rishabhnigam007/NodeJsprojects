const express = require("express");
const coursesRouter = require("./routes/courses");
const bodyParser = require("body-parser");

require("dotenv").config();
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.json());
app.use("/api/v1/courses", coursesRouter);

mongoose.connect(process.env.DB_Connection_URL, () => {
  console.log("connected to db:");
});

app.listen(process.env.PORT, () => {
  console.log("server is running..");
});
