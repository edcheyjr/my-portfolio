import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

const SocialMedia = [
  'https://www.youtube.com/watch?v=urgi2iz9P6U&t=1759s',
  'https://github.com/edcheyjr/my-portfolio',
  'https://www.linkedin.com/in/edwin-chebii-b18686209/',
  'http://www.twitter.com/edchey1',
  'https://www.instagram.com/e.d.c.h.e.y_jr/?hl=en',
]

export default function Header({}: Props) {
  return (
    <header className='flex justify-between py-2 sticky top-0 items-start z-20 max-w-7xl mx-auto px-10 '>
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 90, duration: 1.2 }}
        className='flex '
      >
        {/* Social Icons */}
        {SocialMedia.map((social, key) => (
          <SocialIcon
            className='cursor-pointer'
            key={key}
            url={social}
            bgColor='transparent'
            fgColor='rgb(107 114 128)'
          />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 90, duration: 1.2 }}
        className='flex flex-row items-center text-gray-500 cursor-pointer'
      >
        {/* Also after deploying try and add a white themec */}
        <SocialIcon
          className='cursor-pointer fill-current'
          network='email'
          bgColor='transparent'
          fgColor='rgb(107 114 128)'
          title='send an email'
        />
        <p className='uppercase align-bottom text-center md:inline-flex text-gray-500 md:text-sm font-semibold hidden lg:block'>
          Get in Touch
        </p>
      </motion.div>
    </header>
  )
}
