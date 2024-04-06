const express=require('express');
const app=express();
const port=5000;
const fs=require("fs");
const post=require("./routes/post");

app.use("/post",post);

app.use(express.static('public'));

// MiddleWare 1 - For Logging Time
app.use((req,res,next)=>{
    console.log("M1");
    req.Aayush="Aayush Bhai";
    console.log(req.headers);
    console.log(Date.now());
    fs.appendFileSync("logs.txt",`${Date.now()}\n`);
    console.log(`Method : ${req.method}`)
    // res.send("This is middleware 1")
    next();
})
// MiddleWare 2
app.use((req,res,next)=>{
    console.log("M2");
    next();
})

app.get("/",(req,res)=>{
    res.send("Hello World!"+req.Aayush);
})

app.listen(port,()=>{
    console.log(`Server runs on this port ${port}`);
})