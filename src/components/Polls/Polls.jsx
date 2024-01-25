import React, { useState } from 'react'
import UserData from '../Post/UserData'
import { LuTicket } from "react-icons/lu";
import { FaArrowTrendUp } from "react-icons/fa6";
import { RiEmotionHappyLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa6";
import { CiBookmarkMinus } from "react-icons/ci";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { MdAccessTime } from "react-icons/md";


const Polls = () => {
    const [ selectedVote , setSelectedVote ] = useState(null)
  return (
    <div>
        <UserData></UserData>
        <div className='text-white mb-2' >
            Y'all think we see $50K Bitcoin before 
            the end of the year?
        </div>
        <div className='bg-gray-800 p-4 rounded-xl' >
            {/* headings  */}
            <div className='flex justify-between items-center ' >
                <div className='w-fit flex gap-3' >
                    <div>
                        <div className='w-8 h-1 bg-[#981BFD] '></div>
                        <div className='w-10 my-1 h-2 bg-[#981BFD] '></div>
                        <div className='w-6 h-1 bg-[#981BFD] '></div>
                    </div>
                    <div className='text-white text-xl font-bold' >Polls</div>
                </div>
                <div className='flex text-white gap-3 ' >
                    <div className='text-2xl' >
                        <LuTicket></LuTicket> 
                    </div>
                    <div className='text-md' >
                        61 Votes
                    </div>

                </div>
            </div>
            {/* vote options */}
            <div onClick={()=>{setSelectedVote('first')}} className={`my-2 flex items-center gap-3 p-2 cursor-pointer rounded-lg ${selectedVote === "first" ? 'bg-gray-700' : 'null'} hover:bg-gray-700 text-white`} >
                <div className='text-xl' >Yes</div>
                <FaArrowTrendUp className='text-2xl text-red-700' ></FaArrowTrendUp>
            </div>
            <div onClick={()=>{setSelectedVote('second')}} className={` mb-2 flex items-center gap-3 p-2 cursor-pointer rounded-lg ${selectedVote === "second" ? 'bg-gray-700' : 'null'} hover:bg-gray-700 text-white`}  >
                <div className='text-xl' >Nah , prob not</div>
                <RiEmotionHappyLine className='text-2xl text-yellow-500' ></RiEmotionHappyLine>
            </div>
            <div className="border-b-2 border-white mt-4"></div>
            {/* Cast vote button  */}
            <div className='hover:bg-gray-700 rounded-xl w-fit mx-auto p-3 text-xl font-bold text-white mt-3 cursor-pointer' >Cast Vote</div>
        </div>
        <div className='flex justify-between items-center' >
            <div className='flex justify-between mt-3 text-white text-2xl items-center' >
                <div className='px-2 flex items-center gap-2 cursor-pointer' >    
                    <FaRegHeart></FaRegHeart>
                </div>
                <div className='cursor-pointer px-2 flex items-center gap-2' >
                    <FaRegCommentDots></FaRegCommentDots>
                    <div>4</div>
                </div>
                <div className='cursor-pointer px-2 text-3xl' >
                    <HiOutlineArrowPathRoundedSquare></HiOutlineArrowPathRoundedSquare>
                </div>
                <div className='text-3xl px-2' >
                    <CiBookmarkMinus></CiBookmarkMinus>
                </div>
            </div>
            <div className='flex text-white gap-1' >
                <MdAccessTime className='text-2xl' ></MdAccessTime>
                <div className='text-xl' >
                    18h
                </div>
            </div>
        </div>

    </div>
  )
}

export default Polls