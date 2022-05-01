import React from 'react'
import { useParams } from 'react-router-dom'
import { client, urlFor } from '../utils/client.js'
import { format } from 'date-fns'
import BlockContent from '@sanity/block-content-to-react'
import serializer from '../utils/serializer.js'
import ViewCounter from '../components/viewcounter.jsx'
import Tag from '../components/tag.jsx'
import Loader from '../components/loader.jsx'
import useSanity from '../hooks/useSanity.js'

import { motion } from 'framer-motion'

function Post() {
  const { slug } = useParams()

  const query = `*[slug.current == $slug][0]{
                    title,
                    slug,
                    tags,
                    publishedAt,
                    mainImage,
                    body,
                    'name': author->name,
                    'image': author->image,
                }`

  const postData = useSanity(null, query, slug)

  if (!postData) return <Loader />

  return (
    <motion.main
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
      exit={{
        y: -100,
        opacity: 0,
        transition: { duration: 0.3, ease: 'easeInOut' },
      }}
      className='container mx-auto max-w-4xl px-8 md:px-12 lg:px-16'>
      <article className='flex flex-col gap-4 rounded-md md:flex-row md:gap-12'>
        <div className='flex-1'>
          <h1 className='my-2 text-3xl font-bold md:text-4xl'>{postData.title}</h1>
          <div className='flex flex-col justify-between md:flex-row md:items-center'>
            <span className='my-2 flex items-center gap-2 text-gray-600 dark:text-gray-400'>
              <img
                className='h-6 w-6 rounded-full md:h-8 md:w-8'
                src={urlFor(postData.image.asset._ref)}
                alt='Karthik Nayak'
              />
              <span className='text-xs md:text-sm'>{postData.name}</span>/
              <span className='text-xs md:text-sm'>
                {format(new Date(postData.publishedAt), 'MMMM dd, yyyy')}
              </span>
            </span>

            <ViewCounter slug={slug} />
          </div>
          <div className='dark:text-light prose-blockquote:text-gray-600 dark:prose-blockquote:text-light prose dark:prose-ol:text-light prose-a:text-darkAccent dark:prose-a:text-accent prose-headings:text-dark dark:prose-headings:text-light prose-strong:text-dark dark:prose-strong:text-light max-w-none text-gray-600'>
            <BlockContent
              blocks={postData.body}
              projectId={client.projectId}
              dataset={client.dataset}
              serializers={serializer}
            />
          </div>
          <div className='mt-8 flex flex-wrap gap-2 text-xs'>
            {postData.tags.map((tag) => (
              <Tag key={tag} value={tag} />
            ))}
          </div>
        </div>
      </article>
    </motion.main>
  )
}

export default Post
