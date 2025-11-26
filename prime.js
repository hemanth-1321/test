"use strict";

/**
 * Determines whether a given integer is a prime number.
 *
 * @param {number} n - The integer to test for primality.
 * @returns {boolean} True if `n` is prime, otherwise false.
 * @throws {TypeError} If `n` is not an integer.
 */
export function isPrime(n) {
  if (typeof n !== "number" || !Number.isInteger(n)) {
    throw new TypeError("Input must be an integer");
  }
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  const limit = Math.floor(Math.sqrt(n));
  for (let i = 3; i <= limit; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

/**
 * Generates an array of all prime numbers up to and including the specified limit.
 *
 * @param {number} limit - The upper bound for prime generation.
 * @returns {number[]} An array of prime numbers <= `limit`.
 * @throws {TypeError} If `limit` is not an integer.
 */
export function generatePrimes(limit) {
  if (typeof limit !== "number" || !Number.isInteger(limit)) {
    throw new TypeError("Limit must be an integer");
  }
  if (limit < 2) return [];
  const primes = [2];
  for (let num = 3; num <= limit; num += 2) {
    if (isPrime(num)) primes.push(num);
  }
  return primes;
}

/**
 * Returns the nth prime number (1-indexed).
 *
 * @param {number} n - The position of the prime to retrieve.
 * @returns {number} The nth prime number.
 * @throws {TypeError} If `n` is not an integer.
 * @throws {RangeError} If `n` is less than 1.
 */
export function getNthPrime(n) {
  if (typeof n !== "number" || !Number.isInteger(n)) {
    throw new TypeError("n must be an integer");
  }
  if (n < 1) throw new RangeError("n must be >= 1");
  let count = 0;
  let num = 1;
  while (count < n) {
    num++;
    if (isPrime(num)) {
      count++;
    }
  }
  return num;
}