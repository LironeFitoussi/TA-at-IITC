// Complete Answers to 30 Basic Nested Loop Exercises in JavaScript

// Exercise 1
console.log("Exercise 1:");
for (let i = 0; i < 3; i++) {
    let row = '';
    for (let j = 0; j < 3; j++) {
        row += '* ';
    }
    console.log(row);
}

// Exercise 2
console.log("\nExercise 2:");
for (let i = 0; i < 5; i++) {
    let row = '';
    for (let j = 0; j < 5; j++) {
        row += (i + j) + ' ';
    }
    console.log(row);
}

// Exercise 3
console.log("\nExercise 3:");
for (let i = 1; i <= 5; i++) {
    console.log('* '.repeat(i));
}

// Exercise 4
console.log("\nExercise 4:");
for (let i = 1; i <= 4; i++) {
    let row = '';
    for (let j = 1; j <= 4; j++) {
        row += (i * j) + ' ';
    }
    console.log(row);
}

// Exercise 5
console.log("\nExercise 5:");
for (let i = 0; i < 5; i++) {
    let row = '';
    for (let j = 0; j < 5; j++) {
        if (i === 0 || i === 4 || j === 0 || j === 4) {
            row += '* ';
        } else {
            row += '  ';
        }
    }
    console.log(row);
}

// Exercise 6
console.log("\nExercise 6:");
let count = 1;
for (let i = 0; i < 5; i++) {
    let row = '';
    for (let j = 0; j < 5; j++) {
        row += (count < 10 ? ' ' : '') + count + ' ';
        count++;
    }
    console.log(row);
}

// Exercise 7
console.log("\nExercise 7:");
for (let i = 1; i <= 5; i++) {
    let row = ' '.repeat(5 - i);
    for (let j = 1; j <= i; j++) {
        row += i + ' ';
    }
    console.log(row);
}

// Exercise 8
console.log("\nExercise 8:");
for (let i = 0; i < 5; i++) {
    let row = '';
    for (let j = 0; j < 5; j++) {
        row += ((i + j) % 2) + ' ';
    }
    console.log(row);
}

// Exercise 9
console.log("\nExercise 9:");
let pascal = [[1]];
for (let i = 1; i < 5; i++) {
    let row = [1];
    for (let j = 1; j < i; j++) {
        row.push(pascal[i-1][j-1] + pascal[i-1][j]);
    }
    row.push(1);
    pascal.push(row);
}
pascal.forEach((row, i) => {
    console.log(' '.repeat(4-i) + row.join(' '));
});

// Exercise 10
console.log("\nExercise 10:");
for (let i = 0; i < 5; i++) {
    let row = '';
    for (let j = 0; j < 5; j++) {
        if (i === 0 || i === 4 || j === 0 || j === 4) {
            row += '* ';
        } else {
            row += '  ';
        }
    }
    console.log(row);
}

// Exercise 11
console.log("\nExercise 11:");
count = 1;
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += count + ' ';
        count++;
    }
    console.log(row);
}

// Exercise 12
console.log("\nExercise 12:");
for (let i = 1; i <= 4; i++) {
    let row = '';
    for (let j = 1; j <= 4; j++) {
        row += i.toString().repeat(j) + ' ';
    }
    console.log(row);
}

// Exercise 13
console.log("\nExercise 13:");
for (let i = 5; i >= 1; i--) {
    console.log('* '.repeat(i));
}

// Exercise 14
console.log("\nExercise 14:");
for (let i = 0; i < 5; i++) {
    let row = '';
    for (let j = 0; j < 5; j++) {
        row += Math.max(i, j) + ' ';
    }
    console.log(row);
}

// Exercise 15
console.log("\nExercise 15:");
for (let i = 1; i <= 5; i += 2) {
    console.log(' '.repeat((5-i)/2) + '*'.repeat(i));
}
for (let i = 3; i >= 1; i -= 2) {
    console.log(' '.repeat((5-i)/2) + '*'.repeat(i));
}

// Exercise 16
console.log("\nExercise 16:");
for (let i = 0; i < 6; i++) {
    let row = '';
    for (let j = 0; j < 6; j++) {
        row += (i * j) + ' ';
    }
    console.log(row);
}

// Exercise 17
console.log("\nExercise 17:");
let char = 65;
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += String.fromCharCode(char) + ' ';
        char++;
    }
    console.log(row);
}

// Exercise 18
console.log("\nExercise 18:");
let spiral = Array(5).fill().map(() => Array(5).fill(0));
let num = 1, top = 0, bottom = 4, left = 0, right = 4;

while (num <= 25) {
    for (let i = left; i <= right; i++) spiral[top][i] = num++;
    top++;
    for (let i = top; i <= bottom; i++) spiral[i][right] = num++;
    right--;
    for (let i = right; i >= left; i--) spiral[bottom][i] = num++;
    bottom--;
    for (let i = bottom; i >= top; i--) spiral[i][left] = num++;
    left++;
}

spiral.forEach(row => console.log(row.map(n => n.toString().padStart(2, ' ')).join(' ')));

// Exercise 19
console.log("\nExercise 19:");
for (let i = 1; i <= 5; i++) {
    let row = ' '.repeat(5-i);
    for (let j = 1; j <= 2*i-1; j++) {
        if (j === 1 || j === 2*i-1 || i === 5) row += '*';
        else row += ' ';
    }
    console.log(row);
}

// Exercise 20
console.log("\nExercise 20:");
function sumTo(n) {
    return (n * (n + 1)) / 2;
}
for (let i = 0; i < 4; i++) {
    let row = '';
    for (let j = 0; j < 4; j++) {
        row += sumTo(i * j) + ' ';
    }
    console.log(row);
}

// Exercise 21
console.log("\nExercise 21:");
for (let i = 5; i >= 1; i -= 2) {
    console.log(' '.repeat((5-i)/2) + '*'.repeat(i));
}
for (let i = 3; i <= 5; i += 2) {
    console.log(' '.repeat((5-i)/2) + '*'.repeat(i));
}

// Exercise 22
console.log("\nExercise 22:");
for (let i = 0; i < 5; i++) {
    let row = '';
    for (let j = 0; j < 5; j++) {
        row += Math.abs(i - j) + ' ';
    }
    console.log(row);
}

// Exercise 23
console.log("\nExercise 23:");
count = 2;
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += count + ' ';
        count += 2;
    }
    console.log(row);
}

// Exercise 24
console.log("\nExercise 24:");
for (let i = 0; i < 6; i++) {
    let row = '';
    for (let j = 0; j < 6; j++) {
        row += ((i * j) % 5) + ' ';
    }
    console.log(row);
}

// Exercise 25
console.log("\nExercise 25:");
for (let i = 1; i <= 5; i++) {
    let row = '*'.repeat(i) + ' '.repeat(2*(5-i)) + '*'.repeat(i);
    console.log(row);
}
for (let i = 4; i >= 1; i--) {
    let row = '*'.repeat(i) + ' '.repeat(2*(5-i)) + '*'.repeat(i);
    console.log(row);
}

// Exercise 26
console.log("\nExercise 26:");
for (let i = 0; i < 5; i++) {
    let row = '';
    for (let j = 0; j < 5; j++) {
        row += Math.min(i, j) + ' ';
    }
    console.log(row);
}

// Exercise 27
console.log("\nExercise 27:");
count = 1;
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i && count <= 25; j++) {
        row += count + ' ';
        count += 2;
    }
    console.log(row);
}

// Exercise 28
console.log("\nExercise 28:");
for (let i = 0; i < 4; i++) {
    let row = '';
    for (let j = 0; j < 4; j++) {
        row += (i + j + 1) + ' ';
    }
    console.log(row);
}

// Exercise 29
console.log("\nExercise 29:");
for (let i = 1; i <= 5; i += 2) {
    let row = ' '.repeat((5-i)/2);
    for (let j = 1; j <= i; j++) {
        if (j === 1 || j === i) row += '*';
        else row += ' ';
    }
    console.log(row);
}
for (let i = 3; i >= 1; i -= 2) {
    let row = ' '.repeat((5-i)/2);
    for (let j = 1; j <= i; j++) {
        if (j === 1 || j === i) row += '*';
        else row += ' ';
    }
    console.log(row);
}

// Exercise 30
console.log("\nExercise 30:");
function countFactors(n) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if (n / i === i) count++;
            else count += 2;
        }
    }
    return count;
}
for (let i = 0; i < 5; i++) {
    let row = '';
    for (let j = 0; j < 5; j++) {
        row += countFactors((i+1) * (j+1)) + ' ';
    }
    console.log(row);
}
