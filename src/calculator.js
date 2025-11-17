export const add = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers.');
  }
  return a + b;
};

export const subtract = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers.');
  }
  return a - b;
};

export const multiply = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers.');
  }
  return a * b;
};

export const divide = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers.');
  }
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
};

export default {
  add,
  subtract,
  multiply,
  divide,
};