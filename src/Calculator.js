export default class Calculator {
  /**
   * Adds two numbers.
   * @param {number} a - First operand.
   * @param {number} b - Second operand.
   * @returns {number} Sum of a and b.
   */
  add(a, b) {
    return a + b;
  }

  /**
   * Subtracts the second number from the first.
   * @param {number} a - First operand.
   * @param {number} b - Second operand.
   * @returns {number} Result of a - b.
   */
  subtract(a, b) {
    return a - b;
  }

  /**
   * Multiplies two numbers.
   * @param {number} a - First operand.
   * @param {number} b - Second operand.
   * @returns {number} Product of a and b.
   */
  multiply(a, b) {
    return a * b;
  }

  /**
   * Divides the first number by the second.
   * @param {number} a - Dividend.
   * @param {number} b - Divisor.
   * @returns {number} Result of a / b.
   * @throws {Error} If b is zero.
   */
  divide(a, b) {
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  }
}