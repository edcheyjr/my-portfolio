import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import ImageSrc from '../public/image.jpg'

type Props = {}
export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Edwin Chebii a.k.a EdChey",
      'Guy-Who-Loves-Gaming.tsx',
      '<ButLovesCodingMore/>',
    ],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className='relative h-screen space-y-2.5 flex flex-col items-center justify-center text-center overflow-hidden pt-10'>
      <BackgroundCircles />

      <Image
        className='rounded-full h-32 w-32 mx-auto  object-cover '
        src={ImageSrc}
        alt='Edwin'
        objectFit='cover'
        loading='lazy'
        height={128}
        width={128}
      />

      <div className='space-y-2'>
        <h2 className='text-sm uppercase text-gray-500 font-medium  tracking-[12px]'>
          software engineer
        </h2>
        <h1 className='text-4xl lg:text-5xl xl:text-6xl text-transparent font-semibold leading-tight  bg-clip-text bg-gradient-to-r from-[#f7abba]/70 via-gray-100 to-[#f7abba]/70'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7ABBA' />
        </h1>
        <div>
          <button className='heroButton'>About</button>
          <button className='heroButton'>Skills</button>
          <button className='heroButton'>Experiences</button>
          <button className='heroButton'>Projects</button>
          <button className='heroButton'>Contact</button>
        </div>
      </div>
    </div>
  )
}
