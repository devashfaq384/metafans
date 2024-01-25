import { GoHomeFill } from "react-icons/go";
import { RiSearchLine } from "react-icons/ri";
import { BsSend } from "react-icons/bs";
// import { IoWalletOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
// import Wallet from '../../assets/images/walletIcon.png'
import { useEffect, useRef, useState } from 'react';
import Notifications from './Notifications';
import Dropdown from './DropDown';
import { FaSliders } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import Menus from './Menus';
import { useLocation ,  Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../../store/Slices/menus';




const Header = () => {
  const location = useLocation();
  // const [menu , setMenu] = useState('Home')
  const [navMenu , setNavMenu] =useState(false)
  const [notifications , setNotifications] = useState(false)
  const [showDot, setShowDot] = useState(false);
  const intervalRef = useRef(null);
  const menu = useSelector((state)=>state.menuName)
  const dispatch = useDispatch()

  useEffect(() => {
    // Update menu state based on the current route
    const pathname = location.pathname;
    if (pathname.startsWith('/home')) {
      dispatch(changeName('Home'))
    } else if (pathname === '/chat') {
      dispatch(changeName('Send'))
    } else if (pathname === '/explore') {
      dispatch(changeName('Search'))
    } else {
      dispatch(changeName('Home'))
    }
  }, [location]);

  const menuName = (name) =>{
    dispatch(changeName(name))
  }

  const toggleDot = () => {
    setShowDot((prevShowDot) => !prevShowDot);
  };

  useEffect(() => {
    intervalRef.current = setInterval(toggleDot, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className='bg-[#111820] flex justify-between items-center p-2 ' >
        <Link to="/user/profile" >
          <div className='bg-gray-700 p-2 md:p-3 text-lg md:text-2xl rounded-full w-fit' >
              <FaRegUser className='text-white'  ></FaRegUser>
          </div>
        </Link>
        <Dropdown></Dropdown>
        
        <div onClick={()=>{setNavMenu(!navMenu)}} className=' cursor-pointer flex md:hidden text-lg md:text-2xl text-white bg-gray-700 rounded-lg px-2 md:px-4 py-2 my-3' >
          <FaSliders  ></FaSliders>
        </div>
        <div className={`${navMenu ? 'block md:hidden' : 'hidden'}  rounded-b-lg px-3 w-[95%] bg-[#111820] absolute top-14 `} >
          <Menus></Menus>
        </div>

        <div className='hidden md:flex justify-between items-center text-white gap-2 md:gap-4 text-2xl ' >
            <Link to='/home/feed' >
              <div onClick={()=>menuName('Home')} className={`${menu === "Home" ? "bg-gray-700" : " " } cursor-pointer px-3 sm:px-5 md:px-8 py-2 md:py-3 my-3 rounded-md md:rounded-xl`} >
                <GoHomeFill></GoHomeFill>
              </div>
            </Link>
            
            <Link to="/chat" > 
              <div onClick={()=>menuName('Send')} className={`${menu === "Send" ? "bg-gray-700" : " " } cursor-pointer px-3 sm:px-5 md:px-8 py-2 md:py-3 my-3 rounded-md md:rounded-xl`} >
                <BsSend></BsSend>
              </div>
            </Link>
            
            {/* <div onClick={()=>menuName('Wallet')} className={`${menu === "Wallet" ? "bg-gray-700" : " " } cursor-pointer px-3 sm:px-5 md:px-7 py-1 md:py-2 my-3 text-3xl rounded-md md:rounded-xl`} >
              <IoWalletOutline></IoWalletOutline>
            </div> */}
            <Link to='/explore' >
              <div onClick={()=>menuName('Search')} className={` relative ${menu === "Search" ? "bg-gray-700" : " " } cursor-pointer px-3 sm:px-5 md:px-8 py-2 rounded-md md:rounded-xl`} >
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
        
          <div className='relative  text-white bg-gray-700 rounded-full p-2 md:p-3'>
            <GoBell className='text-lg md:text-3xl cursor-pointer' onClick={()=>{
              setNotifications(!notifications)
              clearInterval(intervalRef.current);
              setShowDot(false)
              }} />
            {showDot && (
              <div
                className='absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full transition-opacity duration-500'
                style={{ opacity: showDot ? 1 : 0 }}
              ></div>
            )}
            {
              notifications ?
            <div className=' mx-3 left-[-200px] absolute' >
              <Notifications></Notifications>
            </div>
            :
            null
            }
          </div>
    </div>
  )
}

export default Header