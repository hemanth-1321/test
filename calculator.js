"use strict";

/**
 * Simple calculator module providing basic arithmetic operations.
 * @module calculator
 */

/**
 * Adds two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts b from a.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides a by b.
 * @param {number} a
 * @param {number} b
 * @throws {Error} If divisor is zero.
 * @returns {number}
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

/**
 * Performs a calculation based on the operator.
 * @param {string} operator One of '+', '-', '*', '/'.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @throws {Error} If operator is unsupported.
 */
function calculate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      throw new Error(`Unsupported operator: ${operator}`);
  }
}

export {
  add,
  subtract,
  multiply,
  divide,
  calculate,
};