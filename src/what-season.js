const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (date == null) return 'Unable to determine the time of year!'

  if (isNaN(date) !== false) {
    throw new Error ("Error")
 }
  
  let month = date.toString().slice(4, 7)
  
  if (month === "Dec" || month === "Jan" || month === "Feb") {
    return "winter"
  } else if (month === "Mar" || month === "Apr" || month === "May") {
     return "spring"
  } else if (month === "Jun" || month === "Jul" || month === "Aug") {
     return "summer"
  } else if (month === "Sep" || month === "Oct" || month === "Nov") {
     return "autumn"
  }
};
