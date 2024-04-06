const express=require('express');
const app=express();

app.use((req,res,next)=>{
    console.log("This is post MiddleWare");
    next();
})

app.use("/",(req,res)=>{
    res.send("Hello This is post");
})

module.exports=app;