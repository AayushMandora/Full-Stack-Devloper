import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-500'>
        <ul className='flex gap-4'>
            <Link href="/">Home</Link>
            <Link href="about">About</Link>
            <Link href="contact">Contact</Link>
        </ul>
    </div>
  )
}

export default Navbar