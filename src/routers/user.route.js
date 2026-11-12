import express from 'express'
import { getUserController, registerUserController, LoginController, getAllUsersController } from '../controller/user.controller.js';
import { validateUser } from "../middleware/guard.middleware.js";


const router = express.Router();


router.get("/getuser", getUserController)
router.post("/registeruser", registerUserController)
router.post("/login", LoginController)
router.get("/getallusers", validateUser, getAllUsersController);

export default router