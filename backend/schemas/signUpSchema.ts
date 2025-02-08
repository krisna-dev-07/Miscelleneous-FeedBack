import {z} from "zod";

// single validation fopr one field

export const usernameValidation=z
    .string()
    .min(3,"username must be at least 3 characters long")
    .max(20,"username must be at most 20 characters long")
    .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special character")


export const signUpSchema=z.object({
    username:usernameValidation,
    email:z.string().email("please use a valid email address"),
    password:z.string().min(6,"password must be at least 6 characters long")
})