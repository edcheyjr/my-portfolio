import React from 'react'
import IcLoader from '../svg/icons/ic-loader'

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className='min-h-screen w-full flex justify-center items-center'>
      <IcLoader className='animate-spin fill-current text-primary size-10' />
    </div>
  )
}

export default Loading
