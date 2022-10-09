import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[px] text-gray-500 text-2xl'>
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        src='https://images.unsplash.com/photo-1665153856958-d1dadc34c523?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
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
        <h4 className='text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#f7abba]/70 via-gray-100 to-[#f7abba]/70'>
          A{' '}
          <span className='underline underline-offset-4 decoration-primary decoration-2'>
            little
          </span>{' '}
          about me
        </h4>
        <p className='text-sm sm:text-base'>
          Hola, I&lsquo;m Edwin Chebii😀. You might also know me as Ed Chey. I
          will work with you on whatever exciting project you have in mind. A
          little about me... I am a passionate full-stack software engineer
          currently with 3 years of experience. I have worked with startups and
          large corporate businesses to help scale and grow their businesses. I
          also work as a freelancer building software products specially crafted
          to meet individual needs. While not working, you will often find me
          building new cool web apps or learning some new technology. If not
          that, playing or developing games🎮 . As a strategic partner 🤝🏾, I
          will help you digitally transform to improve your products, speed up
          service delivery, increase operational efficiency, and expand to new
          markets. Contact if interested.
        </p>
      </motion.div>
    </div>
  )
}
