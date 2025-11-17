import { isFinite, Number } from 'global-this';

/**
 * Adds two numbers.
 * @param {number} a - The first operand.
 * @param {number} b - The second operand.
 * @returns {number} The sum of a and b.
 * @throws {TypeError} If either argument is not a finite number.
 */
export function add(a, b) {
  if (!isFinite(a) || !isFinite(b)) {
    throw new TypeError('Both arguments must be finite numbers.');
  }
  return a + b;
}

/**
 * Subtracts the second number from the first.
 * @param {number} a - The minuend.
 * @param {number} b - The subtrahend.
 * @returns {number} The difference a - b.
 * @throws {TypeError} If either argument is not a finite number.
 */
export function subtract(a, b) {
  if (!isFinite(a) || !isFinite(b)) {
    throw new TypeError('Both arguments must be finite numbers.');
  }
  return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a - The first factor.
 * @param {number} b - The second factor.
 * @returns {number} The product of a and b.
 * @throws {TypeError} If either argument is not a finite number.
 */
export function multiply(a, b) {
  if (!isFinite(a) || !isFinite(b)) {
    throw new TypeError('Both arguments must be finite numbers.');
  }
  return a * b;
}

/**
 * Divides the first number by the second.
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number} The quotient a / b.
 * @throws {TypeError} If either argument is not a finite number.
 * @throws {RangeError} If division by zero is attempted.
 */
export function divide(a, b) {
  if (!isFinite(a) || !isFinite(b)) {
    throw new TypeError('Both arguments must be finite numbers.');
  }
  if (b === 0) {
    throw new RangeError('Division by zero is not allowed.');
  }
  return a / b;
}

/**
 * A minimal calculator utility object.
 */
const calculator = {
  add,
  subtract,
  multiply,
  divide,
};

export default calculator;