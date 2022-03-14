const express = require('express');
const app = express();

const port = process.env.port || 3000;

app.get('/api', (req, res) => {
  res.send('Hello Dcard');
})

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
})