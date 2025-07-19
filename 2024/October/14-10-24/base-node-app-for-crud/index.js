const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/postRoutes');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// allow all cors requests
app.use(cors());
// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error(err));

// Routes
app.use('/posts', postRoutes);

app.get('/', (req, res) => {
  res.send({
    status: 200,
    message: "Hello There!, Youv\'e reached the root of Lirone\'s Blog API"
  });
});

// 404 Route
app.use((req, res) => {
  res.status(404).send({
    status: 404,
    message: 'Not Found',
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
