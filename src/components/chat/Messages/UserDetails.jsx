import React from 'react'
import userImg from '../../../assets/images/Ellipse 2.png'
import { PiSealCheckFill } from "react-icons/pi";
import { HiDotsHorizontal } from "react-icons/hi";
import { HiDotsVertical } from "react-icons/hi";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const UserChat = () => {
    const navi = useNavigate()

    const back = ()=>{
        navi(-1)
    }

  return (
        <div className='w-[98%] sm:w-[80%] md:w-[60%] mx-auto ' >
            <div className=' py-5 px-2' >
            <div className='py-4 flex items-center gap-4 justify-between ' >
                <div className=' flex gap-1 md:gap-4 items-center' >
                    <div onClick={()=>back()} className='rounded-full transition-all duration-500 hover:scale-110 hover:bg-slate-800 p-2 cursor-pointer md:text-2xl text-white ' >
                        <IoMdArrowBack></IoMdArrowBack>
                    </div>
                    <div className='rounded-full w-10 h-10' >
                        <img src={userImg} alt='profile' />
                    </div>
                    <div className='cursor-pointer' >
                        <div className='flex items-center text-sm md:text-md gap-2 text-white md:font-bold ' >
                            Username
                            <PiSealCheckFill></PiSealCheckFill>
                        </div>
                    
                            <div className='text-gray-400 text-[10px] md:text-sm' >time</div>
                    </div>
                </div>
                <div className='text-white  md:mx-3 w-fit h-fit p-1 cursor-pointer transition-all duration-500 hover:bg-slate-700 md:hover:scale-125 rounded-full ' >
                    <div className='md:hidden' >
                        <HiDotsVertical></HiDotsVertical>
                    </div>
                    <div className='hidden md:block' >
                        <HiDotsHorizontal></HiDotsHorizontal>
                    </div>
                </div>
            </div>
            </div>
        </div>
  )
}

export default UserChat