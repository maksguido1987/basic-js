const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');

  if (!Array.isArray(members)) return false

  let a = '';

  for (let i = 0; i < members.length; i++) {
     
     el = members[i]
     if (typeof el !== 'string') continue
     el = el.trim().toUpperCase()
     a += el[0]
     a = a.split('').sort().join('')
  }
  return a
};
