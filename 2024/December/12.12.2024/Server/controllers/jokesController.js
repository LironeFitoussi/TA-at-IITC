const jokes = [
    {
      baseline: "Why don’t skeletons fight each other?",
      punchline: "They don’t have the guts.",
    },
    {
      baseline: "What do you call cheese that isn't yours?",
      punchline: "Nacho cheese.",
    },
    {
      baseline: "Why couldn’t the bicycle stand up by itself?",
      punchline: "It was two tired.",
    },
    { baseline: "What do you call a fake noodle?", punchline: "An impasta." },
    { baseline: "Why don’t eggs tell jokes?", punchline: "They might crack up." },
    {
      baseline: "How does a penguin build its house?",
      punchline: "Igloos it together.",
    },
    { baseline: "What do you call bears with no ears?", punchline: "B." },
    {
      baseline: "Why don’t some couples go to the gym?",
      punchline: "Because some relationships don’t work out.",
    },
    {
      baseline: "What did one wall say to the other?",
      punchline: "I'll meet you at the corner.",
    },
    {
      baseline: "Why did the scarecrow win an award?",
      punchline: "Because he was outstanding in his field!",
    },
  ];

const getRandomJoke = (req, res) => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    res.send(randomJoke);
}
 get.allJokes = (req, res) => {
    res.send(jokes)
 }

module.exports = {
    getRandomJoke,
}   