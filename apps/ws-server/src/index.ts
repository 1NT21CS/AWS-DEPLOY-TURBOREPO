import {WebSocketServer} from 'ws';
import {client} from "@repo/prisma/client";

const wss = new WebSocketServer({
    port:3001
})

wss.on("connection", async (socket)=> {
    
    try{
        await client.user.create({
            data:{
                username:Math.random().toString(36).substring(2, 15),
                password:Math.random().toString(36).substring(2, 15)
            }
        })
        socket.send("Hi there you are connected");

    }catch(e){

        socket.send("Could not connect: "+e);

    }
})