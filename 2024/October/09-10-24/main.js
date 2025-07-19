// function asyncOperation() {
//     return new Promise((resolve, reject) => {
//         // setTimeout(() => {
//         //     const randomNumber = Math.random();
//         //     if (randomNumber > 0.5) {
//         //         resolve("You Won!");
//         //     } else {
//         //         reject("You Lose!");
//         //     }
//         // }, 2000);
//         for (let i = 0; i < 1000000000; i++) {
//             // do nothing
//         }
//         resolve("You Won!");
//     });
// }

// console.log("Start");

// async function main() {
//     try {
//         const result = await asyncOperation();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

// main();

// console.log("End");


// function first () {
//     console.log("first");
// }

// function second () {
//     first()
//     console.log("second");
// }

// second()


// Microtask Queue vs Macrotask Queue
setTimeout(
    () => console.log("setTimeout1 finished")
, 3000);

Promise.resolve().then(() => console.log("promise1 resolved"));
console.log("synctask");
