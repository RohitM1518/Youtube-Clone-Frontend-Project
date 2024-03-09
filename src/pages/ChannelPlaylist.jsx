import React,{useState,useEffect} from 'react'
import { ChannelDetails, Loading, Playlist } from '../components';
import { NavLink, useParams} from 'react-router-dom';
import axios from 'axios';


const ChannelPlaylist = () => {
  const { id } = useParams()
  const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    const fetchChannel = async () => {
      try {
        const playlistRes = await axios.get(`http://localhost:8000/api/v1/playlist/get-user-playlists/${id}`)
        setPlaylists(playlistRes.data.data)
      } catch (error) {
        // Handle the error
        console.error(error);
      }
    };

    fetchChannel();
  }, [id]);

if(!playlists){
  return <ChannelDetails />
}
  return (
    <div>
        <ChannelDetails />
        <div className=' mt-7 grid grid-cols-5 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1'>
          {playlists.map((playlist)=>(
            <NavLink to={`/playlists/${playlist._id}`}>
              <Playlist name={playlist.name} desc={playlist.description} createdAt={playlist.createdAt} videosCount={playlist.videosCount} thumbnail={playlist.videos[0]?.thumbnail}/>
            </NavLink>
          ))}
        </div>
    </div>
  )
}

export default ChannelPlaylist