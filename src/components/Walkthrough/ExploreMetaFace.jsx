import  metaLogo  from '../../assets/images/MF-logo 1.png'
import whiteLogo from '../../assets/images/exploremetafacebg.png'
import one from '../../assets/images/Group 11.png'
import two from '../../assets/images/Group 12.png'
import three from '../../assets/images/Group 13.png'
import { Link } from 'react-router-dom'

const ExploreMetaFace = () => {
  return (
    <div className="bg-gradient-to-t from-[#111820] via-gray-800 to-[#111820] py-7" >
        {/* images  */}
        <div className='relative' >
            <div>
                <img src={whiteLogo} alt="White logo" className='absolute left-0 md:left-1/2 ' />
                <img src={metaLogo} alt="Meta Face Logo" />
            </div>
            
            <div className='relative my-10 flex md:mx-auto justify-center flex-col md:flex-row rounded-full' >
                <img src={two} className='z-10 transfrom absolute bottom-[-49px] md:bottom-auto md:relative rotate-[310deg] left-0 md:left-auto ' alt="The extra feature" />
                <img src={three} className=' absolute md:relative left-10 md:left-auto md:bottom-32 transform rotate-[-10deg]' alt="Latest feature" />
                <img src={one} alt="First feature" className='absolute md:relative bottom-[-89px] md:bottom-auto right-0 md:right-auto'  />
            </div>
            
        </div>


        <div className='mt-40 md:mt-0 flex justify-center gap-2 mb-7' >
            <div className='h-2 w-10 rounded-full bg-white' ></div>
            <div className='h-2 w-2 rounded-full bg-white' ></div>
            <div className='h-2 w-2 rounded-full bg-white' ></div>
            <div className='h-2 w-2 rounded-full bg-white' ></div>
            <div className='h-2 w-2 rounded-full bg-white' ></div>
        </div>

        {/* content  */}

        <div className=' text-white flex justify-center flex-col items-center' >
            
            <div className='text-3xl font-bold' >
                Explore Metafans
            </div>
            <div className='w-[70%] text-center ' >
                Discover unique experiences and collectables found
                exclusively on Metafans.
            </div>

            <div className='my-5 hover:shadow-lg hover:shadow-black cursor-pointer rounded-full text-center bg-white text-black p-3 w-[70%] md:w-[40%] font-bold text-lg' >
                <Link to="/walkthrough/DM" >
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

export default ExploreMetaFace