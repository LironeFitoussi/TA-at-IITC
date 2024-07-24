// Key Properties
console.log(Math.PI);  // 3.141592653589793
console.log(Math.E);   // 2.718281828459045

// Rounding Methods
console.log(Math.round(4.7));    // 5
console.log(Math.round(4.4));    // 4
console.log(Math.floor(4.7));    // 4
console.log(Math.ceil(4.2));     // 5
console.log(Math.trunc(4.7));    // 4
console.log(Math.trunc(-4.7));   // -4

// Power and Square Root
console.log(Math.pow(2, 3));     // 8
console.log(Math.pow(4, 0.5));   // 2 (square root of 4)
console.log(Math.sqrt(16));      // 4
console.log(Math.sqrt(2));       // 1.4142135623730951

// Trigonometric Functions
console.log(Math.sin(Math.PI / 2));  // 1
console.log(Math.cos(Math.PI));      // -1
console.log(Math.tan(0));            // 0

//  Random Numbers
console.log(Math.random());  // 0.7240770174617495 (random value)
// Random Integer between min and max (inclusive)
function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 10));  // 7 (random integer between 1 and 10)

// Other Useful Methods
console.log(Math.abs(-5));        // 5
console.log(Math.max(1, 3, 2));   // 3
console.log(Math.min(1, 3, 2));   // 1