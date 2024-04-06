const express = require('express');
const app=express();
const port=3000;

app.use(express.static(`public`))

app.get('/',(req,res)=>{
    res.send("Hello world!")
})
app.get('/Home',(req,res)=>{
    res.send("Hello Home!")
})
app.get('/Aboutus',(req,res)=>{
    res.send("Hello Aboutus!");
})

app.get('/:slug',(req,res)=>{
    res.send(`HELLO ${req.params.slug}`)
})

app.listen(port,()=>{
    console.log(`app listen on port ${port}`)
})