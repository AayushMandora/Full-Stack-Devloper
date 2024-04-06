import mongoose from "mongoose";
const Todoschema=mongoose.Schema;

const todo=new Todoschema({
    title:{type:String,require:true,default:"Hey"},
    decs:String,
    status:Boolean,
    Days:Number
})

export const Todo= mongoose.model('Todo',todo);