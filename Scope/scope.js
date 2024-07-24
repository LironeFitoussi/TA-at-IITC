// Scope

// Global scope
const me = 'Bruce';
const job = 'developer';
const age = 27;

// Function scope
function calcAge(birthYear) {
    const now = 2021;
    const age = now - birthYear;
    return age;
}

// Block scope
if (age > 18) {
    const isAdult = true;
}

console.log(isAdult); // ReferenceError: isAdult is not defined

// The scope chain
const name = 'Bruce';

function first() {
    const age = 30;
    if (age >= 30) {
        const decade = 3;
        var millenial = true;
    }

    function second() {
        const job = 'developer';
        console.log(`${name} is a ${age}-year old ${job}`);
    }

    second();
}

first();


// -----

// Global scope
let globalVar = "I'm global!";

function testFunction() {
  console.log(globalVar); // Outputs: "I'm global!"
}

testFunction();
console.log(globalVar); // Outputs: "I'm global!"


// -----

// Local Scope
function localScopeExample() {
    let localVar = "I'm local!";
    console.log(localVar); // Outputs: "I'm local!"
}
  
localScopeExample();
console.log(localVar); // Throws ReferenceError: localVar is not defined

// -----

// Block Scope
if (true) {
    let blockVar = "I'm block-scoped!";
    console.log(blockVar); // Outputs: "I'm block-scoped!"
}

console.log(blockVar); // Throws ReferenceError: blockVar is not defined

// -----