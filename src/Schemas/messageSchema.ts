import {z} from "zod"

export const messageSchema  = z.object({
    message: z
    .string()
    .min(10, {message: "Content must be atleast 10 char"})
    .max(300, {message: "Content must be 300 char"}) 
})