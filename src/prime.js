/**
 * Prime number utilities
 *
 * Provides functions for checking primality, generating primes up to a limit,
 * and finding the next prime after a given number.
 *
 * @module prime
 */

/**
 * Checks if a given number is a prime.
 *
 * @param {number} n - The number to check.
 * @returns {boolean} True if `n` is a prime number, false otherwise.
 *
 * @throws {TypeError} If `n` is not a finite number.
 */
export function isPrime(n) {
  if (typeof n !== 'number' || !Number.isFinite(n)) {
    throw new TypeError('Expected a finite number');
  }

  if (n < 2 || !Number.isInteger(n)) {
    return false;
  }

  if (n === 2 || n === 3) {
    return true;
  }

  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  const limit = Math.floor(Math.sqrt(n));
  for (let i = 5; i <= limit; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

/**
 * Generates all prime numbers up to and including the specified limit.
 *
 * @param {number} limit - The maximum value to generate primes for.
 * @returns {number[]} An array of prime numbers up to `limit`.
 *
 * @throws {TypeError} If `limit` is not a finite number.
 */
export function primesUpTo(limit) {
  if (typeof limit !== 'number' || !Number.isFinite(limit)) {
    throw new TypeError('Expected a finite number');
  }

  const n = Math.floor(limit);
  if (n < 2) {
    return [];
  }

  const sieve = new Uint8Array(n + 1);
  const primes = [];

  for (let i = 2; i <= n; i++) {
    if (!sieve[i]) {
      primes.push(i);
      if (i * i <= n) {
        for (let j = i * i; j <= n; j += i) {
          sieve[j] = 1;
        }
      }
    }
  }

  return primes;
}

/**
 * Finds the smallest prime number greater than the given number.
 *
 * @param {number} n - The number to start searching from.
 * @returns {number} The next prime number after `n`.
 *
 * @throws {TypeError} If `n` is not a finite number.
 */
export function nextPrime(n) {
  if (typeof n !== 'number' || !Number.isFinite(n)) {
    throw new TypeError('Expected a finite number');
  }

  let candidate = Math.floor(n) + 1;
  while (!isPrime(candidate)) {
    candidate++;
  }
  return candidate;
}