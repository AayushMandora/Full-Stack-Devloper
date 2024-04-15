// "use client"
// import { useState, useEffect } from "react";

import Navbar from "@/components/Navbar";

// import fs from 'fs/promises';

export default function Home() {

  // const [count, setcount] = useState(0);

  console.log("I am Admin User");

  // let a=fs.readFile(".gitignore")
  // a.then(e=>{console.log(e.toString())})

  return (
    <div>

      <Navbar/>
      I am Home 

      {/* {count} <br /> */}
      {/* <button onClick={()=>{setcount(count + 1)}}>click</button> */}
    </div>
  );
}