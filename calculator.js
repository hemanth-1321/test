/**
 * Basic calculator functions
 * @module calculator
 */

/**
 * Adds two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('add: both arguments must be numbers');
  }
  return a + b;
}

/**
 * Subtracts the second number from the first.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtract(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('subtract: both arguments must be numbers');
  }
  return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('multiply: both arguments must be numbers');
  }
  return a * b;
}

/**
 * Divides the first number by the second.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @throws {Error} If division by zero.
 */
function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('divide: both arguments must be numbers');
  }
  if (b === 0) {
    throw new Error('divide: division by zero');
  }
  return a / b;
}

/**
 * Calculator class providing static methods.
 */
class Calculator {
  static add = add;
  static subtract = subtract;
  static multiply = multiply;
  static divide = divide;
}

export {
  add,
  subtract,
  multiply,
  divide,
  Calculator
};

export default Calculator;