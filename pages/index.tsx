import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

// components
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'

// possible text color text-[rgb(128,128,128)]

const Home: NextPage = () => {
  return (
    <div className='z-0 bg-[rgb(36,36,36)] text-zinc-300 h-screen snap-y snap-mandatory overflow-scroll scroll-smooth'>
      <Head>
        <title>Welcome to Ed&apos;s World</title>
        <meta
          name='decription'
          content='Edwin is a software engineer come and see his work'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='container mx-auto px-10 py-4 max-w-7xl'>
        {/* Header */}
        <Header />

        {/* Hero */}
        <section id='hero' className='snap-center'>
          <Hero />
        </section>
        {/* About */}
        <section id='about' className='snap-center'>
          <About />
        </section>

        {/* Experience */}

        {/* Skills */}

        {/* Projects */}

        {/* Contac Me */}
      </div>
    </div>
  )
}

export default Home
