import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

import urls from "./routes/urls.js";
app.use("/api/urls", urls);

import redirect from "./routes/redirect.js";
app.use(redirect);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}...`);
});

export default app;
