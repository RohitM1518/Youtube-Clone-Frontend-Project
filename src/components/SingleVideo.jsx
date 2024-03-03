import React from 'react'
import carThumbnail from '../assets/carThumbnail.png'
import logo from '../assets/logo.svg'

const SingleVideo = () => {
  return (
    <div>
        <div className=' w-96 h-10'>
        <img src={carThumbnail} alt="" height={100}  />
        </div>
        <div>
            <img src={logo} alt=""  width={50} height={50} className=' rounded-full border border-black'/>
            <div className=' text-black'>
                <h1>Title</h1>
                <h3>Full Name</h3>
                <div>
                    <h6>Views</h6>
                    <h6>CreatedAt</h6>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default SingleVideo