import React, { useEffect, useState } from 'react'
import post from '../../assets/images/post.jpg'
import userImg from '../../assets/images/Ellipse 2.png'
import { CiBookmarkMinus } from "react-icons/ci";
import { PiSealCheckFill } from "react-icons/pi";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import MetaFixedLogo from '../MetaFixedLogo/MetaFixedLogo';
import MyModal from '../HomeFeed/Modal';
import ContentPost from './ContentPost';
import UserData from './UserData';
import CollectablePost from '../CollectablePost/CollectablePost';
import UserPost from './UserPost';
import Polls from '../Polls/Polls';
import { useSelector } from 'react-redux';


const Post = () => {
    const pageName = useSelector((state)=>state.pageName)
    const [ selectedOption , setSelectedOption ] = useState('Everyone')
    const [ like , setLike ] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [ postName , setPostName ] = useState(null)

    useEffect(() => {    
      return () => {
            setIsOpen(false)
      }
    }, [])
    
    
  return (
    <div className="relative w-[98%] sm:w-[80%] md:w-[60%] mx-auto mt-16 md:mt-10" >
        <div className='flex justify-between' >
            <div className='text-lg md:text-xl font-bold gap-10 flex justify-between' >
                <div onClick={()=>{setSelectedOption('Everyone')}} className={`${selectedOption === 'Everyone' ? "border-b-4 border-gray-400 text-white" : "text-gray-500" } text-center cursor-pointer px-4 `} >Everyone</div>
                <div onClick={()=>{setSelectedOption('Follow')}} className={`${selectedOption === 'Follow' ? "border-b-4 border-gray-400 text-white" : "text-gray-500" } text-center cursor-pointer px-4`} >Who I Follow</div>
            </div>
            <div className='text-gray-400 text-2xl' >
                <CiBookmarkMinus></CiBookmarkMinus>
            </div>
        </div>
        {/* Post starts from here  */}
        {/* User info  */}

        {/* post data is here  */}


        {/* collectablePost , Posts , Polls and Home Feed */}
        {pageName == "Home Feed" ? 
        <>
            <UserData></UserData>
            <ContentPost setIsOpen={setIsOpen} setPostName={setPostName} like={like} setLike={setLike} ></ContentPost>
            <UserPost></UserPost> 
            <Polls></Polls>
            <CollectablePost setIsOpen={setIsOpen} setPostName={setPostName} ></CollectablePost>
        </>
         
         :
         null
        }
        {pageName == "Posts" ? 
            <>
                <UserData></UserData>
                <ContentPost setIsOpen={setIsOpen} setPostName={setPostName} like={like} setLike={setLike} ></ContentPost>
                <UserPost></UserPost>          
            </>
         :
            null
        }
        {pageName == "Polls" ? 
            <Polls></Polls>          
         :
            null
        }
        {pageName == "Collectables" ? 
            <CollectablePost setIsOpen={setIsOpen} setPostName={setPostName} ></CollectablePost> 
         :
            null
        }
        {/* metafan logo fixed  */}

        <div className='fixed right-0 md:right-1/4 bottom-6' >
            <MetaFixedLogo></MetaFixedLogo>
        </div>

        <div className='absolute bg-gray-900/40' >
            <MyModal isOpen={isOpen} setIsOpen={setIsOpen} postName={postName} ></MyModal>
        </div>
        
    </div>
  )
}

export default Post