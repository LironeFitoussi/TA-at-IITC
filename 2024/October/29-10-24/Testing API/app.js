import fs from "fs/promises"
import express from "express"
import morgan from "morgan"
import logRequest from "./middleware/logger.js"
// import authUser from './middleware/auth.js'

// Routes Import
import jokesRoutes from "./routes/jokesRoute.js"

const app = express()
const PORT = 3000

// Dummy DB Import
import users from './db/users.json' assert { type: "json" }
import products from './db/products.json' assert { type: "json" }

// Middleware
app.use(express.json())
app.use(morgan("tiny"))
app.use(logRequest)
// app.use(authUser)
// app.use(express.static('public'));

// Helper function to write data to JSON files
const writeToFile = async (filename, data) => {
    try {
        await fs.writeFile(filename, JSON.stringify(data, null, 2))
        return true
    } catch (error) {
        console.error(`Error writing to ${filename}:`, error)
        return false
    }
}

// Base Routes
app.get("/", (req, res) => {
    // res.render("index.html")
    res.send("Hello World!")
})

app.get("/api/status", (req, res) => {
    res.send({ message: "Server is UP" })
})

// Jokes
app.use("/api/jokes", jokesRoutes)

// Users Routes
app.get('/api/users', (req, res) => {
    res.json(users)
})

app.get('/api/users/random', (req, res) => {
    const randomUser = users[Math.floor(Math.random() * users.length)]
    res.json(randomUser)
})

app.get("/api/users/:id", (req, res) => {
    const id = +req.params.id
    const user = users.find(user => user.id === id)
    
    if (!user) {
        return res.status(404).json({ error: "User not found" })
    }
    
    res.json(user)
})

app.post("/api/users", async (req, res) => {
    const { name, email, age } = req.body

    if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required" })
    }

    const newUser = {
        id: users.length ? Math.max(...users.map(user => user.id)) + 1 : 1,
        name,
        email,
        age: age || null
    }

    users.push(newUser)
    const success = await writeToFile("./db/users.json", users)

    if (!success) {
        return res.status(500).json({ error: "Failed to save user" })
    }

    res.status(201).json({
        message: "New user added",
        user: newUser
    })
})

app.put("/api/users/:id", async (req, res) => {
    const id = +req.params.id
    const { name, email, age } = req.body

    if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required" })
    }

    const userIndex = users.findIndex(user => user.id === id)
    
    if (userIndex === -1) {
        return res.status(404).json({ error: "User not found" })
    }

    users[userIndex] = { ...users[userIndex], name, email, age: age || users[userIndex].age }
    const success = await writeToFile("./db/users.json", users)

    if (!success) {
        return res.status(500).json({ error: "Failed to update user" })
    }

    res.json({
        message: "User updated",
        user: users[userIndex]
    })
})

app.delete("/api/users/:id", async (req, res) => {
    const id = +req.params.id
    const userIndex = users.findIndex(user => user.id === id)
    
    if (userIndex === -1) {
        return res.status(404).json({ error: "User not found" })
    }

    const deletedUser = users.splice(userIndex, 1)[0]
    const success = await writeToFile("./db/users.json", users)

    if (!success) {
        return res.status(500).json({ error: "Failed to delete user" })
    }

    res.json({
        message: "User deleted",
        user: deletedUser
    })
})

// Products Routes
app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/random', (req, res) => {
    const randomProduct = products[Math.floor(Math.random() * products.length)]
    res.json(randomProduct)
})

app.get("/api/products/:id", (req, res) => {
    const id = +req.params.id
    const product = products.find(product => product.id === id)
    
    if (!product) {
        return res.status(404).json({ error: "Product not found" })
    }
    
    res.json(product)
})

app.post("/api/products", async (req, res) => {
    const { id, name, price, description } = req.body

    if (!name || !price) {
        return res.status(400).json({ error: "Name and price are required" })
    }

    const newProduct = {
        id,
        name,
        price,
        description
    }

    products.push(newProduct)
    const success = await writeToFile("./db/products.json", products)

    if (!success) {
        return res.json({ error: "Failed to save product" })
    }

    res.status(201).json({
        message: "New product added",
        product: newProduct
    })
})

app.put("/api/products/:id", async (req, res) => {
    const id = +req.params.id
    const { name, price, description } = req.body

    if (!name || !price) {
        return res.status(400).json({ error: "Name and price are required" })
    }

    const productIndex = products.findIndex(product => product.id === id)

    products[productIndex] = {
        ...products[productIndex],
        name,
        price,
        description: description || products[productIndex].description
    }
    
    const success = await writeToFile("./db/products.json", products)

    if (!success) {
        return res.status(500).json({ error: "Failed to update product" })
    }

    res.json({
        message: "Product updated",
        product: products[productIndex]
    })
})

app.delete("/api/products/:id", async (req, res) => {
    const id = +req.params.id
    const productIndex = products.findIndex(product => product.id === id)
    
    if (productIndex === -1) {
        return res.status(404).json({ error: "Product not found" })
    }

    const deletedProduct = products.splice(productIndex, 1)[0]
    const success = await writeToFile("./db/products.json", products)

    if (!success) {
        return res.status(500).json({ error: "Failed to delete product" })
    }

    res.json({
        message: "Product deleted",
        product: deletedProduct
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})