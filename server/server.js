import express from "express";

const app = express();

const logger = (req, res, next) => {
  console.log("LOGGED");
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("connected");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server listening the port http://localhost:" + port);
});
