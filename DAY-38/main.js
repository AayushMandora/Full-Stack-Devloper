const express=require("express");
const app=express();
const port=3000;

app.set('view engine', 'ejs');

app.get("/",(req,res)=>{
    let BrandName="Company";
    let search="Search this now";
    let items=["item1","item2","item3"]
    res.render("index",{BrandName,search,items});
})

app.listen(port,()=>{
    console.log(`server runs on ${port}`)
})