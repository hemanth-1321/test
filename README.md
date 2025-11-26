# Calculator Module

A lightweight, production‑ready calculator library that provides basic arithmetic operations.  
It can be imported into any JavaScript or TypeScript project and used as a standalone module or as part of a larger codebase.

---

## Installation

npm install @your-org/calculator

or with yarn

yarn add @your-org/calculator

---

## Importing

The module exports both named functions and a default class for convenience.  
Choose the style that best fits your project.

### Named function imports

import { add, subtract, multiply, divide } from '@your-org/calculator';

### Default class import

import Calculator from '@your-org/calculator';

const calc = new Calculator();

---

## Usage

### Using named functions

const sum = add(5, 7);          // 12
const difference = subtract(10, 3); // 7
const product = multiply(4, 6); // 24
const quotient = divide(20, 4); // 5

### Using the default class

const calc = new Calculator();

const sum = calc.add(5, 7);          // 12
const difference = calc.subtract(10, 3); // 7
const product = calc.multiply(4, 6); // 24
const quotient = calc.divide(20, 4); // 5

---

## API

| Function / Method | Parameters | Returns | Description |
|-------------------|------------|---------|-------------|
| `add(a, b)` | `number a`, `number b` | `number` | Returns the sum of `a` and `b`. |
| `subtract(a, b)` | `number a`, `number b` | `number` | Returns the difference of `a` and `b`. |
| `multiply(a, b)` | `number a`, `number b` | `number` | Returns the product of `a` and `b`. |
| `divide(a, b)` | `number a`, `number b` | `number` | Returns the quotient of `a` divided by `b`. Throws if `b` is zero. |
| `Calculator.add(a, b)` | `number a`, `number b` | `number` | Instance method for addition. |
| `Calculator.subtract(a, b)` | `number a`, `number b` | `number` | Instance method for subtraction. |
| `Calculator.multiply(a, b)` | `number a`, `number b` | `number` | Instance method for multiplication. |
| `Calculator.divide(a, b)` | `number a`, `number b` | `number` | Instance method for division. |

---

## Error Handling

`divide` will throw an `Error` if the second argument is `0`. Handle it with a `try / catch` block:

try {
  const result = divide(10, 0);
} catch (err) {
  console.error('Division by zero:', err.message);
}

---

## Contributing

Feel free to open issues or pull requests. Please run the test suite before submitting:

npm test

---

## License

MIT © Your Name

---