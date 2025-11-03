const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mock data
const products = [
  { id: 1, name: 'Classic Watch', price: 199, image: '/assets/classic-watch.jpg' },
  { id: 2, name: 'Modern Watch', price: 249, image: '/assets/modern-watch.jpg' },
  { id: 3, name: 'Sport Watch', price: 299, image: '/assets/sport-watch.jpg' },
];

// Routes
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'user@example.com' && password === 'password') {
    res.status(200).json({ message: 'Login successful', token: 'fake-jwt-token' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  res.status(201).json({ message: 'User registered successfully' });
});

app.get('/products', (req, res) => {
  res.status(200).json(products);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});