'use strict';

/**
 * @module calculator
 * Provides basic arithmetic operations.
 */

/**
 * Adds two numbers.
 * @param {number} a - First operand.
 * @param {number} b - Second operand.
 * @returns {number} The sum of a and b.
 */
export function add(a, b) {
  return Number(a) + Number(b);
}

/**
 * Subtracts the second number from the first.
 * @param {number} a - Minuend.
 * @param {number} b - Subtrahend.
 * @returns {number} The difference of a and b.
 */
export function subtract(a, b) {
  return Number(a) - Number(b);
}

/**
 * Multiplies two numbers.
 * @param {number} a - First factor.
 * @param {number} b - Second factor.
 * @returns {number} The product of a and b.
 */
export function multiply(a, b) {
  return Number(a) * Number(b);
}

/**
 * Divides the first number by the second.
 * @param {number} a - Dividend.
 * @param {number} b - Divisor.
 * @returns {number} The quotient of a divided by b.
 * @throws {Error} If division by zero is attempted.
 */
export function divide(a, b) {
  if (Number(b) === 0) {
    throw new Error('Division by zero');
  }
  return Number(a) / Number(b);
}