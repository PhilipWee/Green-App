const express = require('express');
const cors = require('cors');

// Constants
const PORT = process.env.PORT || 80;
const HOST = process.env.HOST || 'localhost';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use(cors({
  origin:['http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/challenges', require('./src/challenges'));
app.use('/rewards', require('./src/rewards'));
app.use('/users', require('./src/users'));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);