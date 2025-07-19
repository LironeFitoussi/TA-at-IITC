// console.log("Start");
// for (let i=0; i<10000000000; i++) {}
// console.log("End");


// **1. Synchronous Console Logging**

// Log "Start", "Middle", and "End" to the console in the correct sequence.
// console.log("Start");
// console.log("Middle");
// console.log("End");


// **2. Using setTimeout with Delayed Output**

// Log "Start" immediately, then log "End" after 1 second.
// console.log("Start");
// setTimeout(() => {
//     console.log("end");
// }, 1000)


// **3. Delayed Logging with setTimeout**
// Log "Waiting..." after 2 seconds.
// setTimeout(() => {
//  console.log("Waiting...");
// }, 2000)

// **4. Loop with setTimeout (Incorrect Order)**

// Create a `for` loop that logs numbers 1 through 3 with a 1-second delay between each log.
// for (let  i = 1; i < 4; i++) {
//     let time = 1000
//     time *= i
//     setTimeout(() => {
//         console.log(i++);
//     }, time)
// }

// for (var i = 1; i <= 3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }

// function greet(cb, fName = "Any Name" ) {
//     console.log("Hello " + fName);
//     cb()
// } 

// function sayGoodbye () {
//     console.log("Goodbye");
// }

// greet(sayGoodbye)

// ### 1. **Simple Callback Execution**

// Write a function that takes another function (a callback) as an argument and executes it.

// **Explanation**: This exercise demonstrates how to pass a function (callback) to another function and execute it.

// **Hint**: Define a function and pass it as an argument to another function that will invoke it.

// **Expected Output**:

// ```
// Hello, world!
// ```

// function solution(cb) {
//     cb()
// }

// const cbFn = () => {
//     console.log("Hello World");
// }

// solution(cbFn)

// ### 2. **Callback with Parameters**

// Create a function that accepts a name and a callback function. The callback should display a greeting using the provided name.

// **Explanation**: A callback can accept parameters. The function should pass a parameter to the callback when it is executed.

// **Hint**: Modify the callback function to take parameters and use them.

// **Expected Output**:

// ```
// Hello, Alice!
// ```

// const greeting = ((fName, cb) => {
//     cb()
// })

// const dpMsg = (string = "Any Name") => {
//     console.log(`Hello ${string}`);
    
// }
// greeting("LIAV", dpMsg)

// const imgDiv = document.getElementsByClassName("image-container")[0];
// // console.log(imgDiv);

// function insertImage (src) {
//     imgDiv.insertAdjacentHTML("afterbegin", `
//         <img src="${src}" alt="Dog Image">    
//     `);
// }

// // insertImage("dsfdsf")

// fetch("https://dog.ceo/api/breeds/image/random")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         insertImage(data.message)
//     });

// console.log("end");
const task1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 1");
        }, 1000);
    });
}

const task2 = (data) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task 2 with ${data}`);
        }, 1000);
    });
}

const task3 = (data) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task 3 with ${data}`);
        }, 1000);
    });
}



async function runTasks() {
    const result1 = await task1();
    const result2 = await task2(result1);
    const result3 = await task3(result2);
    console.log(result3);
    console.log("All tasks completed");
}

runTasks();
