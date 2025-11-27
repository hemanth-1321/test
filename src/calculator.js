"use strict";

/**
 * A simple calculator that performs basic arithmetic operations.
 * This module exports both a Calculator class and standalone functions
 * for ease of use in different contexts.
 */

/**
 * Calculator class encapsulating arithmetic methods.
 */
class Calculator {
  /**
   * Adds two numbers.
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  add(a, b) {
    return a + b;
  }

  /**
   * Subtracts the second number from the first.
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  subtract(a, b) {
    return a - b;
  }

  /**
   * Multiplies two numbers.
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  multiply(a, b) {
    return a * b;
  }

  /**
   * Divides the first number by the second.
   * @param {number} a
   * @param {number} b
   * @returns {number}
   * @throws {Error} If division by zero is attempted.
   */
  divide(a, b) {
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  }
}

/**
 * Standalone utility functions for quick use without instantiating the class.
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
export const calculator = new Calculator();