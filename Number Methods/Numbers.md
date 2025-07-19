# JavaScript Number Methods Lecture

## Introduction

JavaScript provides several built-in methods for working with numbers. These methods allow us to parse, format, and manipulate numeric values effectively. In this lecture, we'll explore the most commonly used number methods in JavaScript.

## 1. Number.parseFloat()

`Number.parseFloat()` parses a string argument and returns a floating-point number.

```javascript
console.log(Number.parseFloat("3.14"));     // Output: 3.14
console.log(Number.parseFloat("3.14hello")); // Output: 3.14
console.log(Number.parseFloat("hello3.14")); // Output: NaN
```

## 2. Number.parseInt()

`Number.parseInt()` parses a string argument and returns an integer.

```javascript
console.log(Number.parseInt("42"));     // Output: 42
console.log(Number.parseInt("42.75"));  // Output: 42
console.log(Number.parseInt("42px"));   // Output: 42
console.log(Number.parseInt("px42"));   // Output: NaN
```

## 3. Number.isInteger()

`Number.isInteger()` determines whether the passed value is an integer.

```javascript
console.log(Number.isInteger(42));    // Output: true
console.log(Number.isInteger(42.0));  // Output: true
console.log(Number.isInteger(42.5));  // Output: false
console.log(Number.isInteger("42"));  // Output: false
```

## 4. Number.isNaN()

`Number.isNaN()` determines whether the passed value is NaN (Not-A-Number).

```javascript
console.log(Number.isNaN(NaN));       // Output: true
console.log(Number.isNaN(42));        // Output: false
console.log(Number.isNaN("NaN"));     // Output: false
console.log(Number.isNaN(undefined)); // Output: false
```

## 5. toFixed()

`toFixed()` formats a number using fixed-point notation.

```javascript
let num = 3.14159;
console.log(num.toFixed(2));  // Output: "3.14"
console.log(num.toFixed(4));  // Output: "3.1416"
console.log(num.toFixed(0));  // Output: "3"
```

## 6. toPrecision()

`toPrecision()` returns a string representing the number to the specified precision.

```javascript
let num = 3.14159;
console.log(num.toPrecision(3));  // Output: "3.14"
console.log(num.toPrecision(5));  // Output: "3.1416"
console.log(num.toPrecision(2));  // Output: "3.1"
```

## 7. toString()

`toString()` returns a string representing the specified Number object.

```javascript
let num = 42;
console.log(num.toString());    // Output: "42"
console.log(num.toString(2));   // Output: "101010" (binary)
console.log(num.toString(16));  // Output: "2a" (hexadecimal)
```

## 8. Number.prototype.toExponential()

`toExponential()` returns a string representing the number in exponential notation.

```javascript
let num = 123456;
console.log(num.toExponential());   // Output: "1.23456e+5"
console.log(num.toExponential(2));  // Output: "1.23e+5"
```

## 9. Math.round()

`Math.round()` returns the value of a number rounded to the nearest integer.

```javascript
console.log(Math.round(3.14));  // Output: 3
console.log(Math.round(3.5));   // Output: 4
console.log(Math.round(-3.7));  // Output: -4
```

## 10. Math.floor()

`Math.floor()` returns the largest integer less than or equal to a given number.

```javascript
console.log(Math.floor(3.14));  // Output: 3
console.log(Math.floor(3.9));   // Output: 3
console.log(Math.floor(-3.1));  // Output: -4
```

## 11. Math.ceil()

`Math.ceil()` returns the smallest integer greater than or equal to a given number.

```javascript
console.log(Math.ceil(3.14));  // Output: 4
console.log(Math.ceil(3.9));   // Output: 4
console.log(Math.ceil(-3.1));  // Output: -3
```

## 12. Math.abs()

`Math.abs()` returns the absolute value of a number.

```javascript
console.log(Math.abs(5));    // Output: 5
console.log(Math.abs(-5));   // Output: 5
console.log(Math.abs(-3.14)); // Output: 3.14
```

## Conclusion

These number methods in JavaScript provide powerful tools for working with numeric data. Understanding and using these methods effectively can greatly enhance your ability to manipulate and process numbers in your JavaScript programs.

Remember to always consider the specific requirements of your application when choosing which method to use, as each has its own unique behavior and use cases.
