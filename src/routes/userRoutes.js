import express from "express";
import { SignUpController } from "../controllers/user/authController.js"

const router = express.Router();


// SignUp
router.post("/", SignUpController);



export default router;
