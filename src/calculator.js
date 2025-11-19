'use strict';

/**
 * Performs addition of two numeric values.
 *
 * @param {number} a - The first operand.
 * @param {number} b - The second operand.
 * @returns {number} The sum of `a` and `b`.
 * @throws {TypeError} If either argument is not a finite number.
 */
export function add(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError('add: both arguments must be finite numbers');
  }
  return a + b;
}

/**
 * Performs subtraction of two numeric values.
 *
 * @param {number} a - The minuend.
 * @param {number} b - The subtrahend.
 * @returns {number} The difference `a - b`.
 * @throws {TypeError} If either argument is not a finite number.
 */
export function subtract(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError('subtract: both arguments must be finite numbers');
  }
  return a - b;
}

/**
 * Performs multiplication of two numeric values.
 *
 * @param {number} a - The first factor.
 * @param {number} b - The second factor.
 * @returns {number} The product of `a` and `b`.
 * @throws {TypeError} If either argument is not a finite number.
 */
export function multiply(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError('multiply: both arguments must be finite numbers');
  }
  return a * b;
}

/**
 * Performs division of two numeric values.
 *
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number} The quotient `a / b`.
 * @throws {TypeError} If either argument is not a finite number.
 * @throws {Error} If `b` is zero.
 */
export function divide(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError('divide: both arguments must be finite numbers');
  }
  if (b === 0) {
    throw new Error('divide: division by zero');
  }
  return a / b;
}

/**
 * Evaluates a simple arithmetic expression containing two operands and an operator.
 * Supported operators: +, -, *, /
 *
 * @param {string} expression - The expression to evaluate, e.g., "3 + 4".
 * @returns {number} The result of the expression.
 * @throws {Error} If the expression is invalid or contains unsupported operators.
 */
export function evaluate(expression) {
  if (typeof expression !== 'string') {
    throw new TypeError('evaluate: expression must be a string');
  }

  const trimmed = expression.trim();
  const match = trimmed.match(/^(-?\d+\.?\d*)\s*([\+\-\*\/])\s*(-?\d+\.?\d*)$/);

  if (!match) {
    throw new Error(`evaluate: invalid expression "${expression}"`);
  }

  const [, leftStr, operator, rightStr] = match;
  const left = Number(leftStr);
  const right = Number(rightStr);

  switch (operator) {
    case '+':
      return add(left, right);
    case '-':
      return subtract(left, right);
    case '*':
      return multiply(left, right);
    case '/':
      return divide(left, right);
    default:
      // This branch should never be reached due to regex validation
      throw new Error(`evaluate: unsupported operator "${operator}"`);
  }
}

/**
 * A simple Calculator API exposing arithmetic operations.
 *
 * @module calculator
 */
export default {
  add,
  subtract,
  multiply,
  divide,
  evaluate,
};