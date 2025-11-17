"use strict";

/**
 * Adds two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function add(a, b) {
  return a + b;
}

/**
 * Subtracts the second number from the first.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function multiply(a, b) {
  return a * b;
}

/**
 * Divides the first number by the second.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @throws {Error} If the divisor is zero.
 */
export function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

/**
 * Raises a base to a given exponent.
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 */
export function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Computes the remainder after division of one number by another.
 * @param {number} a
 * @param {number} n
 * @returns {number}
 */
export function modulo(a, n) {
  return a % n;
}

/**
 * A collection of calculator utilities.
 */
const calculator = {
  add,
  subtract,
  multiply,
  divide,
  power,
  modulo
};

export default calculator;