import { Router } from "express";
import { getMeController, loginController, registerController } from "../controllers/usersController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";


const router = Router()

router.post("/auth/register", registerController)
router.post("/auth/login", loginController)
router.get("/auth/me", authMiddleware, getMeController)

export default router