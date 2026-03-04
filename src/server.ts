import e from "express";
import { Request, Response } from "express";
import axios from "axios";
import { client } from "./string.js";
const app = e()


app.get('/', async (req: Request, res: Response) => {
    const catchevalue: any = await client.get('todos')
    if (catchevalue) return res.json(JSON.parse(catchevalue))
    const { data }: any = await axios.get('https://jsonplaceholder.typicode.com/todos');
    await client.set('todos', JSON.stringify(data))
    await client.expire('todos', 30)
    return res.json(data);
})

app.listen(3000, () => {
    console.log("Server running in port 3000");
})