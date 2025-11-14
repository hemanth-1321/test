export class Calculator {
  /**
   * Creates a new Calculator instance.
   * @param {number} [initialValue=0] - The starting value for calculations.
   */
  constructor(initialValue = 0) {
    if (typeof initialValue !== 'number') {
      throw new TypeError('initialValue must be a number');
    }
    this._value = initialValue;
  }

  /**
   * Adds a number to the current value.
   * @param {number} num - The number to add.
   * @returns {Calculator} The calculator instance for chaining.
   */
  add(num) {
    this._ensureNumber(num, 'add');
    this._value += num;
    return this;
  }

  /**
   * Subtracts a number from the current value.
   * @param {number} num - The number to subtract.
   * @returns {Calculator} The calculator instance for chaining.
   */
  subtract(num) {
    this._ensureNumber(num, 'subtract');
    this._value -= num;
    return this;
  }

  /**
   * Multiplies the current value by a number.
   * @param {number} num - The number to multiply by.
   * @returns {Calculator} The calculator instance for chaining.
   */
  multiply(num) {
    this._ensureNumber(num, 'multiply');
    this._value *= num;
    return this;
  }

  /**
   * Divides the current value by a number.
   * @param {number} num - The number to divide by.
   * @returns {Calculator} The calculator instance for chaining.
   * @throws {Error} If division by zero is attempted.
   */
  divide(num) {
    this._ensureNumber(num, 'divide');
    if (num === 0) {
      throw new Error('Division by zero');
    }
    this._value /= num;
    return this;
  }

  /**
   * Returns the current calculated value.
   * @returns {number} The current value.
   */
  getResult() {
    return this._value;
  }

  /**
   * Resets the calculator to its initial state.
   * @returns {Calculator} The calculator instance for chaining.
   */
  reset() {
    this._value = 0;
    return this;
  }

  /**
   * Internal helper to ensure arguments are numbers.
   * @private
   * @param {*} value - The value to check.
   * @param {string} methodName - The name of the method for error messages.
   * @throws {TypeError} If the value is not a number.
   */
  _ensureNumber(value, methodName) {
    if (typeof value !== 'number') {
      throw new TypeError(`Argument to ${methodName} must be a number`);
    }
  }
}

/**
 * Adds two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function add(a, b) {
  _validateOperands(a, b, 'add');
  return a + b;
}

/**
 * Subtracts the second number from the first.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function subtract(a, b) {
  _validateOperands(a, b, 'subtract');
  return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function multiply(a, b) {
  _validateOperands(a, b, 'multiply');
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
  _validateOperands(a, b, 'divide');
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

/**
 * Validates that both operands are numbers.
 * @private
 * @param {*} a
 * @param {*} b
 * @param {string} opName
 * @throws {TypeError}
 */
function _validateOperands(a, b, opName) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError(`Operands to ${opName} must be numbers`);
  }
}