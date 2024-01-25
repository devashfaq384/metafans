import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineCollections } from "react-icons/md";


const Collectables = () => {
  return (
    <div className='text-white text-center ' >
        <div className='w-fit mx-auto bg-gradient-to-b from-pink-400 to-teal-400 p-1 rounded-lg' >
            <div className='bg-[#111820] rounded-lg p-5' >
                <MdOutlineCollections className='mx-auto text-[90px] sm:text-[100px] md:text-[130px]' ></MdOutlineCollections>
            </div>
        </div>
        <div className='mt-6' >
            You haven't published any polls yet. when you do it will show up here.
        </div>
        <Link to='/home/poll/new'>
            <div className='text-center mx-auto w-[70%] sm:w-[50%] md:w-[25%] mt-10 cursor-pointer bg-gradient-to-r rounded-lg from-pink-400 to-teal-400 p-1' >
                <div className='bg-[#111820] p-5 rounded-lg ' >
                    Add Collectables
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Collectables