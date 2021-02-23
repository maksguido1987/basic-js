const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (Array.isArray(arr) === false) {
    throw new Error("arr is not Array");
  }
  let arr2 = arr.slice();
  let res = [];

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === "--discard-next" && i === arr2.length - 1) {
      arr2[i] = undefined;
    } else if (arr2[i] === "--double-next" && i === arr2.length - 1) {
      arr2[i] = undefined;
    } else if (arr2[i] === "--discard-prev" && i === 0) {
      arr2[i] = undefined;
    } else if (arr2[i] === "--double-prev" && i === 0) {
      arr2[i] = undefined;
    } else if (arr2[i - 1] === "--discard-next") {
      res.pop();
    } else if (arr2[i] === "--discard-prev") {
      if (arr2[i - 2] === "--discard-next") {
        arr2[i] === undefined;
      } else {
        res.pop();
      }
    } else if (arr2[i] === "--double-next") {
      res.push(arr2[i + 1]);
    } else if (arr2[i] === "--double-prev") {
      if (arr2[i - 2] === "--discard-next") {
        arr2[i] === undefined;
      } else {
        res.push(arr2[i - 1]);
      }
    } else if (arr2[i] !== undefined) {
      res.push(arr2[i]);
    }
  }

  return res;
};
