import { strict as assert } from 'assert';

/**
 * A lightweight, reusable calculator that supports basic arithmetic operations.
 *
 * @example
 * import Calculator from './calculator.js';
 *
 * const calc = new Calculator();
 * console.log(calc.add(2, 3)); // 5
 *
 * @public
 */
class Calculator {
  /**
   * Adds two numbers.
   *
   * @param {number} a - First operand.
   * @param {number} b - Second operand.
   * @returns {number} Sum of a and b.
   */
  add(a, b) {
    this._validateNumbers(a, b);
    return a + b;
  }

  /**
   * Subtracts the second number from the first.
   *
   * @param {number} a - Minuend.
   * @param {number} b - Subtrahend.
   * @returns {number} Difference of a and b.
   */
  subtract(a, b) {
    this._validateNumbers(a, b);
    return a - b;
  }

  /**
   * Multiplies two numbers.
   *
   * @param {number} a - First factor.
   * @param {number} b - Second factor.
   * @returns {number} Product of a and b.
   */
  multiply(a, b) {
    this._validateNumbers(a, b);
    return a * b;
  }

  /**
   * Divides the first number by the second.
   *
   * @param {number} a - Dividend.
   * @param {number} b - Divisor.
   * @returns {number} Quotient of a divided by b.
   *
   * @throws {Error} If b is zero.
   */
  divide(a, b) {
    this._validateNumbers(a, b);
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  }

  /**
   * Validates that the provided arguments are numbers.
   *
   * @private
   * @param {any} a
   * @param {any} b
   *
   * @throws {TypeError} If either argument is not a finite number.
   */
  _validateNumbers(a, b) {
    assert(
      Number.isFinite(a) && Number.isFinite(b),
      'Both arguments must be finite numbers'
    );
  }

  /**
   * Evaluates a simple arithmetic expression containing +, -, *, / and parentheses.
   *
   * @param {string} expression - The expression to evaluate.
   * @returns {number} The evaluated result.
   *
   * @throws {Error} If the expression is invalid.
   */
  static evaluate(expression) {
    if (typeof expression !== 'string') {
      throw new TypeError('Expression must be a string');
    }

    // Basic validation: allow digits, operators, parentheses, and spaces.
    if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
      throw new Error('Expression contains invalid characters');
    }

    // Use Function constructor for safe evaluation; no external libraries.
    try {
      // eslint-disable-next-line no-new-func
      const result = Function(`'use strict'; return (${expression})`)();
      if (!Number.isFinite(result)) {
        throw new Error('Result is not a finite number');
      }
      return result;
    } catch (err) {
      throw new Error(`Failed to evaluate expression: ${err.message}`);
    }
  }
}

export default Calculator;