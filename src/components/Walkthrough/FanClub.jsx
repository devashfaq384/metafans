import { Link } from 'react-router-dom'
import realme from '../../assets/images/Realme 10.png'
import whiteLogo from '../../assets/images/straightLogo.png'

const FanClub = () => {
  return (
    <div className='h-fit py-6 bg-gradient-to-t from-[#981BFF] via-[#20CB97]  to-[#F0D60B] ' >
        <div className='relative flex justify-center' >
            <img src={whiteLogo} alt="metaface logo" className='relative mx-auto' />
            <img src={realme} alt="Iphone" className='absolute top-20' />
            <div className='top-[80px] pr-[200px] text-center text-white transform rotate-[-45deg] absolute' >
                <div className='font-bold text-[50px]' >FAN</div>
                <div className='text-xl' >club</div>
            </div>
        </div>

        <div className=' mt-60 flex justify-center gap-2 mb-7' >
            <div className='h-2 w-2 rounded-full bg-white' ></div>
            <div className='h-2 w-2 rounded-full bg-white' ></div>
            <div className='h-2 w-2 rounded-full bg-white' ></div>
            <div className='h-2 w-2 rounded-full bg-white' ></div>
            <div className='h-2 w-10 rounded-full bg-white' ></div>
        </div>

        {/* content  */}

        <div className='text-white flex justify-center flex-col items-center' >
            
            <div className='mb-1 text-center text-3xl font-bold' >
                The coolest wallet in crypto 
            </div>
            <div className='w-[80%] md:w-[40%] text-center ' >
                Your Metafans Wallet holds all your crypto and
                Collectables. Buy. send, receive, swap and more!
            </div>

            <div className='my-5 hover:shadow-lg hover:shadow-black cursor-pointer rounded-full text-center bg-white text-black p-3 w-[70%] md:w-[40%] font-bold text-lg' >
                <Link to="/home/feed" >
                    Continue
                </Link>
            </div>

            <div className=' my-3 cursor-pointer text-center text-white p-3 w-[70%] md:w-[40%] font-bold text-lg' >
                Skip Walkthrough
            </div>


        </div>

    </div>
  )
}

export default FanClub