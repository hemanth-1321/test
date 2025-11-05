export const modulo = (a: number, b: number) => {
  return a % b;
};

export const getPrimeNumber = (n: number): number => {
  const isPrime = (num: number): boolean => {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    const sqrt = Math.sqrt(num);
    for (let i = 3; i <= sqrt; i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  };

  let candidate = Math.max(2, Math.floor(n));
  while (!isPrime(candidate)) {
    candidate++;
  }
  return candidate;
};