const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let res = ''
  let addRes = ''
  
  let repeatTimes = options.repeatTimes || 1
  let separator = options.separator || "+"
  let addition = options.addition || ''
  let additionSeparator = options.additionSeparator || '|'
  let additionRepeatTimes = options.additionRepeatTimes || 1

  if (typeof str !== 'string') {
    str = String(str)
  }
  if (options.addition === false) {
    addition = "false"
  }
  if (options.addition === null) {
    addition = "null"
  }

  if (additionRepeatTimes !== undefined) {
    for (let j = 0; j <= additionRepeatTimes - 1; j++) {
      if (j === additionRepeatTimes - 1) additionSeparator = ''
      
      addRes += `${addition}${additionSeparator}`
    }
  }

  if (repeatTimes !== undefined) {
    for (let i = 0; i <= repeatTimes - 1; i++) {
      if (i === repeatTimes - 1) separator = ''
  
      res += `${str}${addRes}${separator}`
      
    }
  }

  return res;

};
  