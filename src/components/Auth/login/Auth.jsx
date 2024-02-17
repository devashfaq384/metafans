import { Link } from 'react-router-dom';
import  metaLogo  from '../../../assets/images/MF-logo 1.png'
import  metaName  from '../../../assets/images/MFname.png'
import  stars  from '../../../assets/images/stars.png'
import ConfirmationCode from './ConfirmationCode';
import EnterPin from './EnterPin';
import PhoneNumber from './PhoneNumber';
import TermOfUse from './TermOfUse';


function login() {
  return (
    <div className='p-5 bg-black min-h-[100vh] ' >
        {/* it's loading process   */}
        {/* <div className="bg-black flex flex-col justify-center" >
          <div>
            <img src={metaLogo} className='m-0 p-0' alt='Meta Fans Logo' />
            <img src={ metaName } className='m-0 p-0 relative bottom-[60px]' alt="Meta Fans Name"  />
          </div>
          <div className=''>
            <img src={stars} className=''  alt='Meta Fans Logo' />
          </div>    
        </div> */}
        {/* after loading  */}
        <div className=' w-[90%] sm:w-[65%] md:w-[50%] mx-auto ' >
          <div>
            <img src={metaLogo} className='relative right-[32px] w-32' alt="Meta fans logo" />
          </div>
          <div className='relative text-gray-400 font-bold bottom-[25px]' >
            SIGN IN
          </div>

          <div className='text-white text-xl my-4' >
            Whats your number?
          </div>

          <div >
            <form className='flex flex-col' >
              <label htmlFor="Phone Number" className='text-white text-[14px] mb-5' >Enter your mobile phone number:</label>
              <PhoneNumber></PhoneNumber>
                <Link to='/auth/confirmationCode' >
                <button className='outline-none border-0 bg-gray-900 p-3 my-4 rounded-full text-gray-400' >
                  Continue
                </button>
                </Link>
            </form>
          </div>

          <div className='flex flex-col sm:flex-row' >
            <div className='text-white' >
              Lost your number?
            </div>
            <div className='text-green' >
              Recover your account
            </div>
          </div>

        </div>
    </div>
  );
}

export default login;
