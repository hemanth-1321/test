'use strict';

/**
 * @module calculator
 *
 * A minimal, production‑ready calculator module providing
 * basic arithmetic operations and a simple expression evaluator.
 *
 * The evaluator supports +, -, *, /, parentheses, and decimal numbers.
 * It follows standard operator precedence and left‑to‑right associativity.
 *
 * @example
 * import { add, evaluate } from './calculator.js';
 *
 * console.log(add(2, 3));            // 5
 * console.log(evaluate('2 + 3 * 4')); // 14
 */

/**
 * Adds two numbers.
 * @param {number} a First operand.
 * @param {number} b Second operand.
 * @returns {number} Sum of a and b.
 */
export function add(a, b) {
  return Number(a) + Number(b);
}

/**
 * Subtracts the second number from the first.
 * @param {number} a First operand.
 * @param {number} b Second operand.
 * @returns {number} Result of a - b.
 */
export function subtract(a, b) {
  return Number(a) - Number(b);
}

/**
 * Multiplies two numbers.
 * @param {number} a First operand.
 * @param {number} b Second operand.
 * @returns {number} Product of a and b.
 */
export function multiply(a, b) {
  return Number(a) * Number(b);
}

/**
 * Divides the first number by the second.
 * @param {number} a Numerator.
 * @param {number} b Denominator.
 * @throws {Error} If division by zero is attempted.
 * @returns {number} Quotient of a / b.
 */
export function divide(a, b) {
  if (Number(b) === 0) {
    throw new Error('Division by zero');
  }
  return Number(a) / Number(b);
}

/**
 * Evaluates a simple mathematical expression.
 *
 * Supported features:
 *   - Numbers (integers and decimals)
 *   - Operators: +, -, *, /
 *   - Parentheses for grouping
 *   - Whitespace is ignored
 *
 * @param {string} expr The expression to evaluate.
 * @throws {Error} If the expression is invalid.
 * @returns {number} The evaluated result.
 */
export function evaluate(expr) {
  if (typeof expr !== 'string') {
    throw new Error('Expression must be a string');
  }

  // Tokenize input
  const tokens = [];
  const regex = /\s*([()+\-*/]|\d+(\.\d+)?|\.\d+)\s*/g;
  let match;
  while ((match = regex.exec(expr)) !== null) {
    tokens.push(match[1]);
  }

  if (tokens.length === 0) {
    throw new Error('Empty expression');
  }

  // Handle unary minus by converting it to a negative number
  const processed = [];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token === '-' && (i === 0 || ['+', '-', '*', '/', '('].includes(tokens[i - 1]))) {
      // Unary minus: merge with next number
      const nextToken = tokens[i + 1];
      if (!nextToken || !/^\d+(\.\d+)?$/.test(nextToken)) {
        throw new Error('Invalid unary minus usage');
      }
      processed.push('-' + nextToken);
      i++; // Skip next token
    } else {
      processed.push(token);
    }
  }

  // Shunting-yard algorithm to convert to Reverse Polish Notation (RPN)
  const outputQueue = [];
  const operatorStack = [];
  const precedence = { '+': 2, '-': 2, '*': 3, '/': 3 };
  const associativity = { '+': 'Left', '-': 'Left', '*': 'Left', '/': 'Left' };

  processed.forEach((token) => {
    if (/^-?\d+(\.\d+)?$/.test(token)) {
      outputQueue.push(Number(token));
    } else if ('+-*/'.includes(token)) {
      while (
        operatorStack.length &&
        '+-*/'.includes(operatorStack[operatorStack.length - 1]) &&
        ((associativity[token] === 'Left' &&
          precedence[token] <= precedence[operatorStack[operatorStack.length - 1]]) ||
          (associativity[token] === 'Right' &&
            precedence[token] < precedence[operatorStack[operatorStack.length - 1]]))
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
  });

  while (operatorStack.length) {
    const op = operatorStack.pop();
    if (op === '(' || op === ')') {
      throw new Error('Mismatched parentheses');
    }
    outputQueue.push(op);
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
      let res;
      switch (token) {
        case '+':
          res = a + b;
          break;
        case '-':
          res = a - b;
          break;
        case '*':
          res = a * b;
          break;
        case '/':
          if (b === 0) throw new Error('Division by zero');
          res = a / b;
          break;
        default:
          throw new Error(`Unsupported operator: ${token}`);
      }
      stack.push(res);
    }
  });

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