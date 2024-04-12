'use client'

import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { PageInfo } from '@types.d'
import { urlFor } from '@lib/imageUrlResolver'

type Props = {
  pageInfo: PageInfo | undefined
}

export default function About({ pageInfo }: Props) {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row justify-end md:justify-evenly pb-5 sm:pb-20 md:pb-0 mx-auto items-center max-w-7xl px-10'>
      <SectionTitle>About</SectionTitle>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        alt={pageInfo?.name || 'No image'}
        src={
          pageInfo?.image
            ? urlFor(pageInfo?.image).url()
            : '../public/image.jpg'
        }
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className=' md:mb-0 flex-shrink-0 w-[12em] h-[12em] sm:w-56 sm:h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[450px] xl:h-[550px] ml-3.5'
      />
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className='space-y-10 px-0 md:px-10'
      >
        <h4 className='text-2xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#f7abba]/70 via-gray-100 to-[#f7abba]/70'>
          A{' '}
          <span className='underline underline-offset-4 decoration-primary decoration-2'>
            little
          </span>{' '}
          about me
        </h4>
        <p className='text-sm sm:text-base leading-relaxed xl:leading-loose'>
          {pageInfo?.backgroundInformation ||
            'No background info at the moment'}
        </p>
      </motion.div>
    </div>
  )
}
