import { modulo } from "./helper";

function sum(a: number, c: number) {
  console.log(a + c);
}

function multiplyByFour(n: number): number {
  return n * 4;
}

sum(4, 5);
console.log(multiplyByFour(5));

sum(9, 0);

sum(4, 5);
console.log(multiplyByFour(5));