import React from 'react'
import post from '../../assets/images/post.jpg'
import userImg from '../../assets/images/Ellipse 2.png'
import { CiBookmarkMinus } from "react-icons/ci";
import { PiSealCheckFill } from "react-icons/pi";
 import { FaRegHeart } from "react-icons/fa";


const CollectablePost = ({setIsOpen , setPostName}) => {
  return (
    <div className='bg-[#111820] mx-auto mt-16 md:mt-10' >
        {/* post image  */}
        <div className='mt-10' >
            <div className='h-[100%] bg-gray-700' >
                <img src={post} onClick={()=>{setIsOpen(true);setPostName('Collectable')}} className='cursor-pointer h-auto w-full' alt="post image" />
            </div>,
        </div>

        {/* post info is here  */}
        
        <div className='mt-5 flex items-center justify-between' >
            <div className='flex w-fit items-center gap-4 p-3 rounded-full text-white bg-gray-800' >
                <img src={userImg} alt="user image here" />
                <div className='text-xl font-bold ' >Houdini</div>
                <PiSealCheckFill className='text-2xl' ></PiSealCheckFill>
            </div>
            <div className='flex items-center gap-3' >
                <div className='text-xl md:text-3xl w-fit bg-white rounded-full p-3' >
                    <CiBookmarkMinus></CiBookmarkMinus>
                </div>
                <div className='text-lg md:text-xl w-fit bg-red-500 text-white rounded-full p-3 flex items-center gap-1 md:gap-3' >
                    <FaRegHeart></FaRegHeart>
                    <div>25</div>
                </div>
            </div>
        </div>
        
        {/* post content */}

        <div className='mx-2 mt-5' >
            <div className='text-3xl text-white' >
                One $Love
            </div>
            <div className='text-xl text-gray-500' >
                4378 of 10572
            </div>
            <div className='text-white text-xl mt-7'>
                Your Metafans wallet holds all your crypto and Collectables.
            </div>
        </div>

        

    </div>
  )
}

export default CollectablePost