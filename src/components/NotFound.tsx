'use client'
import React, { ReactNode } from 'react'
import PrimaryButton from './PrimaryButton'
import { useRouter } from 'next/navigation'

type Props = {
  text?: string
  buttonChildren?: ReactNode
  children?: ReactNode
}

const NotFound = ({ text, buttonChildren, children }: Props) => {
  const route = useRouter()
  return (
    <div className='w-full h-screen text-lg lg:text-xl font-bold tracking-wide'>
      {children || (
          <div className='w-full h-full flex justify-center items-center flex-col space-y-4'>
            <p className='text-red-500'>{text}</p>

            <PrimaryButton onClick={() => route.back()}>
              {buttonChildren}
            </PrimaryButton>
          </div>
        ) || (
          <div className=' text-primary'>
            <p>Nothing added check props and add content</p>
          </div>
        )}
    </div>
  )
}

export default NotFound
