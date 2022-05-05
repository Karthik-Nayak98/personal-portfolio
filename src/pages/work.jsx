import React from 'react'
import Container from '../components/container'
import Loader from '../components/loader'
import Project from '../components/project'
import useTitle from '../hooks/useTitle'
import useSanity from '../hooks/useSanity'
import { motion } from 'framer-motion'

const Work = () => {
  const projectVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  }
  const query = '*[_type == "project"]{title,slug,summary,banner{asset->{ url }}}'
  const projects = useSanity(null, query)

  const title = 'Projects - Karthik Nayak'
  useTitle(title)

  if (!projects) return <Loader />

  return (
    <Container title='Projects'>
      <motion.section
        variants={projectVariant}
        initial='hidden'
        animate='visible'
        className='text-md mt-8 mb-10 grid grid-cols-1 gap-10 rounded-2xl px-8 text-gray-400 md:grid-cols-2 md:px-12 lg:px-16'>
        {projects.map((project) => (
          <Project
            key={project.title}
            banner={project.banner.asset.url}
            slug={project.slug.current}
            title={project.title}
            summary={project.summary}
          />
        ))}
      </motion.section>
    </Container>
  )
}

export default Work
