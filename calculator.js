"use strict";

/**
 * Validates that a value is a finite number.
 * @param {any} value
 * @throws {TypeError}
 */
function assertNumber(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new TypeError(`Expected a finite number, got ${value}`);
  }
}

/**
 * Adds two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  assertNumber(a);
  assertNumber(b);
  return a + b;
}

/**
 * Subtracts second number from first.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtract(a, b) {
  assertNumber(a);
  assertNumber(b);
  return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
  assertNumber(a);
  assertNumber(b);
  return a * b;
}

/**
 * Divides first number by second.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @throws {Error} if division by zero
 */
function divide(a, b) {
  assertNumber(a);
  assertNumber(b);
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

/**
 * Evaluates a simple mathematical expression string.
 * Supports +, -, *, / and parentheses.
 * @param {string} expr
 * @returns {number}
 */
function evaluate(expr) {
  if (typeof expr !== "string") {
    throw new TypeError("Expression must be a string");
  }
  // Basic safety: allow only digits, operators, parentheses, whitespace
  if (!/^[\d+\-*/().\s]+$/.test(expr)) {
    throw new Error("Invalid characters in expression");
  }
  // eslint-disable-next-line no-eval
  const result = eval(expr);
  if (typeof result !== "number" || !Number.isFinite(result)) {
    throw new Error("Invalid expression result");
  }
  return result;
}

export {
  add,
  subtract,
  multiply,
  divide,
  evaluate
};

export default {
  add,
  subtract,
  multiply,
  divide,
  evaluate
};