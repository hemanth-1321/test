"use strict";

/**
 * @module calculator
 *
 * Provides basic arithmetic operations: addition, subtraction,
 * multiplication, and division. All functions validate input
 * types and throw descriptive errors for invalid usage.
 */

/**
 * Validates that the provided arguments are numbers.
 *
 * @private
 * @param {...any} args - Values to validate.
 * @throws {TypeError} If any argument is not a finite number.
 */
function validateNumbers(...args) {
  for (const arg of args) {
    if (typeof arg !== "number" || !Number.isFinite(arg)) {
      throw new TypeError(
        `Expected a finite number, but received ${JSON.stringify(arg)}`
      );
    }
  }
}

/**
 * Adds two numbers.
 *
 * @param {number} a - First operand.
 * @param {number} b - Second operand.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
  validateNumbers(a, b);
  return a + b;
}

/**
 * Subtracts the second number from the first.
 *
 * @param {number} a - Minuend.
 * @param {number} b - Subtrahend.
 * @returns {number} The difference of a and b.
 */
function subtract(a, b) {
  validateNumbers(a, b);
  return a - b;
}

/**
 * Multiplies two numbers.
 *
 * @param {number} a - First factor.
 * @param {number} b - Second factor.
 * @returns {number} The product of a and b.
 */
function multiply(a, b) {
  validateNumbers(a, b);
  return a * b;
}

/**
 * Divides the first number by the second.
 *
 * @param {number} a - Dividend.
 * @param {number} b - Divisor.
 * @returns {number} The quotient of a and b.
 * @throws {Error} If division by zero is attempted.
 */
function divide(a, b) {
  validateNumbers(a, b);
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

export { add, subtract, multiply, divide };
export default { add, subtract, multiply, divide };