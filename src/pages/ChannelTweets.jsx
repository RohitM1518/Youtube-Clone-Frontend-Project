import React,{useState,useEffect} from 'react'
import { ChannelDetails, TweetCard } from '../components'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const ChannelTweets = () => {

    const { id } = useParams()
    const [tweets, setTweets] = useState([])
    useEffect(() => {
        const fetchChannel = async () => {
            try {
                const tweetRes = await axios.get(`http://localhost:8000/api/v1/tweets/channel-tweets/${id}`)
                setTweets(tweetRes.data.data)
            } catch (error) {
                // Handle the error
                console.error(error);
            }
        };

        fetchChannel();
    }, [id]);
    if(!tweets){
        return <ChannelDetails />
    }
    return (
        <div>
            <ChannelDetails />
            <div className=' flex flex-col gap-5 px-40 max-sm:px-5 max-lg:px-20'>
            {
                tweets.map((tweet)=>(
                    <div key={tweet._id}>
                    <TweetCard tweet={tweet}/>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default ChannelTweets