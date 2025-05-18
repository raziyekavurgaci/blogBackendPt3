import { Router } from "express";
import {
  addCategory,
  deletedCategory,
  getCategory,
  listCategories,
  updatedCategory,
} from "./controller";
const router = Router();

router.get("/api/categories", listCategories);
router.get("/api/categories/:id", getCategory);
router.post("/api/categories", addCategory);
router.put("/api/categories/:id", updatedCategory);
router.delete("/api/categories/:id", deletedCategory);

export default router;
