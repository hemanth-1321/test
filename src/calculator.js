/**
 * Simple calculator module providing basic arithmetic operations.
 * All functions are pure, synchronous, and type-agnostic.
 * 
 * Usage:
 * import { add, subtract, multiply, divide } from './calculator.js';
 *
 * @module calculator
 */

/**
 * Adds two numbers.
 *
 * @param {number} a First operand.
 * @param {number} b Second operand.
 * @returns {number} Sum of a and b.
 */
const add = (a, b) => a + b;

/**
 * Subtracts the second number from the first.
 *
 * @param {number} a Minuend.
 * @param {number} b Subtrahend.
 * @returns {number} Difference of a and b.
 */
const subtract = (a, b) => a - b;

/**
 * Multiplies two numbers.
 *
 * @param {number} a First factor.
 * @param {number} b Second factor.
 * @returns {number} Product of a and b.
 */
const multiply = (a, b) => a * b;

/**
 * Divides the first number by the second.
 *
 * @param {number} a Dividend.
 * @param {number} b Divisor.
 * @throws {Error} If b is zero.
 * @returns {number} Quotient of a divided by b.
 */
const divide = (a, b) => {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
};

export { add, subtract, multiply, divide };