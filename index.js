// console.log("Start");

// setTimeout(() => {
//     console.log("Delayed log");
// }, 2000);

// console.log("End");

// console.log("After setTimeout");

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved");
    }, 3000);
});

promise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});

const newPromise = (param) => {
    return new Promise((resolve, reject) => {
        if (param === "success") {
            resolve("Promise resolved");
        } else if (param === "error") {
            reject("Promise rejected");
        } else {
            reject("Invalid parameter");
        }
    });
};

newPromise("success")
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        throw new Error(error);
    });

newPromise("error")
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        // throw new Error(error);
        console.error(error);
    });

newPromise("invalid")
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });