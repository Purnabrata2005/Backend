import { Router } from "express";
import {registerUser} from "../controllers/user.controllers.js"
import {validat} from "../middlewares/validator.middlewares.js"
import {registerUser} from "../validators/index.js"

const router = Router();

router.post("/register",registerUser(),validat,registerUser);

export default router;