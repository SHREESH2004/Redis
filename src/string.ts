import {Redis} from "ioredis";

export const client:any=new Redis(
    {
        host:"127.0.0.1",
        port:6379
    }
)
client.on("error",(err:any)=>{
    console.log("Redis error",err)
    }
)
