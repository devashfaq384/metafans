import React from 'react'
import post from '../../assets/images/post.jpg'
import UserData from './UserData'

const UserPost = () => {
  return (
    <div>
        <UserData></UserData>
        {/* Post content and tags */}
        <div className='text-white' >
            Oda's attention to details is insane! <span className='text-[#981BFD]' >#ONEPIECE</span>
        </div>
        <div className='mt-10' >
            <div className='h-[100%] bg-gray-700' >
                <img src={post} className='cursor-pointer h-auto w-full' alt="post image" />
            </div>
        </div>
    </div>
  )
}

export default UserPost