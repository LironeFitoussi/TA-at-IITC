// sync Code Example

// console.log("Call One"); // First Bullet
// for (let i = 0; i < 10000000000; i++) {} // Second Bullet
// console.log("Call Two"); // Third Bullet

// Async Code Example
console.log("Call One"); // First Bullet

setTimeout(() => {
  console.log("Call Two"); // Third Bullet
}, 1000);

console.log("Call Three"); // Second Bullet
for (let i = 0; i < 10000000000; i++) {} // Second Bullet


// console.log("Call One"); // First Bullet
// fetch('https://jsonplaceholder.typicode.com/todos')
//       .then((response) => {
//         // console.log('first bullet');
//         console.log(response);
        
//         return response.json()
//     })
//       .then((data) => {
//         // console.log('second bullet');
//         console.log(data)
//     })

// console.log("Call Three"); // Second Bullet

// const fetchData = async () => {
//     const response = fetch('https://jsonplaceholder.typicode.com/todos')
//     console.log(response);
    
//     // const data = await response.json()
//     // console.log(data)
// }

// console.log("Call One"); // First Bullet

// fetchData()

// console.log("Call Three"); // Second Bullet


// await fetch('https://animechan.io/api/v1/quotes/random')