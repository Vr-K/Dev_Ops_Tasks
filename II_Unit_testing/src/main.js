// main.js

const { add, sub, multi, div, isEven} = require("./mylib.js");

let a = (Math.floor(Math.random() * 10));
let b = (Math.floor(Math.random() * 10));

let addition = add(a,b);
console.log( "Result of addition between", a, "and", b, "is", addition);

let subtraction = sub(a,b);
console.log( "Result of subtraction between", a, "and", b, "is", subtraction);

let multiplication = multi(a,b);
console.log( "Result of multiplication between", a, "and", b, "is", multiplication);

let divide = div(a,b);
console.log( "Result of dividing between", a, "and", b, "is", divide);

/* let Even = isEven(a);
console.log( "Number", a, "being even is", Even); */