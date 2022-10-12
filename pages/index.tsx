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

// possible text color text-[rgb(128,128,128)]

const Home: NextPage = () => {
  return (
    <div className='z-0 bg-[rgb(36,36,36)] text-zinc-300 h-screen snap-y snap-mandatory overflow-scroll scroll-smooth transition-all delay-300'>
      <Head>
        <title>Welcome to Ed&apos;s World</title>
        <meta
          name='decription'
          content='Edwin is a software engineer come and see his work'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='mx-auto py-4 '>
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
      </div>
    </div>
  )
}

export default Home
