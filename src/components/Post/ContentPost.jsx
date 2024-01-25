import React from 'react'
import { CiBookmarkMinus } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import MyModal from '../HomeFeed/Modal';


const ContentPost = ({like , setLike , setIsOpen , setPostName}) => {
  return (
    <div>
        <div className='text-white w-[80%]'>
                Soooo... my car was stolen out of my apartment grage... 
                DCPD just called me. 
                Luckily I get back tomorrow SHEESH
            </div>
            {/* Like comment and save etc...  */}
            <div className='flex justify-between mt-3 text-white text-2xl items-center' >
                <div className='px-2 flex items-center gap-2 cursor-pointer' >
                    {
                        like ?
                        <FaRegHeart onClick={()=>{setLike(!like)}} ></FaRegHeart>
                        :
                        <IoMdHeart onClick={()=>{setLike(!like)}} ></IoMdHeart>
                    }
                    <span>25</span>
                </div>
                <div onClick={()=>{setIsOpen(true); setPostName('Comment')}} className='cursor-pointer px-2 flex items-center gap-2' >
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
    </div>
  )
}

export default ContentPost