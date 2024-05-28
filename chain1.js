// function getUser() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve({ id: 1, name: "John Doe" });
//       }, 1000);
//     });
//   }
  
//   // Using the getUser function and demonstrating promise chaining
//   getUser()
//     .then((user) => {
//       console.log(user); // Logs the user object: { id: 1, name: "John Doe" }
//       return user;
//     })
//     .then((user) => {
//       console.log(`User's name is ${user.name}`); // Logs the message: User's name is John Doe
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });

function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 2,
                name:"Avatar Aang"
            })
            // reject({
            //     code: 404,
            //     message: "No Avatar Found, please check water tribe"
            // })
        }, 2500);
    })
}

getUser()
    .then((user) => {
        console.log(user);
        return user.id
    })
    .then((user => {
        console.log(user.name);
    }))
    .catch((err) => {
        console.log(err);
    })