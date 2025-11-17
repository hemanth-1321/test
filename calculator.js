import { strict as assert } from 'assert';

/**
 * Adds two numbers.
 * @param {number} a - First operand.
 * @param {number} b - Second operand.
 * @returns {number} Sum of a and b.
 */
export function add(a, b) {
  return a + b;
}

/**
 * Subtracts second number from the first.
 * @param {number} a - Minuend.
 * @param {number} b - Subtrahend.
 * @returns {number} Difference of a and b.
 */
export function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a - First factor.
 * @param {number} b - Second factor.
 * @returns {number} Product of a and b.
 */
export function multiply(a, b) {
  return a * b;
}

/**
 * Divides first number by the second.
 * @param {number} a - Dividend.
 * @param {number} b - Divisor.
 * @returns {number} Quotient of a divided by b.
 * @throws {Error} If b is zero.
 */
export function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

/**
 * Evaluates a simple arithmetic expression.
 * Supports +, -, *, /, parentheses, and numeric literals.
 * @param {string} expr - The expression to evaluate.
 * @returns {number} Result of the evaluation.
 * @throws {Error} If the expression is invalid.
 */
export function evaluate(expr) {
  // Basic validation to prevent malicious code execution
  if (!/^[0-9+\-*/().\s]+$/.test(expr)) {
    throw new Error('Invalid characters in expression');
  }
  try {
    // eslint-disable-next-line no-new-func
    return Function(`'use strict'; return (${expr});`)();
  } catch (err) {
    throw new Error('Invalid expression');
  }
}

/**
 * Default export: an object containing all calculator functions.
 */
export default {
  add,
  subtract,
  multiply,
  divide,
  evaluate,
};

/* Unit tests (for internal validation) */
if (require.main === module) {
  try {
    assert.strictEqual(add(2, 3), 5);
    assert.strictEqual(subtract(5, 2), 3);
    assert.strictEqual(multiply(4, 3), 12);
    assert.strictEqual(divide(10, 2), 5);
    assert.strictEqual(evaluate('2+3*4'), 14);
    assert.strictEqual(evaluate('(1+2)*(3+4)'), 21);
    console.log('All calculator tests passed.');
  } catch (e) {
    console.error('Calculator test failed:', e);
    process.exit(1);
  }
}