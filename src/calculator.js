'use strict';

/**
 * Adds two numbers.
 *
 * @param {number} a - First operand.
 * @param {number} b - Second operand.
 * @returns {number} Sum of a and b.
 * @throws {TypeError} If either argument is not a number.
 */
export function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('add expects two numbers');
  }
  return a + b;
}

/**
 * Subtracts the second number from the first.
 *
 * @param {number} a - Minuend.
 * @param {number} b - Subtrahend.
 * @returns {number} Difference of a and b.
 * @throws {TypeError} If either argument is not a number.
 */
export function subtract(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('subtract expects two numbers');
  }
  return a - b;
}

/**
 * Multiplies two numbers.
 *
 * @param {number} a - First factor.
 * @param {number} b - Second factor.
 * @returns {number} Product of a and b.
 * @throws {TypeError} If either argument is not a number.
 */
export function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('multiply expects two numbers');
  }
  return a * b;
}

/**
 * Divides the first number by the second.
 *
 * @param {number} a - Dividend.
 * @param {number} b - Divisor.
 * @returns {number} Quotient of a divided by b.
 * @throws {TypeError} If either argument is not a number.
 * @throws {Error} If division by zero is attempted.
 */
export function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('divide expects two numbers');
  }
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}