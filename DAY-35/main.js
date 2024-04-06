const express=require('express');
const app=express();
const port=5000;

const blog=require('./routes/blog');
const post=require('./routes/post');

app.use("/blog",blog);
app.use("/post",post);

app.use(express.static('public'));

app.get("/",(req,res)=>{
    res.send("Hello get");
}).post("/",(req,res)=>{
    res.send("Hello post");
}).put("/",(req,res)=>{
    res.send("Hello put");
})
// app.delete("/",(req,res)=>{
//     res.send("Hello delete");
// })
app.get("/index",(req,res)=>{
    res.sendFile("templates/index.html",{root: __dirname})
    // res.sendFile(`${__dirname}/templates/index.html`)
})
app.get("/api",(req,res)=>{
    res.json({a:1,b:2,c:3,Aayush:[1,2,3]})
})

app.listen(port,()=>{
    console.log(`Server runs on this port ${port}`);
})