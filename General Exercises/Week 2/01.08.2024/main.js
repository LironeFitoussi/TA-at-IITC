// console.log("test");

// for (let i = 1; i <= 5; i++) {
//   console.log(`This is iteration number ${i} of the main loop`); 
//   // This is iteration number 1 of the main loop
//     // This is iteration number 2 of the main loop
//     // This is iteration number 3 of the main loop
//     // This is iteration number 4 of the main loop
//     // This is iteration number 5 of the main loop

// // The first loop runs 5 times, and for each iteration of the first loop, the second loop runs 5 times.
// // the first interation will not end until the second loop has finished running all its iterations.
//   for (let j = 1; j <= 5; j++) {
//     console.log(`This is iteration number ${j} of the inner loop`);
//     // This is iteration number 1 of the inner loop
//     // This is iteration number 2 of the inner loop 
//     // This is iteration number 3 of the inner loop
//     // This is iteration number 4 of the inner loop
//     // This is iteration number 5 of the inner loop
//   }
// }

// Multiplication table
// let house = ''
// for(let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         house += `${j*i} `
//     }; 
//     house += '\n'
//     // house === '1 2 3 4 5 6 7 8 9 10 '
// }

// first interation: 
// i = 1
// j = 1
// house = 1 2 3 4 5 6 7 8 9 10 /n

// second interation:
// i = 2
// j = 1
// house = 1 2 3 4 5 6 7 8 9 10 /n 2 4 6 8 10 12 14 16 18 20 /n

// third interation:
// i = 3
// j = 1
// house = 1 2 3 4 5 6 7 8 9 10 /n 2 4 6 8 10 12 14 16 18 20 /n 3 6 9 12 15 18 21 24 27 30 /n

// final interation:
// i = 10
// j = 10
// house = 1 2 3 4 5 6 7 8 9 10 /n 2 4 6 8 10 12 14 16 18 20 /n 3 6 9 12 15 18 21 24 27 30 /n 4 8 12 16 20 24 28 32 36 40 /n 5 10 15 20 25 30 35 40 45 50 /n 6 12 18 24 30 36 42 48 54 60 /n 7 14 21 28 35 42 49 56 63 70 /n 8 16 24 32 40 48 56 64 72 80 /n 9 18 27 36 45 54 63 72 81 90 /n 10 20 30 40 50 60 70 80 90 100 /n
// console.log(house);


/*
    Exercise 8: Character Frequency (bonus, require objects)
    Objective: Write a program to find the frequency of each character in a string.
    Instructions:
    Take a string as input.
    Use nested loops to count the frequency of each character.
    Print each character and its frequency.
    Example Output:
    For input = "hello", output: h: 1, e: 1, l: 2, o: 1

    let input = 'hello';

    let output = {
        h: 1,
        e: 1,
        l: 2,
        o: 1
    }
*/


function countFreq (str) {
    let freqObject = {    };
    for (let i = 0; i < str.length; i++) {
        console.log("Scanning letter *" + str[i] + "* ");
        if (!freqObject[str[i]]){
            for(let j = 0; j < str.length; j++) {
                console.log(`Scanning letter ${str[i]} on ${str[j]}`);
                if (str[i] === str[j]) {
                    // str === "hello" [i] === h
                    // freqObject["h"]
                    if (!freqObject[str[i]]) { // !freqObject["h"]
                        freqObject[str[i]] = 1
                        // freqObject["h"] = 1
                        // freqObject.h = 1
                    } else {
                        freqObject[str[i]]++
                    }
                }
            }
        }
    }

    const h = "h"

    console.log("End of Scanning");
    console.log(freqObject);
}

countFreq("hello")
countFreq("banana")