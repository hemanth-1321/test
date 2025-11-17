"use strict";

/**
 * Adds two numbers.
 * @param {number} a - First operand.
 * @param {number} b - Second operand.
 * @returns {number}
 */
function add(a, b) {
  return Number(a) + Number(b);
}

/**
 * Subtracts the second number from the first.
 * @param {number} a - Minuend.
 * @param {number} b - Subtrahend.
 * @returns {number}
 */
function subtract(a, b) {
  return Number(a) - Number(b);
}

/**
 * Multiplies two numbers.
 * @param {number} a - First factor.
 * @param {number} b - Second factor.
 * @returns {number}
 */
function multiply(a, b) {
  return Number(a) * Number(b);
}

/**
 * Divides the first number by the second.
 * @param {number} a - Dividend.
 * @param {number} b - Divisor.
 * @throws {Error} If the divisor is zero.
 * @returns {number}
 */
function divide(a, b) {
  const dividend = Number(a);
  const divisor = Number(b);
  if (divisor === 0) {
    throw new Error("Division by zero");
  }
  return dividend / divisor;
}

export { add, subtract, multiply, divide };