"use strict";

/**
 * Simple arithmetic operations for a calculator.
 * @module calculator
 */

/**
 * Adds two numbers.
 * @param {number} a - First operand.
 * @param {number} b - Second operand.
 * @returns {number} Sum of a and b.
 * @throws {TypeError} If either argument is not a number.
 */
function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("add expects two numbers");
  }
  return a + b;
}

/**
 * Subtracts the second number from the first.
 * @param {number} a - Minuend.
 * @param {number} b - Subtrahend.
 * @returns {number} Difference of a and b.
 * @throws {TypeError} If either argument is not a number.
 */
function subtract(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("subtract expects two numbers");
  }
  return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a - First factor.
 * @param {number} b - Second factor.
 * @returns {number} Product of a and b.
 * @throws {TypeError} If either argument is not a number.
 */
function multiply(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("multiply expects two numbers");
  }
  return a * b;
}

/**
 * Divides the first number by the second.
 * @param {number} a - Dividend.
 * @param {number} b - Divisor.
 * @returns {number} Quotient of a divided by b.
 * @throws {TypeError} If either argument is not a number.
 * @throws {Error} If division by zero is attempted.
 */
function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("divide expects two numbers");
  }
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

/**
 * Calculator class that encapsulates basic arithmetic operations.
 * Each method returns a new instance of Calculator with the result
 * as its internal value, allowing method chaining.
 */
class Calculator {
  /**
   * Creates a Calculator instance.
   * @param {number} [value=0] - Initial value.
   */
  constructor(value = 0) {
    if (typeof value !== "number") {
      throw new TypeError("Calculator constructor expects a number");
    }
    this.value = value;
  }

  /**
   * Adds a number to the current value.
   * @param {number} num - Number to add.
   * @returns {Calculator} New Calculator instance with updated value.
   */
  add(num) {
    return new Calculator(this.value + num);
  }

  /**
   * Subtracts a number from the current value.
   * @param {number} num - Number to subtract.
   * @returns {Calculator} New Calculator instance with updated value.
   */
  subtract(num) {
    return new Calculator(this.value - num);
  }

  /**
   * Multiplies the current value by a number.
   * @param {number} num - Number to multiply by.
   * @returns {Calculator} New Calculator instance with updated value.
   */
  multiply(num) {
    return new Calculator(this.value * num);
  }

  /**
   * Divides the current value by a number.
   * @param {number} num - Divisor.
   * @returns {Calculator} New Calculator instance with updated value.
   * @throws {Error} If division by zero is attempted.
   */
  divide(num) {
    if (num === 0) {
      throw new Error("Cannot divide by zero");
    }
    return new Calculator(this.value / num);
  }

  /**
   * Returns the current value.
   * @returns {number} The current value.
   */
  valueOf() {
    return this.value;
  }

  /**
   * String representation of the current value.
   * @returns {string}
   */
  toString() {
    return String(this.value);
  }
}

export { add, subtract, multiply, divide, Calculator };