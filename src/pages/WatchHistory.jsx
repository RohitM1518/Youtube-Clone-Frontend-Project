import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { VideoCard } from '../components'

const WatchHistory = () => {
  const [videos, setVideos] = useState([])
  const accessToken=useSelector(state=>state.user.accessToken)
  useEffect(() => {
    const fetchVideos = async () => {
      const videoRes = await axios.get(`/api/users/watchhistory`, {
        withCredentials: true,
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      setVideos(videoRes.data.data)
    }
    fetchVideos()
  }, [])
  if (!videos) {
    return <><Loading /></>
  }
  return (
    <div className=' p-2 w-full text-white grid gap-12 h-auto grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2'>
      {
        videos.map((video) => (
          <Link key={video._id} to={`/video/${video._id}`}>
            <VideoCard video={video} user={video.owner} />
          </Link>
        ))
      }
    </div>)
}

export default WatchHistory