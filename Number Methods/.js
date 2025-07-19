// Number Methods

// .toFixed() 
let num = 5.56789;
console.log(num.toFixed(2)); // Outputs: "5.57"
console.log(num.toFixed(0)); // Outputs: "6"

// .toPrecision()
let num = 5.56789;
console.log(num.toPrecision(3)); // Outputs: "5.57"
console.log(num.toPrecision(2)); // Outputs: "5.6"
console.log((1234.5).toPrecision(2)); // Outputs: "1.2e+3"

// .toString()
let num = 42;
console.log(num.toString()); // Outputs: "42"
console.log(num.toString(2)); // Outputs: "101010" (binary)
console.log(num.toString(16)); // Outputs: "2a" (hexadecimal)

// .parseInt() and .parseFloat()
console.log(parseInt("42")); // Outputs: 42
console.log(parseInt("42px")); // Outputs: 42
console.log(parseInt("101010", 2)); // Outputs: 42 (from binary)

console.log(parseFloat("3.14")); // Outputs: 3.14
console.log(parseFloat("3.14sometext")); // Outputs: 3.14

// .isNaN() and .isFinite()
console.log(isNaN(42)); // Outputs: false
console.log(isNaN("Hello")); // Outputs: true

console.log(isFinite(42)); // Outputs: true
console.log(isFinite(Infinity)); // Outputs: false