import { createCommentSchema, updateCommentSchema } from "./dto";
import { z } from "zod";

export type createCommentType = z.infer<typeof createCommentSchema>;
export type updateCommentType = z.infer<typeof updateCommentSchema>;
