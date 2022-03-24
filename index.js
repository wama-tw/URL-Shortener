const express = require('express');
const app = express();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
require('dotenv').config();

app.use(express.json());

app.get('/api/urls', (req, res) => {
  return res.send('Hello Dcard');
});

app.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const url = await prisma.urls.findUnique({
    where: { id },
  });

  if (!url) return res.sendStatus(404);

  if (new Date() > url.expireAt) return res.sendStatus(404);

  return res.redirect(url.original_url);
});

app.post('/api/urls', async (req, res) => {
  const newUrl = await prisma.urls.create({
    data: {
      original_url: req.body.url,
      expireAt: new Date(Date.parse(req.body.expireAt))
    }
  });

  return res.json({
    "id": newUrl.id,
    "shortUrl": `${req.protocol}://${req.hostname}:${process.env.PORT}/${newUrl.id}`
  });
});

app.put('/api/urls/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const updatedUrl = await prisma.urls.update({
    where: { id },
    data: {
      original_url: req.body.url,
      expireAt: new Date(Date.parse(req.body.expireAt))
    },
  });

  return res.json({
    "id": updatedUrl.id,
    "shortUrl": `${req.protocol}://${req.hostname}:${process.env.PORT}/${updatedUrl.id}`
  });
});

app.delete('/api/urls/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const deletedUrl = await prisma.urls.delete({
    where: { id },
  });

  return res.json(deletedUrl);
})

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}...`);
});