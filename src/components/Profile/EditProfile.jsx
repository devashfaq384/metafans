import React, { useRef } from 'react'
import Header from '../Header/Header';
import ProfilePic from '../../assets/images/Ellipse 2.png'

const EditProfile = () => {
    const fileRef = useRef(null)

    const addFile = () => {
        fileRef.current.click()
    }
  return (
    <div className='bg-[#111820]' >
        <Header></Header>
        <div className='w-[98%] sm:w-[80%] md:w-[60%] mx-auto mt-10' >
            <div className='relative rounded-b bg-gradient-to-r from-yellow-400 via-pink-600 p-2 to-teal-300 w-full h-[35vh] '  >
                    <input type="file" ref={fileRef} className='hidden' />
                    <div onClick={()=>addFile()} className='cursor-pointer ml-auto bg-black text-white text-xl w-fit rounded-full px-2 pb-1 ' >+</div>
                <div className='bg-red-400 h-[150px] w-[150px] rounded-full border-gray-700 border-2 absolute bottom-[-80px] mx-auto md:left-0 right-0' >
                    <img src={ProfilePic} className='w-full h-auto' alt="" />
                    <div onClick={()=>addFile()} className='cursor-pointer bg-black text-white text-xl w-fit rounded-full px-2 pb-1 absolute top-0' >+</div>
                </div>
            </div>
            {/* data will be here  */}
            <div className='text-white mt-20 text-center ' >
                Add/edit your profile pic, banner , display name and short bio.
            </div>
            <form className='text-white border-b border-gray-400 pb-4'  >
                <div className='flex flex-col gap-2 ' >
                    <label htmlFor="username">Username</label>
                    <input type="text" name='username' placeholder='username' className='rounded-lg px-3 py-2 w-full text-lg outline-none border-0 foucs:border-0 focus:oultine-none bg-gray-700 border-b-2 border-gray-800' />
                </div>
                <div className='flex flex-col my-2 gap-2 ' >
                    <label htmlFor="username">Display Name</label>
                    <input type="text" name='dispalyName' placeholder='username' className='rounded-lg px-3 py-2 w-full text-lg outline-none border-0 foucs:border-0 focus:oultine-none bg-gray-700 border-b-2 border-gray-800' />
                </div>
                <div>
                    <label htmlFor="bio">Bio</label>
                    <textarea name="bio" id="bio" cols="25" placeholder='Add a short Bio...' rows="4" className='rounded-lg px-3 py-2 w-full text-lg outline-none border-0 foucs:border-0 focus:oultine-none bg-gray-700 border-b-2 border-gray-800' ></textarea>
                </div>

            </form>
            <div className='pb-9 pt-3' >
                <div className='hover:bg-gray-700 rounded-full w-fit mx-auto px-10 py-3 text-lg text-white mt-3 cursor-pointer' >Update</div>
            </div>
        </div>
        
    </div>
  )
}

export default EditProfile