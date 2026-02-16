import { Router } from "express";
import { helthCheckController } from "../controllers/healthcheck.controllers.js";


const router = Router();

router.get("/", helthCheckController);

//router.Router("/").get(helthCheckController);

export default router;
