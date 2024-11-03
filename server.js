const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

let users = [];

app.post('/api/signup', (req, res) => {
  const { email, firstName, lastName, password } = req.body;
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }
  const newUser = { email, firstName, lastName, password };
  users.push(newUser);
  res.status(201).json({ message: 'User registered successfully' });
});

app.post('/api/signin', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(user => user.email === email && user.password === password);
  if (user) {
    return res.status(200).json({ message: 'Login successful', user });
  }
  res.status(400).json({ message: 'Invalid credentials' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
