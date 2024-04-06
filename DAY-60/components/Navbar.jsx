import React from "react";
import { useState, useEffect } from "react";

const Navbar = ({ color }) => {
  useEffect(() => {
    alert("Color Changed");
  }, [color]);
  return <div>This is Nav bar of Color {color}.</div>;
};

export default Navbar;
