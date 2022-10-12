import { motion } from 'framer-motion'
import React from 'react'
import SectionTitle from './SectionTitle'
import Skill from './Skill'

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-0 items-center'>
      <SectionTitle> Skills </SectionTitle>

      <h3 className='text-center absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
        Over the years i have acquired various tech skills. Hover over them for
        current profiecency{' '}
      </h3>
      <div className='pt-24 grid grid-cols-4 xl:grid-cols-5 gap-2'>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  )
}

export default Skills
