"use client";
import React, { useEffect, useState } from "react";
import { fetchPayments, initiate } from "@/actions/useraction";
import { fetchuser } from "@/actions/useraction";

const Payment = ({ params }) => {
  const [paymentform, setpaymentform] = useState({});
  const [currentUser, setcurrentUser] = useState({});
  const [payments, setpayments] = useState([]);

  const handlechange = (e) => {
    setpaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  const getdata = async () => {
    let u = await fetchuser(params.username);
    setcurrentUser(u);
    let dbpayments = await fetchPayments(params.username);
    setpayments(dbpayments);
  };

  useEffect(() => {
      try{
        const script = document.createElement("script");
        script.src="https://checkout.razorpay.com/v1/checkout.js";
        script.async=true;
        document.body.appendChild(script);
      }catch(e){
        console.log("Razorpay Script Not Load"+e);
      }
    getdata();
  }, []);

  const pay = async (amount) => {
    let a = await initiate(amount, params.username, paymentform);
    var options = {
      "key": "rzp_test_lKHzmeBUG4H3lQ", // Enter the Key ID generated from the Dashboard
      "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Funding", //your business name
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": a.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      "prefill": {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000", //Provide the customer's phone number for better conversion rates
      },
      "notes": {
        address: "Razorpay Corporate Office",
      },
      "theme": {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <>
      <div>
        <div className="object-cover flex flex-col items-center">
          <img
            className="object-cover w-full h-[350px]"
            src={currentUser.profilepic}
            alt=""
          />
        </div>
        <div className="-mt-[4%] flex flex-col items-center gap-4">
          <div className="size-28 rounded-xl">
            <img
              className="size-full object-cover rounded-xl"
              src={currentUser.coverpic}
              alt=""
            />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold">@{currentUser.username}</h2>
            <h2 className="text-white/70">Full Stack Web-devloper</h2>
            <div className="flex gap-2 text-white/50">
              <p>10,667 members</p> -<p>83 posts</p> -<p>₹15,670/release</p>
            </div>
          </div>
        </div>
        <div className="payments flex flex-col md:flex-row gap-3 w-[80vw] m-auto mt-10">
          <div className="suppoters bg-white/15 md:w-1/2 p-4  rounded-xl">
            <h2 className=" text-xl font-bold">Supporters</h2>
            <ul className=" mt-3 flex flex-col gap-3">
              {payments.length == 0 && <li>No Payments Yet</li>}
              {payments.map((p, i) => {
                return (
                  <li key={i} className="flex gap-2 flex-wrap items-center">
                    <img
                      className="size-7 object-cover rounded-full"
                      src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png"
                      alt=""
                    />
                    <span className="font-bold">{p.name}</span> Donated{" "}
                    <span className="font-bold">₹{p.amount}</span>With message "
                    {p.message}"
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="payment bg-white/15 md:w-1/2 flex flex-col items-center gap-2 p-4 rounded-xl">
            <h2 className="w-full text-center text-xl font-bold">
              Support {params.username}
            </h2>
            <div className="info flex flex-col gap-2 w-full">
              <input
                className="rounded-lg p-2 bg-transparent border focus:outline-none"
                type="text"
                name="name"
                placeholder="Enter Name"
                value={paymentform.name}
                onChange={handlechange}
              />
              <textarea
                className="rounded-lg bg-transparent p-2 border focus:outline-none"
                name="message"
                id=""
                cols="30"
                rows="5"
                placeholder="Say something nice"
                value={paymentform.message}
                onChange={handlechange}
              ></textarea>
            </div>
            <button
              onClick={() => {
                pay(10000);
              }}
              className="px-4 p-2 w-full rounded-2xl bg-gradient-to-br from-blue-600 to-purple-700 font-bold"
            >
              Support <span>₹100</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
