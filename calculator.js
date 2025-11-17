"use strict";

/**
 * Adds two numbers.
 * @param {number} a - The first operand.
 * @param {number} b - The second operand.
 * @returns {number} The sum of a and b.
 * @throws {TypeError} If either argument is not a number.
 */
export const add = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("add: Both arguments must be numbers");
  }
  return a + b;
};

/**
 * Subtracts the second number from the first.
 * @param {number} a - The minuend.
 * @param {number} b - The subtrahend.
 * @returns {number} The difference a - b.
 * @throws {TypeError} If either argument is not a number.
 */
export const subtract = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("subtract: Both arguments must be numbers");
  }
  return a - b;
};

/**
 * Multiplies two numbers.
 * @param {number} a - The first factor.
 * @param {number} b - The second factor.
 * @returns {number} The product of a and b.
 * @throws {TypeError} If either argument is not a number.
 */
export const multiply = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("multiply: Both arguments must be numbers");
  }
  return a * b;
};

/**
 * Divides the first number by the second.
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number} The quotient a / b.
 * @throws {TypeError} If either argument is not a number.
 * @throws {RangeError} If b is zero.
 */
export const divide = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("divide: Both arguments must be numbers");
  }
  if (b === 0) {
    throw new RangeError("divide: Division by zero");
  }
  return a / b;
};