import { Router } from "express";
import {
  getUser,
  loginUser,
  logout,
  registerUser,
} from "../controller/userController.js";
import protectAuth from "../middleware/protectAuth.js";

const router = Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/logout", logout);

router.get("/", protectAuth, getUser);

export default router;
