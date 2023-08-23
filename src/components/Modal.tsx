'use client'

import { XMarkIcon } from '@heroicons/react/24/outline'
import PrimaryButton from './PrimaryButton'

type Props = {
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  title: string
  info: string
}
export default function Modal({ showModal, setShowModal, title, info }: Props) {
  return showModal ? (
    <>
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  '>
        <div className='relative w-auto my-6 mx-auto max-w-3xl group'>
          <div className='animate-tilt w-full h-full rounded-xl absolute inset blur-md opacity-70 bg-gradient-to-br from-pink-500 via-purple-400 to-pink-400 group-hover:opacity-100 transition duration-1000 group-hover:duration-300 ease-in-out'>
            {/* background */}
          </div>
          {/*content*/}
          <div className='border-0 rounded-xl relative flex flex-col w-full outline-none focus:outline-none bg-zinc-900'>
            {/*header*/}
            <div className='flex items-start justify-between p-5 border-b border-solid border-b-primary/30 group-hover:border-b-primary/60 transition duration-300 rounded-t'>
              <h3 className='text-2xl font-semibold'>{title}</h3>
              <button
                className='p-1 ml-auto bg-transparent border-0 text-gray-200 opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none '
                onClick={() => setShowModal(false)}
              >
                <XMarkIcon className='fill-current h-6 w-6' />
              </button>
            </div>
            {/*body*/}
            <div className='relative p-6 flex-auto'>
              <p className='my-4 text-slate-500 text-lg leading-relaxed group-hover:text-slate-400 transition duration-300'>
                {info}
              </p>
            </div>
            {/*footer*/}
            <div className='flex items-center justify-end p-6 border-t border-solid  border-t-primary/30 group-hover:border-t-primary/60 transition duration-300'>
              {/* TODO move to button component */}
              <button
                className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                type='button'
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <PrimaryButton type='button' onClick={() => setShowModal(false)}>
                Get a quote
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
      <div
        className='opacity-40 fixed inset-0 z-40 bg-black'
        onClick={() => setShowModal(false)}
      ></div>
    </>
  ) : null
}
