import { Link } from 'react-router-dom';
import  metaLogo  from '../../../assets/images/MF-logo 1.png'
import  metaName  from '../../../assets/images/MFname.png'
import  stars  from '../../../assets/images/stars.png'
import PhoneNumber from './PhoneNumber';


function ConfirmationCode() {
  return (
    <div className='p-5 bg-black min-h-[100vh] ' >
        <div className=' w-[90%] sm:w-[65%] md:w-[50%] mx-auto ' >
          <div>
            <img src={metaLogo} className='relative right-[32px] w-32' alt="Meta fans logo" />
          </div>
          <div className='relative text-gray-400 font-bold bottom-[25px]' >
            SIGN IN
          </div>

          <div className='text-white text-xl my-10' >
            We just texted you a code
          </div>

          <div >
            <form className='flex flex-col' >
              <label htmlFor="Phone Number" className='text-white text-[14px] mb-5' >Enter confirmation code:</label>
              <div className='flex justify-between' >
                <input type="number" className='w-[15%] rounded-md p-2 text-center placeholder:pl-3 placeholder:text-xl bg-gray-800 outline-none border-0 focus:outline-none focus:border focus:border-gray-300' placeholder='-' />
                <input type="number" className='w-[15%] rounded-md p-2 text-center placeholder:pl-3 placeholder:text-xl bg-gray-800 outline-none border-0 focus:outline-none focus:border focus:border-gray-300' placeholder='-' />
                <input type="number" className='w-[15%] rounded-md p-2 text-center placeholder:pl-3 placeholder:text-xl bg-gray-800 outline-none border-0 focus:outline-none focus:border focus:border-gray-300' placeholder='-' />
                <input type="number" className='w-[15%] rounded-md p-2 text-center placeholder:pl-3 placeholder:text-xl bg-gray-800 outline-none border-0 focus:outline-none focus:border focus:border-gray-300' placeholder='-' />
                <input type="number" className='w-[15%] rounded-md p-2 text-center placeholder:pl-3 placeholder:text-xl bg-gray-800 outline-none border-0 focus:outline-none focus:border focus:border-gray-300' placeholder='-' />
                <input type="number" className='w-[15%] rounded-md p-2 text-center placeholder:pl-3 placeholder:text-xl bg-gray-800 outline-none border-0 focus:outline-none focus:border focus:border-gray-300' placeholder='-' />
              </div>

              <button className='outline-none border-0 bg-gray-900 p-3 my-4 rounded-full text-gray-400' >
                <Link to='/auth/enterpin' >
                  Continue
                </Link>
              </button>
            </form>
          </div>

          <div className='flex justify-center items-center flex-col sm:flex-row' >
            <div className='text-white' >
              Didn't recieve the code?
            </div>
            <div className='text-green-400 pl-3' >
              Resend
            </div>
          </div>

          <div className='text-gray-600 text-center' >
            {"( 47 seconds until resent )"}
          </div>

        </div>
    </div>
  );
}

export default ConfirmationCode;
