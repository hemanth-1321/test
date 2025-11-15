export default function sum(n) {
  if (typeof n !== 'number' || !Number.isFinite(n)) {
    throw new TypeError('Input must be a finite number');
  }
  if (!Number.isInteger(n) || n < 1) {
    throw new RangeError('Input must be an integer greater than or equal to 1');
  }
  return (n * (n + 1)) / 2;
}