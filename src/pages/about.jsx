import React, { lazy, Suspense, useEffect } from 'react'
import BlockContent from '@sanity/block-content-to-react'
import useSanity from '../hooks/useSanity'
import { client } from '../utils/client'
import Container from '../components/container'
import Loader from '../components/loader'
import serializer from '../utils/serializer'
import useTitle from '../hooks/useTitle'

const TechStack = lazy(() => import('./tech-stack'))

const About = () => {
  const query = '*[_type == "author"][0]{bio}'
  const userBio = useSanity(null, query)

  const title = 'About - Karthik Nayak'

  useTitle(title)

  if (!userBio) return <Loader />

  return (
    <Suspense fallback={<Loader />}>
      <Container title='About me'>
        <section className='text-md mt-4 mb-10 rounded-2xl px-8 text-gray-600 dark:text-gray-400 md:px-12 lg:px-16'>
          <article className='prose dark:text-light dark:prose-a:text-accent prose-a:text-darkAccent max-w-none leading-7 text-gray-600'>
            <BlockContent
              blocks={userBio.bio}
              projectId={client.projectId}
              dataset={client.dataset}
              serializers={serializer}
            />
          </article>
        </section>
        <TechStack />
      </Container>
    </Suspense>
  )
}

export default About
