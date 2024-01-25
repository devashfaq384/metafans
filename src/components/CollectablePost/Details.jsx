import React from 'react'
import userImg from '../../assets/images/Ellipse 2.png'
import { PiSealCheckFill } from "react-icons/pi";


const Details = () => {
  return (
    <div className=' w-[98%] sm:w-[85%] md:w-[85%] my-10 mx-auto p-3 bg-gray-700 rounded-xl border-2 border-[#111820] hover:border-2 focus:border-2 hover:border-[#981BFD]' >
        <div className='flex justify-between text-white font-bold pr-2 ' >
            <div className='h-fit pr-2 border-b-2 border-gray-400' >
                Details
            </div>
            <div className='text-end' >
                <div className='text-gray-300' >Date minted</div>
                <div className='text-white font-bold' >15/10/2023</div>
            </div>
        </div>
        <div className='my-3' >
            <div className='text-gray-400' >Owner</div>
            <div className='flex w-fit items-center gap-4 p-3 rounded-full text-white ' >
                <img src={userImg} alt="user image here" />
                <div className='text-xl font-bold ' >Houdini</div>
                <PiSealCheckFill className='text-2xl' ></PiSealCheckFill>
            </div>
        </div>
        <div className='flex justify-between' >
            <div className='text-gray-400' >generation</div>
            <div className='text-white' >First Love</div>
        </div>
    </div>
  )
}

export default Details