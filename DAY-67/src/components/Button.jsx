import React from 'react'
import Component1 from './Component1'
import { useContext } from 'react'
import { countcontext } from '../context/context'

// ****** Without Context *******
// const Button = ({count}) => {
//   return (
//     <div>
//         <button><span><Component1 count={count}/></span>I am Button</button>
//     </div>
//   )
// }

const Button = () => {
  const counter=useContext(countcontext);
  return (
    <div>
        <button onClick={() => counter.setCount((count) => count + 1)}><span><Component1/></span>I am Button</button>
    </div>
  )
}

export default Button