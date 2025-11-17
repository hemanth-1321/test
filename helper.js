"use strict";

/**
 * Checks whether a given number is a prime.
 *
 * @param {number} n - The number to test for primality.
 * @returns {boolean} `true` if `n` is a prime number, otherwise `false`.
 *
 * @throws {TypeError} If the argument is not a finite integer.
 *
 * @example
 * isPrime(17); // true
 * isPrime(18); // false
 */
export function isPrime(n) {
  if (typeof n !== "number" || !Number.isFinite(n) || !Number.isInteger(n)) {
    throw new TypeError("Argument must be a finite integer");
  }

  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  const sqrtN = Math.floor(Math.sqrt(n));
  for (let i = 3; i <= sqrtN; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}