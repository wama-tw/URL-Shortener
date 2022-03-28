import express from "express";
const router = express.Router();

router.use(express.json());

import controller from "../controllers/UrlsController.js";

router.post("/", controller.post);

router.put("/:id", controller.put);

router.delete("/:id", controller.delete);

export default router;
