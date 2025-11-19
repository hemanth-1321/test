'use strict';

/**
 * Calculates the factorial of a non-negative integer.
 *
 * @param {number|bigint} n - The number to compute the factorial of.
 * @returns {bigint} The factorial of n.
 * @throws {TypeError} If n is not a non-negative integer.
 */
function factorial(n) {
  if (typeof n !== 'number' && typeof n !== 'bigint') {
    throw new TypeError('Input must be a number or bigint.');
  }
  const bigN = BigInt(n);
  if (bigN < 0n || !Number.isInteger(Number(bigN))) {
    throw new TypeError('Input must be a non-negative integer.');
  }
  let result = 1n;
  for (let i = 2n; i <= bigN; i++) {
    result *= i;
  }
  return result;
}

export default factorial;
export { factorial };