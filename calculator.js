import { isFinite as isFiniteNumber, parseFloat } from 'lodash';

/**
 * Adds two numbers.
 * @param {number} a - First operand.
 * @param {number} b - Second operand.
 * @returns {number} Sum of a and b.
 * @throws {TypeError} If either argument is not a finite number.
 */
export function add(a, b) {
  if (!isFiniteNumber(a) || !isFiniteNumber(b)) {
    throw new TypeError('Both arguments must be finite numbers');
  }
  return a + b;
}

/**
 * Subtracts the second number from the first.
 * @param {number} a - Minuend.
 * @param {number} b - Subtrahend.
 * @returns {number} Difference of a and b.
 * @throws {TypeError} If either argument is not a finite number.
 */
export function subtract(a, b) {
  if (!isFiniteNumber(a) || !isFiniteNumber(b)) {
    throw new TypeError('Both arguments must be finite numbers');
  }
  return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a - First factor.
 * @param {number} b - Second factor.
 * @returns {number} Product of a and b.
 * @throws {TypeError} If either argument is not a finite number.
 */
export function multiply(a, b) {
  if (!isFiniteNumber(a) || !isFiniteNumber(b)) {
    throw new TypeError('Both arguments must be finite numbers');
  }
  return a * b;
}

/**
 * Divides the first number by the second.
 * @param {number} a - Dividend.
 * @param {number} b - Divisor.
 * @returns {number} Quotient of a divided by b.
 * @throws {TypeError} If either argument is not a finite number.
 * @throws {Error} If division by zero is attempted.
 */
export function divide(a, b) {
  if (!isFiniteNumber(a) || !isFiniteNumber(b)) {
    throw new TypeError('Both arguments must be finite numbers');
  }
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

/**
 * Evaluates a simple arithmetic expression string.
 * Supports +, -, *, / and parentheses.
 * @param {string} expr - Expression to evaluate.
 * @returns {number} Result of the evaluation.
 * @throws {SyntaxError} If the expression is invalid.
 */
export function evaluate(expr) {
  if (typeof expr !== 'string') {
    throw new TypeError('Expression must be a string');
  }
  // Simple sanitization: allow digits, operators, whitespace, and parentheses
  if (!/^[\d+\-*/().\s]+$/.test(expr)) {
    throw new SyntaxError('Expression contains invalid characters');
  }
  try {
    // eslint-disable-next-line no-new-func
    const result = new Function(`return (${expr})`)();
    if (!isFiniteNumber(result)) {
      throw new Error('Result is not a finite number');
    }
    return result;
  } catch (e) {
    throw new SyntaxError(`Invalid expression: ${e.message}`);
  }
}