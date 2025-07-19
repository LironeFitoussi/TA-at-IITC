// Function declaration: Can be called before the function is defined.
function calcAge(birthYear) {
    return 2021 - birthYear;
}

// Function expression: Function is assigned to a variable. Can be called before the function is defined.
const calcAge = function (birthYear) {
    return 2021 - birthYear;
}


// Arrow function: Great for one-liner functions. Has no 'this' keyword.(more on this later)
const calcAge = (birthYear) => 2021 - birthYear;