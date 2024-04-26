import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import Avatar from './Avatar'
import { Button, Description, Comment, Input, VideoCard, ChannelCard } from '.'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const VideoPlayer = ({ video, subscibersCount, comments }) => {
  const [content, setContent] = useState('')
  const accessToken = useSelector(state => state.user.accessToken)
  const userId = useSelector(state => state.user.currentUser._id)
  const [toggleSubscribe, setToggleSubscribe] = useState("Subscribe")
  const [subscribers, setSubscribers] = useState(subscibersCount)

  const [videos, setVideos] = useState([])

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get("/api/videos/get-all-videos")
      setVideos(res.data.data.videos)
    }
    fetchVideos()
  }, [])


  const toggleSubscribeMethod = async () => {
    try {
      if (!accessToken) {
        alert("Please login to Subscribe");
      }
      const res = await axios.post(`http://localhost:8000/api/v1/subscription/toggle-subscription/${video._id}`, null, {
        withCredentials: true,
        headers: {
          'Authorization': `Bearer ${accessToken}` // Corrected template literal syntax
        }
      });
      console.log(res.data.message)
      if (res.data.message === "Subscribed successfully") {
        setToggleSubscribe("Subscribed")
        setSubscribers(subscribers + 1)

      }
      if (res.data.message === "Unsunscribed successfully") {
        setToggleSubscribe("Subscribe")
        setSubscribers(subscribers - 1)
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
  }

  const addNewComment = async () => {
    try {
      await axios.post(`http://localhost:8000/api/v1/comments/${video._id}`, { content: content }, {
        withCredentials: true,
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
    } catch (error) {

    }
  }
  return (
    <div className=' flex min-w-full'>
      <div className=' text-black flex flex-col gap-2 h-3/4 w-3/4 max-sm:w-full max-lg:w-5/6'>
        <div className=''>
          <ReactPlayer url={video.videoFile} playing={true} controls={true} width="100%"
            height="100%"
            style={{ flex: '1' }} />
        </div>
        <div className=' text-white flex flex-col gap-2 font-sans font-semibold'>
          <h1 className=' text-2xl'>{video.title}</h1>
          <Link to={`/channel/${video?.owner?._id}/videos/`}>
            <div className='flex gap-6 items-center'>
              <ChannelCard avatarSrc={video?.owner?.avatar} fullname={video?.owner?.fullname} subscribers={subscribers} />
              <div onClick={toggleSubscribeMethod}>
                <Button text={toggleSubscribe} />
              </div>
            </div>
          </Link>
        </div>

        <Description views={video.views} createdAt={video.createdAt} desc={video?.description} />
        <div className=' flex items-center gap-2'>
          <input type="text" placeholder='Add Comment' onChange={(e) => setContent(e.target.value)} className='w-full h-10 bg-custom-gray-2 text-white outline-none rounded-lg p-2' />
          <div onClick={addNewComment}>
            <Button text={'Comment'} />
          </div>
        </div>
        {
          comments?.map((comment) => (
            <div key={comment?._id}>
              <Comment comment={comment} owner={comment.owner._id === userId ? true : false} />
            </div>
          ))
        }
      </div>
      <div className='  text-white grid gap-12 h-auto grid-cols-1 justify-center max-sm:hidden' >
        {
          videos.map((video) => (
            <Link key={video._id} to={`/video/${video._id}`} className=''>
              <VideoCard video={video} user={video.users[0]} />
            </Link>
          ))
        }
      </div>
    </div>
  )
}
