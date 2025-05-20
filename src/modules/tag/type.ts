import { createTagSchema, updateTagSchema } from "./dto";
import { z } from "zod";

export type createTagType = z.infer<typeof createTagSchema>;
export type updateTagType = z.infer<typeof updateTagSchema>;
