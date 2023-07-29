const generateSortQuery = (sortCriteria) => {
  if (sortCriteria == undefined) {
    return {};
  }
  let sortQuery = {};
  for (const criteria of sortCriteria.split(",")) {
    if (criteria.startsWith("-")) {
      sortQuery[criteria.slice(1)] = -1;
    } else {
      sortQuery[criteria] = 1;
    }
  }
  return sortQuery;
};

const generateProjQuery = (fields) => {
  if (fields == undefined) {
    return {};
  }
  let projQuery = {};
  for (const field of fields.split(",")) {
    projQuery[field] = 1;
  }
  return projQuery;
};

module.exports = { generateSortQuery, generateProjQuery };
