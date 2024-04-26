import React from 'react'
import {Avatar,Button} from './index.js'

const ChannelCard = ({avatarSrc,fullname,subscribers}) => {
  return (
    <div className=' flex gap-2 items-center'>
      <Avatar src={avatarSrc} />
      <div>
        <h1 className=' text-xl'>{fullname}</h1>
        <h4 className=' text-sm opacity-70'>Subscribers: {subscribers}</h4>
      </div>
    </div>
  )
}

export default ChannelCard