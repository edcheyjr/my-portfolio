import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 2, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        border: ['20%', '20%', '50%', '%80', '20%'],
      }}
      transition={{
        duration: 2.8,
      }}
      className='absolute flex justify-center items-center group'
    >
      {/* Circle 1*/}
      <div className=' border border-[#333333] rounded-full w-[200px] h-[200px] animate-ping' />

      {/* Circle 2*/}
      <div className='absolute border border-[#333333] rounded-full w-[300px] h-[300px]' />

      {/* Circle 3*/}
      <div className='absolute border border-[#333333] rounded-full w-[500px] h-[500px]' />

      {/* Circle 4*/}
      <div className='absolute border border-[#f796d6]  opacity-20 transition duration-200 group-hover:opacity-40 rounded-full w-[650px] h-[650px] animate-pulse' />

      {/* Circle 5*/}
      <div className='absolute animate-pulse border border-[#333333]  rounded-full w-[800px] h-[800px]' />
    </motion.div>
  )
}
export default BackgroundCircles
