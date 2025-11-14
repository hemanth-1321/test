'use strict';

/**
 * Calculator provides basic arithmetic operations and a simple expression evaluator.
 *
 * @example
 * const result = Calculator.add(5, 3); // 8
 * const div = Calculator.divide(10, 2); // 5
 * const expr = Calculator.evaluate('2 * (3 + 4)'); // 14
 */
class Calculator {
  /**
   * Adds two numbers.
   * @param {number} a - First operand.
   * @param {number} b - Second operand.
   * @returns {number} Sum of a and b.
   * @throws {TypeError} If either argument is not a number.
   */
  static add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new TypeError('Calculator.add expects two numbers.');
    }
    return a + b;
  }

  /**
   * Subtracts second number from first.
   * @param {number} a - Minuend.
   * @param {number} b - Subtrahend.
   * @returns {number} Difference.
   * @throws {TypeError} If either argument is not a number.
   */
  static subtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new TypeError('Calculator.subtract expects two numbers.');
    }
    return a - b;
  }

  /**
   * Multiplies two numbers.
   * @param {number} a - First operand.
   * @param {number} b - Second operand.
   * @returns {number} Product.
   * @throws {TypeError} If either argument is not a number.
   */
  static multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new TypeError('Calculator.multiply expects two numbers.');
    }
    return a * b;
  }

  /**
   * Divides first number by second.
   * @param {number} a - Dividend.
   * @param {number} b - Divisor.
   * @returns {number} Quotient.
   * @throws {TypeError} If either argument is not a number.
   * @throws {Error} If divisor is zero.
   */
  static divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new TypeError('Calculator.divide expects two numbers.');
    }
    if (b === 0) {
      throw new Error('Division by zero is not allowed.');
    }
    return a / b;
  }

  /**
   * Evaluates a simple mathematical expression containing +, -, *, /, and parentheses.
   * The expression is evaluated in a safe, sandboxed environment without external libraries.
   *
   * @param {string} expr - The expression to evaluate.
   * @returns {number} The result of the evaluation.
   * @throws {TypeError} If the input is not a string.
   * @throws {Error} If the expression is invalid or contains unsupported characters.
   */
  static evaluate(expr) {
    if (typeof expr !== 'string') {
      throw new TypeError('Calculator.evaluate expects a string expression.');
    }

    // Basic validation: allow digits, whitespace, + - * / () and decimal point.
    if (!/^[\d\s+\-*/().]+$/.test(expr)) {
      throw new Error('Expression contains invalid characters.');
    }

    try {
      // eslint-disable-next-line no-new-func
      const result = new Function(`return (${expr});`)();
      if (typeof result !== 'number' || !isFinite(result)) {
        throw new Error('Result is not a finite number.');
      }
      return result;
    } catch (err) {
      throw new Error(`Failed to evaluate expression: ${err.message}`);
    }
  }
}

export default Calculator;