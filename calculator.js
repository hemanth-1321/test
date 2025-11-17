export class Calculator {
  /**
   * Adds two numbers.
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  static add(a, b) {
    return a + b;
  }

  /**
   * Subtracts the second number from the first.
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  static subtract(a, b) {
    return a - b;
  }

  /**
   * Multiplies two numbers.
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  static multiply(a, b) {
    return a * b;
  }

  /**
   * Divides the first number by the second.
   * @param {number} a
   * @param {number} b
   * @returns {number}
   * @throws {Error} If division by zero is attempted.
   */
  static divide(a, b) {
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  }

  /**
   * Raises the first number to the power of the second.
   * @param {number} base
   * @param {number} exponent
   * @returns {number}
   */
  static power(base, exponent) {
    return Math.pow(base, exponent);
  }

  /**
   * Calculates the square root of a number.
   * @param {number} value
   * @returns {number}
   * @throws {Error} If the value is negative.
   */
  static sqrt(value) {
    if (value < 0) {
      throw new Error('Square root of negative number');
    }
    return Math.sqrt(value);
  }
}

/**
 * Adds two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function add(a, b) {
  return Calculator.add(a, b);
}

/**
 * Subtracts the second number from the first.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function subtract(a, b) {
  return Calculator.subtract(a, b);
}

/**
 * Multiplies two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function multiply(a, b) {
  return Calculator.multiply(a, b);
}

/**
 * Divides the first number by the second.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @throws {Error} If division by zero is attempted.
 */
export function divide(a, b) {
  return Calculator.divide(a, b);
}

/**
 * Raises the first number to the power of the second.
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 */
export function power(base, exponent) {
  return Calculator.power(base, exponent);
}

/**
 * Calculates the square root of a number.
 * @param {number} value
 * @returns {number}
 * @throws {Error} If the value is negative.
 */
export function sqrt(value) {
  return Calculator.sqrt(value);
}