# JWT and Encryption in Node.js: A Comprehensive Lesson

## 1. Introduction to JWT

JSON Web Token (JWT) is a compact and self-contained way of securely transmitting information between parties as a JSON object. JWTs are often used for authentication and information exchange in web development.

A JWT typically consists of three parts:
1. Header
2. Payload
3. Signature

These parts are separated by dots, resulting in a structure like this:
```
xxxxx.yyyyy.zzzzz
```

## 2. Setting Up the Project

First, let's set up a new Node.js project and install the necessary dependencies.

```bash
mkdir jwt-encryption-demo
cd jwt-encryption-demo
npm init -y
npm install jsonwebtoken bcrypt express
```

## 3. Creating and Signing a JWT

Let's start by creating a simple JWT:

```javascript
const jwt = require('jsonwebtoken');

const secretKey = 'your-secret-key';

function createToken(payload) {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

const userPayload = {
  id: 123,
  username: 'john_doe',
  role: 'user'
};

const token = createToken(userPayload);
console.log('Generated Token:', token);
```

In this example, we're using the `jsonwebtoken` library to create a token. The `sign` method takes three arguments:
1. The payload (the data we want to include in the token)
2. A secret key (used to sign the token)
3. Options (like token expiration)

## 4. Verifying a JWT

Now let's verify the token:

```javascript
function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    console.error('Token verification failed:', error.message);
    return null;
  }
}

const decodedToken = verifyToken(token);
console.log('Decoded Token:', decodedToken);
```

The `verify` method checks if the token is valid and hasn't been tampered with. If it's valid, it returns the decoded payload.

## 5. Password Hashing with bcrypt

When storing user passwords, it's crucial to hash them. Let's use bcrypt for this:

```javascript
const bcrypt = require('bcrypt');

async function hashPassword(password) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

async function verifyPassword(password, hash) {
  return await bcrypt.compare(password, hash);
}

// Usage
async function passwordDemo() {
  const password = 'user_password';
  const hashedPassword = await hashPassword(password);
  console.log('Hashed Password:', hashedPassword);

  const isMatch = await verifyPassword(password, hashedPassword);
  console.log('Password Match:', isMatch);
}

passwordDemo();
```

Bcrypt automatically generates a salt and incorporates it into the hash. This means each call to `hashPassword` with the same input will produce a different hash.

## 6. Putting It All Together: A Simple Authentication System

Now, let's create a simple Express server that uses JWT for authentication:

```javascript
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

const secretKey = 'your-secret-key';
const users = []; // In a real app, this would be a database

// User registration
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
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
```

This example demonstrates:
1. User registration with password hashing
2. User login with password verification and JWT generation
3. A protected route that requires a valid JWT to access

## Conclusion

This lesson covered the basics of working with JWTs in Node.js, including:
- Creating and verifying JWTs
- Password hashing with bcrypt
- Implementing a simple authentication system

Remember, while this demonstration provides a good starting point, a production-ready system would require additional security measures, error handling, and proper database integration.