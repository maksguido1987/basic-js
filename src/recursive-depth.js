const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      let maxDepth = 1;
      arr.forEach((item) => {
        if (Array.isArray(item)) {
          let arrDepth = 1;
          arrDepth += this.calculateDepth(item);
          if (arrDepth > maxDepth) {
            maxDepth = arrDepth;
          }
        }
      });
      return maxDepth;
    }
  }
};
