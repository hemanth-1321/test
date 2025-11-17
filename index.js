const calculator = require('./calculator');

function calculate(operation, a, b) {
  switch (operation) {
    case 'add':
      return calculator.add(a, b);
    case 'subtract':
      return calculator.subtract(a, b);
    case 'multiply':
      return calculator.multiply(a, b);
    case 'divide':
      return calculator.divide(a, b);
    default:
      throw new Error(`Unsupported operation: ${operation}`);
  }
}

module.exports = { calculate };