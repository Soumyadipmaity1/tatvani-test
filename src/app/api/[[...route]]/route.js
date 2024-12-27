import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import users from './users'

export const runtime = 'edge'

const app = new Hono().basePath('/api')

app.route('/users', users)
// app.route('/books', books)

export const GET = handle(app)
export const POST = handle(app)