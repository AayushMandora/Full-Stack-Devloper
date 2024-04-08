import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav className='nav'>
            <li><Link to="/" className='link'>Home</Link></li>
            <li><Link to="/about" className='link'>About</Link></li>
            <li><Link to="/user" className='link'>User</Link></li>
            {/* <li><a href="/user">User</a></li> */}
        </nav>
    </div>
  )
}

export default NavBar