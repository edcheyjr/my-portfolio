'use client'

import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import SectionTitle from './SectionTitle'
import { Experience } from '@types.d'

type Props = {
  experiences: Experience[]
}

const WorkExperience = ({ experiences }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  //TODO: find a better way of doing this maybe using forward ref by the child component or a way of the children being aware of scroll events
  const [isScrolling, setIsScrolling] = useState(0)
  return (
    <motion.div className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-7xl justify-end mx-auto items-center px-10'>
      <SectionTitle> Experience</SectionTitle>

      <div
        ref={ref}
        onScroll={() => setIsScrolling((index) => index + 1)}
      <div className='relative w-screen flex space-x-4 overflow-x-scroll scroll-smooth scrollbar-track-gray-400/20 scrollbar-thumb-primary scrollbar mt-36 pb-10 px-3 lg:px-6'>
        {/* ExperienceCard */}

        {experiences?.map((experience) => (
          <ExperienceCard
            key={experience._id}
            experience={experience}
            parentRef={ref}
            isScrolling={isScrolling}
          />
        ))}
        {/* ExperienceCard */}
      </div>
    </motion.div>
  )
}
export default WorkExperience
