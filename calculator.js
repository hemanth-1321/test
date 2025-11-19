/**
 * @file calculator.js
 * @description A minimal yet production‑ready calculator module that supports
 * addition, subtraction, multiplication, and division.
 *
 * This module uses ES6 module syntax and includes basic input validation
 * and error handling to ensure reliability in a production environment.
 */

'use strict';

/**
 * Validates that the provided arguments are numbers.
 * @private
 * @param {any} a - First operand.
 * @param {any} b - Second operand.
 * @throws {TypeError} If either operand is not a number.
 */
function _validateOperands(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both operands must be numbers.');
  }
}

/**
 * Adds two numbers.
 * @param {number} a - First addend.
 * @param {number} b - Second addend.
 * @returns {number} The sum of `a` and `b`.
 */
export function add(a, b) {
  _validateOperands(a, b);
  return a + b;
}

/**
 * Subtracts the second number from the first.
 * @param {number} a - Minuend.
 * @param {number} b - Subtrahend.
 * @returns {number} The difference of `a` and `b`.
 */
export function subtract(a, b) {
  _validateOperands(a, b);
  return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a - First factor.
 * @param {number} b - Second factor.
 * @returns {number} The product of `a` and `b`.
 */
export function multiply(a, b) {
  _validateOperands(a, b);
  return a * b;
}

/**
 * Divides the first number by the second.
 * @param {number} a - Dividend.
 * @param {number} b - Divisor.
 * @returns {number} The quotient of `a` divided by `b`.
 * @throws {Error} If division by zero is attempted.
 */
export function divide(a, b) {
  _validateOperands(a, b);
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
}

/**
 * Default export – an object containing all calculator operations.
 */
export default {
  add,
  subtract,
  multiply,
  divide,
};