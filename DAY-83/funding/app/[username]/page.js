"use client"
import React from "react";
import Payment from "@/components/payment";
const username = ({ params }) => {
  return (
    <Payment params={params}/>
  );
};

export default username;
