const mongoose = require("mongoose");

let postingSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  jobLevel: {
    type: String,
    required: true,
    enum: ["Junior", "Intermediate", "Senior", "Intern", "Unknown"],
    default: "Junior"
  },
  jobType: {
    type: [String],
    required: true,
    enum: [
      "Full-time",
      "Part-time",
      "Remote",
      "Temporary",
      "Contract",
      "Internship",
      "Co-op",
      "Other"
    ],
    default: "Full Time"
  },
  applicationDueDate: { type: Date, required: true },
  responsibilities: { type: [String], required: true },
  qualifications: { type: [String], required: true },
  skills: { type: [String], required: true },
  postingUrl: { type: String, required: true },
  other: { type: String }
});

const Posting = mongoose.model("Posting", postingSchema);

module.exports = Posting;
