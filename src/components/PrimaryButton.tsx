import React, { MouseEvent } from 'react'

type Props = {
  type?: 'button' | 'submit' | 'reset'
  children: React.ReactNode
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

const PrimaryButton = ({ type, children, onClick }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className='bg-primary/90 hover:bg-primary text-zinc-700 active:bg-pink-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
    >
      {children}
    </button>
  )
}

export default PrimaryButton
