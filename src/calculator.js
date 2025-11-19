import { strict as assert } from 'assert';

/**
 * A lightweight, production‑ready calculator module.
 * Provides basic arithmetic operations with proper error handling
 * and a safe expression evaluator.
 *
 * @module calculator
 */

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
 * Throws an error if division by zero is attempted.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @throws {Error}
 */
export function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

/**
 * Evaluates a simple arithmetic expression containing numbers and
 * the operators +, -, *, /, and parentheses.
 * The function sanitises the input to prevent code injection.
 *
 * @param {string} expr - The arithmetic expression to evaluate.
 * @returns {number}
 * @throws {Error} If the expression is invalid or division by zero occurs.
 */
export function evaluate(expr) {
  // Remove any characters that are not part of a simple arithmetic expression
  const sanitized = expr.replace(/[^0-9+\-*/().\s]/g, '');

  // Basic validation: ensure balanced parentheses
  const stack = [];
  for (const char of sanitized) {
    if (char === '(') stack.push(char);
    if (char === ')') {
      if (stack.length === 0) {
        throw new Error('Mismatched parentheses in expression');
      }
      stack.pop();
    }
  }
  if (stack.length !== 0) {
    throw new Error('Mismatched parentheses in expression');
  }

  // Evaluate using the Function constructor in a sandboxed context
  try {
    // eslint-disable-next-line no-new-func
    const result = Function(`'use strict'; return (${sanitized});`)();
    if (typeof result !== 'number' || !Number.isFinite(result)) {
      throw new Error('Expression did not evaluate to a finite number');
    }
    return result;
  } catch (err) {
    throw new Error(`Failed to evaluate expression: ${err.message}`);
  }
}

/**
 * Class wrapper for the calculator functions. Useful for environments
 * that prefer a namespace or for future extensions.
 */
export default class Calculator {
  static add = add;
  static subtract = subtract;
  static multiply = multiply;
  static divide = divide;
  static evaluate = evaluate;
}