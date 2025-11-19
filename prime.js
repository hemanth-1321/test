/**
 * Checks whether a given number is prime.
 *
 * @param {number} n - The number to evaluate.
 * @returns {boolean} True if `n` is a prime number; otherwise false.
 * @throws {TypeError} If `n` is not a finite number.
 */
export function isPrime(n) {
  if (typeof n !== 'number' || !Number.isFinite(n)) {
    throw new TypeError('Argument must be a finite number');
  }
  if (n <= 1) return false;
  if (n <= 3) return true; // 2 and 3 are prime
  if (n % 2 === 0 || n % 3 === 0) return false;

  const sqrtN = Math.floor(Math.sqrt(n));
  for (let i = 5; i <= sqrtN; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

export default isPrime;