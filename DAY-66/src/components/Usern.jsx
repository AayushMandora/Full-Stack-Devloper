import React from 'react'
import { useParams } from 'react-router-dom'
const Usern = () => {
    const params=useParams();
  return (
    <div className='div'>
        I am User {params.username}
    </div>
  )
}

export default Usern