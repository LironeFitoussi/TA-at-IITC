// obejcts_test = new Object("name", "Lirone")
// console.log(obejcts_test);
const numbers = Array.from({ length: 10 })
  .map((_, idx) => {
    return idx + 1;
  })
  .filter((num) => {
    if (num % 2 === 0) {
      return num;
    }
  });

console.log(numbers);
