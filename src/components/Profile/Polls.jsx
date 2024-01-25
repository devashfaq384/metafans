import React from 'react'
import { Link } from 'react-router-dom'

const Polls= () => {
  return (
    <div className='text-white text-center ' >
        <div className='w-[80%] sm:w-[70%] md:w-[40%] h-[20%] mx-auto bg-gradient-to-b from-pink-400 to-teal-400 p-1 rounded-lg' >
            <div className='bg-[#111820] p-5 rounded-lg' >
                <div className='w-[60%] h-[50px] bg-gradient-to-l from-pink-400  px-10 to-teal-400 rounded-lg' >
                </div>
                <div className='w-[80%] h-[50px] my-3 bg-gradient-to-r from-pink-700  px-10 to-teal-500 rounded-lg' >
                </div>
                <div className='w-[50%] h-[50px] bg-gradient-to-r from-yellow-400  px-10 to-teal-500 rounded-lg' >
                </div>
            </div>
        </div>
        <div className='mt-6' >
            You haven't published any polls yet. when you do it will show up here.
        </div>
        <Link to='/home/poll/new'>
            <div className='text-center mx-auto w-[70%] sm:w-[50%] md:w-[20%] mt-10 cursor-pointer bg-gradient-to-r rounded-lg from-pink-400 to-teal-400 p-1' >
                <div className='bg-[#111820] p-5 rounded-lg ' >
                    Add Polls
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Polls