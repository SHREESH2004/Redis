import e from "express"
import session from "express-session"
import { Request, Response } from "express"
import axios from "axios"
import { client } from "./string.js"
import { shadowShield } from "shadowshield"

const app = e()


app.use(session({
    secret: "test-secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, httpOnly: true, maxAge: 3600000 }
}))

app.use(shadowShield({
    redisUrl: "redis://127.0.0.1:6379",
    threshold: 0.5,
    blockTTL: 3600
}))

app.get('/', async (req: Request, res: Response) => {
    const catchevalue: any = await client.get('todos')
    if (catchevalue) return res.json(JSON.parse(catchevalue))
    const { data }: any = await axios.get('https://jsonplaceholder.typicode.com/todos')
    await client.set('todos', JSON.stringify(data))
    await client.expire('todos', 30)
    return res.json(data)
})

app.listen(3000, () => {
    console.log("Server running in port 3000")
})