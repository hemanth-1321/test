"use strict";

/**
 * Calculates the factorial of a non‑negative integer.
 *
 * @param {number} n - The number to compute the factorial of.
 * @returns {number} The factorial of n.
 * @throws {TypeError} If n is not a finite number or not an integer.
 * @throws {RangeError} If n is negative.
 */
export function factorial(n) {
  if (typeof n !== "number" || !Number.isFinite(n)) {
    throw new TypeError("Input must be a finite number");
  }
  if (!Number.isInteger(n)) {
    throw new TypeError("Input must be an integer");
  }
  if (n < 0) {
    throw new RangeError("Input must be a non-negative integer");
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

export default factorial;