import { z } from "zod";

export const DirectorySchema = z.object({
  title: z.string().min(0),
  
})