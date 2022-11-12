const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const indexRouter = require("./routes/index");
const postingRouter = require("./routes/posting");

const port = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(logger("dev"));
app.use("/", indexRouter);
app.use("/posting", postingRouter);

// Register api routes
// app.use("/api/postings
// app.use("/api/postings/add
// app.use("/api/posting/[:id]
// app.use("/api/skills
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));
app.listen(port, () => {
  console.log(`Server listening to port ${port}`);
});

module.exports = app;
// or exports.app = app;
