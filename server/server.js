// Server setup
require("dotenv").config();
const port = process.env.PORT || 8000;

const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const postingRoutes = require("./routes/postingRoutes");

const app = express();
const db = require("./config/db");
app.use(cors());
app.use(logger("dev"));

// Routes
app.use("/api/postings", postingRoutes);

app.use("*", (req, res) => res.status(404).json({ error: "not found" }));
app.listen(port, () => {
  console.log(`Server listening to port ${port}`);
});
