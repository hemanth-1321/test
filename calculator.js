'use strict';

/**
 * Basic arithmetic operations.
 * @module calculator
 */

/**
 * Validates that the provided arguments are numbers.
 * @param {number} a - First operand.
 * @param {number} b - Second operand.
 * @throws {TypeError} If either operand is not a finite number.
 */
function validateOperands(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' ||
      !Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError('Both operands must be finite numbers.');
  }
}

/**
 * Calculator class providing static methods for basic arithmetic.
 */
class Calculator {
  /**
   * Adds two numbers.
   * @param {number} a - First operand.
   * @param {number} b - Second operand.
   * @returns {number} Sum of a and b.
   */
  static add(a, b) {
    validateOperands(a, b);
    return a + b;
  }

  /**
   * Subtracts second number from first.
   * @param {number} a - Minuend.
   * @param {number} b - Subtrahend.
   * @returns {number} Difference of a and b.
   */
  static subtract(a, b) {
    validateOperands(a, b);
    return a - b;
  }

  /**
   * Multiplies two numbers.
   * @param {number} a - First factor.
   * @param {number} b - Second factor.
   * @returns {number} Product of a and b.
   */
  static multiply(a, b) {
    validateOperands(a, b);
    return a * b;
  }

  /**
   * Divides first number by second.
   * @param {number} a - Dividend.
   * @param {number} b - Divisor.
   * @returns {number} Quotient of a divided by b.
   * @throws {Error} If division by zero is attempted.
   */
  static divide(a, b) {
    validateOperands(a, b);
    if (b === 0) {
      throw new Error('Division by zero is not allowed.');
    }
    return a / b;
  }
}

/**
 * Individual function exports for convenience.
 */
const add = Calculator.add;
const subtract = Calculator.subtract;
const multiply = Calculator.multiply;
const divide = Calculator.divide;

export { Calculator, add, subtract, multiply, divide };
export default Calculator;