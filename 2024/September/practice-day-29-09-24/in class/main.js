// console.log("Hello World");

function displaySquares () {
    const q1_resouce = [2,4,6,8,10];

    let sum = 0;
    const numberList = document.getElementById("numberList")
    numberList.innerHTML = ""

    q1_resouce.forEach(function(currentNumber){
        const calc = currentNumber ** 2 
        sum += calc
        const listItem = document.createElement("li")
        listItem.textContent = calc

        numberList.appendChild(listItem)
    })

    const totalSum = document.createElement("p")
    totalSum.textContent = sum

    // numberList.appendChild(totalSum)

    numberList.insertAdjacentElement("afterend", totalSum)
}

displaySquares()




// [1, 2, 3] //Double 2
// [2, 4, 6]

// const numbers = [1, 2, 3];

// const numbers = {
//     array: [a, b, c]
//     map: function ((a, b, c))
// }

// const listEl = document.querySelectorAll("li")
// console.log(listEl);

// listEl.forEach(function(liEl, index){
//     if (index % 2 === 0) {
//         liEl.style.color = "red";
//     }
// })

// const doubled = numbers.map(function(number, index) {
//     // console.log(index);
//     console.log(`${number} is doubled: ${number * 2}`);
//     return number * 2;
// });

// console.log(doubled); // [2, 4, 6]


// const q2_resource = ["4", "6", "21", "8"]

// const answer1 = q2_resource.map(function(strNum){
//     return Number(strNum) ** 3 
// })

// console.log(answer1)


// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter(function(number) {
//   return number % 2 === 0;
// });

// console.log(evenNumbers); // [2, 4]



// const peoples = [
//     { name: 'Alice', age: 22 },
//     { name: 'Bob', age: 17 },
//     { name: 'Anna', age: 19 },
//     { name: 'Mike', age: 23 }
// ];
      
// [
//     { name: 'Alice', age: 22 },
//     { name: 'Anna', age: 19 }
// ]

// const newArr = peoples.filter(function(people){
//     // console.log(people.age);
//     const peopleName = people.name
//     console.log(peopleName);
    
//     return people.age >= 18 && peopleName[0].includes("A")
// })

// console.log(newArr);


// const array = [1, 2, 3, 4]

// let total = 0

// for(let i = 0; i < array.length; i++) {
//     total += array[i]
// } 

// console.log(total);


// const numbers = ["h", "e", "l", "l", "o"];

// const sum = numbers.reduce(function(total, number) {
//   return total + number;
// }, "");

// const numbers = [1, 2, 3, 4];

// const sum = numbers.reduce(function(total, number, index, arr) {
//   return total - number;
// }, 0);

// console.log(sum); // 10

// const people = [
//     { name: 'Alice', age: 22 },
//     { name: 'Bob', age: 17 },
//     { name: 'Anna', age: 19 },
//     { name: 'Mike', age: 23 }
// ];

// const peopleObj = people.reduce((acc, person) => {
//     acc[person.name] = person.age;
//     return acc;
// }, {});

// console.log(peopleObj);
// Output: { Alice: 22, Bob: 17, Anna: 19, Mike: 23 }
   




// const fruits = ['apple', 'banana']
// // { a: 4, p: 2, l: 1, e: 1, b: 1, n: 2 }

// const fruitsObj = fruits.reduce((acc, string) => {
//     const stringArr = string.split("")
//     console.log(stringArr);
    
//     stringArr.forEach((char) => {
//     //     // console.log(char);
//     //     if (acc[char]) {
//     //         acc[char]++
//     //     } else {
//     //         acc[char] = 1
//     //     }
//         acc[char] ? acc[char]++ : acc[char] = 1
//         // return acc[letter] = (acc[letter] || 0) + 1;
//     })

//     return acc
// }, {})

// console.log(fruitsObj);



// const numbers = [2, 4, 7, 6, 3];
// const hasOdd = numbers.some(function(number) {
//   return number % 2 !== 0;
// });

// console.log(hasOdd); // true

// const allEven = numbers.every(function(number) {
//   return number % 2 === 0;
// });
// console.log(allEven); // false

// const users = [
//     { name: 'Alice', age: 28 },
//     { name: 'Bob', age: 34 },
//     { name: 'Charlie', age: 22 }
// ];

// const userOver30 = users.find(function(user) {
//     return user.age > 30;
// });

// console.log(userOver30); // { name: 'Bob', age: 34 }

// const indexUnder25 = users.findIndex(function(user) {
//     return user.age < 25;
// });

// console.log(indexUnder25); // 2

// const students = [];
// students.push({ name: 'John', score: 88 });
// students.push({ name: 'Emma', score: 95 });
// students.push({ name: 'Sophia', score: 78 });
// students.push({ name: 'Michael', score: 95 });

// const studentWith95 = students.find(function(student) {
//     return student.score === 95;
// });

// console.log(studentWith95); // { name: 'Emma', score: 95 }

const numbers = [10, 5, 8, 1];
numbers.sort(function(a, b) {
  return b - a;
});

// [10, 5, 8, 1]
// [5, 10, 8, 1]
// [5, 8, 10, 1]
// [5, 8, 1, 10]
// [5, 1, 8, 10]
// [1, 5, 8, 10]

// [10, 5, 8, 1]
// [10, 8, 5, 1]


// const letters = ['d', 'a', 'c', 'b'];
// letters.sort();

// console.log(letters); // ['a', 'b', 'c', 'd']

// console.log(numbers); // [1, 5, 8, 10]


// console.log(numbersByLength); // [4, 12, 56, 123, 7890]

const nestedArray = 
    [1, 
        [2, 
            [3, 
                [4]
            ]
        ]
    ];

        // [1, 2, 3, [4]]
// nestedArray = [1, anotherArray]

// anotherArray [2, anotheranotherArray]

// anotheranotherArray = [3, lastArray]

// lastArray = [4] 

// const flatArray = nestedArray.flat(10);

// console.log(flatArray); // [1, 2, 3, [4]]



// function word(string) {
//     return string + " " + string
// }

// const word1 = (string) => {
//    return `${string} ${string}`
// }

// newArray.array.forEach((el, idx) => { 
// });

// function generatePassword() {
//     const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//     let password = '';
//     for (let i = 0; i < 8; i++) {
//         const randomIndex = Math.floor(Math.random() * chars.length);
//         password += chars[randomIndex];
//     }
//     return password;
// }

// const passwords = Array.from({ length: 5 }, generatePassword);
// console.log(passwords);

const allLeeters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
const allNumbers = "0123456789"
const passwords = [
    "eJpOdoFY",
    "Pad3IKTd",
    "wetNJsIe",
    "Ohh02AEX",
    "mGfWro3g"
]

// const isStrong = passwords.some((passwordStr) => {
//     let hasLetters = false;
//     let hasNumbers = false;

//     if (passwordStr.length >= 8) {
//         passwordStr.forEach((char) => {
//             if (allLeeters.includes(char)) {
//                 hasLetters = true
//             }

//             if (allNumbers.includes(char)) {
//                 hasNumbers = true
//             }
//         })
//     } else {
//         console.log("Password must be at least 8 characters long");
//         return false
//     }

//     if (!hasLetters) {
//         console.log("Password must contain at least one letter");
//     }

//     if (!hasNumbers) {
//         console.log("Password must contain at least one number");
//     }

//     return hasLetters && hasNumbers
// })


// const isStrong = passwords.some((passwordStr) => {
//     let hasLetters = false;
//     let hasNumbers = false;

//     passwordStr.length >= 8 ? passwordStr.forEach((char) => {
//         allLeeters.includes(char) ? hasLetters = true : null
//         allNumbers.includes(char) ? hasNumbers = true : null
//     }) : false
    
//     return hasLetters && hasNumbers
// })

// console.log(isStrong);


const products = [
    { name: 'Laptop', price: 4000, quantity: 10 },
    { name: 'Smartphone', price: 2000, quantity: 5 },
    { name: 'Headphones', price: 150, quantity: 0 }, // This product is out of stock
    { name: 'Monitor', price: 800, quantity: 7 },
    { name: 'Keyboard', price: 100, quantity: 3 },
    { name: 'Smartwatch', price: 1800, quantity: 0 } // Another product out of stock
  ];

const students = [
    { name: 'Devid', averageGrade: 85 },
    { name: 'Dara', averageGrade: 85 },
    { name: 'Michael', averageGrade: 85 },
    { name: 'John', averageGrade: 75 },
    { name: 'Anna', averageGrade: 90 },
    { name: 'Ben', averageGrade: 95 }
];

const sortedArray = students.sort((a, b) => {
    if (b.averageGrade === a.averageGrade) {
        // sort by name 
        return a.name.localeCompare(b.name)
    }
    return b.averageGrade - a.averageGrade
})

console.log(sortedArray);

