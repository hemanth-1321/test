import { strict as assert } from 'assert';

/**
 * Adds two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function add(a, b) {
  assert.strictEqual(typeof a, 'number', 'First argument must be a number');
  assert.strictEqual(typeof b, 'number', 'Second argument must be a number');
  return a + b;
}

/**
 * Subtracts the second number from the first.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function subtract(a, b) {
  assert.strictEqual(typeof a, 'number', 'First argument must be a number');
  assert.strictEqual(typeof b, 'number', 'Second argument must be a number');
  return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function multiply(a, b) {
  assert.strictEqual(typeof a, 'number', 'First argument must be a number');
  assert.strictEqual(typeof b, 'number', 'Second argument must be a number');
  return a * b;
}

/**
 * Divides the first number by the second.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @throws {Error} If division by zero is attempted.
 */
export function divide(a, b) {
  assert.strictEqual(typeof a, 'number', 'First argument must be a number');
  assert.strictEqual(typeof b, 'number', 'Second argument must be a number');
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

/**
 * Evaluates a simple arithmetic expression containing +, -, *, / and numeric literals.
 * The expression is evaluated in a safe manner without using eval.
 * @param {string} expr
 * @returns {number}
 * @throws {Error} If the expression is invalid.
 */
export function evaluate(expr) {
  // Basic validation
  if (typeof expr !== 'string' || expr.trim() === '') {
    throw new Error('Expression must be a non-empty string');
  }

  // Tokenize the expression
  const tokens = expr
    .trim()
    .replace(/\s+/g, '')
    .match(/(\d+(\.\d+)?)|[+\-*/]/g);

  if (!tokens) {
    throw new Error('Invalid expression');
  }

  // Shunting-yard algorithm to convert to RPN
  const outputQueue = [];
  const operatorStack = [];

  const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };
  const associativity = { '+': 'L', '-': 'L', '*': 'L', '/': 'L' };

  tokens.forEach((token) => {
    if (!isNaN(token)) {
      outputQueue.push(parseFloat(token));
    } else if ('+-*/'.includes(token)) {
      while (
        operatorStack.length &&
        precedence[operatorStack[operatorStack.length - 1]] > precedence[token] ||
        (precedence[operatorStack[operatorStack.length - 1]] === precedence[token] &&
          associativity[token] === 'L')
      ) {
        outputQueue.push(operatorStack.pop());
      }
      operatorStack.push(token);
    } else {
      throw new Error(`Unexpected token: ${token}`);
    }
  });

  while (operatorStack.length) {
    outputQueue.push(operatorStack.pop());
  }

  // Evaluate RPN
  const stack = [];
  outputQueue.forEach((token) => {
    if (typeof token === 'number') {
      stack.push(token);
    } else {
      if (stack.length < 2) {
        throw new Error('Invalid expression');
      }
      const b = stack.pop();
      const a = stack.pop();
      let result;
      switch (token) {
        case '+':
          result = a + b;
          break;
        case '-':
          result = a - b;
          break;
        case '*':
          result = a * b;
          break;
        case '/':
          if (b === 0) throw new Error('Division by zero');
          result = a / b;
          break;
        default:
          throw new Error(`Unknown operator: ${token}`);
      }
      stack.push(result);
    }
  });

  if (stack.length !== 1) {
    throw new Error('Invalid expression');
  }

  return stack[0];
}