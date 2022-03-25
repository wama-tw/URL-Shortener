const express = require('express');
const app = express();
require('dotenv').config();

const urls = require('./routes/urls');
app.use('/api/urls', urls);

const redirect = require('./routes/redirect');
app.use(redirect);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}...`);
});