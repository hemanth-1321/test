"use strict";

/**
 * Simple calculator module for basic arithmetic operations.
 * @module calculator
 */

/**
 * Adds two numbers.
 * @param {number} a - First operand.
 * @param {number} b - Second operand.
 * @returns {number} Sum of a and b.
 */
export function add(a, b) {
  return Number(a) + Number(b);
}

/**
 * Subtracts second number from first.
 * @param {number} a - Minuend.
 * @param {number} b - Subtrahend.
 * @returns {number} Difference.
 */
export function subtract(a, b) {
  return Number(a) - Number(b);
}

/**
 * Multiplies two numbers.
 * @param {number} a - First factor.
 * @param {number} b - Second factor.
 * @returns {number} Product.
 */
export function multiply(a, b) {
  return Number(a) * Number(b);
}

/**
 * Divides first number by second.
 * @param {number} a - Dividend.
 * @param {number} b - Divisor.
 * @throws {Error} If divisor is zero.
 * @returns {number} Quotient.
 */
export function divide(a, b) {
  if (Number(b) === 0) {
    throw new Error("Division by zero");
  }
  return Number(a) / Number(b);
}

export default {
  add,
  subtract,
  multiply,
  divide,
};