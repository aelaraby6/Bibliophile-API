import express from "express";
import { SignUpController, SignInController } from "../controllers/user/authController.js"
import { authenticateToken } from "../middlewares/authenticateTokenMiddlware.js";
import { getProfile } from "../controllers/user/userController.js";

const router = express.Router();


// SignUp
router.post("/signup", SignUpController);

//SignIn
router.post("/signin", SignInController);

// Get Profile
router.get("/getProfile", authenticateToken, getProfile);



export default router;
