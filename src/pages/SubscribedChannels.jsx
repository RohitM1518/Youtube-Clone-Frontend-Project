import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ChannelCard } from '../components'

const SubscribedChannels = () => {
    const { id } = useParams()
    const [subscibersCount, setSubscribersCount] = useState(0)
    const [channels, setChannels] = useState([])
    useEffect(() => {
        const fetchSubscribedChannels = async () => {
            const res = await axios.get(`http://localhost:8000/api/v1/subscription/subscribedto/${id}`)
            setChannels(res.data.data)
            console.log("details ",res.data.data)
            const subscriberRes = await axios.get(`http://localhost:8000/api/v1/subscription/subscribers/${id}`)
            setSubscribersCount(subscriberRes.data.data)
            console.log("subscriberRes ",subscriberRes.data)
        }
        fetchSubscribedChannels()
    }, [])
    return (
        <div className=' flex flex-col gap-5 align-middle'>
            {
                channels && channels.map((channel) => (
                    <div key={channel._id} className=''>
                        <ChannelCard avatarSrc={channel?.channel?.avatar} fullname={channel?.channel?.fullname} subscribers={subscibersCount}/>
                    </div>
                ))
            }
        </div>
    )
}

export default SubscribedChannels