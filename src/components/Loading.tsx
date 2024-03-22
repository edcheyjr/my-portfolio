import React from 'react'
import IcLoader from '../svg/icons/ic-loader'

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className='h-full w-full flex flex-col justify-center items-center space-y-2'>
      <p className=' text-sm lg:text-lg font-semibold tracking-widest uppercase'>
        Loading info ...
      </p>{' '}
      <IcLoader className='animate-spin fill-current text-primary size-10' />
    </div>
  )
}

export default Loading
