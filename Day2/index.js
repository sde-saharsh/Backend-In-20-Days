require('dotenv').config();
const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("Hi u are at home")
})

app.get('/profile',(req,res)=>{
    res.send("Hi u are at twitter")
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login</h1>')
})

app.listen(process.env.PORT,()=>{
    console.log(`example running on port ${process.env.PORT}`);
})