// mylib.js

// contains add, sub, multi, div, isEven, hexToRgb

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

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);       // parses hex colour string and extracts RGB comps
                                                                          // regex match results
  return result ? {                 // if result not null
    r: parseInt(result[1], 16),     // parseInt from result 1, 16hex value
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;                         // otherwise null
}

module.exports = { add, sub, multi, div, isEven, hexToRgb};
