import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();
// console.log(process.env);

const app = express();
app.use(cors());

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
