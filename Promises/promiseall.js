// This function simulates an asynchronous operation using setTimeout
// It returns a promise that resolves after a given number of milliseconds
function asyncOperation(message, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(message);
      }, delay);
    });
  }
  
  // Creating three asynchronous operations with different delays
  const promise1 = asyncOperation("First operation completed!", 1000); // 1 second
  const promise2 = asyncOperation("Second operation completed!", 2000); // 2 seconds
  const promise3 = asyncOperation("Third operation completed!", 3000); // 3 seconds
  
  // Using Promise.all to run all promises in parallel
  Promise.all([promise1, promise2, promise3])
    .then((results) => {
      // This block will run when all promises have resolved
      // `results` is an array containing the resolved values of all promises
      console.log("All operations completed!");
      console.log(results); // Output: ["First operation completed!", "Second operation completed!", "Third operation completed!"]
    })
    .catch((error) => {
      // This block will run if any of the promises is rejected
      console.error("One of the operations failed:", error);
    });
  