/**
 * Utility functions for prime number calculations.
 *
 * @module helper
 */

/**
 * Checks if a given number is a prime.
 *
 * @param {number} n - The number to check.
 * @returns {boolean} True if n is prime, false otherwise.
 */
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

/**
 * Returns the smallest prime number greater than or equal to the provided value.
 *
 * @param {number} n - The input number.
 * @returns {number} The next prime number.
 * @throws {TypeError} If the input is not a finite number.
 */
function nextPrime(n) {
  if (typeof n !== 'number' || !Number.isFinite(n)) {
    throw new TypeError('Input must be a finite number');
  }
  let candidate = Math.ceil(n);
  if (candidate <= 2) return 2;
  if (candidate % 2 === 0) candidate += 1;
  while (!isPrime(candidate)) {
    candidate += 2;
  }
  return candidate;
}

module.exports = {
  isPrime,
  nextPrime,
};