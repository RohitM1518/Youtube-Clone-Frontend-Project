import React, { useEffect, useState } from 'react'
import { format } from 'timeago.js';


const Playlist = ({ name, desc, videosCount, thumbnail, createdAt }) => {
    const backgroundImageStyle = {
        backgroundImage: `url(${thumbnail})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div>
        <div className=' text-white flex flex-col h-44 shadow-sm rounded-xl relative' style={backgroundImageStyle}>
        <h2 className=' absolute right-2 bottom-1 text-sm bg-custom-gray-2 p-1 rounded-lg'>{videosCount} Videos</h2>
        </div>
        <div className=' backdrop-blur-lg flex flex-col gap-5 text-white'>
            <div className=' flex h-auto flex-col'>
                <h1 className=' font-semibold text-xl'>{name}</h1>
                <h2 className=' opacity-40'>{format(createdAt)}</h2>
            </div>
            </div>
        </div>
    )
}

export default Playlist