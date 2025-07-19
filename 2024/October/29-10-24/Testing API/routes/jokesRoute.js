import express from "express"
import authUser from '../middleware/auth.js'

// Dummy DB Import
import jokes from '../db/jokes.json' assert { type: "json" }
import { validateJoke } from "../middleware/validator.js"

const router = express.Router()

const writeToFile = async (filename, data) => {
    try {
        await fs.appendFile(filename, JSON.stringify(data))
        return true
    } catch (error) {
        console.error(`Error writing to ${filename}:`, error)
        return false
    }
}

// router.use(authUser)
// router.use(validateJoke)

// Jokes Routes
router.get('/', (req, res) => {
    res.json(jokes)
})

router.get('/random', (req, res) => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)]
    res.json(randomJoke)
})

router.get("/:id", (req, res) => {
    const id = +req.params.id
    const joke = jokes.find((joke) => joke.id === id)
    
    if (!joke) {
        return res.status(404).json({ error: "Joke not found" })
    }
    
    res.json(joke)
})

router.post("/", validateJoke, async (req, res) => {
    const { id, setup, punchline } = req.body

    const newJoke = {
        id,
        setup,
        punchline
    }

    jokes.push(newJoke)
    writeToFile("../db/jokes.json", jokes)

    res.status(201).json({
        message: "New joke added",
        joke: newJoke
    })
})

router.put("/:id", async (req, res) => {
    const id = +req.params.id
    const { setup, punchline } = req.body
    const jokeIndex = jokes.findIndex(joke => joke.id === id)
    
    jokes[jokeIndex] = { ...jokes[jokeIndex], setup, punchline }
    const success = await writeToFile("./db/jokes.json", jokes)

    if (!success) {
        return res.status(500).json({ error: "Failed to update joke" })
    }

    res.json({
        message: "Joke updated",
        joke: jokes[jokeIndex]
    })
})

router.delete("/:id", async (req, res) => {
    const id = +req.params.id
    const jokeIndex = jokes.findIndex(joke => joke.id === id)
    
    if (jokeIndex === -1) {
        return res.status(404).json({ error: "Joke not found" })
    }

    const deletedJoke = jokes.splice(jokeIndex, 1)[0]
    const success = await writeToFile("./db/jokes.json", jokes)

    if (!success) {
        return res.status(500).json({ error: "Failed to delete joke" })
    }

    res.json({
        message: "Joke deleted",
        joke: deletedJoke
    })
})

export default router