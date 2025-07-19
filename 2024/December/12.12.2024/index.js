const filesystem = require("fs");

// console.log('First Statement');

// setTimeout(() => {
//   console.log('Second Statement');
// }, 0);

// console.log('Third Statement');

//? File System Module

//! Read File
// filesystem.readFile('./file_directory/file.txt', 'utf8', (error, data) => {
//   if (error) {
//     console.error(error);
//     return;
//   }

//   console.log(data);
// });

//! Write File
// filesystem.writeFile(
//   "./file_directory/file1.txt",
//   "שלום לך ארץ נהדרת",
//   (error) => {
//     if (error) {
//       console.error(error);
//       return;
//     }

//     console.log("File has been written");
//   }
// );

//! Append File
filesystem.appendFile(
  "./file_directory/file1.txt",
  "ֿ\n New Line",
  (error) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log("File has been appended"); 
  }
);
