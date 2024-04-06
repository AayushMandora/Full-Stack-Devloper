import { Component, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [card, setcard] = useState([]);

  const Cards=(cards)=>{
    return <>
      <div>{cards.id}</div>
      <div>{cards.userid}</div>
      <div>{cards.title}</div>
      <div>{cards.body}</div>
    </>
  }

  const fetchdata=async ()=>{
    let data = await fetch("https://jsonplaceholder.typicode.com/posts");
    let a = await data.json();
    setcard(a);
  }
  useEffect(() => {
    fetchdata()
  }, [])
  
  return (
    <>
      <div className="container flex gap-3 flex-wrap justify-center">
        {card.map((card)=>{
          return <div className="card bg-white text-black w-1/2">
            <h6>{card.userId}</h6>
            <h6>{card.id}</h6>
            <h6>{card.title}</h6>
            <h6>{card.body}</h6>
          </div>
        })}
      </div>
    </>
  );
}

export default App;
