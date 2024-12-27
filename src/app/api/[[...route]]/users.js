import { Hono } from 'hono'
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator'
import { findUserByEmail } from '@/utils/findUser';
import { db } from '@/lib/db';
import bcrypt from "bcryptjs";
import { createToken } from '@/utils/userToken';
import { setCookie } from "hono/cookie"
const signInUp = z.object({
    fullName: z.string().min(3).max(10),
    email: z.string().email(),
    password: z.string().min(6).max(15)
})

const users = new Hono()
    .post("/signUp", zValidator("json", signInUp), async (c) => {
        try {
            const { fullName, email, password } = await c.req.json();
            // Check if the user already exists
            const userExists = await findUserByEmail(email);
            if (userExists) {
                return c.json({ message: 'User already exists' }, 401);
            } else {
                const hashPwd = await bcrypt.hash(password, 10);
                // Create the user
                await db.user.create({
                    data: {
                        fullName, email, password: hashPwd
                    }
                });
                return c.json({ message: 'User created' }, 201);
            }
        } catch (error) {
            return c.json({ message: 'An error occurred' }, 500);
        }
    }).post("/sign-in", zValidator("json", signInUp.pick({
        email: true,
        password: true
    })), async (c) => {
        try {
            const { email, password } = c.req.valid("json");
            const findUser = await findUserByEmail(email);
            if (!findUser) {
                return c.json({ message: 'User not found' }, 404);
            } else {
                const isMatch = await bcrypt.compare(password, findUser.password);
                const token = createToken(findUser.id);
                if (isMatch) {
                    setCookie(c, "token", token, {
                        path: "/",
                        secure: true,
                        httpOnly: true,
                        maxAge: 86400, // 1 day in seconds
                        expires: new Date(Date.now() + 86400 * 1000),
                    });
                    return c.json({ message: 'User signed in' }, 200);
                } else {
                    return c.json({ message: 'User not found' }, 404);
                }
            }
        } catch (error) {
            return c.json({ message: 'An error occurred' }, 500);
        }
    })


export default users;