import express from "express";
const router = express.Router();

router.use(express.json());

import controller from "../controllers/RedirectController.js";

router.get("/:id", controller.get);

export default router;
