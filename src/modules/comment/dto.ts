import { z } from "zod";

export const createCommentSchema = z.object({
  post_id: z.number(),
  userId: z.number(),
  commenter_name: z.string().min(1, "Yorumcu adı boş olamaz"),
  content: z.string().min(1, "Yorum içeriği boş olamaz"),
});

export const updateCommentSchema = createCommentSchema.partial();
