import controller from "../controller/controller.js";
import express from "express";

const router = express.Router();
router.post("/reg", controller.create);
router.get("/login", controller.login);
router.get("/logout",controller.logout)
export default router;
