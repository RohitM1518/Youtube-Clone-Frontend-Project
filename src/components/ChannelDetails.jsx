import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../components/index.js';
import { NavLink } from 'react-router-dom';
import { Loading } from '../components/index.js'


const ChannelDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  const [toggleSubscribe, setToggleSubscribe] = useState(false)
  
  const toggleSubscribeMethod = async () => {
    try {
      const res = await axios.post(`http://localhost:8000/api/v1/subscription/toggle-subscription/${id}`)
      if(res){
        setToggleSubscribe(True)
      }

    } catch (error) {
      
    }
  }

  useEffect(() => {
    const fetchChannel = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/v1/users/channel/${id}`);
        setData(res.data.data);
      } catch (error) {
        // Handle the error
        console.error(error);
      }
    };

    fetchChannel();
  }, [id]);

  if (!data) {
    return <Loading />
  }
  return (
    <div>
      <div className='flex flex-col gap-3'>
        <div className='w-full h-52 overflow-hidden rounded-lg max-sm:flex'>
          <img
            src={data.coverImage}
            alt=""
            className='w-full h-full object-cover'
          />
        </div>
        <div className='sm:flex gap-5'>
          <div className=' w-52 h-52 overflow-hidden rounded-full max-sm:flex max-sm:justify-center'>
            <img src={data.avatar} alt="" className='w-full h-full object-cover rounded-full ' />
          </div>
          <div className='flex flex-col gap-3 justify-center'>
            <h1 className=' text-white text-5xl'>{data.fullname}</h1>
            <h1 className=' text-white opacity-75'>@{data.username}</h1>
            <div className=' flex flex-col gap-5 items-baseline'>
              <div className='flex gap-6 opacity-75 '>
                <h1 className=' text-white'>Subscribers: {data.subscribersCount}</h1>
                <h1 className=' text-white'>Subscribed To: {data.subscribedToCount}</h1>
              </div>
              <div onClick={toggleSubscribeMethod}>
                <Button text={(data.isSubscribed ||toggleSubscribe) ? "Subscribed" : "Subscribe"} style={'text-white'} fullStyle={data.isSubscribed || toggleSubscribe? "" : "bg-red-500"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=' flex justify-evenly my-1'>
        <NavLink to={`/channel/${id}/videos/`} className={({isActive})=>`${isActive?" bg-custom-gray-2 ":" "} text-white hover:bg-custom-gray-2  p-1 px-3 rounded-lg `}>
          Videos
        </NavLink>
        <NavLink to={`/channel/${id}/playlists/`} className={({isActive})=>`${isActive?" bg-custom-gray-2 ":" "} text-white hover:bg-custom-gray-2  p-1 px-3 rounded-lg `}>
          Playlists
        </NavLink>
        <NavLink to={`/channel/${id}/tweets/`} className={({isActive})=>`${isActive?" bg-custom-gray-2 ":" "} text-white hover:bg-custom-gray-2  p-1 px-3 rounded-lg `}>
          Tweets
        </NavLink>
      </div>

      <div className=' h-[1px] w-full bg-white opacity-60 mb-5'></div>
      
    </div>
  );
};

export default ChannelDetails;
