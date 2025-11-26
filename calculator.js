'use strict';

function validateNumber(value) {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    throw new TypeError('Argument must be a valid number');
  }
}

function add(a, b) {
  validateNumber(a);
  validateNumber(b);
  return a + b;
}

function subtract(a, b) {
  validateNumber(a);
  validateNumber(b);
  return a - b;
}

function multiply(a, b) {
  validateNumber(a);
  validateNumber(b);
  return a * b;
}

function divide(a, b) {
  validateNumber(a);
  validateNumber(b);
  if (b === 0) {
    throw new RangeError('Division by zero');
  }
  return a / b;
}

const calculator = {
  add,
  subtract,
  multiply,
  divide,
};

export { add, subtract, multiply, divide };
export default calculator;