import React from 'react'
import MFIcon from '../../assets/images/MF Icon.png'
import { IoMdInformationCircleOutline } from "react-icons/io";
import ToggleButton from '../AddPost/Toggle';
import { LuFilePlus } from "react-icons/lu";
import Header from '../Header/Header';


const NewPoll = () => {
    
  return (
    <div className='bg-[#111820] pb-10 ' >
        <Header></Header>
    <div className='mt-10 h-[80vh] p-4 w-[95%] sm:w-[80%] md:w-[60%] rounded-lg mx-auto bg-gray-800' >
        <div>
            <div className='text-white text-2xl mx-auto text-center' >
                New Poll
            </div>
            <div className='flex items-center my-3' >
                <div className='w-auto h-auto' >
                    <img src={MFIcon} alt="Metaface logo" />
                </div>
                <div className='text-white' >
                    <input type="text" placeholder='eg. Why you vote for' className='border-b border-gray-600 outline-none bg-gray-800 p-3 w-full text-white'  />
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-between h-[80%]' >
            <div>    
                <div className='flex flex-col md:flex-row justify-around' >
                    <div className='text-white flex flex-col '  >
                        Choice 1
                        <input type="text" placeholder='eg. Mexico' className='border-0 outline-none bg-gray-700 p-3  rounded-lg text-white'  />
                    </div>
                    <div className='text-white flex flex-col '  >
                        Choice 2
                        <input type="text" placeholder='eg. Bali' className='border-0 outline-none bg-gray-700 p-3 rounded-lg text-white'  />
                    </div>
                </div>

                <div className='flex my-3 items-center rounded-lg justify-between p-3 bg-gray-700 text-gray-300' >
                    <div className='flex gap-2' >
                        Pin this post?
                        <IoMdInformationCircleOutline className='text-2xl ' ></IoMdInformationCircleOutline>
                    </div>
                    <ToggleButton></ToggleButton>
                </div>
            </div>
            <div>
                <div className='relative border-b-2 border-white' ></div>

                <div className='mb-3 bg-gray-700/50 hover:bg-gray-700 cursor-pointer mt-3 p-4 w-fit mx-auto text-white rounded-full' >
                    Publish
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default NewPoll