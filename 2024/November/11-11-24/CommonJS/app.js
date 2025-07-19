const express = require('express');

const app = express()

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.get('/user', () => {
    res.send({
        name: 'John Doe',
        age: 30,
        email: 'johndoe@example.com'
    })
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
})