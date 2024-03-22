import React from 'react'
import IcLoader from '../svg/icons/ic-loader'

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className='h-full w-full flex flx-col justify-center items-center space-y-2'>
      <p className=' text-sm lg:text-lg font-bold'>Loading info...</p>{' '}
      <IcLoader className='animate-spin fill-current text-primary size-10' />
    </div>
  )
}

export default Loading
