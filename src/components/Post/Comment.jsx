import React from 'react'
import UserData from './UserData'
import ContentPost from './ContentPost'
import { FaRegCommentDots } from "react-icons/fa6";


const Comment = () => {
  return (
    <div className='my-4 relative' >
        <div className='flex items-center gap-4 text-white' >
            <div className='bg-[#981BFD] p-3 rounded-full' >2 Comments</div>
            <div className='' >2 Likes </div>
        </div>
        <div className='max-w-[70%] mx-auto' >
            <UserData></UserData>
            <ContentPost></ContentPost>
            <div className='absolute right-0 bottom-0' >
                <div className='text-xl text-white bg-[#981BFD] p-3 rounded-full' >
                    <FaRegCommentDots></FaRegCommentDots>
                </div>
            </div>
        </div>
    </div> 
  )
}

export default Comment