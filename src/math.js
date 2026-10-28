// Tiny pure utility functions used by the CI lab.

function add(a, b) {
  return a + b;
}

function isEven(n) {
  return n % 2 === 0;
}

function formatName(first, last) {
  return `${first} ${last}`.trim();
}

module.exports = { add, isEven, formatName };
//in this what is the purpose of this code?   The purpose of this code is to define and export a set of small utility functions that can be used in other parts of the application or in tests. Specifically, it includes: