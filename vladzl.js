const express = require('express')

const app = express();

app.get("/vladzl",(req,res)=>{
    return res.send("Hello, I`m Vlad Zlydar")
})

app.listen(5000, () => {
    console.log('listening on port')
})