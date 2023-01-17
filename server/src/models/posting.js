const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let PostingSchema = new Schema({
  title: { type: String, required: true },
  level: {
    type: String,
    required: true,
    enum: ["Junior", "Intermediate", "Senior", "Intern", "Unknown"],
    default: "Junior",
  },
  type: { type: String, required: true },
});
