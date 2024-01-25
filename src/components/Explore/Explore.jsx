import React from 'react'
import Header from '../Header/Header'
import ExploreImg from '../../assets/images/explore.png'
import UserData from '../Post/UserData'
import TicketImg from '../../assets/images/ticket.png'
import VideoImg from '../../assets/images/video.png'

const Explore = () => {
  return (
    <div className='bg-[#111820] pb-10' >
        <Header></Header>
        <div className='text-white w-[98%] sm:w-[80%] md:w-[60%] mx-auto mt-10' >
            <div className='text-gray-400 text-lg md:text-xl text-center' >
                Top Featured Experiences
            </div>
            <div>
                <div className='my-4 relative w-full md:w-[60%] mx-auto' >
                    <img src={ExploreImg} className='w-full h-auto' alt="" />
                    <div className='absolute bottom-0 rounded-t-2xl w-full h-full bg-gradient-to-b from-white/30 to-[#111820]/80' >
                        <div className='absolute bottom-0 p-5 ' >
                            <UserData></UserData>
                            <div className=' text-lg md:text-2xl my-3' >VR Dream Session</div>
                            <div className='text-lg gap-4 md:text-xl flex items-center ' >
                                <img src={TicketImg}  alt="" />
                                <div>Special Request</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='relative mt-4 w-full md:w-[60%] mx-auto' >
                    <img src={ExploreImg} className='w-full h-auto' alt="" />
                    <div className='absolute bottom-0 rounded-t-2xl w-full h-full bg-gradient-to-b from-white/30 to-[#111820]/80' >
                        <div className='absolute bottom-0 p-5 ' >
                            <UserData></UserData>
                            <div className=' text-lg md:text-2xl my-3' >Yoga on the beach</div>
                            <div className='text-lg gap-4 md:text-xl flex items-center ' >
                                <img src={VideoImg}  alt="" />
                                <div>Video Call</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Explore