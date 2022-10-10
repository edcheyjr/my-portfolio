import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {
  directionLeft?: boolean
}

function Skill({ directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28  xl:w-32 xl:h-32 filter group-hover:grayscale duration-300 ease-in-out items-center justify-center flex'
      >
        <img
          alt='React js'
          src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
          className='w-3/4'
        />
      </motion.div>

      <div className='bg-primary absolute rounded-full w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 items-center flex justify-center opacity-0 hover:opacity-80 transition-opacity duration-200 ease-in-out'>
        <div className='bg-[#242424] rounded-full w-4/5 h-4/5 items-center flex justify-center '>
          <p className='text-base xl:text-xl font-bold text-primary opacity-full'>
            100%
          </p>
        </div>
      </div>

      {/* opacity-0 hover:opacity-80 transition-opacity duration-200 ease-in-out*/}
    </div>
  )
}

export default Skill
