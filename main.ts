import { modulo } from "./helper";
import { sum as calcSum, multiply } from "./calculator";

export function sum(a: number, c: number) {
  console.log(calcSum(a, c));
}

export function multiply1(a: number, b: number) {
  console.log(multiply(a, b));
}

sum(4, 5);
multiply1(5, 3);

sum(9, 0);

sum(4, 5);
multiply1(5, 3);