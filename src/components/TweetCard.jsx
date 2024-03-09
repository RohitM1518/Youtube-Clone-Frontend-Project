import React, { useState } from 'react';
import { format } from 'timeago.js';
import beforeLikeLogo from '../assets/beforeLike.svg'
import afterLikeLogo from '../assets/afterLike.svg'
import axios from 'axios';


const TweetCard = ({ tweet }) => {
    const[like, setLike] = useState(false)

    const likeTweet = async () => {
            try {
                const likeRes = await axios.get(`http://localhost:8000/api/v1/likes/toggle/t/:tweetId/${tweet._id}`)
                if(likeRes?.data.message == "Tweet is liked successfully")
                {
                    setLike(true)
                }
                setLike(false)
            } catch (error) {
                // Handle the error
                console.error(error);
            }
        };

    
    return (
        <div className='w-full flex text-white border border-gray-500 p-6 flex-col gap-2 '>
            <div className='flex gap-4 items-center'>
                <div className=' w-10 h-10 rounded-full'>
                    <img src={tweet.owner.avatar} alt="" className='w-full h-full object-cover rounded-full' />
                </div>
                <div className=' flex gap-9 items-center'>
                    <h1 className=' text-2xl font-semibold'>{tweet.owner.fullname}</h1>
                    <h5 className=' opacity-75'>{format(tweet.createdAt)}</h5>
                    {
                        tweet.createdAt !== tweet.updatedAt ? (
                            <div>Edited</div>
                        ) : null
                    }
                </div>
            </div>
            <div className=' bg-custom-gray-2'>
                <h1 className=' text-white p-5'>{tweet.content}</h1>
            </div>
            <div className='flex gap-10 p-3'>
                <img src={like?afterLikeLogo:beforeLikeLogo} alt="" width={25} height={25} onClick={likeTweet} className=' hover:cursor-pointer'/>
            </div>
        </div>
    );
};

export default TweetCard;
