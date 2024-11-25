import { Router } from "express";
import { addAuthorBio } from "../controller/authorController.js";
import protectAuth from "../middleware/protectAuth.js";

const router = Router();

router.patch("/", protectAuth, addAuthorBio);

export default router;