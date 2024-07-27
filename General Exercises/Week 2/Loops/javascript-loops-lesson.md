# JavaScript Loops

## What are Loops?

Imagine you're playing with a toy train on a circular track. The train goes round and round, passing the same stations over and over again. That's what a loop does in programming! It repeats the same set of instructions multiple times until told to stop.

## Why Do We Use Loops?

- Loops save time: Instead of writing the same code over and over, we can write it once and repeat it.
- Loops help us work with lists: We can go through each item in a list one by one.
- Loops make our code shorter and easier to read.

## How Loops Work in Real-World Programming

### Video Games
Character Movement: A loop constantly checks for player input (like pressing arrow keys) and updates the character's position many times per second.

### Social Media Apps
Displaying Posts: A loop goes through a list of posts and displays each one on your screen.

### Smart Home Devices
Temperature Control: A loop checks the room temperature every minute and adjusts the heating or cooling.

### School Management System
Calculating Grades: A loop goes through each student's scores, calculates their average, and assigns a grade.

### Online Shopping
Applying Discounts: A loop goes through each item in your cart and applies a discount to its price.

### Music Apps
Playing a Playlist: A loop goes through each song in a playlist, playing one after another.

### How Loops Work in These Examples:
- Repetition: In each case, the loop repeats a specific action multiple times.
- Iteration: The loop often goes through a list of items (posts, students, songs) one by one.
- Condition Checking: Many loops continue until a specific condition is met (like reaching the end of a playlist).
- Updating: Loops often update values (like scores or positions) with each repetition.

## Loop Types

Types of Loops in JavaScript:
- 'for' loop: When you know exactly how many times to repeat.
- 'while' loop: When you're not sure how many times to repeat, but know when to stop.
- 'do...while' loop: Like 'while', but always does the task at least once.

## The 'for' Loop

### The 'for' Loop Explained

The 'for' loop has three important parts in its parentheses:

1. Initialization:
   - This is where we set up our counter variable.
   - It runs only once, at the very beginning.
   - Example: `let i = 0;`
   - Think of it as: "Let's start counting from 0."

2. Condition:
   - This is checked before each loop iteration.
   - If it's true, the loop continues. If false, the loop stops.
   - Example: `i < 5;`
   - Think of it as: "Keep going as long as i is less than 5."

3. Update:
   - This runs at the end of each loop iteration.
   - It usually changes the counter variable.
   - Example: `i++`
   - Think of it as: "After each time through the loop, add 1 to i."

### Example

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

How it works:
1. Start with i = 0
2. Is i < 5? Yes, so print i (0)
3. Add 1 to i (now i is 1)
4. Is i < 5? Yes, so print i (1)
5. Keep going until i becomes 5
6. Is i < 5? No, so stop the loop

This will print: 0, 1, 2, 3, 4

### Practice
1. Write a loop that counts from 10 to 1 (backwards).
2. Create a loop that prints only even numbers from 2 to 20.
3. Make a loop that adds up all numbers from 1 to 10 and prints the sum.
4. Write a loop that prints the 5 times table (5, 10, 15, ..., 50).
5. Create a loop that prints this pattern:
   ```
   *
   **
   ***
   ****
   *****
   ```

## The 'while' Loop

Think of it like: "Keep doing this as long as the condition is true."

### Syntax
```javascript
while (condition) {
    // Code to repeat
}
```

### Example
Guessing a secret number:
```javascript
let secretNumber = 7;
let guess = 0;
while (guess !== secretNumber) {
    guess = Number(prompt("Guess the number (1-10):"));
}
console.log("You guessed it!");
```

How it works:
1. We set a secret number (7) and start with a guess of 0.
2. The loop keeps running as long as the guess is not equal to the secret number.
3. Inside the loop:
   - We ask the player to guess a number.
   - We convert their answer to a number and store it in 'guess'.
4. If the guess is wrong, the loop repeats.
5. If the guess is correct, the loop ends and we print "You guessed it!"

### Practice
1. Write a while loop that prints numbers from 1 to 10.
2. Create a while loop that doubles a number until it's bigger than 100.
3. Make a while loop that counts down from 20 to 0.
4. Write a while loop that keeps asking for a password until the correct one is entered.
5. Create a while loop that generates random numbers between 1 and 10 until it gets a 5.

## The 'do...while' Loop

Think of it like: "Do this task, then check if we should do it again."

### Syntax
```javascript
do {
    // Code to repeat
} while (condition);
```

### Example
Asking for a positive number:
```javascript
let number;
do {
    number = Number(prompt("Enter a positive number:"));
} while (number <= 0);
console.log("You entered:", number);
```

How it works:
1. It declares a variable 'number'.
2. The loop starts with 'do', so it will run at least once.
3. Inside the loop, it prompts the user to enter a number and converts the input to a number type.
4. The 'while' condition (number <= 0) checks if the entered number is positive. If not, the loop repeats.
5. Once a positive number is entered, the loop ends and the program logs the entered number to the console.

### Practice
1. Write a do...while loop that prints numbers from 1 to 5.
2. Create a do...while loop that asks the user if they want to play again.
3. Make a do...while loop that rolls a die (1-6) until it gets a 6.
4. Write a do...while loop that keeps doubling a number until it's over 1000.
5. Create a do...while loop that asks for names and adds them to a list until the user enters "done".

## Loop Control

### Loop Control: 'break'
'break' is like an emergency exit for your loop. It immediately stops the loop and moves on.

### Loop Control: 'continue'
'continue' is like skipping a turn in a board game. It jumps to the next iteration of the loop.

## Recap
- Loops help us repeat tasks without writing the same code over and over.
- We learned about 'for', 'while', and 'do...while' loops.
- Each type of loop is useful in different situations.
- 'break' and 'continue' give us more control over our loops.

## Questions?
- What part of loops do you find most interesting?
- What kind of programs would you like to make using loops?
- Let's try some exercises together!

