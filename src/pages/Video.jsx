import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Loading, VideoPlayer, VideoCard } from '../components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Video = () => {
  const { videoId } = useParams()
  const [video, setVideo] = useState({})
  const [subscibersCount, setSubscribersCount] = useState(0)
  const [comments, setComments] = useState([])
  const accessToken = useSelector(state => state.user.accessToken);

  
  useEffect(() => {
    try {
      const fetchVideo = async () => {
        const videoRes = await axios.get(`http://localhost:8000/api/v1/videos/get-video-by-id/${videoId}`)
        setVideo(videoRes.data.data.video)

        const subscriberRes = await axios.get(`http://localhost:8000/api/v1/subscription/subscribers/${videoRes.data.data.video.owner._id}`)
        setSubscribersCount(subscriberRes.data.data)

        const commentsRes = await axios.get(`http://localhost:8000/api/v1/comments/${videoId}`, {
          withCredentials: true,
          headers: {
            'Authorization': `Bearer ${accessToken}` // Corrected template literal syntax
          }
        });
        setComments(commentsRes.data.data)
      }
      fetchVideo();
    } catch (error) {

    }
  }, [videoId])
  if (!video || !subscibersCount || !comments) {
    return <Loading />
  }
  return (
      <div className=''>
      <VideoPlayer video={video} subscibersCount={subscibersCount} comments={comments} />
      </div>
  )
}

export default Video