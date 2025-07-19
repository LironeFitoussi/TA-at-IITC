// 1.

const testStrings1 = ["apple", "banana", "orange"];

function reverseStrings(strings) {
  let strArray = [];

  //   let reverse = strings.map((str) => str.split("").reverse().join(""));

  for (let i = 0; i < strings.length; i++) {
    let reverse;
    reverse = strings[i].split("");
    /*
        let newArr = []
        const oldArr = [a, p, p, l, e]

        newArr.push(oldArr[4])
        newArr.push(oldArr[3])
        ...

    */
    let newArr = [];
    for (let j = reverse.length - 1; j >= 0; j--) {
      // [a, p, p, l, e]
      // [e]
      // [e, l]
      // [e, l, p]
      // [e, l, p, p]
      // [e, l, p, p, a]
      newArr.push(reverse[j].join(""));
    }

    // console.log(newArr.join(""));
    strArray.push(newArr);
  }
  return strArray;
}

console.log(reverseStrings(testStrings1));
// const nameString = "Liav";

// console.log(nameString.split("").reverse());

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let str = arr.join();
// console.log(str);
