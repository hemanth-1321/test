/**
 * Calculator module
 * Provides basic arithmetic operations and a simple expression evaluator.
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
 * Subtracts b from a.
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
 * Divides a by b.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @throws {Error} if b is zero
 */
export function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

/**
 * Evaluates a mathematical expression containing +, -, *, /, and parentheses.
 * @param {string} expr
 * @returns {number}
 * @throws {Error} if expression is invalid
 */
export function evaluate(expr) {
  // Tokenize
  const tokens = expr
    .trim()
    .replace(/\s+/g, '')
    .match(/[()+\-*/]|\d+(\.\d+)?/g);
  if (!tokens) {
    throw new Error('Invalid expression');
  }

  const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };
  const outputQueue = [];
  const operatorStack = [];

  for (const token of tokens) {
    if (!isNaN(token)) {
      outputQueue.push(parseFloat(token));
    } else if ('+-*/'.includes(token)) {
      while (
        operatorStack.length &&
        '*/+-'.includes(operatorStack[operatorStack.length - 1]) &&
        precedence[operatorStack[operatorStack.length - 1]] >= precedence[token]
      ) {
        outputQueue.push(operatorStack.pop());
      }
      operatorStack.push(token);
    } else if (token === '(') {
      operatorStack.push(token);
    } else if (token === ')') {
      while (
        operatorStack.length &&
        operatorStack[operatorStack.length - 1] !== '('
      ) {
        outputQueue.push(operatorStack.pop());
      }
      if (
        operatorStack.length === 0 ||
        operatorStack[operatorStack.length - 1] !== '('
      ) {
        throw new Error('Mismatched parentheses');
      }
      operatorStack.pop(); // Remove '('
    } else {
      throw new Error(`Unknown token: ${token}`);
    }
  }

  while (operatorStack.length) {
    const op = operatorStack.pop();
    if (op === '(' || op === ')') {
      throw new Error('Mismatched parentheses');
    }
    outputQueue.push(op);
  }

  // Evaluate RPN
  const stack = [];
  for (const token of outputQueue) {
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
          if (b === 0) {
            throw new Error('Division by zero');
          }
          result = a / b;
          break;
        default:
          throw new Error(`Unsupported operator: ${token}`);
      }
      stack.push(result);
    }
  }

  if (stack.length !== 1) {
    throw new Error('Invalid expression');
  }

  return stack[0];
}

export default {
  add,
  subtract,
  multiply,
  divide,
  evaluate,
};