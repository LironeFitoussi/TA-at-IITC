// // console.log("Hello World");

// let x = 10;
// const y = 11;

// x = 12;

// // console.log(x);

// function greet (name, age) {
//     console.log(`Hello ${name}, you are ${age}`)
// }

// // greet("Tal", 24)
// // greet("Lirone", 24)
// // greet("Moshe", 12)
// // greet("Dana", 30)

// let grades = [12, 18, 24, 80, 100];
// let grades2 = [50, 4, 80, 90, 70];

// // console.log(grades)

// function printGrade(gradesArr, idx) {
//     console.log(gradesArr[idx]);
// }

// function printArr(grades) {
//     for (let i = 0; i < grades.length; i++) {
//         console.log(grades[i])
//     }
// }

// printArr(grades)

const strings = [
  "baba",
  "my success",
  "no more lives",
  "and of session",
  "good discussion",
];

function groupStringsBySpaces(strings) {
  const spaceObject = {};
  for (let i = 0; i < strings.length; i++) {
    let counter = 0;

    for (let j = 0; j < strings[i].length; j++) {
      if (strings[i][j] === " ") {
        counter++;
      }
    }

    if (spaceObject[counter]) {
        spaceObject[counter] += strings[i];
    } else {
        spaceObject[counter] = strings[i];
    }
    spaceObject[counter] = strings[i];
    console.log(spaceObject);
  }
  return spaceObject;
}

const groupedStrings_1 = groupStringsBySpaces(strings);
console.log("Grouped Strings By Spaces:", groupedStrings_1);
