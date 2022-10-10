import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-shrink-0 rounded-lg items-center space-y-7 flex-col w-[500px] md:w-[600px] py-10 bg-[#292929] opacity-40 hover:opacity-100 transition-opacity cursor-pointer duraction-200 snap-center'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='rounded-full w-32 h-32 md:w-[150px] md:h-[150px] object-cover object-center'
        src='/avatar.gif'
        alt='my avatar'
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
        className='px-0 md:px-10'
      >
        <h4 className='text-3xl xl:text-4xl font-light capitalize'>
          role in the company
        </h4>
        <p className='font-bold text2xl mt-1'>company</p>
        <div className='flex space-x-2 my-2'>
          {/* tech stacks */}
          <div className='relative h-10 w-10 rounded-full '>
            <Image
              alt='HTML5'
              title='HTML5  Semantics'
              className=''
              layout='fill'
              objectFit='contain'
              src='https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'
            />
          </div>
          <div className='relative h-10 w-10 rounded-full '>
            <Image
              alt='React'
              title='React js'
              layout='fill'
              objectFit='contain'
              src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
            />
          </div>
          <div className='relative h-10 w-10 rounded-full '>
            <Image
              alt='Python'
              title='python'
              layout='fill'
              objectFit='contain'
              src='https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
            />
          </div>
          <div className='relative h-10 w-10 rounded-full '>
            <Image
              alt='Laravel framework'
              title='php laravel'
              className=''
              layout={'fill'}
              objectFit={'contain'}
              src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg'
            />
          </div>
          <div className='relative h-10 w-10  rounded-full'>
            <Image
              alt='Php'
              title='php'
              layout='fill'
              objectFit='contain'
              src='https://upload.wikimedia.org/wikipedia/commons/3/31/Webysther_20160423_-_Elephpant.svg'
            />
          </div>
        </div>
        <div className='uppercase py-5 text-gray-300'>
          started date.end date
        </div>
        {/* roles */}
        <ul className='list-disc space-y-4 ml-5 md:text-lg'>
          <li>Summary dolor sit amet consectetur adipisicing elit. </li>
          <li>Summary dolor sit amet consectetur adipisicing elit. </li>
          <li>Summary dolor sit amet consectetur adipisicing elit. </li>
          <li>Summary dolor sit amet consectetur adipisicing elit. </li>
          <li>Summary dolor sit amet consectetur adipisicing elit. </li>
        </ul>
      </motion.div>
    </article>
  )
}

export default ExperienceCard
