/**
 * Divide two numbers.
 *
 * @param a - Dividend
 * @param b - Divisor
 * @returns Quotient of a divided by b
 * @throws {Error} When attempting to divide by zero
 */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Division by zero')
  }
  return a / b
}