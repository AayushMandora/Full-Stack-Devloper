"use server"
import Razorpay from "razorpay";
import payment from "@/models/payment";
import user from "@/models/user";
import connectDB from "@/models/mongoDb";

export const initiate = async (amount, to_username, paymentform) => {
  await connectDB();
  var instance = new Razorpay({
    key_id: "YOUR_KEY_ID",
    key_secret: "YOUR_SECRET",
  });
  var options = {
    amount: Number.parseInt(amount), // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11",
  };
  let x = instance.orders.create(options);

  await payment.create({ oid: x.id, amount: amount, to_user: to_username, name:paymentform.name, message: paymentform.message});

  return x;
};
