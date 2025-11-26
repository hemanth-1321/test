'use strict';

/**
 * Calculates the factorial of a non-negative integer.
 *
 * @param {number} n - The number to calculate factorial for.
 * @returns {number} The factorial of n.
 * @throws {TypeError} If n is not a number.
 * @throws {RangeError} If n is negative or not an integer.
 */
function factorial(n) {
  if (typeof n !== 'number') {
    throw new TypeError('Factorial input must be a number');
  }
  if (!Number.isInteger(n) || n < 0) {
    throw new RangeError('Factorial input must be a non-negative integer');
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

export default factorial;
export { factorial };