import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
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

import ImageSrc from '../public/image.jpg'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchPageInfo } from '../service/fetchPageInfo'
import { fetchSkills } from '../service/fetchSkills'
import { fetchExperience } from '../service/fetchExperience'
import { fetchSocials } from '../service/fetchSocials'
import { fetchProjects } from '../service/fetchProjects'
import ErrorMessage from '../components/ErrorMessage'

type Props = {
  pageInfo: PageInfo
  experience: Experience[]
  skills: Skill[]
  projects: Project[]
  socials: Social[]
}

const Home: NextPage<Props> = ({
  pageInfo,
  skills,
  experience,
  projects,
  socials,
}: Props) => {
  return (
    <div className='z-0 bg-[rgb(36,36,36)] text-zinc-300 h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scroll-smooth transition-all delay-300 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primary '>
      <Head>
        {(!pageInfo.image ||
          skills.length == 0 ||
          experience.length == 0 ||
          projects.length == 0 ||
          socials.length == 0) && <ErrorMessage status={404} />}
        <title>Welcome to Ed&apos;s World</title>
        <meta
          name='decription'
          content='Edwin is a software engineer come and see his work'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='mx-auto py-4'>
        <Header socials={socials} />

        <section id='hero' className='snap-center'>
          <Hero pageInfo={pageInfo} />
        </section>

        <section id='about' className='snap-end'>
          <About pageInfo={pageInfo} />
        </section>

        <section id='experience' className='snap-center'>
          <WorkExperience experiences={experience} />
        </section>

        <section id='skills' className='snap-start'>
          <Skills skills={skills} />
        </section>

        <section id='projects' className='snap-start'>
          <Projects projects={projects} />
        </section>

        <section id='contact' className='snap-start'>
          <Contact pageInfo={pageInfo} />
        </section>

        <footer className='hidden lg:flex sticky z-50 bottom-5 w-full cursor-pointer justify-center'>
          <Link href={'#hero'}>
            <div
              title='go back to top'
              className='flex before:relative h-10 w-10 rounded-full grayscale hover:grayscale-0 shadow-md hover:shadow hover:animate-bounce'
            >
              <Image
                src={ImageSrc}
                alt='go back to top image button'
                layout='fill'
                objectFit='cover'
                className='rounded-full '
              />
            </div>
          </Link>
        </footer>
      </div>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo = await fetchPageInfo()
  console.log("pageInfo",pageInfo)
  const skills = await fetchSkills()
  const experience = await fetchExperience()
  const projects = await fetchProjects()
  const socials = await fetchSocials()
  return {
    props: {
      pageInfo,
      skills,
      experience,
      projects,
      socials,
    },
    revalidate: 10,
  }
}
