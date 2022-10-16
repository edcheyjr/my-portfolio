import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

// components
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Link from 'next/link'
import ImageSrc from '../public/image.jpg'

// possible text color text-[rgb(128,128,128)]

const Home: NextPage = () => {
  return (
    <div className='z-0 bg-[rgb(36,36,36)] text-zinc-300 h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth transition-all delay-300 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primary '>
      <Head>
        <title>Welcome to Ed&apos;s World</title>
        <meta
          name='decription'
          content='Edwin is a software engineer come and see his work'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='mx-auto py-4'>
        <Header />

        <section id='hero' className='snap-center'>
          <Hero />
        </section>

        <section id='about' className='snap-center'>
          <About />
        </section>

        <section id='experience' className='snap-center'>
          <WorkExperience />
        </section>

        <section id='skills' className='snap-start'>
          <Skills />
        </section>

        <section id='projects' className='snap-start'>
          <Projects />
        </section>

        <section id='contact' className='snap-start'>
          <Contact />
        </section>
        <Link href={'#hero'}>
          <footer className='sticky z-50 bottom-5 w-full cursor-pointer flex justify-center'>
            <div
              title='go back to top'
              className='relative h-10 w-10 rounded-full grayscale hover:grayscale-0 shadow-md hover:shadow hover:animate-bounce'
            >
              <Image
                src={ImageSrc}
                alt='go back to top image button'
                layout='fill'
                objectFit='cover'
                className='rounded-full'
              />
            </div>
          </footer>
        </Link>
      </div>
    </div>
  )
}

export default Home
