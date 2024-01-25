import userImg from '../../assets/images/Ellipse 2.png'
import { PiSealCheckFill } from "react-icons/pi";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useSelector } from 'react-redux';



const UserData = () => {
  const menu = useSelector((state)=>state.menuName)

  return (
    <div className='mt-10' >
            <div className='py-4 flex gap-4 justify-between ' >
                <div className='flex gap-4' >
                    <div>
                        <img src={userImg} alt='User' />
                    </div>
                    <div>
                        <div className='flex items-center gap-4 text-white md:font-bold md:text-lg' >
                            Nailah
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
                <div className='text-white text-xl md:text-3xl cursor-pointer' >
                    {
                        menu === 'Send' ? <MdOutlineDeleteOutline></MdOutlineDeleteOutline>
                        :
                        <HiDotsHorizontal></HiDotsHorizontal>
                    }

                </div>
            </div>
        </div>
  )
}

export default UserData