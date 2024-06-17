// 1. Create a new Promise that resolves with the value "Hello, World!".
const promise1 = new Promise((resolve, reject) => {
    resolve("Hello, World!");
});

// 2. Create a new Promise that rejects with the value "Error occurred".
const promise2 = new Promise((resolve, reject) => {
    reject("Error occurred");
});

// 3. Write a Promise that resolves after 2 seconds with the value "Resolved!".
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Resolved!"), 2000);
});

// 4. Write a Promise that rejects after 1 second with the value "Rejected!".
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Rejected!"), 1000);
});

// 5. Create a Promise that resolves with a given value and log the resolved value using .then().
const promise5 = new Promise((resolve, reject) => {
    resolve("Some value");
}).then(value => console.log(value));

// 6. Create a Promise that rejects with a given value and handle the rejection using .catch().
const promise6 = new Promise((resolve, reject) => {
    reject("Some error");
}).catch(error => console.log(error));

// 7. Write a Promise that resolves with the value "Hello, World!" and logs "Promise Resolved!" after it resolves.
const promise7 = new Promise((resolve, reject) => {
    resolve("Hello, World!");
}).then(value => {
    console.log("Promise Resolved!");
    console.log(value);
});

// 8. Write a function that returns a resolved Promise with a given message.
function resolveWithMessage(message) {
    return Promise.resolve(message);
}
resolveWithMessage("Resolved Message").then(console.log);

// 9. Write a function that returns a rejected Promise with a given error message.
function rejectWithMessage(errorMessage) {
    return Promise.reject(errorMessage);
}
rejectWithMessage("Rejected Message").catch(console.log);

// 10. Create a Promise that resolves after 3 seconds and logs the value "3 seconds passed".
const promise10 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("3 seconds passed"), 3000);
}).then(console.log);

// 11. Chain two Promises together where the second Promise resolves with the value of the first Promise plus " and then some".
const promise11 = new Promise((resolve, reject) => {
    resolve("First value");
}).then(value => {
    return new Promise((resolve, reject) => {
        resolve(value + " and then some");
    });
}).then(console.log);

// 12. Write a Promise that resolves with an array of numbers and logs the sum of those numbers using .then().
const promise12 = new Promise((resolve, reject) => {
    resolve([1, 2, 3, 4, 5]);
}).then(numbers => {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    console.log(sum);
});

// 13. Create a Promise that rejects if a given number is less than 10 and resolves if it's 10 or greater.
function checkNumber(number) {
    return new Promise((resolve, reject) => {
        if (number < 10) {
            reject("Number is less than 10");
        } else {
            resolve("Number is 10 or greater");
        }
    });
}
checkNumber(9).catch(console.log);
checkNumber(10).then(console.log);

// 14. Write a function that returns a Promise which resolves after a given number of milliseconds.
function resolveAfterMilliseconds(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`Resolved after ${ms} milliseconds`), ms);
    });
}
resolveAfterMilliseconds(1000).then(console.log);

// 15. Write a Promise that resolves with the current date and time.
const promise15 = new Promise((resolve, reject) => {
    resolve(new Date().toString());
}).then(console.log);

// 16. Use Promise.all() to wait for two Promises to resolve and then log their results.
const promise16a = Promise.resolve("First promise");
const promise16b = Promise.resolve("Second promise");
Promise.all([promise16a, promise16b]).then(results => {
    console.log(results);
});

// 17. Create a Promise that resolves with a user's name and another that resolves with the user's age. Use Promise.all() to wait for both and then log a message "Name: [name], Age: [age]".
const promise17a = Promise.resolve("Lirone");
const promise17b = Promise.resolve(25);
Promise.all([promise17a, promise17b]).then(([name, age]) => {
    console.log(`Name: ${name}, Age: ${age}`);
});

// 18. Write a function that returns a Promise which resolves with a random number after 1 second.
function randomAfterOneSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(Math.random()), 1000);
    });
}
randomAfterOneSecond().then(console.log);

// 19. Create a Promise that rejects with a specific error message and handle it using .catch() and log the error.
const promise19 = new Promise((resolve, reject) => {
    reject("Specific error message");
}).catch(console.log);

// 20. Write a Promise that resolves with "Success!" and logs "Operation was successful!" using .then().
const promise20 = new Promise((resolve, reject) => {
    resolve("Success!");
}).then(value => {
    console.log("Operation was successful!");
    console.log(value);
});

// 21. Write a Promise that resolves with "Done!" and always logs "Finished!" using .finally().
const promise21 = new Promise((resolve, reject) => {
    resolve("Done!");
}).finally(() => {
    console.log("Finished!");
}).then(console.log);

// 22. Write a function that returns a Promise which resolves with "Data received" after simulating a 2-second network request using setTimeout.
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data received"), 2000);
    });
}
fetchData().then(console.log);

// 23. Write a function that uses Promise.all() to wait for three Promises that resolve with different values and logs all the values once all Promises are resolved.
const promise23a = Promise.resolve("Value 1");
const promise23b = Promise.resolve("Value 2");
const promise23c = Promise.resolve("Value 3");
Promise.all([promise23a, promise23b, promise23c]).then(values => {
    console.log(values);
});

// 24. Write a function that returns a Promise which rejects if a given string is empty and resolves if it is not empty.
function checkString(str) {
    return new Promise((resolve, reject) => {
        if (str === "") {
            reject("String is empty");
        } else {
            resolve("String is not empty");
        }
    });
}
checkString("").catch(console.log);
checkString("Hello").then(console.log);

// 25. Write a Promise that resolves with the square of a given number.
function squareNumber(num) {
    return new Promise((resolve, reject) => {
        resolve(num * num);
    });
}
squareNumber(4).then(console.log);

// 26. Create a Promise that resolves with the value of a given number multiplied by 2 after 2 seconds.
function multiplyByTwoAfterTwoSeconds(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num * 2), 2000);
    });
}
multiplyByTwoAfterTwoSeconds(5).then(console.log);

// 27. Write a function that returns a Promise which resolves with a greeting message for a given name.
function greetName(name) {
    return new Promise((resolve, reject) => {
        resolve(`Hello, ${name}!`);
    });
}
greetName("Lirone").then(console.log);

// 28. Write a Promise that resolves with "File downloaded" after simulating a file download with setTimeout.
const promise28 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("File downloaded"), 3000);
}).then(console.log);

// 29. Write a Promise that rejects with "Network error" if a given boolean is false and resolves with "Network success" if true.
function networkRequest(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve("Network success");
        } else {
            reject("Network error");
        }
    });
}
networkRequest(false).catch(console.log);
networkRequest(true).then(console.log);

// 30. Write a function that returns a Promise which resolves with "API call successful" after simulating an API call with setTimeout.
function apiCall() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("API call successful"), 2000);
    });
}
apiCall().then(console.log);
