const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chain: [],

  getLength() {

    // return chainMaker.chain.length;

    return this.chain.length;
  },
  addLink(value) {

    // chainMaker.chain.push(`( ${value} )`);
    // return chainMaker;

    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {

    // if (typeof position !== 'number' || position < 1 || position > chainMaker.chain.length) {
    //   chainMaker.chain = [];
    //   throw new Error;
    // }
    // chainMaker.chain.splice(position - 1, 1);
    // return chainMaker;

    if (typeof(position) !== 'number' || this.chain.length < position || position < 1) {
      this.chain = [];
      throw new Error;
    }
    this.chain.splice(position - 1, 1)
    return this;
  },
  reverseChain() {

    // chainMaker.chain = chainMaker.chain.reverse();
    // return chainMaker;

    this.chain = this.chain.reverse()
    return this;
  },
  finishChain() {

    // let res = chainMaker.chain.join('~~');
    // chainMaker.chain = [];
    // return res;

    let res = this.chain.join('~~');
    this.chain = [];
    return res;
  }
};

module.exports = chainMaker;
