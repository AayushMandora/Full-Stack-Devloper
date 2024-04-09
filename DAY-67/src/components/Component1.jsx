import React from "react";
import { useContext } from "react";
import { countcontext } from "../context/context";

// ****** Without Context *******
// const Component1 = ({count}) => {
//   return (
//     <div>{count}</div>
//   )
// }

const Component1 = () => {
  const counter = useContext(countcontext);
  return <div>{counter.count}</div>;
};

export default Component1;
