"use strict";

/**
 * A minimal, reusable calculator module.
 *
 * Provides basic arithmetic operations with error handling.
 *
 * @module calculator
 */

/**
 * Adds two numbers.
 *
 * @param {number} a - First operand.
 * @param {number} b - Second operand.
 * @returns {number} Sum of a and b.
 */
export function add(a, b) {
  return a + b;
}

/**
 * Subtracts the second number from the first.
 *
 * @param {number} a - Minuend.
 * @param {number} b - Subtrahend.
 * @returns {number} Difference of a and b.
 */
export function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers.
 *
 * @param {number} a - First factor.
 * @param {number} b - Second factor.
 * @returns {number} Product of a and b.
 */
export function multiply(a, b) {
  return a * b;
}

/**
 * Divides the first number by the second.
 *
 * @param {number} a - Dividend.
 * @param {number} b - Divisor.
 * @returns {number} Quotient of a divided by b.
 * @throws {Error} If b is zero.
 */
export function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

/**
 * Calculator class that encapsulates basic operations.
 *
 * @example
 * const calc = new Calculator();
 * calc.add(2, 3); // 5
 */
export class Calculator {
  /**
   * @param {number} [initial=0] - Starting value for the calculator.
   */
  constructor(initial = 0) {
    this.value = initial;
  }

  /** @returns {number} Current value. */
  get current() {
    return this.value;
  }

  /**
   * Adds to the current value.
   *
   * @param {number} operand
   * @returns {Calculator} The calculator instance for chaining.
   */
  add(operand) {
    this.value += operand;
    return this;
  }

  /**
   * Subtracts from the current value.
   *
   * @param {number} operand
   * @returns {Calculator}
   */
  subtract(operand) {
    this.value -= operand;
    return this;
  }

  /**
   * Multiplies the current value.
   *
   * @param {number} operand
   * @returns {Calculator}
   */
  multiply(operand) {
    this.value *= operand;
    return this;
  }

  /**
   * Divides the current value.
   *
   * @param {number} operand
   * @returns {Calculator}
   * @throws {Error} If operand is zero.
   */
  divide(operand) {
    if (operand === 0) {
      throw new Error("Division by zero");
    }
    this.value /= operand;
    return this;
  }

  /**
   * Resets the calculator to a new value.
   *
   * @param {number} [value=0]
   * @returns {Calculator}
   */
  reset(value = 0) {
    this.value = value;
    return this;
  }
}

/* Default export: the Calculator class */
export default Calculator;