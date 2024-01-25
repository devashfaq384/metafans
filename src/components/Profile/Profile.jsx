import React from 'react'
import { PiSealCheckFill } from "react-icons/pi";
import { FaEdit } from "react-icons/fa";
import Header from '../Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../../store/Slices/slice';
import Post from './Post';
import Polls from './Polls';
import Collectables from './Collectables';
import { Link } from 'react-router-dom';
import ProfilePic from '../../assets/images/Ellipse 2.png'

const Profile = () => {
    const pageName = useSelector((state)=>state.pageName)
    const dispatch = useDispatch()
  return (
    <div className='bg-[#111820]' >
        <Header></Header>
        <div className='w-[98%] sm:w-[80%] md:w-[60%] mx-auto mt-10' >
            <div className='relative rounded-b bg-gradient-to-r from-yellow-400 via-pink-600 to-teal-300 w-full h-[35vh] '  >
                <div className='bg-red-400 h-[150px] w-[150px] rounded-full border-gray-700 border-2 absolute bottom-[-80px] mx-auto md:left-0 right-0' >
                    <img src={ProfilePic} className='w-full h-auto' alt="" />                
                </div>
            </div>
            {/* user info  */}
            <div className='grid grid-cols-12 items-center' >
                    <div className='col-span-6 md:col-span-4 px-5 h-fit cursor-pointer  bg-gray-800 mt-3 rounded-lg w-fit py-1 md:py-2 text-md md:text-lg text-white' >
                        <Link to='/user/edit/profile' className='flex items-center gap-2' >
                            <FaEdit></FaEdit>
                            Edit 
                        </Link>
                    </div>
                <div className='col-span-6 md:col-span-4 text-white pt-20 sm:mx-auto' >
                    <div className='text-center gap-2 text-lg sm:text-xl flex items-center justify-end md:justify-center' >
                        username
                        <PiSealCheckFill className='text-2xl' ></PiSealCheckFill>
                    </div>
                </div>
                <div className='col-span-12 md:col-span-4 text-sm md:text-md mt-2 h-fit flex items-start md:items-end md:justify-end flex-row text-white gap-2' >
                    <div>34 Followers</div>
                    <div>45 Following</div>
                </div>
            </div>

            {/* user data uploaded  */}
            <div className='font-bold text-md sm:text-lg md:text-xl flex flex-wrap gap-2 md:gap-6 mt-3 pb-3' >
                <div onClick={()=>dispatch(changeName('Home Feed'))} className={` px-2 cursor-pointer ${pageName === "Home Feed" ? 'text-white border-b border-white' : 'text-gray-600'}`} >Feed</div>
                <div onClick={()=>dispatch(changeName('Posts'))} className={` px-2 cursor-pointer ${pageName === "Posts" ? 'text-white border-b border-white' : 'text-gray-600'}`} >Posts</div>
                <div onClick={()=>dispatch(changeName('Polls'))} className={` px-2 cursor-pointer ${pageName === "Polls" ? 'text-white border-b border-white' : 'text-gray-600'}`} >Polls</div>
                <div onClick={()=>dispatch(changeName('Collectables'))} className={` px-2 cursor-pointer ${pageName === "Collectables" ? 'text-white border-b border-white' : 'text-gray-600'}`} >Collectables</div>
            </div>

            {/* data will be here  */}

            <div className='py-[100px]' >
                {pageName === "Home Feed" ? <Post></Post> : null }
                {pageName === "Posts" ? <Post></Post> : null }
                {pageName === "Polls" ? <Polls></Polls> : null }
                {pageName === "Collectables" ? <Collectables></Collectables> : null }
                {/* <Post></Post> */} 
                {/* <Polls></Polls> */}
                {/* <Collectables></Collectables> */}
            </div>

        </div>
    </div>
  )
}

export default Profile