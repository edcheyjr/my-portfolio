import React from 'react'

type Props = { children: React.ReactNode }

const SectionTitle = (props: Props) => {
  return (
    <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl md:flex-row'>
      {props.children}
    </h3>
  )
}

export default SectionTitle
