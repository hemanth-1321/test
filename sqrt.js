"use strict";

/**
 * Calculates the square root of a numeric value.
 *
 * @param {number} value - The numeric value to calculate the square root of.
 * @returns {number} The square root of the input value.
 * @throws {TypeError} If the input is not a finite number.
 */
function sqrtNumber(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new TypeError(
      `sqrtNumber expects a finite number, received ${typeof value}`
    );
  }
  return Math.sqrt(value);
}

module.exports = { sqrtNumber };
export { sqrtNumber };