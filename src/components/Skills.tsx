'use client'
import { motion } from 'framer-motion'
import React from 'react'
import { Skill as SkillType } from '@types.d'
import SectionTitle from './SectionTitle'
import Skill from './Skill'

type Props = {
  skills: SkillType[]
}

function Skills({ skills }: Props) {
  return (
    <motion.div
      className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] px-4 xl:px-10 min-h-screen items-center justify-end
    xl:space-y-0 mx-0 '
    >
      <SectionTitle> Skills </SectionTitle>

      <h3 className='text-center absolute top-36 translate-x-1/2 right-1/2 transform uppercase tracking-widest md:tracking-[3px] text-gray-500 text-xs md:text-sm'>
        Over the years i have acquired various tech skills.{' '}
        <strong>Hover over them for current proficiency</strong>{' '}
      </h3>
      <div className='relative pt-56 md:pt-36 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 mx-auto my-auto'>
        {skills.slice(0, skills.length * 0.5).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
        {skills.slice(skills.length * 0.5, skills.length).map((skill) => (
          <Skill directionLeft={false} key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  )
}

export default Skills
