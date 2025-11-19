/**
 * A simple calculator module providing basic arithmetic operations.
 *
 * @module calculator
 */

export class Calculator {
  /**
   * Adds two numbers.
   *
   * @param {number} a - First operand.
   * @param {number} b - Second operand.
   * @returns {number} Sum of a and b.
   */
  static add(a, b) {
    this._validateOperands(a, b);
    return a + b;
  }

  /**
   * Subtracts b from a.
   *
   * @param {number} a - Minuend.
   * @param {number} b - Subtrahend.
   * @returns {number} Difference of a and b.
   */
  static subtract(a, b) {
    this._validateOperands(a, b);
    return a - b;
  }

  /**
   * Multiplies two numbers.
   *
   * @param {number} a - First factor.
   * @param {number} b - Second factor.
   * @returns {number} Product of a and b.
   */
  static multiply(a, b) {
    this._validateOperands(a, b);
    return a * b;
  }

  /**
   * Divides a by b.
   *
   * @param {number} a - Dividend.
   * @param {number} b - Divisor.
   * @returns {number} Quotient of a divided by b.
   * @throws {Error} If b is zero.
   */
  static divide(a, b) {
    this._validateOperands(a, b);
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  }

  /**
   * Raises a to the power of b.
   *
   * @param {number} a - Base.
   * @param {number} b - Exponent.
   * @returns {number} Result of a ** b.
   */
  static pow(a, b) {
    this._validateOperands(a, b);
    return Math.pow(a, b);
  }

  /**
   * Computes the square root of a.
   *
   * @param {number} a - Number to take the square root of.
   * @returns {number} Square root of a.
   * @throws {Error} If a is negative.
   */
  static sqrt(a) {
    if (typeof a !== 'number' || Number.isNaN(a)) {
      throw new TypeError('Operand must be a number');
    }
    if (a < 0) {
      throw new Error('Cannot take square root of negative number');
    }
    return Math.sqrt(a);
  }

  /**
   * Validates that operands are numbers.
   *
   * @private
   * @param {...any} operands - Operands to validate.
   * @throws {TypeError} If any operand is not a number.
   */
  static _validateOperands(...operands) {
    for (const op of operands) {
      if (typeof op !== 'number' || Number.isNaN(op)) {
        throw new TypeError('Operands must be numbers');
      }
    }
  }
}

export default Calculator;