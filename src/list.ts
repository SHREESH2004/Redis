import { client } from "./string.js";

async function init(){
    await client.lpush('messages',1);
    await client.l
}
init()