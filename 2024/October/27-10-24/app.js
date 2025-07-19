const fs = require('fs');

// console.log('Hello, World!');
// setInterval(() => {
//     console.log('Hello, World!');
// }, 1000);

// Read a File
fs.readFile('hello.txt', "utf8", (err, data) => {
    if (err) {   
        console.error(err);
    }
    console.log(data.toString());
});

// fs.writeFile("my-file.txt", "Hello, Banana!", (err) => {
//     if (err) {
//         console.error(err);
//     }
//         console.log("File Created Successfully");
//     }
// );

fs.appendFile("my-file.txt", "\nnew line", (err) => {
    if (err) {
        console.error(err);
    }
        console.log("File Created Successfully");
    }
);