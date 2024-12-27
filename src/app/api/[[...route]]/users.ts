import { Context, Hono } from 'hono'

const users = new Hono().get("/", (c: Context) => {
    return c.json({ message: "Hello World" }, 200);
})


export default users