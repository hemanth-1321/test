export function isPrime(num) {
  if (!Number.isInteger(num) || num < 2) return false;
  if (num === 2 || num === 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

export function nextPrime(n) {
  if (!Number.isInteger(n)) throw new TypeError('Argument must be an integer');
  let candidate = Math.max(2, Math.floor(n));
  while (!isPrime(candidate)) candidate++;
  return candidate;
}