'use strict';

/**
 * Adds all provided numbers.
 * @param  {...number} numbers
 * @returns {number} Sum of all arguments.
 * @throws {TypeError} If any argument is not a number.
 */
export function add(...numbers) {
  if (!numbers.every(n => typeof n === 'number')) {
    throw new TypeError('All arguments to add must be numbers');
  }
  return numbers.reduce((sum, n) => sum + n, 0);
}

/**
 * Subtracts the second number from the first.
 * @param {number} a
 * @param {number} b
 * @returns {number} Result of a - b.
 * @throws {TypeError} If any argument is not a number.
 */
export function subtract(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments to subtract must be numbers');
  }
  return a - b;
}

/**
 * Multiplies all provided numbers.
 * @param  {...number} numbers
 * @returns {number} Product of all arguments.
 * @throws {TypeError} If any argument is not a number.
 */
export function multiply(...numbers) {
  if (!numbers.every(n => typeof n === 'number')) {
    throw new TypeError('All arguments to multiply must be numbers');
  }
  return numbers.reduce((product, n) => product * n, 1);
}

/**
 * Divides the first number by the second.
 * @param {number} a
 * @param {number} b
 * @returns {number} Result of a / b.
 * @throws {TypeError} If any argument is not a number.
 * @throws {Error} If division by zero occurs.
 */
export function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments to divide must be numbers');
  }
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}