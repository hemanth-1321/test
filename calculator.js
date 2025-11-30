/**
 * Basic arithmetic operations.
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
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @throws {Error} If division by zero.
 */
export function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

/**
 * Calculates the result based on an operator and two operands.
 * Supported operators: '+', '-', '*', '/'.
 * @param {string} operator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @throws {Error} If an unsupported operator is provided.
 */
export function calculate(operator, a, b) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      throw new Error(`Unsupported operator: ${operator}`);
  }
}

export default {
  add,
  subtract,
  multiply,
  divide,
  calculate,
};