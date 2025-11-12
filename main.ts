import { modulo } from "./helper";

export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

export class Calculator {
  add(a: number, b: number): number {
    return add(a, b);
  }

  subtract(a: number, b: number): number {
    return subtract(a, b);
  }

  multiply(a: number, b: number): number {
    return multiply(a, b);
  }

  divide(a: number, b: number): number {
    return divide(a, b);
  }
}

// Example usage
console.log(add(4, 5));           // 9
console.log(subtract(10, 3));     // 7
console.log(multiply(5, 3));      // 15
console.log(divide(20, 4));       // 5

const calc = new Calculator();
console.log(calc.add(7, 8));      // 15
console.log(calc.multiply(6, 7)); // 42