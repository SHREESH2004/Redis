import { resolve } from "node:dns";
import { client } from "./string.js";
import { resourceLimits } from "node:worker_threads";

async function init() {
    await client.llen();
    const result=await client
    console.log(result);
    
}