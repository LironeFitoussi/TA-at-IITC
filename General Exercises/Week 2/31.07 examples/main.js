// function isPalindrome (str) {
//     let length = str.length
//     for (let i = 0; i < length; i++) {
//         // console.log(str[i]);
//         // first interation: i === 0 \\ str[i] === "(n)atan"
//         // second interation: i === 1 \\ str[i] === "n(a)tan"

//         for (let j = 0; j < 1; j++) {
//         // first interation: i === 0 \\ str[length - 1 - i] === "nata(n)"
//         // first interation: i === 1 \\ str[length - 1 - i] === "nat(a)n"

//             if (str[i] !== str[length - 1 - i]) {
//                 return false
//                 // console.log(false);
//                 // break
//             }

//         }

//     }

//     return true
// }

// console.log(isPalindrome("natan"));
// console.log(isPalindrome("Elhanan"));
// console.log(isPalindrome("radar"));

// let isPalindrome
// let reverseChar;
// for (let i = 0; i < str.length; i++) {
//     let letters = "";
//     for (let j = str.length - 1; j > 0; j--) {
//         // reverseChar = str[j];
//         if (str[i] !== str[j]) {
//             letters +=
//         }
//     }
// }
// console.log(letters);

// Maor's Solution:
// function palidromeCheck(str) {
//   let isPalindrome = true;
//   for (let i = 1; i <= str.length / 2; i++) {
//     for (let j = str.length; j >= str.length / 2; j--) {
//       if (str[i - 1] !== str[j - 1] && i + j === str.length + 1) {
//         isPalindrome = false;
//         break;
//       }
//     }

//     if (!isPalindrome) {
//         break
//     }
//   }

//   if (isPalindrome) {
//     console.log("palindrome");
//   } else {
//     console.log("Not a Palidrome");
//   }
// }

// palidromeCheck("natan")
// palidromeCheck("banana")

// let city = "Netanya"
// let person = {
//     fName: "Lirone",
//     lName: "Fitoussi",
//     age: 24,
//     city: city,
//     hobbie: "commit",
// };

// console.log(person);
// console.log(person["hobbie"]);
// person.hobbie = city
// console.log(person.hobbie);

// person.hair = "bold"
// console.log(person);

// let person = {
//     name: prompt("Your Name"),
//     age: prompt("Your Age")
// };

// console.log(person);

// let person = {
//     name: "John",
//     age: 30,
//     isStudent: false
// }

// person.name;
// person.age;

// console.log("Name: " + person.name + ", Age: " + person.age);

// person.isStudent = true;

// console.log(person);

// let fruit = {
//     name: "Banana",
//     color: "Yellow",
//     sweetness: 6
// };

// console.log(fruit.name);
// console.log(fruit.sweetness);

// console.log(fruit);
// fruit.color = "Green"
// console.log(fruit);

// let user = {
//     name: "John Doe",
//     greeting: function (userName) {
//         console.log(`Hello ${userName}, my Name is ${this.name}`)
//     },
//     sayGoodbye: function () {
//         console.log("Goodbye!");
//     }
// }

// user.greeting("Ben")
// user.sayGoodbye()

// console.log(user);

// let car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020,
// }

// console.log(car);

// let carKeys = Object.keys(car);

// console.log(carKeys);

// for (let i = 0; i < carKeys.length; i++) {
//     // console.log(carKeys[i]); // "make", "model", "year"
//     // console.log(car[carKeys[i]]);
//     console.log(`${carKeys[i]}: ${car[carKeys[i]]}`);
// }

let car = {
    make: "Chevrolet",
    model: "Spark",
    year: 2012,
    gear: "Manual",
    printDetails: function() {
        let keys = Object.keys(this)
        for (let i = 0; i < keys.length; i++) {
            if (typeof this[keys[i]] !== "function" ) {
                console.log(this[keys[i]]);
            }
        }
    },
    printAll: function() {
        let keys = Object.keys(this);

        let values = Object.values(this);
        console.log(values);
        for (let i = 0; i < keys.length; i++) {
            if (typeof values[i] !== "function") {
                console.log(`${keys[i]}: ${values[i]}`);
            }
        }
    },
    deleteKey: function (key) {
        delete this[key]
    }
}

console.log(car.model);

car.year = 2014
// console.log(car);

car.color = "Black"
console.log(car);

car.printDetails()
car.printAll()
 
// delete car.make;
// deleteKey("model")
console.log(car);

//Create an object representing a person with properties and a method.
let person = {
    name: "John",
    age: 30,
    city: "Tel Aviv",
    printDetails: function() {
        console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.city}`);
    }
}

let personKeys = Object.keys(person);
console.log(personKeys);