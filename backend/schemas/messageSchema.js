import {z} from "zod";

export const messageSchema = z.object({
    content: z.
    string()
    .min(30,"message must be at least 30 characters long")
    .max(100,"message must be at most 100 characters long"),
    createdAt: z.date()
})