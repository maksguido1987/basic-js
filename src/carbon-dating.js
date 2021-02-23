const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;
  if (Number(sampleActivity) !== sampleActivity) return false
  if (sampleActivity == null) return false
  if (+sampleActivity > 15) return false
  if (+sampleActivity <= 0 ) return false

  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (Math.log(2) / HALF_LIFE_PERIOD))

};
