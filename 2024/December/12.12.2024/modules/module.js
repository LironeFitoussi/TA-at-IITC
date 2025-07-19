function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function log(message) {
    console.log(message);
}

module.exports = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
};

module.exports.default = log;