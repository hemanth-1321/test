import { strict as assert } from 'assert';

/**
 * A lightweight, reusable calculator utility.
 *
 * The Calculator class provides basic arithmetic operations and can be extended
 * for more complex calculations. It is designed to be used as a standalone
 * module or imported into other parts of a larger application.
 *
 * Usage:
 *   import Calculator from './calculator.js';
 *   const calc = new Calculator();
 *   const sum = calc.add(5, 3); // 8
 *
 * All methods perform input validation and throw descriptive errors
 * for invalid arguments or mathematical domain errors (e.g., division by zero).
 */
class Calculator {
  /**
   * Adds two numbers.
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  add(a, b) {
    this._validateOperands(a, b);
    return a + b;
  }

  /**
   * Subtracts the second number from the first.
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  subtract(a, b) {
    this._validateOperands(a, b);
    return a - b;
  }

  /**
   * Multiplies two numbers.
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  multiply(a, b) {
    this._validateOperands(a, b);
    return a * b;
  }

  /**
   * Divides the first number by the second.
   * @param {number} a
   * @param {number} b
   * @returns {number}
   * @throws {Error} If division by zero.
   */
  divide(a, b) {
    this._validateOperands(a, b);
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  }

  /**
   * Raises a number to a power.
   * @param {number} base
   * @param {number} exponent
   * @returns {number}
   */
  power(base, exponent) {
    this._validateOperands(base, exponent);
    return Math.pow(base, exponent);
  }

  /**
   * Computes the square root of a number.
   * @param {number} value
   * @returns {number}
   * @throws {Error} If value is negative.
   */
  sqrt(value) {
    this._validateOperand(value);
    if (value < 0) {
      throw new Error('Square root of negative number');
    }
    return Math.sqrt(value);
  }

  /**
   * Validates that the provided operands are numbers.
   * @private
   * @param {any} a
   * @param {any} b
   */
  _validateOperands(a, b) {
    this._validateOperand(a);
    this._validateOperand(b);
  }

  /**
   * Validates that a single operand is a number.
   * @private
   * @param {any} value
   */
  _validateOperand(value) {
    if (typeof value !== 'number' || !Number.isFinite(value)) {
      throw new TypeError(`Invalid operand: ${value}. Expected a finite number.`);
    }
  }
}

export default Calculator;