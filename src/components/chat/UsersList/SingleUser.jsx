import userImg from '../../../assets/images/Ellipse 2.png'
import { PiSealCheckFill } from "react-icons/pi";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import DelModal from './DelModal';
import { Link } from 'react-router-dom';



const SingleUser = () => {
  let [isOpen, setIsOpen] = useState(false)
  const menu = useSelector((state)=>state.menuName)

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div className=' py-5 border-b border-gray-700 px-2' >
            <div className='py-4 flex items-center gap-4 justify-between ' >
            <Link to="/chat/message">
                <div className='flex gap-4' >
                    <div>
                        <img src={userImg} alt='profile' />
                    </div>
                    <div className='cursor-pointer' >
                        <div className='flex items-center gap-4 text-white md:font-bold md:text-lg' >
                            Username
                            <PiSealCheckFill></PiSealCheckFill>
                        </div>
                        {
                            menu === "Send" ? 
                            <div className='text-gray-500 text-[10px] md:text-sm' >last message....</div>
                            :
                            <div className='text-gray-400 text-[10px] md:text-sm' >time</div>
                        }
                    </div>
                </div>
            </Link>
                <div  className='text-white mx-3 w-fit h-fit p-1 text-xl md:text-3xl cursor-pointer transition-all duration-500 hover:bg-red-500 hover:scale-125 rounded-full ' >
                    {
                        menu === 'Send' ? <MdOutlineDeleteOutline onClick={()=>openModal()} ></MdOutlineDeleteOutline>
                        :
                        <HiDotsHorizontal></HiDotsHorizontal>
                    }

                </div>
                <div className='absolute' >
                    <DelModal isOpen={isOpen} setIsOpen={setIsOpen} ></DelModal>
                </div>

            </div>
        </div>
  )
}

export default SingleUser