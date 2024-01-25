import { Link } from 'react-router-dom'
import  metaLogo  from '../../../assets/images/MF-logo 1.png'

const EnterPin = () => {
  return (
    <div className='p-5 bg-[#111820] min-h-[100vh] ' >
        <div className='flex flex-col items-center w-[90%] sm:w-[65%] md:w-[50%] mx-auto ' >
          <div>
            <img src={metaLogo} className=' w-36' alt="Meta fans logo" />
          </div>
          <div className='relative top-[-40px] text-purple text-[40px] mb-10' >
            Enter your PIN
          </div>

          <div className='mt-[-35px]' >
            <form className='flex flex-col' >
              <label htmlFor="Phone Number" className='text-white text-lg text-center mb-5' >Enter your 6-digit PIN to unlock Metafans.</label>
              <div className='flex justify-between' >
                <input type="number" className='text-white w-[15%] rounded-md p-2 text-center  placeholder:text-xl bg-gray-800 outline-none border-0 focus:outline-none focus:border focus:border-gray-300' placeholder='-' />
                <input type="number" className='text-white w-[15%] rounded-md p-2 text-center   placeholder:text-xl bg-gray-800 outline-none border-0 focus:outline-none focus:border focus:border-gray-300' placeholder='-' />
                <input type="number" className='text-white w-[15%] rounded-md p-2 text-center   placeholder:text-xl bg-gray-800 outline-none border-0 focus:outline-none focus:border focus:border-gray-300' placeholder='-' />
                <input type="number" className='text-white w-[15%] rounded-md p-2 text-center   placeholder:text-xl bg-gray-800 outline-none border-0 focus:outline-none focus:border focus:border-gray-300' placeholder='-' />
                <input type="number" className='text-white w-[15%] rounded-md p-2 text-center   placeholder:text-xl bg-gray-800 outline-none border-0 focus:outline-none focus:border focus:border-gray-300' placeholder='-' />
                <input type="number" className='text-white w-[15%] rounded-md p-2 text-center   placeholder:text-xl bg-gray-800 outline-none border-0 focus:outline-none focus:border focus:border-gray-300' placeholder='-' />
              </div>

              <button className='outline-none border-0 bg-gray-900 p-3 my-4 rounded-full text-gray-400' >
                <Link to="/auth/terms" >
                  Continue
                </Link>
              </button>
            </form>
          </div>

          <div className='flex justify-center items-center flex-col sm:flex-row' >
            <div className='text-white' >
              Didn't recieve the code?
            </div>
            <div className='text-green pl-3' >
              Resend
            </div>
          </div>

          <div className='text-gray-600 text-center' >
            {"( 47 seconds until resent )"}
          </div>
        </div>
        {/* <div className='bg-gradient-to-r from-[#111820] to-[#9e3d82]/20 ' >
          <div className='auth-stars h-[220px] w-[100%]' ></div>
        </div> */}
    </div>
  )
}

export default EnterPin