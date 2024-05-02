import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userschema= new Schema({
    email:{type:String},
    name:{type:String},
    username:{type:String},
    profilepic:{type:String},
    coverpic:{type:String},
    razorpayID:{type:String},
    razorpaySECRET:{type:String},
});

export default mongoose.models.User || model('User',userschema);