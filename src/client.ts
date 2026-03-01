import { client } from "./string.js";

async function init(){
    await client.expire("user:1",10);
    await client.set("user:4","Adios" );
    const result=await client.get('user:4');
    console.log(result);
}
init()    
