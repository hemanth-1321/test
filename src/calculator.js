/**
 * src/calculator.js
 *
 * A lightweight, production‑ready calculator module.
 *
 * Provides:
 *  - A `Calculator` class with instance methods for basic arithmetic.
 *  - Standalone utility functions for the same operations.
 *
 * Usage:
 *  * import Calculator, { add, subtract, multiply, divide } from './calculator.js';
 *
 * const calc = new Calculator();
 * console.log(calc.add(2, 3)); // 5
 *
 * console.log(add(4, 5)); // 9
 *  *
 * The module is written as an ES module and can be used in both
 * browser (via bundler) and Node.js (v14+ with `"type": "module"`).
 */

class Calculator {
  /**
   * Adds two numbers.
   * @param {number} a - First operand.
   * @param {number} b - Second operand.
   * @returns {number}
   */
  add(a, b) {
    return a + b;
  }

  /**
   * Subtracts second number from first.
   * @param {number} a - Minuend.
   * @param {number} b - Subtrahend.
   * @returns {number}
   */
  subtract(a, b) {
    return a - b;
  }

  /**
   * Multiplies two numbers.
   * @param {number} a - First factor.
   * @param {number} b - Second factor.
   * @returns {number}
   */
  multiply(a, b) {
    return a * b;
  }

  /**
   * Divides first number by second.
   * @param {number} a - Dividend.
   * @param {number} b - Divisor.
   * @returns {number}
   * @throws {Error} If division by zero.
   */
  divide(a, b) {
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  }
}

/**
 * Standalone arithmetic functions.
 * They mirror the instance methods of `Calculator` for convenience.
 */
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
};

export default Calculator;
export { add, subtract, multiply, divide };