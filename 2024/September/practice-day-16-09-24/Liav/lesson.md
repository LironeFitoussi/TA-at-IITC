## 🥵 Task 16: Reverse Strings in an Array 🥵
**TODO**: 
1. DONE: Write a function | 
2. DONE: that takes an array of strings | 
3. DONE: and returns a new array |
4. DONE: where each string is reversed. |

```js
function reverseStrings(strings) {
  // your code here
}

const testStrings1 = ["apple", "banana", "orange"];
const reversedStrings = reverseStrings(testStrings1);
console.log("Reversed Strings:", reversedStrings);
// Expected Output: ["elppa", "ananab", "egnaro"]
```

---

## 🥵 Task 17: Count Characters in Strings 🥵
**TODO**: Write a function that takes an array of strings and returns an object where keys are the string and values are the number of characters in that string.

```js
function countCharacters(strings) {
  // your code here
}

const testStrings2 = ["hello", "world", "JavaScript"];
const charCounts = countCharacters(testStrings2);
console.log("Character Counts:", charCounts);
// Expected Output: { hello: 5, world: 5, JavaScript: 10 }
```

---

## 🥵 Task 18: Filter Strings Longer Than 5 Characters 🥵
**TODO**: Write a function that takes an array of strings and returns a new array containing only the strings that are longer than 5 characters.

```js
function filterLongStrings(strings) {
  // your code here
}

const testStrings3 = ["tiny", "massive", "small", "gigantic", "huge"];
const longStrings = filterLongStrings(testStrings3);
console.log("Strings Longer Than 5 Characters:", longStrings);
// Expected Output: ["massive", "gigantic"]
```

---

## 🥵 Task 19: Double Loop to Find Matching Substrings 🥵
**TODO**: Write a function that takes two arrays of strings and returns an array of strings that are found in both arrays.

```js
function findMatchingStrings(array1, array2) {
  // your code here
}

const testStrings4a = ["apple", "banana", "orange", "grape"];
const testStrings4b = ["banana", "peach", "grape", "kiwi"];
const matchingStrings = findMatchingStrings(testStrings4a, testStrings4b);
console.log("Matching Strings:", matchingStrings);
// Expected Output: ["banana", "grape"]
```

---

## 🥵 Task 20: Create a Grid of Strings 🥵
**TODO**: Write a function that creates a 2D array (grid) where each row contains the same string repeated multiple times. The function should take a string and a number for the size of the grid.

```js
function createStringGrid(str, size) {
  // your code here
}

const grid = createStringGrid("wow", 3);
console.log("String Grid:", grid);
// Expected Output: [["wow", "wow", "wow"], ["wow", "wow", "wow"], ["wow", "wow", "wow"]]
