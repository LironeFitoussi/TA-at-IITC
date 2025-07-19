const express = require("express")
const { add } = require("./module.js")
const PORT = 3000;

const app = express()

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
// console.log("Hello World!")

const man = {
    name: "Natana",
    age: 23,
    nationality: "Israeli",
    sayHello: () => {
        console.log("Hello My Name is Natan");
    }

    
}

man.sayHello()
// console.log(add(5, 3));