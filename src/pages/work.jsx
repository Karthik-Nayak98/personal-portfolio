import React from 'react'
import Container from '../components/container'
import Loader from '../components/loader'
import Project from '../components/project'
import useSanity from '../hooks/useSanity'

const Work = () => {
  const query = '*[_type == "project"]{title,slug,summary,banner{asset->{ url }}}'

  const projects = useSanity(null, query)

  if (!projects) return <Loader />

  return (
    <Container title='Projects'>
      <section className='text-md mt-8 mb-10 grid grid-cols-1 gap-10 rounded-2xl px-8 text-gray-400 md:grid-cols-2 md:px-12 lg:px-16'>
        {projects.map((project) => (
          <Project
            key={project.title}
            banner={project.banner.asset.url}
            slug={project.slug.current}
            title={project.title}
            summary={project.summary}
          />
        ))}
      </section>
    </Container>
  )
}

export default Work
