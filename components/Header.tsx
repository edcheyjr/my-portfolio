import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Social } from '../typings'

type Props = {
  socials: Social[]
}

export default function Header({ socials }: Props) {
  const [isHovered, setIsHovered] = React.useState(false)
  return (
    <header className='flex justify-between py-2 sticky top-0 items-start z-20 max-w-7xl mx-auto px-10 '>
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 90, duration: 1.2 }}
        className='flex'
      >
        {/* Social Icons */}
        {socials.map((social, key) => (
          <SocialIcon
            className='cursor-pointer'
            title={social.title}
            key={social._id}
            url={social.url}
            bgColor='transparent'
            fgColor='rgb(107 114 128)'
          />
        ))}
      </motion.div>
      <Link href='#contact'>
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 90, duration: 1.2 }}
          className='group flex flex-row items-center text-gray-500 cursor-pointer'
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Also after deploying try and add a white themec */}

          <SocialIcon
            className='cursor-pointer fill-current group-hover:animate-bounce '
            network='email'
            bgColor='transparent'
            fgColor={isHovered ? 'rgb(247 171 186)' : 'rgb(107 114 128)'}
            title='send an email'
          />
          <p className='uppercase align-bottom text-center md:inline-flex text-gray-500 group-hover:text-gray-400 md:text-sm font-semibold hidden lg:block'>
            Get in Touch
          </p>
        </motion.div>
      </Link>
    </header>
  )
}
