// console.log("Test Today");

// const userData = {
//   name: "John Doe",
//   age: 25,
//   email: "john@doe.com",
//   location: "USA",
//   blogs: [
//     { title: "Blog 1", likes: 30 },
//     { title: "Blog 2", likes: 50 },
//   ],
// };

// const userData2 = {
//   name: "Jane Doe",
//   age: 30,
//   email: "jane@doe.com",
//   location: "UK",
//   blogs: [
//     { title: "Blog 1", likes: 30 },
//     { title: "Blog 2", likes: 50 },
//   ],
// };

// // Get a Value from the Object

// // Method 1
// console.log(userData.name); // John Doe

// // Method 2
// console.log(userData["name"]); // John Doe

// // console.log(userData.name);
// // console.log(userData.age);
// // console.log(userData.email);
// // console.log(userData.location);

// // console.log(userData2.name);
// // console.log(userData2.age);
// // console.log(userData2.email);
// // console.log(userData2.location);

// const keys = ["name", "age", "email", "location"];

// for (let i = 0; i < keys.length; i++) {
//   console.log(userData[keys[i]]);
// }

// Test Answers
// 🥵 Task 13: group strings by spaces occurences 🥵
// TODO: Write a function |
// to group strings by the number of spaces | in the string.
// The function should | return | an object where
// keys are the number of spaces
// and values are arrays of strings.

// Expected Output:
// const ex = {
//   0: ["", ""],
//   1: ["", ""],
//   2: ["", ""],
// };

// // Names:
// // groupStrings
// // numSpaces
// // countSpaces
// const strings = [
//   "baba",
//   "my success",
//   "no more lives",
//   "and of session",
//   "good discussion",
// ];

// const groupStrings = function () {
//   // The firts loop inetrart over an array.
//   let countObj = {};
//   for (let i = 0; i < strings.length; i++) {
//     const myString = strings[i];
//     let spacesCounter = 0;
//     for (let j = 0; j <= myString.length; j++) {
//       if (myString[j] === " ") {
//         spacesCounter++;
//       }
//       if (!countObj[spacesCounter]) {
//         countObj[spacesCounter] = [];
//       }
//     }
//     console.log(`In the string ${myString} there are ${spacesCounter} spaces`);

//     // spacesCounter = 0
//     // strings[i] = "baba"

//     countObj[spacesCounter].push(strings[i]);
//   }

//   //   countObj.key = value

//   console.log(countObj);
// };

// groupStrings();

// var input = this.value;
// console.log(input.count(" "));

let text = "How are you doing today?";
const myArray = text.split(" ").length - 1;
console.log(myArray);
