import { useState } from 'react'
import fixedMetaLogo from '../../assets/images/fixedMetafan.png'
import { PiFileImage } from "react-icons/pi";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { MdOutlineCollections } from "react-icons/md";
import { Link } from 'react-router-dom';


const MetaFixedLogo = () => {
  const [showBar , setShowBar] = useState(false)
  return (
    <div>
      <div className={`text-white gap-2 ${showBar ? 'block' : 'hidden'}`} >
        <Link to='/home/post/new' >
          <div className='bg-black/75 cursor-pointer text-white flex items-center gap-1 rounded-lg p-2' >
            <PiFileImage></PiFileImage>
            Post
          </div> 
        </Link>
        <Link to='/home/poll/new' >
          <div className='bg-black/75 cursor-pointer  text-white flex items-center gap-1 rounded-lg my-1 p-2' >
            <RiBarChartHorizontalFill></RiBarChartHorizontalFill>
            Poll
          </div> 
        </Link>
        <Link to='/home/collectable/new' >
          <div className='bg-black/75 cursor-pointer  text-white flex items-center gap-1 rounded-lg p-2 ' >
            <MdOutlineCollections></MdOutlineCollections>
            Collectable
          </div> 
        </Link>
      </div>
        <img src={fixedMetaLogo} className='ml-auto cursor-pointer' onClick={()=>setShowBar(!showBar)} alt="Metafan Logo" />
    </div>
  )
}

export default MetaFixedLogo