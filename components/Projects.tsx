import React from 'react'
import { motion } from 'framer-motion'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, Pagination, Autoplay } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/pagination'

import SectionTitle from './SectionTitle'
import { Project } from '../typings'
import { urlFor } from '../lib/sanity'
import Technology from './Technology'

type Props = {
  projects: Project[]
}

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='min-h-screen relative h-screen max-w-full px-10 flex flex-col justify-center items-center text-left z-0'
    >
      <SectionTitle>projects</SectionTitle>
      <Swiper
        style={{ paddingTop: '2rem', paddingBottom: '2rem' }}
        scrollbar={{
          hide: true,
          snapOnRelease: true,
          // draggable: true,
        }}
        speed={1000}
        // direction='horizontal'
        loop={true}
        mousewheel={{
          invert: true,
        }}
        keyboard={{ enabled: true, onlyInViewport: false }}
        autoplay={{
          delay: 3000,
          // pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Scrollbar, Pagination, Autoplay]}
        className='mySwiper relative w-full px-10 py-5 justify-center items-center flex flex-col z-20'
      >
        {projects.map((project, key) => (
          <SwiperSlide
            key={project?._id}
            className='w-screen flex flex-col px-5 pt-20 md:p-20 lg:p-56 h-screen'
          >
            <div key={key + 1} className='justify-center text-left space-y-5 '>
              <motion.img
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                src={urlFor(project?.image).url()}
                alt={project?.title}
                className='w-64 xl:w-72 h-auto mx-auto border-2 rounded-lg border-gray-500 mb-5'
              />
              <div className='flex w-full justify-center space-x-2 my-2'>
                {project.technologies.map((tech) => (
                  <Technology key={tech?._id} tech={tech} />
                ))}
              </div>
              <div>
                <h3 className='font-sembold text-center text-2xl lg:text-4xl mb-5'>
                  <span className='underline decoration-primary underline-offset-4'>{`Project ${
                    key + 1
                  } of ${projects.length}:`}</span>{' '}
                  {project?.title}
                </h3>

                <p className='text-sm lg:text-lg text-center md:text-left'>
                  {project?.summary}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* </div> */}
      <div className='absolute w-full top-[30%] bg-primary/10 left-0 h-[500px] -skew-y-12'>
        {/* slant background */}
      </div>
    </motion.div>
  )
}

export default Projects
