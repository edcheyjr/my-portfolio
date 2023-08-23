'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from '../../typings'
import { urlFor } from '@lib/imageUrResolver'
import Image from 'next/image'

type Props = {
  directionLeft: boolean
  skill: Skill
}

function Skill({ directionLeft, skill }: Props) {
  return (
    <motion.div
      initial={{
        x: directionLeft ? -150 : 150,
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='group relative flex cursor-pointer'
      title={skill?.title}
    >
      <div className='rounded-full border border-gray-500 object-cover w-20 h-20 md:w-28 md:h-28  xl:w-32 xl:h-32 filter group-hover:grayscale duration-300 ease-in-out items-center justify-center flex relative'>
        <Image
          alt={skill.title}
          src={
            urlFor(skill?.image).url() ||
            'https://cdn.sanity.io/images/e2f024ld/production/cfac7a956697f48ee9169dce6b8229f38de72472-294x345.svg'
          }
          width={56}
          height={56}
        />
      </div>

      <div className='bg-primary absolute rounded-full w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 items-center flex justify-center opacity-0 hover:opacity-80 transition-opacity duration-200 ease-in-out'>
        <div className='bg-[#242424] rounded-full w-4/5 h-4/5 items-center flex justify-center '>
          <p className='text-base xl:text-xl font-bold text-primary opacity-full'>
            {skill.progress}
          </p>
        </div>
      </div>

      {/* opacity-0 hover:opacity-80 transition-opacity duration-200 ease-in-out*/}
    </motion.div>
  )
}

export default Skill
