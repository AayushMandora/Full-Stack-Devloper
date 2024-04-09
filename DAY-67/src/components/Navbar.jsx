import React from 'react'
import Button from './Button'

// ****** Without Context *******
// const Navbar = (props) => {
//   return (
//     <div>Navbar
//         <Button count={props.counter}/>
//     </div>
//   )
// }

const Navbar = () => {
  return (
    <div>Navbar
        <Button/>
    </div>
  )
}

export default Navbar