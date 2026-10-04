import { Router } from "express";
import { loginController, registerController } from "../controllers/usersController.js";


const router = Router()

router.post("/auth/register", registerController)
router.post("/auth/login", loginController)

export default router