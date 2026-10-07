// mylib.js

function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Inputs must be numbers");
  }
  return a + b;
}

function sub(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Inputs must be numbers");
  }
  return a - b;
}

function multi(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Inputs must be numbers");
  }
  return a * b;
}

function div(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Inputs must be numbers");
  }
  if (b === 0) {
    throw new Error("Cannot divide by 0");}
  return a / b;
}

function isEven(n) {
  if (typeof n !== "number") {
    throw new Error("Inputs must be numbers");
  }
  return n % 2 === 0;
}

module.exports = { add, sub, multi, div, isEven };
