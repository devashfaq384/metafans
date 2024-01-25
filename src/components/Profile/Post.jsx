import React from 'react'
import logo from '../../assets/images/MF-logo 1.png'
import { Link } from 'react-router-dom'

const Post = () => {
  return (
    <div className='text-white text-center ' >
        <div className='mx-auto bg-gradient-to-b from-pink-400/40 w-fit h-fit px-10 rounded-lg to-teal-400/40 ' >
            <img src={logo} className='h-auto w-[150px] ' alt="" />
        </div>
        <div className='mt-6' >
            You haven't posted anything yet. when you do it will show up here.
        </div>
        <Link to='/home/post/new'>
            <div className='text-center mx-auto w-[70%] sm:w-[50%] md:w-[20%] mt-10 cursor-pointer bg-gradient-to-r rounded-lg from-pink-400 to-teal-400 p-1' >
                <div className='bg-[#111820] p-5 rounded-lg ' >
                    Add Post
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Post