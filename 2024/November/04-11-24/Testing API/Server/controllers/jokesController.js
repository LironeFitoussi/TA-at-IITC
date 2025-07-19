import Joke from '../models/jokeModel.js'

export const getAllJokes = async (req, res) => {
    try {
        const jokes = await Joke.find().populate('owner')

        if (jokes.length === 0) {
            res.status(404).send({
                message: "Add Some Jokes -  ימצחיק"
            })
        }
        res.send(jokes)
    } catch (error) {
        res.status(500).send("Unknown Server Error")
    }
}

export const addNewJoke = async (req, res) => {
    try {
        const { setup, punchline, owner } = req.body

        const newJoke = await new Joke({
            setup,
            punchline,
            owner
        }).save()
    
        res.status(201).json({
            message: "New joke added",
            joke: newJoke
        })

    } catch (error) {
        res.status(500).send("Unknown Server Error")
    }
}

export const getRandomJoke = async (req, res) => {
    const randomJoke = await Joke.aggregate([
        {
            $sample: {
                size: 1
            }
        }
    ])

    res.status(200).send(randomJoke[0])
}

export const getJokeByID = async (req, res) => {
    try {
        const { id } = req.params
        const foundJoke = await Joke.findById(id)
        
        if (!foundJoke) {
            res.status(404).send({
                message: `NO Joke found with id: ${id}`
            })
        }

        res.send(foundJoke)
    } catch (error) {
        res.status(500)
    }
}

export const partialJokeUpdate = async (req, res) => {
    try {
      const { id } = req.params;
      const { setup, punchline } = req.body;
  
      const fieldsToUpdate = {};
  
      if (setup || setup !== "") {
        fieldsToUpdate.setup = setup;
      }
  
      if (punchline || punchline !== "") {
        fieldsToUpdate.punchline = punchline;
      }
  
      const updatedJoke = await Joke.findByIdAndUpdate(id, fieldsToUpdate, {
        new: true,
      });
  
      if (!updatedJoke) {
        res.status(404).send({
          message: `NO Joke found with id: ${id}`,
        });
      }
  
      res.status(201).send(updatedJoke);
    } catch (error) {
      // console.log(error);
      res.status(500);
    }
}

export const fullJokeUpdate = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedJoke = await Joke.findByIdAndUpdate(id, req.body, {
        new: true,
      });
  
      res.status(201).send(updatedJoke);
    } catch (error) {
      res.status(500);
    }
}

export const deleteJoke = async (req, res) => {
    const { id } = req.params;
  
    try {
      await Joke.findByIdAndDelete(id);
      res.status(200).send({
        message: "Joke Succefully Delete",
      });
    } catch (error) {}
  }