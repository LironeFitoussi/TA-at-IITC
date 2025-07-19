//? --------- 1. Synchronous code ---------

// console.log("Start");

// // long and heavy operation
// for (let i = 0; i < 1000000000; i++) {
//   // do nothing
// }

// console.log("End");

//? --------- 2. Asynchronous code ---------

// console.log("Start");
// setTimeout(() => {
//   console.log("We are in the timeout");
// }, 2000);
// console.log("End");

// --------- 3. Asynchronous code with callback ---------
// console.log("Start");

// function loginUser(email, password, callback) {
//   setTimeout(() => {
//     console.log("Now we have the data");
//     callback({ userEmail: email });
//   }, 3000);
// }

// function getUserVideos(email, callback) {
//   setTimeout(() => {
//     callback(["video1", "video2", "video3"]);
//   }, 2000);
// }

// ----------------- AJAX request -----------------
// console.log("Start");

// const somedata = fetch("https://jsonplaceholder.typicode.com/users");
// // console.log(somedata);
// somedata
//   .then((response) => {
//     // console.log("Resolved", response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// console.log("End");

// --------- 4. Weather API ---------
// fetch(
//   "https://api.openweathermap.org/data/2.5/weather?lat=32.087337&lon=34.804120&appid=8bd79b9e7af8f971991a764da9f27057"
// )
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// --------- 5. Async/Await ---------

// async function getWeather() {
//   const weatherResponse = await fetch(
//     "https://api.openweathermap.org/data/2.5/weather?lat=32.087337&lon=34.804120&appid=8bd79b9e7af8f971991a764da9f27057"
//   );
//   const weather = await weatherResponse.json();
//   console.log(weather);
// }

// console.log("Start");
// getWeather();
// console.log("End");

// --------- 6. Promises ---------

// const dataFetch = fetch("https://jsonplaceholder.typicode.com/users");

// setTimeout(() => {
//   console.log("Timeout");
//   console.log(dataFetch);
// }, 2000);

// const pureObject = new Object();
// const object = {};

// const currentDate = new Date();

// console.log(pureObject);


// --------- 7. Sync with Heavy Operation ---------
console.log("Start");
setTimeout(() => {
    console.log("We are in the timeout");
}, 3000);

for (let i = 0; i < 5000000000; i++) {
    // do nothing
}

console.log("End");