'use strict';

/**
 * Adds two numbers.
 *
 * @param {number} a - First operand.
 * @param {number} b - Second operand.
 * @returns {number} Sum of a and b.
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts the second number from the first.
 *
 * @param {number} a - Minuend.
 * @param {number} b - Subtrahend.
 * @returns {number} Difference of a and b.
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers.
 *
 * @param {number} a - First factor.
 * @param {number} b - Second factor.
 * @returns {number} Product of a and b.
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides the first number by the second.
 *
 * @param {number} a - Dividend.
 * @param {number} b - Divisor.
 * @returns {number} Quotient of a divided by b.
 * @throws {Error} If b is zero.
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

export { add, subtract, multiply, divide };