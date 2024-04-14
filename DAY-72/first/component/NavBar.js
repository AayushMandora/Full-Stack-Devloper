import React from 'react'
const NavBar = () => {
  return (
    <div>
      <ul className='flex gap-4'>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  )
}

export default NavBar