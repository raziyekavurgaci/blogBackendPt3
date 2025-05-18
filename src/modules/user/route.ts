import { Router } from "express";
import {
  listUsers,
  getUser,
  addUser,
  updatedUser,
  deletedUser,
} from "./controller";
const router = Router();

router.get("/api/users", listUsers);
router.get("/api/users/:id", getUser);
router.post("/api/users", addUser);
router.put("/api/users/:id", updatedUser);
router.delete("/api/users/:id", deletedUser);

export default router;
