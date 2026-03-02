import { client } from "./string.js";

async function init(){
    await client.lpush('messages',1);
    await client.lpush('messages',1);
    const result:String=await client.blpop('messages',10);
    console.log(result);
}
init()