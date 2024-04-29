"use client";
import React from "react";
import Script from "next/script";
import { initiate } from "@/actions/useraction";
import { useSession, signIn, signOut } from "next-auth/react";


const Payment = ({ params }) => {
    const { data: session } = useSession();


  const pay = async(amount,) => {
    let a=await initiate(amount,session.user.name,)
    let orderId=a.id;
    var options = {
      key: "YOUR_KEY_ID", // Enter the Key ID generated from the Dashboard
      amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Acme Corp", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "http://localhost:3000/api/razorpay",
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: "Gaurav Kumar", //your customer's name
        email: "gaurav.kumar@example.com",
        contact: "9000090000", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
};
var rzp1 = new Razorpay(options);
  return (
    <>
      <button id="rzp-button1">Pay</button>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      <div>
      <div className="object-cover flex flex-col items-center">
        <img
          className="object-cover w-full h-[350px]"
          src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg"
          alt=""
        />
      </div>
      <div className="-mt-[4%] flex flex-col items-center gap-4">
        <div className="size-28 rounded-xl">
          <img
            className="size-full object-cover rounded-xl"
            src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold">@{params.username}</h2>
          <h2 className="text-white/70">Full Stack Web-devloper</h2>
          <div className="flex gap-2 text-white/50">
            <p>10,667 members</p> -<p>83 posts</p> -<p>$15,670/release</p>
          </div>
        </div>
      </div>
      <div className="payments flex gap-3 w-[80vw] m-auto mt-10">
        <div className="suppoters bg-white/15 w-1/2 p-4  rounded-xl">
          <h2 className=" text-xl font-bold">Supporters</h2>
          <ul className=" mt-3 flex flex-col gap-3">
            <li className="flex gap-2 items-center"><img
            className="size-10 object-cover rounded-full"
            src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg"
            alt=""
          />Aafi Donated <span className="font-bold">$5</span> Message "I Support You Bro.❤️"</li>
            <li className="flex gap-2 items-center"><img
            className="size-10 object-cover rounded-full"
            src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg"
            alt=""
          />Himesh Donated <span className="font-bold">$5</span> Message "I Support You Bro.❤️"</li>
            <li className="flex gap-2 items-center"><img
            className="size-10 object-cover rounded-full"
            src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg"
            alt=""
          />Nirav Donated <span className="font-bold">$5</span> Message "I Support You Bro.❤️"</li>
          </ul>
        </div>
        <div className="payment bg-white/15 w-1/2 flex flex-col items-center gap-2 p-4 rounded-xl">
          <h2 className="w-full text-center text-xl font-bold">Support {params.username}</h2>
          <div className="info flex flex-col gap-2 w-full">
            <input className="rounded-lg p-2 bg-transparent border focus:outline-none" type="text" placeholder="Enter Name" />
            <textarea
              className="rounded-lg bg-transparent p-2 border focus:outline-none"
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Say something nice"
            ></textarea>
          </div>
          <button onClick={()=>{rzp1.open();}} className="px-4 p-2 w-full rounded-2xl bg-gradient-to-br from-blue-600 to-purple-700 font-bold">
          Support <span>&ruppes;5</span>
            </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Payment;
