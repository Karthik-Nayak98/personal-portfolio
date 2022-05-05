import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import useSanity from '../hooks/useSanity'
import Container from '../components/container'
import Skill from '../components/skill'
import { skillVariant } from '../utils/variants'

const TechStack = () => {
  const query =
    '*[_type == "skills"]| order(order asc){_createdAt,image{asset->{url}} , skill}'

  const sanityData = useSanity(null, query)
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) control.start('visible')
  }, [inView, control])

  return (
    <Container title='Skills'>
      <motion.section
        ref={ref}
        variants={skillVariant}
        initial='hidden'
        animate={control}
        className='xs:grid-cols-3 grid grid-cols-2 gap-2 px-8 py-6 sm:max-w-xl sm:grid-cols-4 md:px-12 lg:max-w-2xl lg:gap-y-6 lg:gap-x-0 lg:py-2 lg:px-16'>
        {sanityData &&
          sanityData.map((data) => (
            <Skill
              key={data._createdAt}
              image={data.image.asset.url}
              skill={data.skill}
            />
          ))}
      </motion.section>
    </Container>
  )
}

export default TechStack
