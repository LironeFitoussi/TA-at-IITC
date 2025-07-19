console.log("Hello, World!");

// Loops:

// For loop:
// 80  Story  - Show Story 80 times
console.log("Strating Loop");
// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

for (let i = 10; i > 0; i--) {
  console.log(i);
}

let guessNumber = 7;

let userGuess = 0;

// while (userGuess !== guessNumber) {
//   userGuess = Number(prompt("Guess a number: "));
// }

// Objects

const userName = "Aviel";

const user = {
  firstName: "Aviel",
  lastName: "Hajaj",
  age: 28,
  city: "Beit Shemesh",
};

console.log(user);

console.log(user.age);
console.log(user.city);
console.log(user["firstName"]);

// user.firstName === user["firstName"]

user.age = 29;

console.log(user);

user.hobbie = "Football";

console.log(user);

const student1 = {
  name: "Dodo",
  age: 21,
  isStudent: true,
};

console.log(student1.name, student1.age);
console.log(student1.age);

student1.isStudent = false;

console.log(student1);
