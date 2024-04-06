import mongoose from "mongoose";
const employee=mongoose.Schema;

const datagen=new employee({
    name:String,
    salary: Number,
    langauge:String,
    isManager:Boolean
});

export const Employee=mongoose.model('employee',datagen);