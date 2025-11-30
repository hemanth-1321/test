"use strict";

/**
 * Adds two numbers.
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const add = (a, b) => a + b;

/**
 * Subtracts the second number from the first.
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const subtract = (a, b) => a - b;

/**
 * Multiplies two numbers.
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const multiply = (a, b) => a * b;

/**
 * Divides the first number by the second.
 *
 * @param {number} a
 * @param {number} b
 * @throws {Error} If division by zero is attempted.
 * @returns {number}
 */
const divide = (a, b) => {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
};

/**
 * Performs a calculation based on the provided operation.
 *
 * @param {string} op One of '+', '-', '*', '/'.
 * @param {number} a
 * @param {number} b
 * @throws {Error} If the operation is unsupported.
 * @returns {number}
 */
const calculate = (op, a, b) => {
  switch (op) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      throw new Error(`Unsupported operation: ${op}`);
  }
};

export { add, subtract, multiply, divide, calculate };