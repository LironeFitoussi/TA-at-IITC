Solutions to Asynchronous and Synchronous Programming Exercises

---

### 1. **Synchronous Console Logging**
```js
console.log('Start');
console.log('Middle');
console.log('End');
```

---

### 2. **Using setTimeout with Delayed Output**
```js
console.log('Start');
setTimeout(() => {
    console.log('End');
}, 1000);
```

---

### 3. **Delayed Logging with setTimeout**
```js
setTimeout(() => {
    console.log('Waiting...');
}, 2000);
```

---

### 4. **Loop with setTimeout (Incorrect Order)**
```js
for (var i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
```

---

### 5. **Correct Loop with setTimeout and Closure**
```js
for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, i * 1000);
}
```

---

### 6. **Synchronous Blocking Example**
```js
console.log('Start');
const start = Date.now();
while (Date.now() - start < 2000) {} // Block for 2 seconds
console.log('End');
```

---

### 7. **Basic Asynchronous with setTimeout**
```js
console.log('Start');
setTimeout(() => {
    console.log('End');
}, 1000);
```

---

### 8. **Asynchronous Message with Multiple setTimeouts**
```js
setTimeout(() => console.log('First'), 1000);
setTimeout(() => console.log('Second'), 2000);
setTimeout(() => console.log('Third'), 3000);
```

---

### 9. **setTimeout Inside a Function**
```js
function delayedMessage() {
    setTimeout(() => console.log('Hello after 2 seconds'), 2000);
}

delayedMessage();
```

---

### 10. **Immediate Execution vs Delayed Execution**
```js
console.log('Start');
setTimeout(() => console.log('First Timeout'), 1000);
setTimeout(() => console.log('Second Timeout'), 0);
console.log('End');
```

---

### 11. **Synchronous Loop with Delayed Logging**
```js
for (let i = 1; i <= 3; i++) {
    console.log(i);
}
console.log('Done!');
```

---

### 12. **setTimeout with Dynamic Delay**
```js
for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log(`Message ${i}`);
    }, i * 1000);
}
```

---

### 13. **Synchronous Function Execution**
```js
function a() { console.log('a'); }
function b() { console.log('b'); }
function c() { console.log('c'); }

a();
b();
c();
```

---

### 14. **setTimeout Inside a Loop (With Function Scope)**
```js
for (let i = 1; i <= 3; i++) {
    (function(num) {
        setTimeout(() => {
            console.log(num);
        }, num * 1000);
    })(i);
}
```

---

### 15. **setTimeout Without Delay**
```js
console.log('Start');
setTimeout(() => {
    console.log('This will run last!');
}, 0);
console.log('End');
```

---

### 16. **Simulating Long Task**
```js
console.log('Start');
const start = Date.now();
while (Date.now() - start < 3000) {}
console.log('End');
```

---

### 17. **Simulate Asynchronous Loading**
```js
console.log('Loading...');
setTimeout(() => {
    console.log('Data loaded!');
}, 2000);
```

---

### 18. **Loop with Multiple setTimeout Calls**
```js
for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(`Task ${i}`);


    }, i * 1000);
}
```

---

### 19. **Synchronous Execution with Loops**
```js
console.log('Start');
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
console.log('End');
```

---

### 20. **Delaying a Function with setTimeout**
```js
function delayLog(message) {
    setTimeout(() => console.log(message), 2000);
}

delayLog('Delayed message!');
```

---

### 21. **Loop with a Delayed Start**
```js
setTimeout(() => {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}, 2000);
```

---

### 22. **Multiple setTimeouts with Overlapping Delays**
```js
setTimeout(() => console.log('First'), 1000);
setTimeout(() => console.log('Second'), 1500);
setTimeout(() => console.log('Third'), 2000);
```

---

### 23. **Long Loop with Immediate setTimeout**
```js
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
setTimeout(() => console.log('Done!'), 0);
```

---

### 24. **setTimeout with Large Delay**
```js
setTimeout(() => {
    console.log('Waiting...');
}, 5000);
```

---

### 25. **Synchronous and Asynchronous Mix**
```js
console.log('Start');
for (let i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), i * 1000);
}
console.log('End');
```

---

### 26. **Simulate Delayed Network Request**
```js
console.log('Sending request...');
setTimeout(() => {
    console.log('Request complete');
}, 3000);
```

---

### 27. **setTimeout with Repeating Pattern**
```js
for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log('Hello');
    }, i * 1000);
}
```

---

### 28. **Logging Numbers After Delay**
```js
for (let i = 1; i <= 4; i++) {
    setTimeout(() => {
        console.log(i);
    }, i * 1000);
}
```

---

### 29. **Basic Countdown**
```js
let countdown = 3;
for (let i = 0; i <= 3; i++) {
    setTimeout(() => {
        if (countdown > 0) {
            console.log(countdown);
            countdown--;
        } else {
            console.log('Go!');
        }
    }, i * 1000);
}
```

---

### 30. **Immediate setTimeout with Synchronous Code**
```js
console.log('Start');
setTimeout(() => {
    console.log('This will log last!');
}, 0);
console.log('Middle');
console.log('End');
```
