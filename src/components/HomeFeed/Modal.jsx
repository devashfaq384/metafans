import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import CollectablePost from '../CollectablePost/CollectablePost'
import ContentPost from '../Post/ContentPost'
import UserData from '../Post/UserData'
import Comment from '../Post/Comment'
import Details from '../CollectablePost/Details'

export default function MyModal({isOpen, setIsOpen , postName }) {

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[98%] md:max-w-[80%] transform overflow-hidden rounded-2xl bg-[#111820] p-6 text-left align-middle shadow-xl transition-all">
                  <div onClick={()=>{closeModal()}} className='cursor-pointer text-xl w-fit text-white bg-gray-700 rounded-full py-2 px-4' >X</div>
                  {postName === 'Collectable' ? 
                    <div>
                      <CollectablePost></CollectablePost>
                      <Details></Details>
                    </div>
                    :
                    <div>
                        <UserData></UserData>
                        <ContentPost></ContentPost>
                        <Comment></Comment>
                    </div>
                  }

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
