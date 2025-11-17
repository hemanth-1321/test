'use strict';

/**
 * Checks whether a given integer is a prime number.
 *
 * @param {number} value - The integer to test for primality.
 * @returns {boolean} True if the value is prime, false otherwise.
 */
function isPrime(value) {
  if (value < 2) return false;
  if (value === 2) return true;
  if (value % 2 === 0) return false;
  const sqrt = Math.floor(Math.sqrt(value));
  for (let i = 3; i <= sqrt; i += 2) {
    if (value % i === 0) return false;
  }
  return true;
}

/**
 * Returns the smallest prime number greater than the provided number.
 *
 * If the input is less than 2, the function returns 2.
 * If the input is a prime number, the function returns the next prime greater than it.
 *
 * @param {number} n - The number from which to find the next prime.
 * @returns {number} The next prime number greater than n.
 * @throws {TypeError} If the argument is not a finite number.
 */
export function nextPrime(n) {
  if (typeof n !== 'number' || !Number.isFinite(n)) {
    throw new TypeError('Argument must be a finite number');
  }

  let candidate = Math.floor(n) + 1;
  if (candidate < 2) candidate = 2;

  while (!isPrime(candidate)) {
    candidate += 1;
  }

  return candidate;
}