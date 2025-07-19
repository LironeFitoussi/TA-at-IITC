import express from "express"
import mongoose from "mongoose"
import Joke from './models/jokeModel.js';

const uri = "mongodb+srv://lironefit:gaxuwijeAeTJZs4d@cluster0.3ic72.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(uri).then(() => {
    console.log("Connected");
})

// import { MongoClient, ServerApiVersion } from 'mongodb'
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     console.log("Connecting to MongoDB");
    
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//     console.log("Succefully conected to mongodb");
 
//   }
// }
// run().catch(console.dir);

const PORT = 3000

const app = express()
app.use(express.json())

app.get("/", (_req, res) => {
    res.send({
        message: "Hello World"
    })
})

app.post("/api/jokes", async (req, res) => {
    const newJoke = new Joke({
        joke: req.body.joke,
        content: req.body.content,
    })

    await newJoke.save()

    res.send({
        msg: "Good Job!"
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})