const Posting = require("../models/postingModel");

const getPosting = async (req, res) => {
  try {
    const posting = await Posting.findById(req.params.id);
    res.json(posting);
  } catch (err) {
    res.status(404).json({ err: "Posting not found!"});
  }
};

module.exports = {
  getPosting,
}
