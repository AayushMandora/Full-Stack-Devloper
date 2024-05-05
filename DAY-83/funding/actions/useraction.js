"use server"
import Razorpay from "razorpay";
import payment from "@/models/payment";
import user from "@/models/user";
import connectDB from "@/models/mongoDb";

export const initiate = async (amount, to_username, paymentform) => {
  await connectDB();

  let u = await user.findOne({ username: to_username });
  let userr = u.toObject({ flattenObjectIds: true });

  var instance = new Razorpay({
    key_id: userr.razorpayID,
    key_secret: userr.razorpaySECRET,
  });
  
  var options = {
    amount: Number.parseInt(amount),
    currency: "INR",
  };

  let x = await instance.orders.create(options);

  await payment.create({
    oid: x.id,
    amount: (amount/100),
    to_user: to_username,
    name: paymentform.name,
    message: paymentform.message,
  });

  return x;
};

export const fetchuser = async (username) => {
  await connectDB();
  let u = await user.findOne({ username: username });
  let userr = u.toObject({ flattenObjectIds: true });
  return userr;
};

export const fetchPayments = async (username) => {
  await connectDB();
  let p = await payment.find({ to_user: username,done:true}).sort({ amount: -1 }).lean();
  return p;
};

export const updateprofile = async (oldusername, data) => {
  await connectDB();
  let dataobj = Object.fromEntries(data);
  if (oldusername !== dataobj.username) {
    let u = await user.findOne({ username: oldusername });
    if (u) {
      return {error:"Username already exists"}
    }
  }
  await user.updateOne({email:dataobj.email},dataobj);
};