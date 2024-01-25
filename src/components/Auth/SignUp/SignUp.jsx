import { Link } from 'react-router-dom'
import  metaLogo  from '../../../assets/images/MF-logo 1.png'
import  metaName  from '../../../assets/images/MFname.png'


const SignUp = () => {
  return (
    <div className='p-5 bg-black min-h-[100vh] ' >
        <div className=' w-[90%] sm:w-[65%] md:w-[50%] mx-auto ' >
          <div>
            <img src={metaLogo} className='relative right-[32px] w-32' alt="Meta fans logo" />
          </div>
          <div className='relative text-gray-400 font-bold bottom-[25px]' >
            SIGN UP
          </div>

          <div className='text-white text-xl my-4' >
            Let's get started.
          </div>

          <div >
            <form className='flex flex-col' >
              <label htmlFor="Phone Number" className='text-white text-[14px] mb-5' >What username would you like?</label>
                <div class="relative w-full">
                    <input type="text"  class=" p-2.5 w-full z-20 text-sm text-white bg-gray-800 rounded-e-lg border-s-0 border border-gray-800 focus:ring-gray-400 focus:border-gray-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-gray-300 placeholder:font-bold placeholder:text-xl" placeholder="e.g. anticiman" />
                </div>
              <button className='outline-none border-0 bg-gray-900 p-3 my-4 rounded-full text-gray-400' >
                <Link to='/auth/confirmationCode' >
                  Continue
                </Link>
              </button>
            </form>
          </div>

          <div className='flex flex-col sm:flex-row' >
            <div className='text-white' >
              Already have an account?
            </div>
            <div className='text-green pl-3' >
              <Link to='/auth/signin' >
                Sign in
              </Link>
            </div>
          </div>

        </div>
    </div>
  )
}

export default SignUp