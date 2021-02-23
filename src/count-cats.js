const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // throw new CustomError('Not implemented');
  let count = 0;
  matrix.forEach(el => {
    el.filter(item => {
      if (item == "^^") {
        count++
      }
    })
  });
  return count
};
