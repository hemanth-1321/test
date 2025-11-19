/**
 * Basic calculator module providing arithmetic operations.
 * This module can be imported by other parts of the application to perform
 * common mathematical calculations. All functions are pure and synchronous.
 *
 * @module calculator
 */

/**
 * Adds two numbers.
 *
 * @param {number} a - First operand.
 * @param {number} b - Second operand.
 * @returns {number} Sum of a and b.
 */
export function add(a, b) {
  return a + b;
}

/**
 * Subtracts the second number from the first.
 *
 * @param {number} a - Minuend.
 * @param {number} b - Subtrahend.
 * @returns {number} Difference of a and b.
 */
export function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers.
 *
 * @param {number} a - First operand.
 * @param {number} b - Second operand.
 * @returns {number} Product of a and b.
 */
export function multiply(a, b) {
  return a * b;
}

/**
 * Divides the first number by the second.
 *
 * @param {number} a - Dividend.
 * @param {number} b - Divisor.
 * @returns {number} Quotient of a divided by b.
 * @throws {Error} If b is zero.
 */
export function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
}

/**
 * Raises a number to the power of an exponent.
 *
 * @param {number} base - Base number.
 * @param {number} exponent - Exponent.
 * @returns {number} Result of base raised to exponent.
 */
export function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Calculates the square root of a number.
 *
 * @param {number} value - Value to find the square root of.
 * @returns {number} Square root of the value.
 * @throws {Error} If value is negative.
 */
export function sqrt(value) {
  if (value < 0) {
    throw new Error('Cannot calculate square root of a negative number.');
  }
  return Math.sqrt(value);
}

/**
 * Calculates the absolute value of a number.
 *
 * @param {number} value - Value to find the absolute of.
 * @returns {number} Absolute value.
 */
export function abs(value) {
  return Math.abs(value);
}

/**
 * Calculator namespace grouping all operations for convenience.
 */
const Calculator = {
  add,
  subtract,
  multiply,
  divide,
  power,
  sqrt,
  abs
};

export default Calculator;