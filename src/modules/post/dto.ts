import { z } from "zod";

export const createPostSchema = z.object({
  title: z.string(),
  content: z.string(),
  categoryId: z.number(),
  userId: z.number(),
});

export const updatePostSchema = createPostSchema.partial();
