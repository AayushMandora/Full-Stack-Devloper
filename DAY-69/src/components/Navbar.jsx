import React, { memo } from 'react'

const Navbar = ({adjective,getadjective}) => {
    console.log("NavBar is Rendered");
  return (
        <div>I Am {adjective} NavBar
        <button onClick={()=>{getadjective()}}>{getadjective()}</button>
        </div>
  )
}

export default memo(Navbar)