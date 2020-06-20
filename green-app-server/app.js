const express = require('express');

// Constants
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/challenges', require('./src/challenges'));
app.use('/rewards', require('./src/rewards'));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);