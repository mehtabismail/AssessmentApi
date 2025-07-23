require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

const newsRoutes = require("./routes/news");
app.use("/news", newsRoutes);

try {
  app.listen("3000", () => {
    console.log(`Listening on http://localhost:${"3000"}`);
  });
} catch (error) {
  console.log("Database connection failed:", error.message);
}
