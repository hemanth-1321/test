"use strict";

/**
 * Simple calculator module providing basic arithmetic operations.
 *
 * @module calculator
 */

/**
 * Adds two numbers.
 *
 * @param {number} a - First operand.
 * @param {number} b - Second operand.
 * @returns {number} Sum of a and b.
 * @throws {TypeError} If arguments are not numbers.
 */
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('add: Both arguments must be numbers');
  }
  return a + b;
}

/**
 * Subtracts second number from first.
 *
 * @param {number} a - Minuend.
 * @param {number} b - Subtrahend.
 * @returns {number} Difference of a and b.
 * @throws {TypeError} If arguments are not numbers.
 */
function subtract(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('subtract: Both arguments must be numbers');
  }
  return a - b;
}

/**
 * Multiplies two numbers.
 *
 * @param {number} a
 * @param {number} b
 * @returns {number} Product of a and b.
 * @throws {TypeError} If arguments are not numbers.
 */
function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('multiply: Both arguments must be numbers');
  }
  return a * b;
}

/**
 * Divides first number by second.
 *
 * @param {number} a - Dividend.
 * @param {number} b - Divisor.
 * @returns {number} Quotient of a divided by b.
 * @throws {TypeError} If arguments are not numbers.
 * @throws {Error} If division by zero occurs.
 */
function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('divide: Both arguments must be numbers');
  }
  if (b === 0) {
    throw new Error('divide: Division by zero');
  }
  return a / b;
}

export { add, subtract, multiply, divide };
export default { add, subtract, multiply, divide };