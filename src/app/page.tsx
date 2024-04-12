import Image from 'next/image'
import Link from 'next/link'
// components
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

import ImageSrc from '@public/image.jpg'
import { fetchPageInfo } from '@service/fetchPageInfo'
import { fetchSkills } from '@service/fetchSkills'
import { fetchExperience } from '@service/fetchExperience'
import { fetchSocials } from '@service/fetchSocials'
import { fetchProjects } from '@service/fetchProjects'
import ErrorMessage from '../components/ErrorMessage'

const Home = async () => {
  const pageInfo = await fetchPageInfo()
  const skills = await fetchSkills()
  const experience = await fetchExperience()
  const projects = await fetchProjects()
  const socials = await fetchSocials()

  if (
    !pageInfo.image ||
    skills.length == 0 ||
    experience.length == 0 ||
    projects.length == 0 ||
    socials.length == 0
  ) {
    return (
      <div className='mx-auto my-auto py-4'>
        <ErrorMessage status={404} />
      </div>
    )
  }
  return (
    <div className='mx-auto py-4 snap-mandatory snap-y flex flex-col'>
      <header id='head' className=''>
        <Header socials={socials} />
      </header>

      <section
        id='hero'
        className='snap-end snap-always flex-shrink-0 h-screen'
      >
        <Hero pageInfo={pageInfo} />
      </section>

      <section
        id='about'
        className='snap-end snap-always flex-shrink-0 h-screen'
      >
        <About pageInfo={pageInfo} />
      </section>

      <section
        id='experience'
        className='snap-center snap-always flex-shrink-0 h-screen'
      >
        <WorkExperience experiences={experience} />
      </section>

      <section
        id='skills'
        className='snap-center snap-always flex-shrink-0 h-screen'
      >
        <Skills skills={skills} />
      </section>

      <section
        id='projects'
        className='snap-center snap-always flex-shrink-0 h-screen'
      >
        <Projects projects={projects} />
      </section>

      <section
        id='contact'
        className='snap-center snap-always flex-shrink-0 h-screen'
      >
        <Contact pageInfo={pageInfo} />
      </section>
      <footer className='hidden lg:flex sticky z-50 bottom-5 w-full cursor-pointer justify-center'>
        <Link href={'#head'}>
          <div
            title='go back to top'
            className='flex before:relative h-10 w-10 rounded-full grayscale hover:grayscale-0 shadow-md hover:shadow hover:animate-bounce'
          >
            <Image
              src={ImageSrc}
              alt='go back to top image button'
              fill
              sizes='(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33.3vw'
              className='rounded-full object-cover'
            />
          </div>
        </Link>
      </footer>
    </div>
  )
}

export default Home
