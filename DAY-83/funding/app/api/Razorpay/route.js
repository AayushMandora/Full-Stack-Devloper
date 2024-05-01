import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import payment from "@/models/payment";
import connectDB from "@/models/mongoDb";

export const POST=async (req)=>{
    await connectDB();
    let body=await req.formData();
    body=Object.fromEntries(body);
    let p=await payment.findOne({oid: body.razorpay_order_id});
    if(!p){
        return NextResponse.json({success:false,message:"Order id not Found"});
    }
    
    let x=validatePaymentVerification({"order_id":body.razorpay_order_id,"payment_id":body.razorpay_payment_id},body.razorpay_signature,"YOUR_ID");

    if(x){
        const updatePayment=await payment.findOneAndUpdate({oid:body.razorpay_order_id},{done:true},{new:true});
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatePayment.to_user}? paymentdone=true`);
    }
    else{
        return NextResponse.json({success:false,message:"Payment Verification Failed"});
    }
}