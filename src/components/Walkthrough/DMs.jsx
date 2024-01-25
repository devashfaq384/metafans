import { Link } from 'react-router-dom'
import iphone from '../../assets/images/iPhone 15 Pro.png'
import whiteLogo from '../../assets/images/straightLogo.png'


const DMs = () => {
  return (
    <div className='h-fit py-6 bg-gradient-to-t to-[#EE1276] from-[#FD03AD]' >
        <div className='relative flex justify-center' >
            <img src={whiteLogo} alt="metaface logo" className='relative mx-auto' />
            <img src={iphone} alt="Iphone" className='absolute top-10' />
        </div>

        <div className=' mt-40 flex justify-center gap-2 mb-7' >
            <div className='h-2 w-2 rounded-full bg-white' ></div>
            <div className='h-2 w-10 rounded-full bg-white' ></div>
            <div className='h-2 w-2 rounded-full bg-white' ></div>
            <div className='h-2 w-2 rounded-full bg-white' ></div>
            <div className='h-2 w-2 rounded-full bg-white' ></div>
        </div>

        {/* content  */}

        <div className='text-white flex justify-center flex-col items-center' >
            
            <div className=' text-center text-3xl font-bold' >
                DMs with <br />
                Superpowers
            </div>
            <div className='w-[80%] md:w-[40%] text-center ' >
                Book video calls, get Video Messages, send Special Requests,
                and more....all right inside DMs with your favorite creator.
            </div>

            <div className='my-5 hover:shadow-lg hover:shadow-black cursor-pointer rounded-full text-center bg-white text-black p-3 w-[70%] md:w-[40%] font-bold text-lg' >
                <Link to="/walkthrough/moments" >
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

export default DMs