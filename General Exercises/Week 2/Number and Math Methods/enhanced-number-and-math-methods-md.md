# JavaScript Number and Math Methods

## Number Methods

JavaScript provides several built-in methods for working with numbers. These methods help perform common mathematical operations and format numbers for display.

> **Note:** These methods are called on Number objects, but JavaScript automatically converts primitives to objects when calling these methods.

### toFixed()

Formats a number with a specific number of digits after the decimal point.

**Syntax:** `number.toFixed(digits)`

**Example:**
```javascript
let num = 5.56789;
console.log(num.toFixed(2)); // Output: "5.57"
```

### toPrecision()

Formats a number to a specified length.

**Syntax:** `number.toPrecision(precision)`

**Example:**
```javascript
let num = 123.456;
console.log(num.toPrecision(4)); // Output: "123.5"
```

### toString()

Returns a string representing the number. It can also convert the number to different bases.

**Syntax:** `number.toString(radix)`

**Example:**
```javascript
let num = 255;
console.log(num.toString(16)); // Output: "ff" (hexadecimal)
```

### Global Parsing Methods

#### parseInt()

Parses a string and returns an integer.

**Syntax:** `parseInt(string, radix)`

**Example:**
```javascript
console.log(parseInt("10")); // Output: 10
console.log(parseInt("10.5")); // Output: 10
console.log(parseInt("10", 2)); // Output: 2 (parsing binary)
```

#### parseFloat()

Parses a string and returns a floating-point number.

**Syntax:** `parseFloat(string)`

**Example:**
```javascript
console.log(parseFloat("10.5")); // Output: 10.5
console.log(parseFloat("10")); // Output: 10
```

### Number Validation Methods

#### isNaN()

Determines whether a value is NaN (Not-a-Number).

**Example:**
```javascript
console.log(isNaN("Hello")); // Output: true
console.log(isNaN(123)); // Output: false
```

#### isFinite()

Determines whether a value is a finite number.

**Example:**
```javascript
console.log(isFinite(10/5)); // Output: true
console.log(isFinite(10/0)); // Output: false
```

## Math Methods

The `Math` object in JavaScript provides properties and methods for mathematical constants and functions.

> **Note:** There is no constructor for Math object. All methods and properties are static.

### Key Properties

- `Math.PI`: Ratio of circle's circumference to diameter (≈ 3.14159)
- `Math.E`: Euler's number, base of natural logarithms (≈ 2.71828)

### Rounding Methods

| Method | Description | Example |
|--------|-------------|---------|
| `Math.round(x)` | Rounds to nearest integer | `Math.round(4.7) // 5` |
| `Math.floor(x)` | Rounds down to nearest integer | `Math.floor(4.7) // 4` |
| `Math.ceil(x)` | Rounds up to nearest integer | `Math.ceil(4.3) // 5` |
| `Math.trunc(x)` | Removes fractional digits | `Math.trunc(4.7) // 4` |

### Power and Square Root

- `Math.pow(base, exponent)`: Returns base^exponent
  ```javascript
  console.log(Math.pow(2, 3)); // Output: 8
  ```
- `Math.sqrt(x)`: Returns square root of x
  ```javascript
  console.log(Math.sqrt(16)); // Output: 4
  ```

### Trigonometric Functions

- Basic: `Math.sin(x)`, `Math.cos(x)`, `Math.tan(x)`
- Inverse: `Math.asin(x)`, `Math.acos(x)`, `Math.atan(x)`

> **Note:** These functions work with radians, not degrees.

### Random Numbers

`Math.random()`: Returns a random number between 0 (inclusive) and 1 (exclusive)

**Example:** Generate a random integer between 1 and 10:
```javascript
let randomInt = Math.floor(Math.random() * 10) + 1;
```

### Other Useful Methods

- `Math.abs(x)`: Returns the absolute value of x
- `Math.max(x1, x2, ...)`: Returns the largest argument
- `Math.min(x1, x2, ...)`: Returns the smallest argument

**Example:**
```javascript
console.log(Math.abs(-5)); // Output: 5
console.log(Math.max(1, 3, 2)); // Output: 3
console.log(Math.min(1, 3, 2)); // Output: 1
```

## Conclusion

These Number and Math methods provide powerful tools for performing mathematical operations and manipulating numbers in JavaScript. Understanding and utilizing these methods can greatly enhance your ability to work with numerical data in your programs.

