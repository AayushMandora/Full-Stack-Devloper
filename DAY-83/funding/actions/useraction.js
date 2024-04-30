"use server"
import Razorpay from "razorpay";
import payment from "@/models/payment";
import user from "@/models/user";
import connectDB from "@/models/mongoDb";

export const initiate = async (amount, to_username) => {
  await connectDB();
  var instance = new Razorpay({
    key_id:"KEY_ID",
    key_secret: "KEY_SECRET",
  });
  var options = {
    amount: Number.parseInt(amount), // amount in the smallest currency unit
    currency: "INR",
  };
  let x = instance.orders.create(options);

  await payment.create({ oid: x.id, amount: amount, to_user: to_username, name:"Aayush", message: "Hello"});

  return x;
};
