import { createUserSchema, updateUserSchema } from "./dto";
import { z } from "zod";

export type createUserType = z.infer<typeof createUserSchema>;
export type updateUserType = z.infer<typeof updateUserSchema>;
