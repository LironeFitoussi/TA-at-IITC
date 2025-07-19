// JavaScript Basic Scope - Code Exercises

// Exercise 1: Global Scope
// Create a variable in the global scope and access it from within a function
let globalVar = "I'm global";

function accessGlobal() {
  // Your code here: Log the global variable
}

accessGlobal();

// Exercise 2: Local Scope
// Create a function that declares a local variable and try to access it outside the function
function localScopeExample() {
  let localVar = "I'm local";
  // Your code here: Log the local variable
}

localScopeExample();
// Your code here: Try to log localVar here and see what happens

// Exercise 3: Block Scope
// Use let to create a block-scoped variable in an if statement
if (true) {
  let blockVar = "I'm in a block";
  // Your code here: Log blockVar
}
// Your code here: Try to log blockVar here and see what happens

// Exercise 4: Function Parameters
// Demonstrate how function parameters are local to the function
function greet(name) {
  // Your code here: Log a greeting using the name parameter
}

greet("Alice");
// Your code here: Try to log the 'name' parameter here and see what happens

// Exercise 5: Nested Scope
// Create nested functions and access variables from the outer function
function outerFunction() {
  let outerVar = "I'm from the outer function";
  
  function innerFunction() {
    // Your code here: Log outerVar from within innerFunction
  }
  
  innerFunction();
}

outerFunction();

// Exercise 6: Shadowing
// Demonstrate variable shadowing with global and local variables
let shadowVar = "I'm global";

function shadowExample() {
  let shadowVar = "I'm local";
  // Your code here: Log shadowVar
}

shadowExample();
// Your code here: Log shadowVar again

// Don't forget to run these exercises and observe the results!
