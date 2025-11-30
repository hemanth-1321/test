/**
 * src/calculator.js
 *
 * A minimal, production‑ready arithmetic utility module.
 * Provides basic operations: addition, subtraction, multiplication, and division.
 * All functions perform type validation and throw descriptive errors for invalid inputs.
 */

'use strict';

/**
 * Adds two numbers.
 *
 * @param {number} a - The first addend.
 * @param {number} b - The second addend.
 * @returns {number} The sum of `a` and `b`.
 * @throws {TypeError} If either argument is not a finite number.
 */
export function add(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError('add: both arguments must be finite numbers');
  }
  return a + b;
}

/**
 * Subtracts the second number from the first.
 *
 * @param {number} a - The minuend.
 * @param {number} b - The subtrahend.
 * @returns {number} The difference of `a` and `b`.
 * @throws {TypeError} If either argument is not a finite number.
 */
export function subtract(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError('subtract: both arguments must be finite numbers');
  }
  return a - b;
}

/**
 * Multiplies two numbers.
 *
 * @param {number} a - The first factor.
 * @param {number} b - The second factor.
 * @returns {number} The product of `a` and `b`.
 * @throws {TypeError} If either argument is not a finite number.
 */
export function multiply(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError('multiply: both arguments must be finite numbers');
  }
  return a * b;
}

/**
 * Divides the first number by the second.
 *
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number} The quotient of `a` divided by `b`.
 * @throws {TypeError} If either argument is not a finite number.
 * @throws {Error} If division by zero is attempted.
 */
export function divide(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError('divide: both arguments must be finite numbers');
  }
  if (b === 0) {
    throw new Error('divide: division by zero');
  }
  return a / b;
}

/**
 * Export a default object for convenience when importing all operations.
 */
export default { add, subtract, multiply, divide };