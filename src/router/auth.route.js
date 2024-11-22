import { Router } from "express";
import { login, logout, sendMessage, profile, verifyToken, getMessages, sendResponse, updateStatus } from "../controller/auth.controller.js";
import {authRequired} from "../middlewares/validateToken.js"
const router = Router();

router.post("/login", login);
router.post("/logout", logout);
router.post("/sendMessage", sendMessage);
router.get("/getMessages", authRequired, getMessages)
router.post("/sendResponse", sendResponse)
router.post("/updateStatus", updateStatus)
router.get("/verify", verifyToken)
router.get("/profile", authRequired, profile );
export default router;