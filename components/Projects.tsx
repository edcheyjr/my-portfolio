import React from 'react'
import { motion } from 'framer-motion'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'
import SectionTitle from './SectionTitle'

const MyProjects = [
  {
    no: 1,
    title: 'Ehouse app',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rerum blanditiis, quis ducimus ratione odit nesciunt nam alias voluptatem cupiditate, autem molestias distinctio esse at, harum culpa quod earum minus.',
    imageSrc:
      'https://github.com/edcheyjr/movieapp/raw/master/public/img/search.png',
  },
  {
    no: 2,
    title: 'Skin Dianostic System',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rerum blanditiis, quis ducimus ratione odit nesciunt nam alias voluptatem cupiditate, autem molestias distinctio esse at, harum culpa quod earum minus.',
    imageSrc:
      'https://github.com/edcheyjr/skin-cancer-diagnostic-system-frontend-/raw/master/readme/patient-records-page.png',
  },
  {
    no: 3,
    title: 'Instagram Clone',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rerum blanditiis, quis ducimus ratione odit nesciunt nam alias voluptatem cupiditate, autem molestias distinctio esse at, harum culpa quod earum minus.',
    imageSrc:
      'https://github.com/edcheyjr/instaclone/blob/main/public/img/dashboard1.png',
  },
  {
    no: 4,
    title: 'Background Generator',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rerum blanditiis, quis ducimus ratione odit nesciunt nam alias voluptatem cupiditate, autem molestias distinctio esse at, harum culpa quod earum minus.',
    imageSrc:
      'https://github.com/edcheyjr/skin-cancer-diagnostic-system-frontend-/raw/master/readme/patient-records-page.png',
  },
]

type Props = {}

function Projects({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='min-h-screen relative h-screen max-w-full px-10 flex flex-col justify-center items-center text-left z-0'
    >
      <SectionTitle>projects</SectionTitle>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className='mySwiper relative w-full px-10 py-5 justify-center items-center flex flex-col z-20'
      >
        {MyProjects.map((project) => (
          <SwiperSlide
            key={project.no}
            className='w-screen flex flex-col px-5 pt-20 md:p-20 lg:p-56 h-screen'
          >
            <div
              key={project.no}
              className='justify-center text-left space-y-5 '
            >
              <motion.img
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                src={project.imageSrc}
                alt={project.title}
                className='w-64 xl:w-72 h-auto mx-auto border-2 rounded-lg border-gray-500 mb-5'
              />
              <div>
                <h3 className='font-sembold text-center text-4xl mb-5'>
                  <span className='underline decoration-primary underline-offset-4'>{`Project ${project.no} of ${MyProjects.length}:`}</span>{' '}
                  {project.title}
                </h3>
                <p className='text-lg text-center md:text-left'>
                  {project.desc}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* </div> */}
      <div className='absolute w-full top-[30%] bg-primary/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}

export default Projects
