'use strict';

const OPERATIONS = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
  },
};

function parseNumber(value) {
  const num = Number(value);
  if (Number.isNaN(num)) {
    throw new Error(`Invalid number: ${value}`);
  }
  return num;
}

function runCLI() {
  const args = process.argv.slice(2);
  if (args.length < 3) {
    console.error('Usage: node calculator.js <operation> <num1> <num2>');
    console.error('Operations: add, subtract, multiply, divide');
    process.exit(1);
  }

  const [op, aStr, bStr] = args;
  if (!OPERATIONS[op]) {
    console.error(`Unknown operation: ${op}`);
    process.exit(1);
  }

  try {
    const a = parseNumber(aStr);
    const b = parseNumber(bStr);
    const result = OPERATIONS[op](a, b);
    console.log(result);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

module.exports = {
  add: OPERATIONS.add,
  subtract: OPERATIONS.subtract,
  multiply: OPERATIONS.multiply,
  divide: OPERATIONS.divide,
};

if (require.main === module) {
  runCLI();
}