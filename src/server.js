const express = require('express');
const app = express();
app.use(express.json());
let messages = [];

app.get('/' , (req , res)=> {
    res.json({message: "Chat API work"});
});

app.get('/messages', (req , res) => {
    res.json(messages);
})

app.post("/messages", (req , res) => {
    const {text} = req.body;
    if(!text){
        return res.status(400).json({error: "Message requis "});
    }
    const newMessage = {
        id: messages.length + 1,
        text,
        createdAt: new Date()
    };
    messages.push(newMessage);
    res.status(201).json(newMessage);
});

app.get("/health", (req , res) => {
    res.json({status: "OK"});
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
})