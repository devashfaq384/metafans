import React from 'react'
import UserDetails from './UserDetails'
import Send from './Send'

const Messages = () => {
      
  return (
    <div className='bg-[#111820] min-h-[100vh]' >
        <UserDetails></UserDetails>
        <div className='w-[98%] sm:w-[80%] md:w-[60%] text-sm h-[65vh] mx-auto overflow-y-scroll ' >
            {/* recieved message  */}
            <div className='text-justify bg-slate-800 rounded-lg relative text-gray-200 w-fit p-3 max-w-[60%] my-4'>
                Hi there it is the first message in the chat component of this social media application
                Hi there it is the first message in the chat component of this social media application
                here is the
                <div className='text-[8px] text-gray-400 absolute right-3 bottom-[1px] '>
                    10:30 AM
                </div>      
            </div>
            <div className='text-justify bg-slate-800 rounded-lg relative text-gray-200 w-fit p-3 max-w-[60%] my-4'>
                Hi there it is the first message in the chat component of this social media application
                Hi there it is the first message in the chat component of this social media application
                here is the
                <div className='text-[8px] text-gray-400 absolute right-3 bottom-[1px] '>
                    10:30 AM
                </div>      
            </div>
            <div className='relative text-justify bg-slate-400 ml-auto rounded-lg  w-fit p-4 max-w-[60%] my-4'>
                Hi there it is the first message in the chat component of this social media application
                and this is only the frontend of the application you need to know how to use it.
                <div className='text-[10px] text-gray-900 absolute right-3 bottom-[1px] '>
                    10:30 AM
                </div>      
            </div>
            <div className='text-justify bg-slate-800 rounded-lg relative text-gray-200 w-fit p-4 max-w-[60%] my-4'>
                Hi there it is the first message in the chat component of this social media application
                Hi there it is the first message in the chat component of this social media application
                here is the
                <div className='text-[10px] text-gray-400 absolute right-3 bottom-[1px] '>
                    10:30 AM
                </div>      
            </div>
          
            {/* sent message  */}
            <div className='relative text-justify bg-slate-400 ml-auto rounded-lg  w-fit p-4 max-w-[60%] my-4'>
                Hi there it is the first message in the chat component of this social media application
                and this is only the frontend of the application you need to know how to use it. And get 
                better experience with it. And get better experience with it.
                <div className='text-[10px] text-gray-900 absolute right-3 bottom-[1px] '>
                    10:30 AM
                </div>      
            </div>
        </div>
        <Send></Send>
    </div>
  )
}

export default Messages