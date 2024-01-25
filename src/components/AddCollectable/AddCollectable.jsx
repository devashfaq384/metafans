import React, { useRef } from 'react'
import MFIcon from '../../assets/images/MF Icon.png'
import { IoMdInformationCircleOutline } from "react-icons/io";
import ToggleButton from '../AddPost/Toggle';
import { LuFilePlus } from "react-icons/lu";
import Header from '../Header/Header';


const AddCollectable = () => {
    const fileRef = useRef(null)

    const addFile = () => {
        fileRef.current.click()
    }

  return (
    <div className='bg-[#111820] pb-5 ' >
        <Header></Header>
    <div className='mt-10 h-[80vh] p-4 w-[95%] sm:w-[80%] md:w-[60%] rounded-lg mx-auto bg-gray-800' >
        <div>
            <div className='text-white text-2xl mx-auto text-center' >
                New Collectable
            </div>
            <div className='flex items-center my-3' >
                <div className='w-auto h-auto' >
                    <img src={MFIcon} alt="Metaface logo" />
                </div>
                
            </div>
        </div>
        <div className='flex flex-col justify-between h-[80%]' >
            <div>    
                <div className=' flex items-center rounded-lg border-2 border-dashed border-[#981BFD]' >
                    <div className='flex md:flex-row flex-col gap-2 text-center mx-auto text-white font-bold p-3 ' >
                        <div className='flex cursor-pointer gap-2' onClick={()=>{addFile()}}  >
                            <input type="file" ref={fileRef} className='hidden' />
                            <LuFilePlus className='text-2xl' ></LuFilePlus>
                            Add photo 
                        </div>
                    </div>
                </div>

                <div className='flex my-3 items-center rounded-lg justify-between p-3 bg-gray-700 text-gray-300' >
                    <div className='flex gap-2' >
                        Pin this Collectable?
                        <IoMdInformationCircleOutline className='text-2xl ' ></IoMdInformationCircleOutline>
                    </div>
                    <ToggleButton></ToggleButton>
                </div>
            </div>
            <div className='' >
                <div className='relative border-b-2 border-white' ></div>

                <div className='my-4 bg-gray-700/50 hover:bg-gray-700 cursor-pointer p-4 w-fit mx-auto text-white rounded-full' >
                    Publish
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AddCollectable