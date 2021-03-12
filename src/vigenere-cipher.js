const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mod = true) {
    this.mod = mod;
  }

  encrypt(str, key) {
    if (str === "undefined" || key === "undefined") {
      throw new Error();
    }

    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    str = str.toUpperCase();
    key = key.toUpperCase();
    let resStr = "";
    let count = 0;

    for (let i = 0; i < str.length; i++) {
      if (alphabet.includes(str[i])) {
        // resStr += alphabet.charAt(
        //   (alphabet.indexOf(str.charAt(i)) +
        //     alphabet.indexOf(key.charAt(i % key.length))) %
        //     alphabet.length
        // );
        resStr += String.fromCharCode(
          ((str.charCodeAt(i) + key.charCodeAt(count % key.length) - 130) %
            26) +
            65
        );
        count++;
      } else {
        resStr += str[i]
      }
    }
    if (this.mod) {
      return resStr;
    } else {
      return resStr.split("").reverse().join("");
    }
  }

  decrypt(str, key) {
    if (str === "undefined" || key === "undefined") {
      throw new Error();
    }

    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    str = str.toUpperCase();
    key = key.toUpperCase();
    let resStr = "";
    let count = 0;

    for (let i = 0; i < str.length; i++) {
      if (alphabet.includes(str[i])) {
        // resStr += alphabet.charAt(
        //   (alphabet.indexOf(str.charAt(i)) +
        //     alphabet.length -
        //     alphabet.indexOf(key.charAt(i % key.length))) %
        //     alphabet.length
        // );
        resStr += String.fromCharCode(
          ((str.charCodeAt(i) + 26 - key.charCodeAt(count % key.length)) % 26) +
          65
        );
        count++;
      } else {
        resStr += str[i]
      }
    }

    if (this.mod) {
      return resStr;
    } else {
      return resStr.split("").reverse().join("");
    }
  }
}

module.exports = VigenereCipheringMachine;
