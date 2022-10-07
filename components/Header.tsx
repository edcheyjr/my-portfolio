import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='flex justify-between items-center py-2'>
      <section className='flex gap-2'>
        {/* Social Icons */}
        <SocialIcon
          url='https://github.com/edcheyjr/my-portfolio'
          className='h-6 w-6'
        />
        <SocialIcon
          url='https://www.linkedin.com/in/edwin-chebii-b18686209/'
          className='h-6 w-6'
        />
        <SocialIcon url='http://www.twitter.com/edchey1' className='h-6 w-6' />
        <SocialIcon
          url='https://www.instagram.com/e.d.c.h.e.y_jr/?hl=en'
          className='h-6 w-6'
        />
      </section>
      <section></section>
    </header>
  )
}
