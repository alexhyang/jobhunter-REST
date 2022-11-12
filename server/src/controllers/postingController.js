exports.posting_list = function (req, res, next) {
  res.json({"message": "Posting list"});
};

exports.posting_create = function (req, res, next) {
  res.json({"message": "Create posting list"});
};

exports.posting_detail = function (req, res, next) {
  res.json({"message": `Get posting with id ${req.params.id}`});
};

exports.posting_update = function (req, res, next) {
  res.json({"message": `Update posting with id ${req.params.id}`});
};

exports.posting_delete = function (req, res, next) {
  res.json({"message": `Delete posting with id ${req.params.id}`});
};

exports.skills_summary = function (req, res, next) {
  res.json({"message": "Skills Summary"});
};

exports.notes_summary = function (req, res, next) {
  res.json({"message": "Notes Summary"});
};
