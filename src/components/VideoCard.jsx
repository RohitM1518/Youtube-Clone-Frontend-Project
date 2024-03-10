import React from 'react'
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';
import {Avatar} from './index.js'

const VideoCard = ({video,user}) => {

  return (
    <div className='bg-custom-gray-1 overflow-hidden p-4'>
        <div className='w-96 h-44 '>
        <img src={video.thumbnail} alt="" className=' w-full h-full object-cover' />
        </div>
        <div className='flex gap-3 items-center'>
          <Avatar src={user.avatar} />
            <div className=' text-white'>
                <h1 className=' font-bold'>{video.title}</h1>
                <Link to={`/channel/${user._id}/videos`}>
                <h3 className=' font-semibold opacity-55'>{user.fullname}</h3>
                <div className='flex gap-10 opacity-55'>
                    <h6>Views: {video.views}</h6>
                    <h6>{format(video.createdAt)}</h6>
                </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default VideoCard