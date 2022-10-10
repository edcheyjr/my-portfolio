import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {}

const WorkExperience = (props: Props) => {
  return (
    <motion.div className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center px-10'>
      <h3 className='absolute top-24 uppercase tracking-[20px]  text-gray-500 text-2xl'>
        {' '}
        Experience
      </h3>
      <div className='w-full flex space-x-3 pt-20 px-10 pb-10 overflow-x-scroll snap-x snap-mandatory touch-auto scroll-smooth'>
        {/* ExperienceCard */}
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        {/* ExperienceCard */}
      </div>
    </motion.div>
  )
}
export default WorkExperience
