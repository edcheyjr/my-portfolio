import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import SectionTitle from './SectionTitle'

type Props = {}

const WorkExperience = (props: Props) => {
  return (
    <motion.div className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center px-10'>
      <SectionTitle> Experience</SectionTitle>

      <div className='relative w-full flex space-x-3 px-10 pb-10 overflow-x-scroll snap-x snap-mandatory  scroll-smooth  scrollbar-track-gray-400/20 scrollbar-thumb-primary scrollbar'>
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
