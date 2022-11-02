import React from 'react'

type Props = { children: React.ReactNode }

const SectionTitle = (props: Props) => {
  return (
    <h3 className='absolute top-10 right-1/2  transform translate-x-1/2 uppercase tracking-[8px] lg:tracking-[20px] text-gray-500 text-xl md:text-2xl md:flex-row'>
      {props.children}
    </h3>
  )
}

export default SectionTitle
