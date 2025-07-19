# Lesson: Simulating Coin Flips with a do...while Loop

## Objective
By the end of this lesson, you'll be able to use a do...while loop to simulate flipping a coin until it lands on heads 3 times in a row.

## Prerequisites
- Basic understanding of JavaScript syntax
- Familiarity with variables and conditional statements

## Introduction
In this lesson, we'll use a do...while loop to create a coin-flipping simulation. The program will continue flipping a coin until we get heads three times in a row. This exercise will help you understand how do...while loops work and how to use random number generation in JavaScript.

## Step 1: Understanding the do...while Loop

A do...while loop is similar to a while loop, but it always executes the code block at least once before checking the condition. Here's the basic structure:

```javascript
do {
  // Code to be executed
} while (condition);
```

The loop will continue to run as long as the condition is true.

## Step 2: Writing Pseudocode

Before we start coding, it's helpful to write pseudocode. Pseudocode is a plain language description of the steps in an algorithm. It helps us plan our code and solve problems without worrying about syntax.

Here's the pseudocode for our coin-flipping simulation:

```
Initialize consecutiveHeads to 0

Do the following:
    Flip the coin (generate a random number)
    If the result is heads:
        Increment consecutiveHeads
        Print "Heads"
    Else:
        Reset consecutiveHeads to 0
        Print "Tails"
While consecutiveHeads is less than 3

Print "Three consecutive heads!"
```

This pseudocode outlines the logic of our program without getting into the specifics of JavaScript syntax.

## Step 3: Simulating a Coin Flip

To simulate a coin flip, we can use `Math.random()`. This function returns a random number between 0 (inclusive) and 1 (exclusive). We can use this to represent our coin flip:

- If the random number is less than 0.5, we'll consider it "tails"
- If the random number is 0.5 or greater, we'll consider it "heads"

## Step 4: Keeping Track of Consecutive Heads

We need to keep track of how many times we've flipped heads in a row. We'll use a variable for this.

## Step 5: Implementing the Solution

Now let's translate our pseudocode into JavaScript:

```javascript
let consecutiveHeads = 0;

do {
  // Simulate coin flip
  let isHeads = Math.random() >= 0.5;
  
  if (isHeads) {
    consecutiveHeads++;
    console.log("Heads");
  } else {
    consecutiveHeads = 0;
    console.log("Tails");
  }
  
} while (consecutiveHeads < 3);

console.log("Three consecutive heads!");
```

## Code Explanation

1. We initialize `consecutiveHeads` to keep track of how many heads we've flipped in a row.
2. The do...while loop runs at least once and continues until `consecutiveHeads` is 3.
3. Inside the loop:
   - We use `Math.random() >= 0.5` to simulate a coin flip.
   - If it's heads, we increment `consecutiveHeads`.
   - If it's tails, we reset `consecutiveHeads` to 0.
   - We log each flip result.
4. After the loop ends, we print a message indicating that we've achieved three consecutive heads.

## Exercises

1. Run the code several times. Observe how the number of flips varies each time.
2. Modify the code to flip until you get 5 heads in a row instead of 3.
3. Add a feature to count the total number of heads and tails separately, without changing the loop's exit condition.
4. Write pseudocode for a variation of this program that stops after a certain number of flips and reports the longest streak of heads.

## Conclusion

In this lesson, you've learned how to use a do...while loop to create a coin-flipping simulation. You've also practiced writing pseudocode, using `Math.random()` for simple probability simulations, and learned how to keep track of consecutive events.

Remember, writing pseudocode before diving into actual code can help you organize your thoughts and create a clear plan for your program. The do...while loop is particularly useful when you want to ensure that a block of code runs at least once before checking a condition.

Happy coding!