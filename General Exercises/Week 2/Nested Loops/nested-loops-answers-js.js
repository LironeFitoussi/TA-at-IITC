// Exercise 1: Print a 2x2 grid of asterisks
console.log("Exercise 1:");
for (let i = 0; i < 2; i++) {
  let row = "";
  for (let j = 0; j < 2; j++) {
    row += "* ";
  }
  console.log(row);
}

// Exercise 2: Print numbers from 1 to 4 in a 2x2 grid
console.log("\nExercise 2:");
let count = 1;
for (let i = 0; i < 2; i++) {
  let row = "";
  for (let j = 0; j < 2; j++) {
    row += count + " ";
    count++;
  }
  console.log(row);
}

// Exercise 3: Print a right-angled triangle of asterisks with 3 rows
console.log("\nExercise 3:");
for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

// Exercise 4: Print a 3x3 grid where each cell contains the sum of its indices
console.log("\nExercise 4:");
for (let i = 0; i < 3; i++) {
  let row = "";
  for (let j = 0; j < 3; j++) {
    row += (i + j) + " ";
  }
  console.log(row);
}

// Exercise 5: Print a 3x3 multiplication table
console.log("\nExercise 5:");
for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= 3; j++) {
    row += (i * j) + " ";
  }
  console.log(row);
}

// Exercise 6: Print a square border of asterisks with side length 3
console.log("\nExercise 6:");
for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= 3; j++) {
    if (i === 1 || i === 3 || j === 1 || j === 3) {
      row += "* ";
    } else {
      row += "  ";
    }
  }
  console.log(row);
}

// Exercise 7: Print numbers from 1 to 9 in a 3x3 grid
console.log("\nExercise 7:");
count = 1;
for (let i = 0; i < 3; i++) {
  let row = "";
  for (let j = 0; j < 3; j++) {
    row += count + " ";
    count++;
  }
  console.log(row);
}

// Exercise 8: Print a 3x3 grid of even numbers starting from 2
console.log("\nExercise 8:");
let evenNumber = 2;
for (let i = 0; i < 3; i++) {
  let row = "";
  for (let j = 0; j < 3; j++) {
    row += evenNumber + " ";
    evenNumber += 2;
  }
  console.log(row);
}

// Exercise 9: Print a right-angled triangle of numbers with 3 rows
console.log("\nExercise 9:");
for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j + " ";
  }
  console.log(row);
}

// Exercise 10: Print a 3x3 checkerboard pattern of 0s and 1s
console.log("\nExercise 10:");
for (let i = 0; i < 3; i++) {
  let row = "";
  for (let j = 0; j < 3; j++) {
    row += ((i + j) % 2) + " ";
  }
  console.log(row);
}

// Exercise 11: Print a 3x3 grid where each cell contains its row number
console.log("\nExercise 11:");
for (let i = 0; i < 3; i++) {
  let row = "";
  for (let j = 0; j < 3; j++) {
    row += i + " ";
  }
  console.log(row);
}

// Exercise 12: Print a 3x3 grid where each cell contains its column number
console.log("\nExercise 12:");
for (let i = 0; i < 3; i++) {
  let row = "";
  for (let j = 0; j < 3; j++) {
    row += j + " ";
  }
  console.log(row);
}

// Exercise 13: Print a 4x4 grid of alternating X and O
console.log("\nExercise 13:");
for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j < 4; j++) {
    row += ((i + j) % 2 === 0 ? "X " : "O ");
  }
  console.log(row);
}

// Exercise 14: Print a right-angled triangle of odd numbers with 4 rows
console.log("\nExercise 14:");
let oddNumber = 1;
for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += oddNumber + " ";
    oddNumber += 2;
  }
  console.log(row);
}

// Exercise 15: Print a 3x3 grid where each cell contains the absolute difference between its row and column indices
console.log("\nExercise 15:");
for (let i = 0; i < 3; i++) {
  let row = "";
  for (let j = 0; j < 3; j++) {
    row += Math.abs(i - j) + " ";
  }
  console.log(row);
}

// Exercise 16: Print a hollow right-angled triangle of asterisks with 4 rows
console.log("\nExercise 16:");
for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    if (j === 1 || j === i || i === 4) {
      row += "* ";
    } else {
      row += "  ";
    }
  }
  console.log(row);
}

// Exercise 17: Print a 4x4 grid where each cell contains the smaller of its row or column index
console.log("\nExercise 17:");
for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j < 4; j++) {
    row += Math.min(i, j) + " ";
  }
  console.log(row);
}

// Exercise 18: Print a 4x4 grid where each cell contains the larger of its row or column index
console.log("\nExercise 18:");
for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j < 4; j++) {
    row += Math.max(i, j) + " ";
  }
  console.log(row);
}

// Exercise 19: Print a right-angled triangle of consecutive letters (A-Z) with 4 rows
console.log("\nExercise 19:");
let letter = 65; // ASCII code for 'A'
for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += String.fromCharCode(letter) + " ";
    letter++;
  }
  console.log(row);
}

// Exercise 20: Print a 3x3 grid where each cell contains the sum of all numbers from 1 to the product of its indices
console.log("\nExercise 20:");
for (let i = 0; i < 3; i++) {
  let row = "";
  for (let j = 0; j < 3; j++) {
    let sum = 0;
    for (let k = 1; k <= (i + 1) * (j + 1); k++) {
      sum += k;
    }
    row += sum + " ";
  }
  console.log(row);
}

// Exercise 21: Print a 4x4 grid of ascending numbers in a spiral pattern
console.log("\nExercise 21:");
let n = 4;
let matrix = Array(n).fill().map(() => Array(n).fill(0));
let num = 1;
let top = 0, bottom = n - 1, left = 0, right = n - 1;

while (num <= n * n) {
  for (let i = left; i <= right; i++) matrix[top][i] = num++;
  top++;
  for (let i = top; i <= bottom; i++) matrix[i][right] = num++;
  right--;
  for (let i = right; i >= left; i--) matrix[bottom][i] = num++;
  bottom--;
  for (let i = bottom; i >= top; i--) matrix[i][left] = num++;
  left++;
}

for (let i = 0; i < n; i++) {
  console.log(matrix[i].join(" "));
}

// Exercise 22: Print a diamond pattern of asterisks with maximum width 5
console.log("\nExercise 22:");
let size = 5;
for (let i = 1; i <= size; i += 2) {
  let spaces = " ".repeat((size - i) / 2);
  let stars = "*".repeat(i);
  console.log(spaces + stars);
}
for (let i = size - 2; i >= 1; i -= 2) {
  let spaces = " ".repeat((size - i) / 2);
  let stars = "*".repeat(i);
  console.log(spaces + stars);
}

// Exercise 23: Print a 4x4 grid where each cell contains the result of its row index raised to the power of its column index
console.log("\nExercise 23:");
for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j < 4; j++) {
    row += Math.pow(i, j) + " ";
  }
  console.log(row);
}

// Exercise 24: Print a right-angled triangle of descending numbers with 4 rows, starting from 10
console.log("\nExercise 24:");
let start = 10;
for (let i = 4; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += start + " ";
    start--;
  }
  console.log(row);
}

// Exercise 25: Print a 4x4 grid where each cell contains the result of (row index * 2) + column index
console.log("\nExercise 25:");
for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j < 4; j++) {
    row += (i * 2 + j) + " ";
  }
  console.log(row);
}

// Exercise 26: Print a hollow square of hash symbols (#) with side length 5
console.log("\nExercise 26:");
for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < 5; j++) {
    if (i === 0 || i === 4 || j === 0 || j === 4) {
      row += "# ";
    } else {
      row += "  ";
    }
  }
  console.log(row);
}

// Exercise 27: Print a 4x4 grid where each cell contains the smaller of: the product of its indices or 5
console.log("\nExercise 27:");
for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j < 4; j++) {
    row += Math.min(i * j, 5) + " ";
  }
  console.log(row);
}

// Exercise 28: Print a right-angled triangle of asterisks with 5 rows, but skip the third row
console.log("\nExercise 28:");
for (let i = 1; i <= 5; i++) {
  if (i !== 3) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

// Exercise 29: Print a 5x5 grid where cells on the main diagonal (where row index equals column index) contain 1, and all other cells contain 0
console.log("\nExercise 29:");
for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < 5; j++) {
    row += (i === j ? "1 " : "0 ");
  }
  console.log(row);
}

// Exercise 30: Print a 4x4 grid where each cell contains the sum of its row index, column index, and the number 1
console.log("\nExercise 30:");
for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j < 4; j++) {
    row += (i + j + 1) + " ";
  }
  console.log(row);
}