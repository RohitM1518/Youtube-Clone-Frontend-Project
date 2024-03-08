import React,{useState,useEffect} from 'react'
import { ChannelDetails } from './index.js'
import { VideoCard } from './index.js'
import { useParams,NavLink } from 'react-router-dom'
import axios from 'axios'

const ChannelVideos = () => {
    const {id} = useParams()
    const [videos, setVideos] = useState([])
   useEffect(() => {
    const fetchChannel = async () => {
      try {
        const videoRes = await axios.get(`http://localhost:8000/api/v1/videos/get-user-videos/${id}`)
        console.log("Result ",videoRes.data.data)
        setVideos(videoRes.data.data.videos)
      } catch (error) {
        // Handle the error
        console.error(error);
      }
    };

    fetchChannel();
  }, [id]);

  if(!videos){
    return <h1 className=' text-white'>Loading..</h1>
  }
    return (
        <>
        <ChannelDetails />
                <div className='grid grid-cols-3'>
                    {videos && videos.map((video) => (
                        <NavLink key={video._id}>
                            <VideoCard video={video} user={video.owner} />
                        </NavLink>
                    ))
                    }
                </div>
        </>
    )
}

export default ChannelVideos