import React from "react";
import "./card.css";
const Card = (props) => {
  return (
      <div className="card">
        <h4>{props.title}</h4>
        <p>{props.desc}</p>
      </div>
  );
};

export default Card;
