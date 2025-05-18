import { Router } from "express";
import { login, refresh } from "./controller";

const router = Router();

router.post("/api/auth/login", login);
router.post("/api/auth/refresh", refresh);

export default router;
