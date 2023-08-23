'use client' // Error components must be Client Components

import NotFound from '@components/NotFound'
import PrimaryButton from '@components/PrimaryButton'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <NotFound>
      <div className='w-full h-full flex flex-col items-center justify-center space-y-6'>
        <div className='text-red-400 text-xl capitalize'>
          😱Oops, something went wrong retry..., If persist reach out so we can
          fix it 🪄
        </div>
        <div className='text-red-500 font-medium italic '>
          {process.env.NODE_ENV !== 'production' && error.message}
        </div>
        <div className=''>
          <PrimaryButton onClick={() => reset()}>Try again</PrimaryButton>
        </div>
      </div>
    </NotFound>
  )
}
