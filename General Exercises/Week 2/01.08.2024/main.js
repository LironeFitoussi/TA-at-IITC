console.log("test");

for (let i = 1; i <= 5; i++) {
  console.log(`This is iteration number ${i} of the main loop`); 
  // This is iteration number 1 of the main loop
    // This is iteration number 2 of the main loop
    // This is iteration number 3 of the main loop
    // This is iteration number 4 of the main loop
    // This is iteration number 5 of the main loop

// The first loop runs 5 times, and for each iteration of the first loop, the second loop runs 5 times.
// the first interation will not end until the second loop has finished running all its iterations.
  for (let j = 1; j <= 5; j++) {
    console.log(`This is iteration number ${j} of the inner loop`);
    // This is iteration number 1 of the inner loop
    // This is iteration number 2 of the inner loop 
    // This is iteration number 3 of the inner loop
    // This is iteration number 4 of the inner loop
    // This is iteration number 5 of the inner loop
  }
}