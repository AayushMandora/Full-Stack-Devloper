import express from "express";
import mongoose from "mongoose";
import {Todo} from "./modules/Todo.js";

let con=await mongoose.connect('mongodb://127.0.0.1:27017/Todo');
const app=express();
const port=3000;


app.get("/",async (req,res)=>{
    const todo= await new Todo({title:"Share work",decs:"Share your daily progress",status:false,Days:7});
    todo.save();
    res.send("Hello World!");
})

app.get("/a",async (req,res)=>{
    // const todo= await Todo.findOne({});
    const todo= await Todo.findOne({});
    res.send("Hello World!"+todo);
})

app.listen(port,()=>{
    console.log(`App listen on Port ${port}`);
})