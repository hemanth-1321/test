'use strict';

/**
 * @module calculator
 *
 * A lightweight, production‑ready calculator module that provides
 * basic arithmetic operations. All functions perform strict input
 * validation and return results as JavaScript Numbers.
 */

/**
 * Validates that the provided arguments are finite numbers.
 *
 * @private
 * @param {...*} args - Arguments to validate.
 * @throws {TypeError} If any argument is not a finite number.
 */
function validateNumbers(...args) {
  for (const arg of args) {
    if (typeof arg !== 'number' || !Number.isFinite(arg)) {
      throw new TypeError(
        `Expected a finite number, but received ${JSON.stringify(arg)}`
      );
    }
  }
}

/**
 * Adds two numbers.
 *
 * @param {number} a - First operand.
 * @param {number} b - Second operand.
 * @returns {number} The sum of a and b.
 */
export function add(a, b) {
  validateNumbers(a, b);
  return a + b;
}

/**
 * Subtracts the second number from the first.
 *
 * @param {number} a - Minuend.
 * @param {number} b - Subtrahend.
 * @returns {number} The difference of a and b.
 */
export function subtract(a, b) {
  validateNumbers(a, b);
  return a - b;
}

/**
 * Multiplies two numbers.
 *
 * @param {number} a - First factor.
 * @param {number} b - Second factor.
 * @returns {number} The product of a and b.
 */
export function multiply(a, b) {
  validateNumbers(a, b);
  return a * b;
}

/**
 * Divides the first number by the second.
 *
 * @param {number} a - Dividend.
 * @param {number} b - Divisor.
 * @returns {number} The quotient of a divided by b.
 * @throws {Error} If division by zero is attempted.
 */
export function divide(a, b) {
  validateNumbers(a, b);
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
}

/**
 * Evaluates a simple arithmetic expression consisting of numbers
 * and the operators +, -, *, /, and parentheses.
 *
 * The function uses the Function constructor to evaluate the
 * expression in a sandboxed context, preventing access to
 * global objects. It performs basic validation to ensure the
 * expression contains only allowed characters.
 *
 * @param {string} expr - The arithmetic expression to evaluate.
 * @returns {number} The result of the evaluated expression.
 * @throws {TypeError} If expr is not a string.
 * @throws {SyntaxError} If the expression contains invalid characters.
 */
export function evaluate(expr) {
  if (typeof expr !== 'string') {
    throw new TypeError(`Expression must be a string, received ${typeof expr}`);
  }

  // Allow digits, decimal points, whitespace, parentheses, and operators
  const allowedPattern = /^[\d\s.+\-*/()]+$/;
  if (!allowedPattern.test(expr)) {
    throw new SyntaxError('Expression contains invalid characters.');
  }

  // Evaluate safely
  try {
    // eslint-disable-next-line no-new-func
    const result = new Function(`return (${expr});`)();
    if (typeof result !== 'number' || !Number.isFinite(result)) {
      throw new Error('Result is not a finite number.');
    }
    return result;
  } catch (err) {
    throw new Error(`Failed to evaluate expression: ${err.message}`);
  }
}

/**
 * A convenience class that encapsulates the calculator functions.
 *
 * @class Calculator
 */
export class Calculator {
  /**
   * Adds two numbers.
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  add(a, b) {
    return add(a, b);
  }

  /**
   * Subtracts the second number from the first.
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  subtract(a, b) {
    return subtract(a, b);
  }

  /**
   * Multiplies two numbers.
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  multiply(a, b) {
    return multiply(a, b);
  }

  /**
   * Divides the first number by the second.
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  divide(a, b) {
    return divide(a, b);
  }

  /**
   * Evaluates an arithmetic expression.
   * @param {string} expr
   * @returns {number}
   */
  evaluate(expr) {
    return evaluate(expr);
  }
}