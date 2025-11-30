/**
 * Calculator module providing basic arithmetic operations.
 *
 * @module calculator
 */

export function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('add: both arguments must be numbers');
  }
  return a + b;
}

export function subtract(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('subtract: both arguments must be numbers');
  }
  return a - b;
}

export function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('multiply: both arguments must be numbers');
  }
  return a * b;
}

export function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('divide: both arguments must be numbers');
  }
  if (b === 0) {
    throw new RangeError('divide: division by zero');
  }
  return a / b;
}