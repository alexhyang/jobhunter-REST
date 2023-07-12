const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const morgan = require("morgan");

const { connect } = require("./db/conn");
const apiRouter = require("./routes/apiRouter");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
connect();
app.use("/api", apiRouter);
app.use("*", (req, res) => res.status(404).json({ error: "Not Found" }));


// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
