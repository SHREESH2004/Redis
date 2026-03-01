import { client } from "./string.js";

async function init(){
    await client.expire("user:1",10);
    const result=await client.get('user:2');
    console.log(result);
}
init()    
