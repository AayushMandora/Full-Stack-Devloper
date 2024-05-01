"use server";
import Razorpay from "razorpay";
import payment from "@/models/payment";
import user from "@/models/user";
import connectDB from "@/models/mongoDb";

export const initiate = async (amount, to_username, paymentform) => {
  await connectDB();
  var instance = new Razorpay({
    key_id: "KEY_ID",
    key_secret: "KEY_SECRET",
  });
  var options = {
    amount: Number.parseInt(amount),
    currency: "INR",
  };
  let x = instance.orders.create(options);

  await payment.create({
    oid: x.id,
    amount: amount,
    to_user: to_username,
    name: paymentform.name,
    message: paymentform.message,
  });

  return x;
};

export const fetchuser=async (username)=>{
  await connectDB();
  let u=await user.findOne({username:username});
  let userr=u.toObject({flattenObjectIds:true})
  return userr;
} 

export const fetchPayments=async (username)=>{
  await connectDB();
  let p=await payment.find({to_user:username}).sort({amount: -1}).lean();
  return p;
} 
