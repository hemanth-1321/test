
'use strict';

/**
 * Check if a number is prime.
 * @param {number} n
 * @returns {boolean}
 */
function isPrime(n) {
    if (n <= 1 || !Number.isInteger(n)) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

/**
 * Return array of primes up to limit (inclusive).
 * @param {number} limit
 * @returns {number[]}
 */
function primesUpTo(limit) {
    const res = [];
    if (limit >= 2) {
        const sieve = new Array(limit + 1).fill(true);
        sieve[0] = sieve[1] = false;
        for (let p = 2; p * p <= limit; p++) {
            if (sieve[p]) {
                for (let mult = p * p; mult <= limit; mult += p) sieve[mult] = false;
            }
        }
        for (let i = 2; i <= limit; i++) if (sieve[i]) res.push(i);
    }
    return res;
}

/**
 * Return Fibonacci sequence as an array of length n (n >= 1).
 * f(0)=0, f(1)=1, ...
 * @param {number} nCount
 * @returns {number[]}
 */
function fibonacciList(nCount) {
    if (nCount <= 0) return [];
    const out = [0];
    if (nCount === 1) return out;
    out.push(1);
    while (out.length < nCount) {
        const L = out.length;
        out.push(out[L - 1] + out[L - 2]);
    }
    return out;
}

/**
 * Return nth Fibonacci number (0-based).
 * Iterative, O(n) time, O(1) space.
 * @param {number} n
 * @returns {number}
 */
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        const c = a + b;
        a = b;
        b = c;
    }
    return b;
}

/**
 * Recursive fibonacci (simple, exponential) - for demonstration only.
 * Use with small n.
 * @param {number} n
 * @returns {number}
 */
function fibonacciRecursive(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

/**
 * Factorial iterative.
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    if (n < 0 || !Number.isInteger(n)) throw new Error('n must be a non-negative integer');
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return res;
}

/**
 * Reverse a string.
 * @param {string} s
 * @returns {string}
 */
function reverseString(s) {
    return s.split('').reverse().join('');
}

/**
 * Check palindrome (ignores non-alphanum and case).
 * @param {string} s
 * @returns {boolean}
 */
function isPalindrome(s) {
    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

/**
 * Two-sum: return indices of two numbers that add up to target.
 * If none found, returns null.
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]|null}
 */
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const need = target - nums[i];
        if (map.has(need)) return [map.get(need), i];
        map.set(nums[i], i);
    }
    return null;
}

module.exports = {
    isPrime,
    primesUpTo,
    fibonacciList,
    fibonacci,
    fibonacciRecursive,
    factorial,
    reverseString,
    isPalindrome,
    twoSum
};