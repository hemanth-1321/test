import { modulo } from "./helper";

function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number | string {
  if (b === 0) {
    return "Error: Division by zero";
  }
  return a / b;
}

console.log("Add 4 + 5 =", add(4, 5));
console.log("Subtract 9 - 3 =", subtract(9, 3));
console.log("Multiply 5 * 3 =", multiply(5, 3));
console.log("Divide 10 / 2 =", divide(10, 2));
console.log("Modulo 10 % 3 =", modulo(10, 3));