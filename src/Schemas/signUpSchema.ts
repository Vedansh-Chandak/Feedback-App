import {z} from 'zod'

export const usernameValidation = z
.string()
.min(2, "Username must have atleast 2 char")
.max(10)
.regex( /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Username must not contain special Character")

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message:"Invalid email"}),
    password: z.string().min(6,{message: "password dmust atleast 6"}).max(10)
    })

    