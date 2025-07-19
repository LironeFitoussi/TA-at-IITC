# Callback Exercises for Beginners

This document contains **20 simple exercises** to help you understand the basics of using callbacks in JavaScript. Each exercise comes with a brief **explanation**, **hints**, and **expected outputs** to guide you.

---

### 1. **Simple Callback Execution**
Write a function that takes another function (a callback) as an argument and executes it.

**Explanation**: This exercise demonstrates how to pass a function (callback) to another function and execute it.  
**Hint**: Define a function and pass it as an argument to another function that will invoke it.

**Expected Output**:
```
Hello, world!
```

---

### 2. **Callback with Parameters**
Create a function that accepts a name and a callback function. The callback should display a greeting using the provided name.

**Explanation**: A callback can accept parameters. The function should pass a parameter to the callback when it is executed.  
**Hint**: Modify the callback function to take parameters and use them.

**Expected Output**:
```
Hello, Alice!
```

---

### 3. **Callback with Anonymous Function**
Pass an anonymous function as a callback and execute it inside another function.

**Explanation**: Instead of passing a named function as a callback, you can pass an anonymous function directly.  
**Hint**: Try passing functions inline rather than defining them separately.

**Expected Output**:
```
Callback executed with anonymous function!
```

---

### 4. **Math Operation Callback**
Write a function that accepts two numbers and a callback function. The callback should define a mathematical operation (like addition or multiplication).

**Explanation**: Callbacks can be used to perform different operations. This exercise allows for flexible math operations through the use of a callback.  
**Hint**: Try different math operations (addition, subtraction, multiplication, etc.).

**Expected Output** (for addition):
```
15
```

---

### 5. **Array Iteration with Callback**
Create a function that accepts an array and a callback function. The callback should be called for each element of the array.

**Explanation**: Callbacks are useful for processing array elements. Use the callback to manipulate or print each item in the array.  
**Hint**: Use a loop or an array method like `forEach` to iterate through the array.

**Expected Output**:
```
2
4
6
```

---

### 6. **Callback with Timeouts**
Write a function that accepts a callback and executes it after a delay using `setTimeout`.

**Explanation**: Callbacks are essential in asynchronous operations like `setTimeout`, which delays the callback execution by a set time.  
**Hint**: Use `setTimeout` and pass the callback to be executed after a delay.

**Expected Output** (after a delay):
```
This message is delayed!
```

---

### 7. **Success and Failure Callbacks**
Create a function that randomly either calls a "success" or a "failure" callback depending on a random condition (e.g., using `Math.random()`).

**Explanation**: Callbacks can handle different outcomes. Here, success and failure callbacks are used based on a random condition.  
**Hint**: Use an if/else structure and `Math.random()` to determine which callback to call.

**Expected Output**:
- If success:
```
Request succeeded!
```
- If failure:
```
Request failed!
```

---

### 8. **Event Simulation with Callback**
Simulate an event (like a button click) by calling a function and passing a callback. The callback should be executed after the simulated event.

**Explanation**: This exercise helps understand how callbacks are used in event-driven programming, like handling clicks or other user actions.  
**Hint**: Call the callback function after the event simulation (e.g., logging "Button clicked!").

**Expected Output**:
```
Button clicked!
Callback triggered after click!
```

---

### 9. **Callback with Array Map**
Use the built-in `map()` method on an array, passing a callback function to modify each element in the array.

**Explanation**: The `map()` method allows you to modify all elements of an array by using a callback function.  
**Hint**: Try returning modified values from the callback inside `map()`.

**Expected Output**:
```
[2, 4, 6, 8, 10]
```

---

### 10. **Filter Array with Callback**
Use the built-in `filter()` method on an array to filter elements based on a condition provided by a callback function.

**Explanation**: The `filter()` method uses a callback to check if an element should be included in the resulting array.  
**Hint**: Return a condition in the callback that determines whether each element stays in the array.

**Expected Output**:
```
["banana", "cherry"]
```

---

### 11. **Sorting Array with Callback**
Use the built-in `sort()` method on an array, passing a callback function to define the sorting behavior.

**Explanation**: The `sort()` method can take a callback to determine the order in which elements are sorted.  
**Hint**: Write a callback function that compares two elements and returns their relative order.

**Expected Output**:
```
[3, 5, 8, 10]
```

---

### 12. **Reduce Array with Callback**
Use the built-in `reduce()` method on an array, passing a callback to reduce all elements into a single value (e.g., sum of numbers).

**Explanation**: The `reduce()` method uses a callback to accumulate values from an array into a single result.  
**Hint**: The callback should combine the array elements based on your desired operation (e.g., summing).

**Expected Output**:
```
10
```

---

### 13. **Callback in a Custom Function**
Create a function that fetches some data (e.g., a name), and pass a callback function that processes the data.

**Explanation**: Callbacks are used in data processing. You can use them to handle data after fetching it or loading it asynchronously.  
**Hint**: Simulate the data fetching (e.g., using an object) and call the callback with the data.

**Expected Output**:
```
Alice
```

---

### 14. **Passing Multiple Callbacks**
Write a function that accepts multiple callbacks (e.g., one for addition, one for multiplication) and uses them to perform operations on two numbers.

**Explanation**: You can pass more than one callback to a function and invoke each one for different purposes (e.g., performing different math operations).  
**Hint**: Pass two callbacks and use each one to perform a different task.

**Expected Output**:
```
8
15
```

---

### 15. **Check if Element Exists using Callback**
Write a function that checks if a given element exists in an array, and pass a callback that logs a message depending on whether the element was found.

**Explanation**: Callbacks can be used for handling different outcomes of an operation, like finding an element in an array.  
**Hint**: Use `includes()` or a loop to check for the element, then call the appropriate callback.

**Expected Output**:
```
Number found
```
OR
```
Number not found
```

---

### 16. **Callback with Conditional Execution**
Create a function that checks if a number is even or odd, and pass two callbacks—one for even numbers and one for odd numbers.

**Explanation**: Callbacks can handle different conditions, such as whether a number is even or odd.  
**Hint**: Use the modulo operator (`%`) to check if a number is even or odd.

**Expected Output** (for even):
```
Even number!
```
OR (for odd):
```
Odd number!
```

---

### 17. **Simulating an Asynchronous Operation with Callbacks**
Write a function that simulates an asynchronous operation (e.g., loading data) and accepts a callback to handle the data after a delay.

**Explanation**: Callbacks are used to handle data after it is asynchronously loaded (e.g., after a timeout).  
**Hint**: Use `setTimeout()` to simulate a delay and call the callback with some mock data.

**Expected Output**:
```
John
```

---

### 18. **Modifying Array Elements with Callbacks**
Create a function that modifies every element in an array using a callback function and returns the modified array.

**Explanation**: You can modify array elements using a callback that defines how each element should be changed.  
**Hint**: Use a loop or `map()` to iterate through the array and apply the callback to each element.

**Expected Output**:
```
[3, 6, 9, 12]
```

---

### 19. **Callback Chain**
Write two functions. The first function should call the second function using a callback after logging a message.

**Explanation**: Callbacks can be chained, meaning one function calls another function, which in turn calls a third, and so on.  
**Hint**: Call the second function from within the first function’s callback.

**Expected Output**:
```
Step 1
Step 2
```

---

### 20. **Callback for Error Handling**
Write a function that attempts to divide two numbers, and pass two callbacks—one for success and one for error (e.g., division by zero).

**Explanation**: Callbacks can handle errors in an operation. For example, you might handle division by zero by calling an error callback.  
**Hint**: Use an `if

` statement to check for division by zero and call the appropriate callback.

**Expected Output** (for valid division):
```
Result: 5
```
OR (for division by zero):
```
Error: Cannot divide by zero!
```

---

These exercises are designed to help you understand the concept of callbacks step by step. Try to implement each one on your own to build a solid foundation! 🚀

--- 

Now you have the exercises with explanations, hints, and expected outputs. You can save this as a `.md` file and use it for your practice!