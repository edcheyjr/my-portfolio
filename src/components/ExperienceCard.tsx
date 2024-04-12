'use client'

import React, { RefObject, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Experience } from '@types.d'
import { urlFor } from '@lib/imageUrlResolver'
import Technology from './Technology'
import { isElementFullyInView } from '../utils/testInViewElement'
interface Props<T> {
  experience: Experience
  parentRef: RefObject<T>
  isScrolling?: number | boolean | string
}

function ExperienceCard<T extends HTMLElement>({
  experience,
  parentRef,
  isScrolling,
}: Props<T>) {
  // Child element ref
  const childRef = React.useRef<HTMLElement>(null)
  // In view state
  const [isInView, setIsInView] = React.useState(false)

  // Function that checks if childElement is Inview
  useEffect(() => {
    if (childRef.current && parentRef.current) {
      setIsInView(isElementFullyInView(childRef.current, parentRef.current))
    }
  }, [parentRef, isScrolling])

  return (
    <article
      ref={childRef}
      className={`max-w-screen-md flex flex-shrink-0 snap-center snap-always rounded-lg items-center space-y-7 flex-col w-full py-4 lg:py-8 bg-[#292929] ${
        isInView ? 'opacity-100 ' : 'opacity-40 hover:opacity-100 '
      }
      transition-opacity cursor-pointer duraction-200 ease-in-out `}
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='rounded-full size-32 md:w-[100px] md:h-[100px] object-cover object-center'
        src={urlFor(experience.companyImage).url()}
        alt={experience.company || 'No company name'}
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
        <h4 className='text-center text-2xl lg:text-3xl font-light capitalize'>
          {experience.jobTitle}
        </h4>
        <p className='text-center font-bold text2xl mt-1'>
          {experience.company || 'No company name'}
        </p>
        <div className='justify-center flex space-x-2 my-2'>
          {/* tech stacks */}
          {experience?.technologies?.map((tech) => (
            <Technology key={tech._id} tech={tech} />
          ))}
        </div>
        <div className='text-center uppercase py-5 text-primary'>
          {new Date(experience?.dateStarted).toDateString()} -{' '}
          {experience?.isCurrentlyWorking
            ? 'present'
            : new Date(experience?.dateEnded).toDateString()}
        </div>
        {/* roles */}
        <ul className='list-disc space-y-4 ml-5 md:text-lg px-7 h-64 overflow-x-auto scrollbar-thumb-primary scrollbar-thin'>
          {experience?.points?.map((point, key) => (
            <li key={key} className='text-wrap'>
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </article>
  )
}

export default ExperienceCard
