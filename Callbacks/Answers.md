
### 1. **Simple Callback Execution**
```js
// Define a function that takes a callback and executes it.
function executeCallback(callback) {
    callback();
}

function sayHello() {
    console.log("Hello, world!");
}

executeCallback(sayHello); // Output: Hello, world!
```

---

### 2. **Callback with Parameters**
```js
function greet(name, callback) {
    callback(name);
}

function sayGreeting(name) {
    console.log(`Hello, ${name}!`);
}

greet("Alice", sayGreeting); // Output: Hello, Alice!
```

---

### 3. **Callback with Anonymous Function**
```js
function runCallback(callback) {
    callback();
}

runCallback(function() {
    console.log("Callback executed with anonymous function!");
});
// Output: Callback executed with anonymous function!
```

---

### 4. **Math Operation Callback**
```js
function doMath(a, b, callback) {
    return callback(a, b);
}

function add(x, y) {
    return x + y;
}

console.log(doMath(5, 10, add)); // Output: 15
```

---

### 5. **Array Iteration with Callback**
```js
function iterateArray(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

const numbers = [1, 2, 3];
iterateArray(numbers, function(num) {
    console.log(num * 2); 
});
// Output: 2, 4, 6
```

---

### 6. **Callback with Timeouts**
```js
function delayedMessage(callback) {
    setTimeout(callback, 2000); // Waits 2 seconds before executing
}

delayedMessage(() => {
    console.log("This message is delayed!");
});
// Output after 2 seconds: This message is delayed!
```

---

### 7. **Success and Failure Callbacks**
```js
function processRequest(successCallback, failureCallback) {
    const isSuccess = Math.random() > 0.5;
    if (isSuccess) {
        successCallback();
    } else {
        failureCallback();
    }
}

processRequest(
    () => console.log("Request succeeded!"),
    () => console.log("Request failed!")
);
```

---

### 8. **Event Simulation with Callback**
```js
function onClick(callback) {
    // Simulate a button click
    console.log("Button clicked!");
    callback();
}

onClick(() => {
    console.log("Callback triggered after click!");
});
// Output: Button clicked!, Callback triggered after click!
```

---

### 9. **Callback with Array Map**
```js
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function(num) {
    return num * 2;
});

console.log(doubled); // Output: [2, 4, 6, 8, 10]
```

---

### 10. **Filter Array with Callback**
```js
const words = ["apple", "banana", "cherry"];

const longWords = words.filter(function(word) {
    return word.length > 5;
});

console.log(longWords); // Output: ["banana", "cherry"]
```

---

### 11. **Sorting Array with Callback**
```js
const numbers = [10, 5, 8, 3];

numbers.sort(function(a, b) {
    return a - b; // Sort in ascending order
});

console.log(numbers); // Output: [3, 5, 8, 10]
```

---

### 12. **Reduce Array with Callback**
```js
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce(function(acc, num) {
    return acc + num;
}, 0);

console.log(sum); // Output: 10
```

---

### 13. **Callback in a Custom Function**
```js
function fetchData(callback) {
    const data = { name: "Alice", age: 25 };
    callback(data);
}

fetchData(function(data) {
    console.log(data.name); // Output: Alice
});
```

---

### 14. **Passing Multiple Callbacks**
```js
function compute(a, b, addCallback, multiplyCallback) {
    console.log(addCallback(a, b)); // Perform addition
    console.log(multiplyCallback(a, b)); // Perform multiplication
}

compute(5, 3, 
    (x, y) => x + y,
    (x, y) => x * y
);
// Output: 8, 15
```

---

### 15. **Check if Element Exists using Callback**
```js
const numbers = [1, 2, 3, 4, 5];

function exists(arr, num, callback) {
    const found = arr.includes(num);
    callback(found);
}

exists(numbers, 3, function(result) {
    console.log(result ? "Number found" : "Number not found");
});
// Output: Number found
```

---

### 16. **Callback with Conditional Execution**
```js
function checkEven(num, evenCallback, oddCallback) {
    if (num % 2 === 0) {
        evenCallback();
    } else {
        oddCallback();
    }
}

checkEven(4, 
    () => console.log("Even number!"),
    () => console.log("Odd number!")
);
// Output: Even number!
```

---

### 17. **Simulating an Asynchronous Operation with Callbacks**
```js
function loadData(callback) {
    setTimeout(() => {
        const data = { user: "John" };
        callback(data);
    }, 1000); // Simulate delay
}

loadData(function(data) {
    console.log(data.user); // Output after 1 second: John
});
```

---

### 18. **Modifying Array Elements with Callbacks**
```js
function modifyArray(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = callback(arr[i]);
    }
    return arr;
}

const numbers = [1, 2, 3, 4];
const newNumbers = modifyArray(numbers, num => num * 3);

console.log(newNumbers); // Output: [3, 6, 9, 12]
```

---

### 19. **Callback Chain**
```js
function firstStep(callback) {
    console.log("Step 1");
    callback();
}

function secondStep() {
    console.log("Step 2");
}

firstStep(secondStep);
// Output: Step 1, Step 2
```

---

### 20. **Callback for Error Handling**
```js
function divideNumbers(a, b, successCallback, errorCallback) {
    if (b === 0) {
        errorCallback("Cannot divide by zero!");
    } else {
        successCallback(a / b);
    }
}

divideNumbers(10, 2, 
    result => console.log("Result:", result),
    error => console.log("Error:", error)
);
// Output: Result: 5
```