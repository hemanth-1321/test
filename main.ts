import { modulo } from "./helper";

interface Calculator {
  add(a: number, b: number): number;
  multiply(a: number, b: number): number;
  modulo(a: number, b: number): number;
}

class SimpleCalculator implements Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
  multiply(a: number, b: number): number {
    return a * b;
  }
  modulo(a: number, b: number): number {
    return modulo(a, b);
  }
}

const calc: Calculator = new SimpleCalculator();

console.log(calc.add(4, 5));
console.log(calc.multiply(5, 3));
console.log(calc.modulo(10, 3));