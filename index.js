import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

import urls from "./routes/urls.js";
app.use("/api/urls", urls);

import redirect from "./routes/redirect.js";
app.use(redirect);

const server = app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}...`);
});

export { server, app, prisma };
