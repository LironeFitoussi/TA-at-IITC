console.log("Test");

let consecutiveHeads = 0;

do {
    let isHead = Math.random();
    console.log(isHead);
    if (isHead > 0.5) {
        consecutiveHeads++
        console.log("עץ");
    } else {
        consecutiveHeads = 0
        console.log("פלי");
    }
} while (consecutiveHeads < 3);

console.log("Done Counting");


