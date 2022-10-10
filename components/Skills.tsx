import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div className='m-h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-0 items-center'>
      {' '}
      <h3 className='absolute top-24 uppercase tracking-[20px]  text-gray-500 text-2xl'>
        {' '}
        Skills
      </h3>
      <h3 className='absolute top-35 uppercase tracking-[3px] text-gray-500 text-sm'>
        Over the years i have acquired various tech skill. Hover over them for
        current profiecency{' '}
      </h3>
    </motion.div>
  )
}

export default Skills
