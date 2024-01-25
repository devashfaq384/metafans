import { Fragment , useEffect } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from '../../store/Slices/slice';
import { Link } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Dropdown() {
  const pageName = useSelector((state)=>state.pageName)
  const dispatch = useDispatch()

  const page = (page) =>{
    dispatch(changeName(page))
  }  

  useEffect(() => {
    return () => {
      console.log(pageName)
    }
  }, [])
  


  return (
    <Menu as="div" className="relative text-left">
      <div>
        <Menu.Button className="text-md sm:text-xl md:text-2xl bg-gradient-to-r from-[#FE924F] via-[#9898E0] to-[#3AFDF5] bg-clip-text text-transparent flex items-center w-full justify-center gap-x-1.5 px-3 py-2 font-bold">
          {pageName}
          <IoIosArrowDown className="-mr-1 h-3 md:h-5 w-3 md:w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-gray-800 text-white shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link to='/home/feed' >
                  <div
                  onClick={()=>page("Home Feed")}
                  className={classNames(
                      active ? 'bg-gray-700 text-white cursor-pointer' : 'text-white',
                      'block px-4 py-2 text-sm'
                      )}
                      >
                          Home Feed
                  </div>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                  onClick={()=>page("Posts")}
                  className={classNames(
                    active ? 'bg-gray-700 text-white cursor-pointer' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Posts
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                  onClick={()=>page("Polls")}
                  className={classNames(
                    active ? 'bg-gray-700 text-white cursor-pointer' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Polls
                </div>
              )}
            </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div
                    onClick={()=>page("Collectables")}
                    className={classNames(
                      active ? 'bg-gray-700 text-white cursor-pointer' : 'text-white',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    Collectables
                  </div>
                )}
              </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
