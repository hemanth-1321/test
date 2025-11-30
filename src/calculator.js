/**
 * Arithmetic operations for a calculator.
 *
 * @module calculator
 * @description
 * Provides a set of pure functions for basic arithmetic operations.
 * These functions can be imported and used across the project.
 */

"use strict";

/**
 * Adds two numbers.
 *
 * @param {number} a - First operand.
 * @param {number} b - Second operand.
 * @returns {number} Sum of `a` and `b`.
 */
export function add(a, b) {
  return a + b;
}

/**
 * Subtracts the second number from the first.
 *
 * @param {number} a - Minuend.
 * @param {number} b - Subtrahend.
 * @returns {number} Difference of `a` and `b`.
 */
export function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers.
 *
 * @param {number} a - First factor.
 * @param {number} b - Second factor.
 * @returns {number} Product of `a` and `b`.
 */
export function multiply(a, b) {
  return a * b;
}

/**
 * Divides the first number by the second.
 *
 * @param {number} a - Dividend.
 * @param {number} b - Divisor.
 * @throws {Error} If `b` is zero.
 * @returns {number} Quotient of `a` divided by `b`.
 */
export function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

/**
 * Computes the remainder after division of the first number by the second.
 *
 * @param {number} a - Dividend.
 * @param {number} b - Divisor.
 * @returns {number} Remainder of `a` divided by `b`.
 */
export function modulo(a, b) {
  return a % b;
}

/**
 * Raises the first number to the power of the second.
 *
 * @param {number} a - Base.
 * @param {number} b - Exponent.
 * @returns {number} Result of `a` raised to the power `b`.
 */
export function power(a, b) {
  return Math.pow(a, b);
}

/**
 * Default export: an object containing all calculator functions.
 *
 * @type {Object}
 * @property {Function} add
 * @property {Function} subtract
 * @property {Function} multiply
 * @property {Function} divide
 * @property {Function} modulo
 * @property {Function} power
 */
export default {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
};