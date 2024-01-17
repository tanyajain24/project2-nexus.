const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// For simplicity, using an in-memory array to store user data
const users = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Add logic to check username and password against stored users
  console.log('Login Request:', username, password);
  res.send('Login Successful'); // You may send a response accordingly
});

app.post('/signup', (req, res) => {
  const { newUsername, newPassword } = req.body;
  // Add logic to create a new user and store it
  console.log('Signup Request:', newUsername, newPassword);
  users.push({ username: newUsername, password: newPassword });
  res.send('Signup Successful'); // You may send a response accordingly
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
