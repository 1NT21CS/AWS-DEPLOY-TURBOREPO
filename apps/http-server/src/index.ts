import express from 'express';
import {client} from "@repo/prisma/client";

const app = express();
const port = 3002;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post("/signup", async (req, res) => {
    try{
        const username = req.body.username;
    const password = req.body.password;
    const user = await client.user.create({
        data:{
            username,
            password
        }
    });
    res.json({
        message:"Signup successful",
        id: user.id
    });
    }catch(e){
        res.json("Could not signup: "+e);
    }
})

app.listen(port, ()=> {
    console.log("Running on http://localhost:" + port);
});

