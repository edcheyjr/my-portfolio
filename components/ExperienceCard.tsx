import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../lib/sanity'
import Technology from './Technology'

type Props = {
  experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className='flex flex-shrink-0 rounded-lg items-center space-y-7 flex-col w-fit py-4 lg:py-8 bg-[#292929] opacity-40 hover:opacity-100 transition-opacity cursor-pointer duraction-200 snap-center'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='rounded-full w-32 h-32 md:w-[100px] md:h-[100px] object-cover object-center'
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
        <ul className='list-disc space-y-4 ml-5 md:text-lg px-7 h-64 overflow-x-scroll scrollbar-thumb-primary scrollbar-thin'>
          {experience.points?.map((point, key) => (
            <li key={key}>{point}</li>
          ))}
        </ul>
      </motion.div>
    </article>
  )
}

export default ExperienceCard
