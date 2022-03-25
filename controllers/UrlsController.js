const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  post: async (req, res) => {
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
  },
  put: async (req, res) => {
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
  },
  delete: async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const deletedUrl = await prisma.urls.delete({
      where: { id },
    });

    return res.json(deletedUrl);
  }
};