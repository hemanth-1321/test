'use strict';

/**
 * Adds two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function add(a, b) {
  validateOperands(a, b);
  return a + b;
}

/**
 * Subtracts b from a.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function subtract(a, b) {
  validateOperands(a, b);
  return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function multiply(a, b) {
  validateOperands(a, b);
  return a * b;
}

/**
 * Divides a by b.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @throws {Error} if b is zero.
 */
export function divide(a, b) {
  validateOperands(a, b);
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
}

/**
 * Validates that operands are finite numbers.
 * @private
 * @param {any} a
 * @param {any} b
 * @throws {TypeError}
 */
function validateOperands(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError('Operands must be finite numbers.');
  }
}

export default {
  add,
  subtract,
  multiply,
  divide,
};