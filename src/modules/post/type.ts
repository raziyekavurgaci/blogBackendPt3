import { createPostSchema, updatePostSchema } from "./dto";
import { z } from "zod";

export type createPostType = z.infer<typeof createPostSchema>;
export type updatePostType = z.infer<typeof updatePostSchema>;
