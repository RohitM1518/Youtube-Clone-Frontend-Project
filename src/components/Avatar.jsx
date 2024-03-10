import React from 'react'

const Avatar = ({src}) => {
  return (
    <div>
    <img src={src} alt="Avatar"  className='rounded-full border border-black w-12 h-12 object-cover hover:cursor-pointer'/>
    </div>
  )
}

export default Avatar