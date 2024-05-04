import React from "react";
import Payment from "@/components/payment";
import connectDB from "@/models/mongoDb";
import { notFound } from "next/navigation";
import user from "@/models/user";

const username =async ({ params }) => {

  const checkuser=async()=>{
    await connectDB();
    let u=await user.findOne({username:params.username});
    if(!u){
      return notFound()
    }    
  }
  await checkuser();

  return (
    <Payment params={params}/>
  );
};

export default username;

export async function generateMetadata( {params}) {
  return {
    title: `${params.username} - Funding`,
  }
}