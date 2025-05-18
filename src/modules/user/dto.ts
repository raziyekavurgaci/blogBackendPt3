import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string(),
  username: z.string(),
  Password: z.string(),
  role: z.enum(["ADMIN", "MEMBER", "MODERATOR"]),
});

export const updateUserSchema = createUserSchema.partial();
