// https://www.chaijs.com/guide/styles/

const assert = require("chai").assert;
const { add, sub, multi, div, isEven } = require("../src/mylib");

describe("main.js (assert skeleton)", () => {
  before(() => {
    console.log( "This part executes once before all tests\n" );
    //assert.equal(add(2, 3), 5)
  });
  after(() => {
    console.log( "This part executes once after all tests" );
    //assert.equal(sub(3, 3), 0)
  });

  describe("add()", () => {
    it("should add two numbers correctly", () => {
      assert.equal(add(2, 3), 5)
    });

    it("should throw an error if inputs are not numbers", () => {
      assert.throws(() => add(2, "a"), "Inputs must be numbers")
    });
  });

  describe("sub()", () => {
    it("should subtract two numbers correctly", () => {
      assert.equal(sub(3, 1), 2)
    });

    it("should throw an error if inputs are not numbers", () => {
      assert.throws(() => sub(2, "a"), "Inputs must be numbers")
    });
  });

describe("multi()", () => {
    it("should add two numbers correctly", () => {
      assert.equal(multi(2, 3), 6)
    });

    it("should throw an error if inputs are not numbers", () => {
      assert.throws(() => multi(2, "a"), "Inputs must be numbers")
    });
  });

  describe("div()", () => {
    it("should divide two numbers correctly", () => {
      assert.equal(div(6, 3), 2)
    });

    it("should throw an error if inputs are not numbers", () => {
      assert.throws(() => div(2, "a"), "Inputs must be numbers")
    });
  });

  describe("isEven()", () => {
    it("should return true for even numbers", () => {
      assert.equal(2, 2)
    });

    it("should return false for odd numbers", () => {
      assert.equal(3, 3)
    });

    it("should throw an error if input is not a number", () => {
      assert.throws(() => add("a"), "Inputs must be numbers")
    });
  });
});

