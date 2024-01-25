import { GoHomeFill } from "react-icons/go";
import { RiSearchLine } from "react-icons/ri";
import { BsSend } from "react-icons/bs";
// import { IoWalletOutline } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

const Menus = () => {
  const[menu , setMenu] = useState('Home')

  return (
    <div className='bg-[#111820] flex justify-between items-center text-white gap-4 text-2xl ' >
             <Link to='/home/feed' >
              <div onClick={()=>setMenu('Home')} className={`${menu === "Home" ? "bg-gray-700" : " " } cursor-pointer px-3 sm:px-5 md:px-8 py-2 md:py-3 my-3 rounded-md md:rounded-xl`} >
                <GoHomeFill></GoHomeFill>
              </div>
            </Link>
            
            <Link to="/chat" > 
              <div onClick={()=>setMenu('Send')} className={`${menu === "Send" ? "bg-gray-700" : " " } cursor-pointer px-3 sm:px-5 md:px-8 py-2 md:py-3 my-3 rounded-md md:rounded-xl`} >
                <BsSend></BsSend>
              </div>
            </Link>
            
            
            {/* <div onClick={()=>setMenu('Wallet')} className={`${menu === "Wallet" ? "bg-gray-700" : " " } cursor-pointer px-3 sm:px-5 md:px-7 py-1 md:py-2 my-3 text-3xl rounded-md md:rounded-xl`} >
              <IoWalletOutline></IoWalletOutline>
            </div> */}
            <Link to='/explore' >
              <div onClick={()=>setMenu('Search')} className={` relative ${menu === "Search" ? "bg-gray-700" : " " } cursor-pointer px-3 sm:px-5 md:px-8 py-2 rounded-md md:rounded-xl`} >
                <form>
                <RiSearchLine className={`${menu === "Search" ? 'absolute right-6 top-3' : null }`} ></RiSearchLine>
                {
                  menu === "Search" ? 
                  <input type="text" placeholder='Explore' className='text-lg w-40 outline-none border-0 foucs:border-0 focus:oultine-none bg-gray-700 border-b-2 border-gray-800' />
                  :
                  null
                }
                </form>
              </div>
            </Link>
        </div>
  )
}

export default Menus