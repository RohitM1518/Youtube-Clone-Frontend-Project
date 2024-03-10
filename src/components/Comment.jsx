import React, { useState } from 'react'
import Avatar from './Avatar'
import { format } from 'timeago.js'
import { Button } from '.'
import axios from 'axios'
import { useSelector } from 'react-redux'
import editLogo from '../assets/edit.svg'

const Comment = ({ comment, owner }) => {
    const [editStatus, setEditStatus] = useState(false)
    const [content, setContent] = useState('')
    const accessToken = useSelector(state => state.user.accessToken)
    const handleEdit = () => {
        setEditStatus(true)
        setContent(comment.content)
    }
    const editComment = async () => {
        try {
            const commentRes=await axios.patch(`http://localhost:8000/api/v1/comments/c/${comment._id}`, { content: content }, {
                withCredentials: true,
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });
            setEditStatus(false)
            setContent(commentRes.data.data.content)
            
        } catch (error) {

        }
    }
    return (
        <div className=' text-white border border-gray-800 p-1 flex flex-col gap-1'>
            <div className=' flex items-center gap-2 text-white'>
                <Avatar src={comment.owner.avatar} />
                <h1 className=' text-lg font-semibold'>{comment.owner.fullname}</h1>
                <h3 className=' text-sm'>{format(comment.createdAt)}</h3>
                {owner && !editStatus && 
                <img src={editLogo} alt="" onClick={handleEdit} width={22} height={22} className=' hover:cursor-pointer'/>
            }
            </div>
            {!editStatus && <p>{comment.content}</p>}
            {editStatus && <div className=' flex items-center gap-2'>
                <input type="text" placeholder='Add Comment' value={content} onChange={(e) => setContent(e.target.value)} className='w-full h-10 bg-custom-gray-2 text-white outline-none rounded-lg p-2' />
                <div onClick={editComment}>
                    <Button text={'Edit'} />
                </div>
            </div>}
            
        </div>
    )
}

export default Comment