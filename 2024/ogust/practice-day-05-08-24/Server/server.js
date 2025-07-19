const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

const secretKey = 'your-secret-key';
const users = [
    {
        username: 'admin',
        password: '$2b$10$g9w4cJ3Yq1ZcVvZ6G7Y4wO2f7e3a4K6Jw2U3P7Z6Qv4Q5s6q6w7T2'
    },
    {
        username: 'user',
        password: '$2b$10$g9w4cJ3Yq1ZcVvZ6G7Y4wO2f7e3a4K6Jw2U3P7Z6Qv4Q5s6q6w7T2'
    },
]; 
// In a real app, this would be a database

// User registration
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    // users.push({ username, password: hashedPassword });
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

// User login
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (!user) {
      return res.status(401).json({ error: 'Authentication failed' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Authentication failed' });
    }
    const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

// Protected route
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Access granted to protected route', user: req.user });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));