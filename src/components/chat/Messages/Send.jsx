import React from 'react'
import { BsSend } from "react-icons/bs";


const Send = () => {
  return (
    <div className='pt-3 gap-2 flex items-center w-[98%] sm:w-[80%] md:w-[60%] mx-auto ' >
        <form className='w-full' >
          <input type="text" className='w-full bg-[#111820] outline-none p-3 border-2 border-gray-400  text-white rounded-full placeholder:text-gray-500' placeholder='Message...' />
        </form>
        <div className='bg-gray-800 p-3 cursor-pointer rounded-full text-white text-2xl w-fit' >
          <BsSend></BsSend>
        </div>
    </div>
  )
}

export default Send