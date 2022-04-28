import React from 'react'

import useSanity from '../hooks/useSanity'
import Container from '../components/container'
import Skill from '../components/skill'

const TechStack = () => {
  const query = '*[_type == "skills"] | order(order asc)'
  const sanityData = useSanity(null, query)
  return (
    <Container title='Skills'>
      <section className='xs:grid-cols-3 grid grid-cols-2 gap-2 px-8 py-6 sm:max-w-xl sm:grid-cols-4 md:px-12 lg:max-w-2xl lg:gap-y-6 lg:gap-x-0 lg:py-2 lg:px-16'>
        {sanityData &&
          sanityData.map((data) => (
            <Skill key={data._createdAt} image={data.image} skill={data.skill} />
          ))}
      </section>
    </Container>
  )
}

export default TechStack
