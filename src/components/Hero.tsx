'use client'

import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import ImageSrc from '@public/image.jpg'
import Link from 'next/link'
import { PageInfo } from '@types.d'
import { urlFor } from '@lib/imageUrResolver'

type Props = {
  pageInfo: PageInfo
}

// create array of words to pass in typewriter
export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      'Como estás',
      `The Name's ${pageInfo?.name}`,
      'Guy-Who-Loves-Music.tsx',
      '<ButLovesCodingMore/>',
    ],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className='relative h-screen space-y-2.5 flex flex-col mx-auto items-center justify-center text-center overflow-hidden pt-10 px-10 max-w-7xl'>
      <BackgroundCircles />

      <Image
        className='rounded-full h-32 w-32 mx-auto object-cover'
        src={pageInfo.profilePic ? urlFor(pageInfo.profilePic).url() : ImageSrc}
        alt={pageInfo.name || 'noImage'}
        loading='eager'
        height={128}
        width={128}
      />

      <div className='space-y-2 relative'>
        <h2 className='text-xs md:text-sm uppercase text-gray-500 font-medium  tracking-[5px] lg:tracking-[15px]'>
          {pageInfo?.role}
        </h2>
        <h1 className='text-2xl md:text-4xl lg:text-5xl py-2 align-middle xl:text-6xl text-transparent font-semibold leading-loose bg-clip-text bg-gradient-to-r from-[#f7abba]/70 via-gray-100 to-[#f7abba]/70'>
          <span className='mr-3 py-2'>{text}</span>
          <Cursor cursorColor='#F7ABBA' />
        </h1>
        <div className='grid grid-cols-2 sm:grid-cols-5 '>
          <Link href={'#about'}>
            <button className='heroButton'>About</button>
          </Link>

          <Link href={'#experience'}>
            <button className='heroButton'>Experiences</button>
          </Link>
          <Link href={'#skills'}>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href={'#projects'}>
            <button className='heroButton'>Projects</button>
          </Link>
          <Link href={'#contact'}>
            <button className='heroButton'>Contact</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
