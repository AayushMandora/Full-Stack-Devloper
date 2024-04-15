"use client"
import React, { useState } from 'react'

const Navbar = () => {
const [count, setcount] = useState(0)
  return (
    <div>Navbar {count} <br />
    <button onClick={()=>{setcount(count+1)}}>Click me</button>
    </div>
  )
}

export default Navbar