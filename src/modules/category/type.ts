import { createCategorySchema, updateCategorySchema } from "./dto";
import { z } from "zod";

export type createCategoryType = z.infer<typeof createCategorySchema>;
export type updateCategoryType = z.infer<typeof updateCategorySchema>;
