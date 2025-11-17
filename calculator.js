'use strict';

/**
 * Adds two numbers.
 * @param {number} a First operand.
 * @param {number} b Second operand.
 * @returns {number} Sum of a and b.
 */
export function add(a, b) {
  return a + b;
}

/**
 * Subtracts the second number from the first.
 * @param {number} a Minuend.
 * @param {number} b Subtrahend.
 * @returns {number} Difference.
 */
export function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a First factor.
 * @param {number} b Second factor.
 * @returns {number} Product.
 */
export function multiply(a, b) {
  return a * b;
}

/**
 * Divides the first number by the second.
 * @param {number} a Dividend.
 * @param {number} b Divisor.
 * @returns {number} Quotient.
 * @throws {Error} If divisor is zero.
 */
export function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

/**
 * Raises a number to a given exponent.
 * @param {number} a Base.
 * @param {number} exponent Exponent.
 * @returns {number} Result of a ** exponent.
 */
export function power(a, exponent) {
  return Math.pow(a, exponent);
}

/**
 * Computes the remainder of division.
 * @param {number} a Dividend.
 * @param {number} b Divisor.
 * @returns {number} Remainder.
 * @throws {Error} If divisor is zero.
 */
export function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero');
  }
  return a % b;
}

/**
 * Validates that a value is a finite number.
 * @param {*} value Value to test.
 * @returns {boolean} True if value is a finite number, false otherwise.
 */
export function isNumber(value) {
  return typeof value === 'number' && Number.isFinite(value);
}

/**
 * Aggregated calculator utility.
 */
const calculator = {
  add,
  subtract,
  multiply,
  divide,
  power,
  modulo,
  isNumber,
};

export default calculator;