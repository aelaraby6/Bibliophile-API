import express from "express";
import { SignUpController, SignInController } from "../controllers/user/authController.js"

const router = express.Router();


// SignUp
router.post("/signup", SignUpController);

router.post("/signin", SignInController);


export default router;
