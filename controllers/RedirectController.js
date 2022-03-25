const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  get: async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const url = await prisma.urls.findUnique({
      where: { id },
    });

    if (!url) return res.sendStatus(404);

    if (new Date() > url.expireAt) return res.sendStatus(404);

    return res.redirect(url.original_url);
  }
}